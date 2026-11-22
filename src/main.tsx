import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const rawBase = import.meta.env.BASE_URL.replace(/\/+$/, '') || '/';
const routerBasename =
  rawBase !== '/' && window.location.pathname.startsWith(rawBase)
    ? rawBase
    : '/';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
