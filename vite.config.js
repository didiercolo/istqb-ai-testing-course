import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import fs from 'fs';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const base = isProduction ? '/istqb-ai-testing-course/' : '/';
  
  // Create redirect files in the public directory
  const createRedirectFiles = () => {
    const publicDir = resolve(__dirname, 'public');
    
    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Create course directory
    const courseDir = resolve(publicDir, 'course');
    if (!fs.existsSync(courseDir)) {
      fs.mkdirSync(courseDir, { recursive: true });
    }
    
    // Create _redirects file
    fs.writeFileSync(
      resolve(publicDir, '_redirects'),
      '/* /index.html 200'
    );
    
    // Create course/index.html
    fs.writeFileSync(
      resolve(courseDir, 'index.html'),
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=${base}?p=/course">
  <title>Redirecting to Course</title>
  <script>
    // Fallback in case meta refresh doesn't work
    window.location.href = '${base}?p=/course';
  </script>
</head>
<body>
  <p>If you are not redirected, <a href="${base}?p=/course">click here</a>.</p>
</body>
</html>`
    );
  };
  
  // Create the files before the build starts
  if (isProduction) {
    createRedirectFiles();
  }
  
  return {
    base,
    define: {
      'import.meta.env.BASE_URL': JSON.stringify(base),
      'import.meta.env.PROD': isProduction,
      'import.meta.env.DEV': !isProduction
    },
    plugins: [react(), tailwindcss()],
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
