import React from 'react';
import ReactDOM from 'react-dom/client';
import TelaLogin from './pages/App_TelaLogin';
import TelaFav from './pages/App_TelaFavoritos';
import TelaMenu from './pages/App_TelaMenu';
import AppGar2 from './pages/AppGar2';
import AppCoz2 from './pages/AppCoz2';
import AppCoz1 from './pages/AppCoz1';
import AppJony from './pages/AppJony';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppJony/>,
  },
  {
    path: "login",
    element: <TelaLogin/>,
  },
  {
    path: "favoritos",
    element: <TelaFav/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider  router={router}/>

);

