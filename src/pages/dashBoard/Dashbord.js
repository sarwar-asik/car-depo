import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import useRoleCheck from "../../hooks/useRoleCheck";

const Dashbord = () => {
  const { user,dashbtn,setdashbtn ,theme} = useContext(AuthContext);
  const [roleCheck] = useRoleCheck(user?.email);
  console.log(roleCheck);
  const ItemDash = <React.Fragment>
    {
      roleCheck ==='seller'&& <>
      <Link to="/addproducts" className={`${theme?"textColorHover1 ":"textColorHover2"}`}> Add Products</Link>
     <Link to="/selllerproducts"  className={`${theme?"textColorHover1 ":"textColorHover2"}`}> My Products </Link>
      </>
    }
    {
      roleCheck ==='buyer'  && <>
      <Link to="/myorders"  className={`${theme?"textColorHover1 ":"textColorHover2"}`}> My Orders </Link>
      </>
    }
    {
      roleCheck === 'Admin'&&
      <>
             <Link to="/categories" className={`${theme?"textColorHover1 ":"textColorHover2"}`}>Add Categories </Link>
              <Link to="/allseller" className={`${theme?"textColorHover1 ":"textColorHover2"}`}> All Sellers </Link>
              <Link to="/allbuyer" className={`${theme?"textColorHover1 ":"textColorHover2"}`}> All Buyers </Link>
              <Link to="/report" className={`${theme?"textColorHover1 ":"textColorHover2"}`}> Reported Item </Link>
      </>
    }
  </React.Fragment>

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content"></div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className={`menu p-4 w-80 shadow-2xl font-bold font-serif  text-base-content  ${theme?" bg-slate-200":" bg-slate-400"}`}>
            <li>
              
              {
                ItemDash
              }
                <Link to="/myorders"> My Orders </Link>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
