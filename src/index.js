import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import App from './App'; // Main application component

// Get the root element from the HTML where the React app will be mounted.
const rootElement = document.getElementById('root');

// Create a React root for concurrent mode features.
const root = ReactDOM.createRoot(rootElement);

// Render the main App component within React's StrictMode for highlighting potential problems.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
