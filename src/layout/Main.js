import React from "react";
import { useContext } from "react";
import { HiSun } from "react-icons/hi";
import { TiAdjustContrast } from "react-icons/ti";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Theme from "../shared/Theme/Theme";
import "../shared/custom.css";

const Main = () => {
  const { theme } = useContext(AuthContext);

  return (
    <div className={`static ${theme ? "textColor1" : "textColor2"} `}>
      {/* <div className="fixed right-[px] top-[60px] z-40 ">{<Theme></Theme>}</div> */}
      <Header></Header>
      <div className="container  mx-auto ">
        <Outlet />
      </div>

      <div className="w-full mx-auto">
        {/* <Footer></Footer> */}
      </div>
    </div>
  );
};

export default Main;
