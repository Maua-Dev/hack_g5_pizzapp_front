import React from 'react';
import ReactDOM from 'react-dom/client';
import TelaLogin from './pages/App_TelaLogin';
import TelaFav from './pages/App_TelaFavoritos';
import TelaMenu from './pages/App_TelaMenu';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TelaMenu />
  </React.StrictMode>
);


