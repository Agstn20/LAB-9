import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // New React 18 method
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);