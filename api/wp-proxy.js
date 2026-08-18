import https from 'node:https';

// WordPress still lives on the old Bluehost server, but the domain's DNS now
// points at Vercel. The server only answers when the TLS handshake (SNI) and
// Host header carry the real domain name, so a plain redirect or rewrite can
// never reach it — this function proxies requests with both set correctly.
// Rewrites in vercel.json pass the requested WordPress path as ?wppath=…
// (a single-file function is used because catch-all [...path].js filenames
// are not supported outside Next.js).
const ORIGIN_IP = '162.241.224.155';
const ORIGIN_HOST = 'thebiznessedge.com';

const SKIP_REQUEST_HEADERS = new Set([
  'host',
  'connection',
  'accept-encoding',
  'transfer-encoding',
  'forwarded',
  'content-length',
]);

function originPath(req) {
  const url = new URL(req.url, 'https://internal');
  let wppath = url.searchParams.get('wppath') || (req.query && req.query.wppath);
  if (Array.isArray(wppath)) wppath = wppath[0];
  if (!wppath) return null;
  if (!wppath.startsWith('/')) wppath = `/${wppath}`;
  url.searchParams.delete('wppath');
  // Vercel appends the matched :wpproxypath* source param to the query; drop
  // it so it never collides with WordPress params (WooCommerce uses "path").
  url.searchParams.delete('wpproxypath');
  const query = url.searchParams.toString();
  return query ? `${wppath}?${query}` : wppath;
}

async function readBody(req) {
  // The Vercel Node runtime may have already parsed the body into req.body;
  // re-serialize it, otherwise read the raw stream.
  if (req.body !== undefined && req.body !== null) {
    if (Buffer.isBuffer(req.body)) return req.body;
    if (typeof req.body === 'string') return Buffer.from(req.body);
    const type = req.headers['content-type'] || '';
    if (type.includes('application/x-www-form-urlencoded')) {
      return Buffer.from(new URLSearchParams(req.body).toString());
    }
    return Buffer.from(JSON.stringify(req.body));
  }
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  const path = originPath(req);
  if (!path) {
    res.statusCode = 400;
    res.end('Missing wppath');
    return;
  }

  const headers = {};
  for (const [key, value] of Object.entries(req.headers)) {
    if (SKIP_REQUEST_HEADERS.has(key)) continue;
    if (key.startsWith('x-vercel-') || key.startsWith('x-forwarded-')) continue;
    headers[key] = value;
  }
  headers.host = ORIGIN_HOST;
  headers['accept-encoding'] = 'identity';

  const body = ['GET', 'HEAD'].includes(req.method) ? null : await readBody(req);
  if (body && body.length) headers['content-length'] = body.length;

  await new Promise((resolve) => {
    const upstream = https.request(
      {
        host: ORIGIN_IP,
        servername: ORIGIN_HOST,
        rejectUnauthorized: false,
        method: req.method,
        path,
        headers,
      },
      (origin) => {
        const outHeaders = { ...origin.headers };
        delete outHeaders['transfer-encoding'];
        delete outHeaders.connection;
        delete outHeaders['content-length'];
        if (outHeaders.location) {
          outHeaders.location = outHeaders.location.replace(
            '://thebiznessedge.com',
            '://www.thebiznessedge.com'
          );
        }
        // WordPress builds URLs from its non-www Site URL, but visitors browse
        // on www (Vercel's canonical host). Browsers treat those as different
        // origins, so REST calls from wp-admin would be blocked as
        // cross-origin — rewrite textual responses to keep every URL on www.
        const type = String(origin.headers['content-type'] || '');
        if (/text\/|json|javascript|xml/.test(type)) {
          const chunks = [];
          origin.on('data', (chunk) => chunks.push(chunk));
          origin.on('end', () => {
            const body = Buffer.from(
              Buffer.concat(chunks)
                .toString('utf8')
                .replaceAll('//thebiznessedge.com', '//www.thebiznessedge.com')
                .replaceAll('\\/\\/thebiznessedge.com', '\\/\\/www.thebiznessedge.com'),
              'utf8'
            );
            outHeaders['content-length'] = body.length;
            res.writeHead(origin.statusCode || 502, outHeaders);
            res.end(body);
            resolve();
          });
          origin.on('error', resolve);
        } else {
          res.writeHead(origin.statusCode || 502, outHeaders);
          origin.pipe(res);
          origin.on('end', resolve);
          origin.on('error', resolve);
        }
      }
    );
    upstream.on('error', (err) => {
      res.statusCode = 502;
      res.end(`WordPress origin unreachable: ${err.message}`);
      resolve();
    });
    if (body && body.length) upstream.write(body);
    upstream.end();
  });
}
