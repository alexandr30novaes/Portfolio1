import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import MainContent from './components/MainContent';

import "../src/styles/main.sass";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
);
