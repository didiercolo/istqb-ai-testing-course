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
      viteStaticCopy({
        targets: [
          {
            src: 'public/_redirects',
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
