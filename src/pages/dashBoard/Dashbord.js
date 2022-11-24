import React from "react";
import { Link } from "react-router-dom";

const Dashbord = () => {
  return <div>
  <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/categories"> Categories </Link>
              <Link to="/dashboard/totalUser"> All User</Link>
                  <Link to="/dashboard/adddoctor"> Add Doctors </Link>
                  <Link to="/dashboard/manageDoctors"> Manage Doctors </Link>
            </li>
          </ul>
        </div>
      </div>
    
  </div>;
};

export default Dashbord;
