import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './screen/App';
import Footer from './screen/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>
);