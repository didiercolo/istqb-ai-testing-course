import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import AppRouter from './AppRouter';

// Get the base path from the environment or use the default
const basePath = import.meta.env.BASE_URL || '/';

// Remove trailing slash if present for basename
const basename = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;

// Log the base path for debugging
console.log('Base path:', basePath);
console.log('Basename:', basename);

// Component to handle initial navigation
function InitialNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle the 'p' parameter for client-side routing
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('p');
    
    if (redirectPath) {
      // Clean up the URL
      const cleanPath = redirectPath
        .replace(/~and~/g, '&')
        .replace(/%3F/g, '?')
        .replace(/%23/g, '#');
      
      // Navigate to the clean path
      navigate(cleanPath, { replace: true });
    }
  }, [navigate]);

  return <AppRouter />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <InitialNavigation />
    </BrowserRouter>
  </StrictMode>
);
