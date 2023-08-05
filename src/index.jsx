import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppCoz from './pages/AppCoz2';
import AppBar from './pages/AppCoz1';
import AppGar2 from './pages/AppGar2';
import AppGar1 from './pages/AppJony';
import App_TelaFav from "./pages/App_TelaFavoritos";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppCoz />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
