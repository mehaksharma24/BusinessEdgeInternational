import react from '@vitejs/plugin-react';
import https from 'node:https';
import { defineConfig } from 'vite';

// WordPress still runs on the old Bluehost server; the domain's DNS points at
// Vercel, so the server only answers when SNI + Host carry the real domain.
// In production api/wp-proxy handles this; this proxy mirrors it for local dev.
const wpProxy = {
  target: 'https://162.241.224.155',
  secure: false,
  agent: new https.Agent({ servername: 'thebiznessedge.com', rejectUnauthorized: false }),
  headers: { host: 'thebiznessedge.com' },
  // WordPress redirects use its absolute production URL; keep them on localhost
  // during dev (in production they are already on the right domain).
  configure(proxy: { on: (event: string, cb: (proxyRes: { headers: Record<string, string | string[] | undefined> }) => void) => void }) {
    proxy.on('proxyRes', (proxyRes) => {
      const location = proxyRes.headers.location;
      if (typeof location === 'string') {
        proxyRes.headers.location = location.replace(/^https?:\/\/(www\.)?thebiznessedge\.com/, '');
      }
    });
  },
};

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true,
    proxy: {
      '/wp-admin': wpProxy,
      '/wp-login.php': wpProxy,
      '/wp-includes': wpProxy,
      '/wp-content': wpProxy,
      '/wp-json': wpProxy,
    },
  },
});
