import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Context";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Your Log Out Successfully",
        });
      })
      .catch();
  };
  const userImage =
    user && user.photoURL
      ? user.photoURL
      : "https://i.postimg.cc/zB10zYpJ/userImg.jpg";
  const userName = user && user.displayName;

  const navLinks = (
    <div className="lg:flex">
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-white btn btn-primary btn-sm"
              : "btn btn-ghost btn-sm"
          }
        >
          Home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to={"/addBlog"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline text-white btn btn-primary btn-sm"
                : "btn btn-ghost btn-sm"
            }
          >
            Add Blog
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to={"/allBlogs"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline text-white btn btn-primary btn-sm"
                : "btn btn-ghost btn-sm"
            }
          >
            All Blogs
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to={"/featuredBlogs"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline text-white btn btn-primary btn-sm"
                : "btn btn-ghost btn-sm"
            }
          >
            Featured Blogs
          </NavLink>
        </li>
      )}
      {/* {user?.email && (
        <li>
          <NavLink
            to={"/wishlist"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline text-white btn btn-primary btn-sm"
                : "btn btn-ghost btn-sm"
            }
          >
            Wishlist
          </NavLink>
        </li>
      )} */}

      {user?.email ? (
        <>
          <li>
            <NavLink
              to={"/wishlist"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline text-white btn btn-primary btn-sm"
                  : "btn btn-ghost btn-sm"
              }
            >
              Wishlist
            </NavLink>
          </li>
          <li>
            <button onClick={handleSignOut} className="btn btn-sm">
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <li>
          <NavLink
            to={"/login"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline text-white btn btn-primary btn-sm"
                : "btn btn-ghost btn-sm"
            }
          >
            Login
          </NavLink>
        </li>
      )}
    </div>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img
          className="h-[50px] rounded-xl"
          src="https://i.postimg.cc/q7ZcTWF3/images.jpg"
          alt="logo"
        />
        <a className="btn btn-ghost normal-case text-xl">Daily News</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end hidden md:flex">
        <p>{userName}</p>
        <label className="btn btn-ghost btn-circle avatar  ">
          <div className="w-10 rounded-full">
            <img src={userImage} alt="user img" />
          </div>
        </label>
        {/* {user ? (
          <button onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="btn">Login</button>
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
