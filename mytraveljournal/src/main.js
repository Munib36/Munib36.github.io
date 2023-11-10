import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('body');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>,
  rootElement
);
