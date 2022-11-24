import React from "react";
import { card } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  const MenuItem = (
    <React.Fragment>
      <li>
        <a>Homepage</a>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Sign In</Link>
      </li>
      <li tabIndex={2} htmlFor="dashboard-drawer">
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="">
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label  htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {MenuItem}
            </ul>
          </div>
          <div className=" hidden lg:flex">
            <a className="btn btn-ghost normal-case text-xl ">
              Used Cars Depot
            </a>
          </div>
        </div>
        <div className="navbar-center lg:hidden ">
          <a className="btn btn-ghost normal-case text-xl ">Used Cars Depot</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{MenuItem}</ul>
          </div>
          <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
