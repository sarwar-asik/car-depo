import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { FaBars} from "react-icons/fa";
import '../shared/custom.css'


const Header = () => {
  const { user, logout, dashbtn, setdashbtn, theme } =
    useContext(AuthContext);

  const handleDashbtn = () => {
    setdashbtn(true);
  };

  const closeDash = () => {
    setdashbtn(false);
  };

  const MenuItem = (
    <React.Fragment>
      <li>
        <Link onClick={closeDash} to="/">
          Home
        </Link>
      </li>
      {user?.displayName ? (
        <>
          <li>
            <Link className="" onClick={logout}>
              Log Out{" "}
            </Link>
          </li>

          <li>
            <Link onClick={closeDash} to="/blogs">
              Blogs
            </Link>
          </li>
          <li tabIndex={2} htmlFor="dashboard-drawer">
            <Link onClick={handleDashbtn} to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className=" rounded-full  ">
            <Link onClick={closeDash} to="/profile">
              {" "}
              Profile
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link onClick={handleDashbtn} to="/login">
              Dashboard
            </Link>
          </li>
          <li>
            <Link onClick={closeDash} to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link onClick={closeDash} to="/signup">
              Sign In
            </Link>
          </li>
        </>
      )}
    </React.Fragment>
  );
  return (
    <div className={theme ? "textColor1" : "textColor2"}>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="font-bold  lg:hidden">
              <FaBars className="" />
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2   rounded-box w-52 shadow-xl bg-cyan-700"
            >
              {MenuItem}
            </ul>
          </div>
          <div className=" hidden lg:flex">
            <Link className=" normal-case text-2xl font-bold" to="/">
              {" "}
              Used Cars Depo
            </Link>
          </div>
        </div>
        <div className="navbar-center lg:hidden ">
          <Link
            onClick={closeDash}
            to="/"
            className="text-primary normal-case text-xl font-bold"
          >
            Used Cars Depot
          </Link>
          
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 ">{MenuItem}</ul>
          </div>
          {dashbtn && (
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-ghost lg:hidden"
            >
              <Link> DashBoards</Link>

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
