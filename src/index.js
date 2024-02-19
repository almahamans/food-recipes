import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/home-page/App';
import Footer from './components/ui/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>
);