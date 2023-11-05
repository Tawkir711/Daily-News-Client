import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import MainLayout from '../App';
import Login from '../Pages/Login';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])

export default Routes;
