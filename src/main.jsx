import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Or App.css if you prefer

import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap App with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);