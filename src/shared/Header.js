import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { FaBars } from "react-icons/fa";
import "../shared/custom.css";

const Header = () => {
  const { user, logout, dashbtn, setdashbtn, theme } = useContext(AuthContext);
  const navigate  = useNavigate()

  const handleDashbtn = () => {
    setdashbtn(true);
  };

  const closeDash = () => {
    setdashbtn(false);
  };

  const handleLogout =()=>{
    const islogout = window.confirm(" Log Out ?");

    if (islogout) {
      logout().then(()=>{
        navigate('/')
         dashbtn(false);
          localStorage.removeItem("accessToken");
      })
      .catch(err =>console.log(err))
      }
  }
  const MenuItem = (
    <React.Fragment>
      <li className={`${theme ? "textColorHover1" : "textColorHover2"}`}>
        <Link onClick={closeDash} to="/">
          Home
        </Link>
      </li>
      {user?.displayName ? (
        <>
          <li className={`hover:text-error ${theme ? "text-black" : ""} `}>
            <Link onClick={handleLogout}>Log Out</Link>
          </li>

          <li className={`${theme ? "textColorHover1" : "textColorHover2"}`}>
            <Link onClick={closeDash} to="/blogs">
              Blogs
            </Link>
          </li>
          <li
            className={`${theme ? "textColorHover1" : "textColorHover2"}`}
            tabIndex={2}
            htmlFor="dashboard-drawer"
          >
            <Link onClick={handleDashbtn} to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li
            className={`${
              theme ? "textColorHover1" : "textColorHover2"
            } rounded-full `}
          >
            <Link onClick={closeDash} to="/profile">
              Profile
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              className={`${theme ? "textColorHover1" : "textColorHover2"}`}
              onClick={handleDashbtn}
              to="/login"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className={`${theme ? "textColorHover1" : "textColorHover2"}`}
              onClick={closeDash}
              to="/login"
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              className={`${theme ? "textColorHover1" : "textColorHover2"}`}
              onClick={closeDash}
              to="/signup"
            >
              Sign Up
            </Link>
          </li>
        </>
      )}
    </React.Fragment>
  );
  return (
    <div className={``}>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="font-bold  lg:hidden">
              <FaBars className="" />
            </label>
            <ul
              tabIndex={1}
              className={`menu menu-compact dropdown-content mt-3 p-2   rounded-box w-52 shadow-xl font-bold  ${
                theme ? "bg-slate-200" : "bg-slate-600"
              }`}
            >
              {MenuItem}
            </ul>
          </div>
          <div className=" hidden lg:flex">
            <Link
              className={`normal-case text-3xl font-serif font-bold ${
                theme ? "textColor1" : "textColor2"
              }`}
              to="/"
            >
              Cars Depo
            </Link>
          </div>
        </div>
        <div className="navbar-center lg:hidden ">
          <Link
            onClick={closeDash}
            to="/"
            className={` lg:text-3xl sm:text-2xl mr-4 font-serif font-bold ${
              theme ? "textColor1" : "textColorHover2"
            }`}
          >
             Cars Depo
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 font-bold font-serif">
              {MenuItem}
            </ul>
          </div>
          {dashbtn && (
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-ghost lg:hidden"
            >
              DashBoards
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
