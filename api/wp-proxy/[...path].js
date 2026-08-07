import https from 'node:https';

// WordPress still lives on the old Bluehost server, but the domain's DNS now
// points at Vercel. The server only answers when the TLS handshake (SNI) and
// Host header carry the real domain name, so a plain redirect or rewrite can
// never reach it — this function proxies requests with both set correctly.
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
  const path = req.url.replace(/^\/api\/wp-proxy/, '') || '/';

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
        res.writeHead(origin.statusCode || 502, outHeaders);
        origin.pipe(res);
        origin.on('end', resolve);
        origin.on('error', resolve);
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
