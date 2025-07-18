import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Set base path for GitHub Pages
  const isProduction = mode === 'production';
  const base = isProduction ? '/istqb-ai-testing-course/' : '/';
  
  return {
    base,
    define: {
      'import.meta.env.BASE_URL': JSON.stringify(base)
    },
    plugins: [
      react(),
      tailwindcss(),
      // Copy 404.html to the root of the build directory
      {
        name: 'copy-404',
        apply: 'build',
        generateBundle() {
          this.emitFile({
            type: 'asset',
            fileName: '404.html',
            source: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ISTQB AI Testing Course</title>
  <script>
    // Single Page Apps for GitHub Pages
    // MIT License
    // https://github.com/rafgraph/spa-github-pages
    (function() {
      const basePath = '/istqb-ai-testing-course';
      const pathSegmentsToKeep = 0;
      
      const l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        basePath + 
        '?p=/' + 
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    })();
  </script>
</head>
<body>
  <div id="root">
    <div style="text-align: center; margin-top: 2rem;">
      <h1>Loading ISTQB AI Testing Course...</h1>
      <p>If you're not redirected automatically, <a href="/istqb-ai-testing-course/">click here</a>.</p>
    </div>
  </div>
</body>
</html>`
          });
        }
      }
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Ensure public files are properly served
    publicDir: 'public',
    // Configure the development server
    server: {
      port: 5173,
      strictPort: true,
      open: true,
      // Handle SPA fallback for client-side routing
      historyApiFallback: true,
      fs: {
        // Allow serving files from one level up from the project root
        allow: ['..']
      },
      proxy: {
        // Proxy API requests if needed
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
      },
    },
    // Build configuration
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true,
      // Copy _redirects file to the root of the build directory
      copyPublicDir: true,
      // Ensure _redirects is copied to the root
      copyStaticFrom: 'public',
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
      // Ensure all assets are properly copied
      assetsInlineLimit: 0,
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
  };
});
