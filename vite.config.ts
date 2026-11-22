import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * Connected GitHub Repository: TechyGGGF/TNBU
 * Published GitHub Pages URL: https://techygggf.github.io/TNBU/
 * Therefore the production base path is '/TNBU/' (unless overridden via VITE_BASE_PATH, e.g. '/' for a custom domain).
 */
const BASE_PATH = process.env.VITE_BASE_PATH || '/TNBU/';

function rootBaseRedirectPlugin(basePath: string): Plugin {
  const redirectMiddleware = (
    req: { url?: string },
    res: { statusCode: number; setHeader: (name: string, value: string) => void; end: () => void },
    next: () => void
  ) => {
    if (basePath !== '/' && (req.url === '/' || req.url === '')) {
      res.statusCode = 302;
      res.setHeader('Location', basePath);
      res.end();
      return;
    }
    next();
  };

  return {
    name: 'root-base-redirect',
    configureServer(server) {
      server.middlewares.use(redirectMiddleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(redirectMiddleware);
    },
  };
}

export default defineConfig({
  base: BASE_PATH,
  plugins: [react(), tailwindcss(), rootBaseRedirectPlugin(BASE_PATH)],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: true,
  },
});
