import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AppCtxProvider from './context/appCtx.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppCtxProvider>
      <App />
    </AppCtxProvider>
  </React.StrictMode>
);
