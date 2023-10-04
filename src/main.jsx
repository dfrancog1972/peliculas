import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./componentes/Home/Home";
import Productos from "./componentes/Productos/Productos"
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const routes = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
    errorElement: <h1>La regaste no existe la ruta</h1>,
    children: [
      {
        path:'/',
        element:<Productos/>
      },
    ]
  },
  {
    path: '/hola',
    element:<h2>Hola</h2>
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

  {/* necesario encerrar en etiquetas vacias para evitar el error al quitar el modo estricto */}
  <>
    <RouterProvider router={routes}/>
  </>
  </React.StrictMode>
)
