import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import our custom CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Import Custom CSS

import './assets/css/index.css';

// Import root Component
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
