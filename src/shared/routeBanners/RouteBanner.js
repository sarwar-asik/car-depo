import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import "../../shared/custom.css";

const RouteBanner = ({ positionName }) => {
  const { theme } = useContext(AuthContext);
  const navigate= useNavigate()
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1500"
      className={`py-[190px] flex justify-center relative items-center rounded-lg   ${
        theme ? "btn1" : "bg-slate-900"
      } `}
    >
      <div onClick={()=>{navigate(-1)}} className="absolute left-[20px] top-[30px] text-2xl font-semibold ">{"<"} Back </div>
      <section className="flex items-center gap-2 ">
        {positionName?.map((names) => {
          return (
            <div className="flex items-center justify-center">
              <Link
                to={names?.to ? names.to : "/"}
                className="lg:text-3xl sm:text-[10px] font-semibold font-serif"
              >
                {names?.no}
              </Link>
              <span className="text-4xl  font-bold"> {">"} </span>
            </div>
          );
        })}
      </section>
      <div onClick={()=>{navigate(1)}} className="absolute right-[20px] top-[30px] text-2xl font-semibold ">Forward {">"} </div>
    </div>
  );
};

export default RouteBanner;
