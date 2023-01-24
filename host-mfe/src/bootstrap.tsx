import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { CounterProvider } from 'buttonMfe/store';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>
);
