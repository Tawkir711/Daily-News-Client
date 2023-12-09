import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../App";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Components/Home/Home";
import Register from "../Pages/Register";
import AddBlog from "./../Pages/AddBlog";
import AllBlogs from "./../Pages/AllBlogs";
// import Wishlist from './../Pages/Wishlist';
import FeaturedBlogs from "../Pages/FeaturedBlogs";
import Wishlist from "../Pages/Wishlist";
import WishlistCard from "../Components/WishlistCard/WishlistCard";
import BlogDetails from "../Components/Details/BlogDetails";
import Update from "../Components/Update/Update";
// import Details from "../Components/Details/Details";
import PrivateRoute from "./PrivateRoute";
// import AddToWishlist from "../Components/AddToWishlist/AddToWishlist";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addBlog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/allBlogs",
        element: 
            <AllBlogs></AllBlogs>,
      },
      {
        path: "/featuredBlogs",
        element: 
            <FeaturedBlogs></FeaturedBlogs>,
      },
      {
        path: "/wishlist",
        element:
            <Wishlist></Wishlist>,
        loader: () =>
          fetch("https://assignment-11-server-nine-psi.vercel.app/wishlist2"),
      },
      {
        path: "/wishlistCard/:id",
        element: <PrivateRoute><WishlistCard></WishlistCard></PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-nine-psi.vercel.app/blogs/${params.id}`
          ),
      },
      {
        path: "/blogDetails/:id",
        element:<PrivateRoute> <BlogDetails></BlogDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-nine-psi.vercel.app/allBlog/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element:
            <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-nine-psi.vercel.app/allBlog/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routes;
