import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../App';
import MainLayout from '../App';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {

      }
    ]
  }
])

export default Routes;
