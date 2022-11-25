import React, { useContext } from "react";
import { card } from "flowbite-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const MenuItem = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link className="btn btn-outline btn-error" onClick={logout} to="/login">
              Log Out{" "}
            </Link>
          </li>
          <li tabIndex={2} htmlFor="dashboard-drawer">
        <Link to="/dashboard">Dashboard</Link>
      </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign In</Link>
          </li>
        </>
      )}
      
    </React.Fragment>
  );
  return (
    <div className="">
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
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
              <label
                htmlFor="dashboard-drawer"
                className="btn btn-ghost lg:hidden"
              >
                <Link> Dashboard</Link>
                {/* <svg
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
            </svg> */}
              </label>
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
