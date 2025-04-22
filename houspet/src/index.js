import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inicio from './Inicio';
import Equipo from './Components/Equipo';

// Define tus rutas con createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",   // Ruta para el componente 'Inicio'
    element: <Inicio />,
  },
  {
    path: "/equipo",   // Ruta para el componente 'Equipo'
    element: <Equipo />,
  },
]);

// Renderiza la aplicación usando ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
