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
      'import.meta.env.BASE_URL': JSON.stringify(base),
      'import.meta.env.PROD': isProduction,
      'import.meta.env.DEV': !isProduction
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
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #f5f5f5;
      color: #333;
    }
    .container {
      text-align: center;
      padding: 2rem;
      max-width: 600px;
    }
    h1 {
      color: #1a365d;
      margin-bottom: 1rem;
    }
    .spinner {
      border: 4px solid rgba(0, 0, 0, 0.1);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border-left-color: #1a365d;
      animation: spin 1s linear infinite;
      margin: 0 auto 1.5rem;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
  <script>
    // Single Page Apps for GitHub Pages
    (function() {
      const basePath = '/istqb-ai-testing-course';
      const pathSegmentsToKeep = 0;
      
      const l = window.location;
      
      // If we're already on the main page, just load the app
      if (l.pathname === basePath + '/' || l.pathname === basePath + '/index.html') {
        loadApp();
        return;
      }
      
      // If this is a 404 page, redirect to the SPA with the correct path
      if (l.pathname.includes('404.html')) {
        l.replace(
          l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
          basePath + 
          '?p=/' + 
          l.pathname.replace(/\\/istqb-ai-testing-course\\/404\\.html$/, '').slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
          (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
          l.hash
        );
        return;
      }
      
      // Otherwise, redirect to the main page with the current path as a parameter
      const path = l.pathname.startsWith(basePath) 
        ? l.pathname.slice(basePath.length) 
        : l.pathname;
      
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        basePath + 
        '?p=/' + 
        path.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
      
      // Function to load the app
      function loadApp() {
        // Create a script tag to load the app
        const script = document.createElement('script');
        script.type = 'module';
        script.src = basePath + 'assets/index.js';
        script.onerror = function() {
          const errorEl = document.createElement('div');
          errorEl.style.color = '#e53e3e';
          errorEl.style.marginTop = '1rem';
          errorEl.textContent = 'Failed to load the application. Please refresh the page or try again later.';
          document.querySelector('.container').appendChild(errorEl);
          document.getElementById('spinner').style.display = 'none';
        };
        document.head.appendChild(script);
      }
    })();
  </script>
</head>
<body>
  <div class="container">
    <div id="spinner" class="spinner"></div>
    <h1>Loading ISTQB AI Testing Course...</h1>
    <p>If you're not redirected automatically, <a href="${base}">click here</a> to go to the home page.</p>
  </div>
</body>
</html>`
          });
        }
      },
      // Copy _redirects file for Netlify
      viteStaticCopy({
        targets: [
          {
            src: '_redirects',
            dest: ''
          }
        ]
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 5173,
      strictPort: true,
      open: true,
      historyApiFallback: {
        index: '/',
        disableDotRule: true,
      },
    },
    preview: {
      port: 4173,
      strictPort: true,
      historyApiFallback: true,
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: true,
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
