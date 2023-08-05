import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppCoz from './pages/AppCoz2';
import AppBar from './pages/AppCoz1';
import AppGar2 from './pages/AppGar2';
import AppGar1 from './pages/AppJony';
import App_TelaFav from "./pages/App_TelaFavoritos";
import TelaLogin from './pages/App_TelaLogin';
import TelaFav from './pages/App_TelaFavoritos';
import TelaMenu from './pages/App_TelaMenu';
import TelaCodigo from './pages/tela_codigo';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './AppRouter';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
  <AppRouter/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
