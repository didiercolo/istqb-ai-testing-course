import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AppRouter from './AppRouter';

// Get the base path from the environment or use the default
const basePath = import.meta.env.BASE_URL || '/';

// Remove trailing slash if present for basename
const basename = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;

// Log the base path for debugging
console.log('Base path:', basePath);
console.log('Basename:', basename);

// Handle GitHub Pages 404 redirect
const path = window.location.pathname;
if (path.includes('/404.html')) {
  const newPath = path.replace('/404.html', '');
  window.history.replaceState({}, '', newPath);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>
);
