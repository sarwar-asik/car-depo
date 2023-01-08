import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import "../../shared/custom.css";

const RouteBanner = ({ positionName }) => {
  const { theme } = useContext(AuthContext);
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1700"
      className={`py-[190px] flex justify-center items-center rounded-lg   ${
        theme ? "btn1" : "bg-slate-900"
      }`}
    >
      <section className="flex items-center gap-2 ">
        {positionName?.map((names) => {
          return (
            <div className="flex items-center justify-center">
              <Link
                to={names?.to ? names.to : "/"}
                className="lg:text-3xl sm:text-xl font-semibold font-serif"
              >
                {names?.no}
              </Link>
              <span className="text-4xl  font-bold"> {">"} </span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default RouteBanner;
