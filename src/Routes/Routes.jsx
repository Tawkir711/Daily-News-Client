import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../App";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Components/Home/Home";
import Register from "../Pages/Register";
import AddBlog from './../Pages/AddBlog';
import AllBlogs from './../Pages/AllBlogs';
// import Wishlist from './../Pages/Wishlist';
import FeaturedBlogs from "../Pages/FeaturedBlogs";
import Wishlist from "../Pages/Wishlist";
import WishlistCard from "../Components/WishlistCard/WishlistCard";
// import PrivateRoute from "./PrivateRoute";
// import AddToWishlist from "../Components/AddToWishlist/AddToWishlist";

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
        path: '/wishlist',
        element: <Wishlist></Wishlist>,
        loader: () => fetch('http://localhost:5000/wishlist2')
      },
      {
        path: '/wishlistCard/:id',
        element: <WishlistCard></WishlistCard>,
        loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
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
