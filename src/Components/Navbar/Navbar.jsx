import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
  
  const navLinks = <>
    <li>
      <NavLink to={'/'} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "underline text-white btn btn-primary btn-sm" : "btn btn-ghost btn-sm"}>Home</NavLink>
  </li>
    <li>
      <NavLink to={'/login'} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "underline text-white btn btn-primary btn-sm" : "btn btn-ghost btn-sm"}>Login</NavLink>
  </li>
  </>

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-2xl font-bold gap-3">
            <img className='h-[50px] rounded-2xl' src="https://i.postimg.cc/Fsx9TqTy/images.jpg" alt="logo" />
            Daily News
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {navLinks}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 flex flex-col gap-2">
          {/* Sidebar content here */}
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;