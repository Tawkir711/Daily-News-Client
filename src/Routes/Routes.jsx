import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../App";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Components/Home/Home";
import Register from "../Pages/Register";
import AddBlog from './../Pages/AddBlog';
import AllBlogs from './../Pages/AllBlogs';
import Wishlist from './../Pages/Wishlist';
import FeaturedBlogs from "../Pages/FeaturedBlogs";
import PrivateRoute from "./PrivateRoute";

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
        path:'/addBlog',
        element: <AddBlog></AddBlog>
      },
      {
        path:'/allBlogs',
        element: <AllBlogs></AllBlogs>
      },
      {
        path:'/featuredBlogs',
        element: <FeaturedBlogs></FeaturedBlogs>
      },
      {
        path:'/wishlist',
        element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
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
