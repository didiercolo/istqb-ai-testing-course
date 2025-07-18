import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
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
    // Handle SPA fallback for client-side routing in production
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    // Ensure all assets are properly copied
    assetsInlineLimit: 0,
  },
  // Base public path for GitHub Pages
  base: '/istqb-ai-testing-course/',
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
