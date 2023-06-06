import React, { useEffect, useState } from "react";
import { useContext } from "react";

import { Outlet } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import mainLoader from "../assets/mainSpiningLoader.gif"
import "../App.css"
import "../shared/custom.css";

const Main = () => {
  const { theme } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="" >
      {isLoading ? (
        <img src={mainLoader} className="w-[300px] h-[250px] mx-auto my-auto mt-[15rem] rounded-xl" alt="" />
      ) : (
        <div className={`static ${theme ? "textColor1" : "textColor2"} `}>
          {" "}
          {/* <div className="fixed right-[px] top-[60px] z-40 ">{<Theme></Theme>}</div> */}
          <Header></Header>
          <div className="containe  mx-auto ">
            <Outlet />
          </div>
          <div className="w-full mx-auto">
            <Footer></Footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
