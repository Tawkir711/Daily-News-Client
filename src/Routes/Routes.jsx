import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../App';
import Login from '../Pages/Login';
import ErrorPage from '../Pages/ErrorPage';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])

export default Routes;
