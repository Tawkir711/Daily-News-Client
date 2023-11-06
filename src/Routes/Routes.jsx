import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../App";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Components/Home/Home";
import Register from "../Pages/Register";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register> ,
      },
    ],
  },
]);

export default Routes;
