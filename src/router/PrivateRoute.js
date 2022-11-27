import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import Loader from "../loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
