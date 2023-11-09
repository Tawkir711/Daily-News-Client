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
        element: (
          <PrivateRoute>
            <AllBlogs></AllBlogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/featuredBlogs",
        element: (
          <PrivateRoute>
            <FeaturedBlogs></FeaturedBlogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist></Wishlist>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://assignment-11-server-nine-psi.vercel.app/wishlist2"),
      },
      {
        path: "/wishlistCard/:id",
        element: <WishlistCard></WishlistCard>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-nine-psi.vercel.app/blogs/${params.id}`
          ),
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-nine-psi.vercel.app/allBlog/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
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
