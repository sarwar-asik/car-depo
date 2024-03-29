import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import banner from "../../assets/cars-removebg-preview.png";

const Hero1 = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div>
      <div
        className={`hero my-[50px] shadow-lg ${
          theme ? "textColor1" : "textColor2"
        }`}
      >
        <div className="hero-content flex-col gap-3 lg:flex-row">
          {/* <section
           
           >
             </section> */}
          <img
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            src={banner}
            className=" rounded-lg  h-[500px] max-w-[80%]"
            alt=""
          />
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1 className="text-[3rem] font-bold  font-serif">
           Sell You Products
        
            </h1>
            <p
              className={` text-[1em] font-semibold mb-5 ${
                theme ? "textColorHover1" : "textColorHover2"
              }`}
            >
              We provide Used Cars to our customer . Ours cars are almost brand
              new these used few years . You can order your car by sign in . And
              seller is able to sell his product by create a seller account .
            </p>

            <Link to="/signup" className="btn1 py-3 px-3 font-bold mt-10 ">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
