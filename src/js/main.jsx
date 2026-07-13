import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'
import Layout from './modules/Layout';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Locations from './pages/Locations';
import Episodes from './pages/Episodes';
import NotFoundPage from './pages/NotFoundPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/", 
    element: <Layout />,
    children: [
      {index: true, element: <Home />},
      {path: "/characters", element: <Characters />},
      {path: "/locations", element: <Locations />},
      {path: "/episodes", element: <Episodes />},
      {path:"*", element: <NotFoundPage />}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
