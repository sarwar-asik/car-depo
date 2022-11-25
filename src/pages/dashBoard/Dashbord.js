import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import useRoleCheck from "../../hooks/useRoleCheck";

const Dashbord = () => {
  const {user} = useContext(AuthContext)
const [roleCheck]=useRoleCheck(user.email)

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
              <Link to="/addproducts"> Add Products</Link>
                  <Link to="/selllerproducts"> My Products </Link>
                  <Link to="/dashboard/manageDoctors"> Manage Doctors </Link>
            </li>
          </ul>
        </div>
      </div>
    
  </div>;
};

export default Dashbord;
