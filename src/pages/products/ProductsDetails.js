import React from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import RouteBanner from "../../shared/routeBanners/RouteBanner";

const ProductsDetails = () => {
  const { theme } = useContext(AuthContext);
  const { state } = useLocation();
  const {
    name,
    img,
    descriptions,
    location,
    price,
    mobile,
    time,
    posted,
    used,
    seller,
    _id,
  } = state;

  return (
    <div className="mb-10 mt-2">
      <RouteBanner
        positionName={[
          { no: "Home", to: "/" },
          { no: "Categories", to: "/categories" },
          { no: "Products",to: "/categories" },
          { no: name  ,to: "/categories" },
        ]}
      ></RouteBanner>
      <div className="wrapper bg-gray-400 antialiased text-gray-900">
        <div>
          <img
            src={img}
            alt=" random imgee"
            className="w-full object-cover object-center h-[550px] rounded-lg shadow-md"
          />

          <div className="relative px-4 -mt-[70px]  ">
            <div
              className={`  px-6 py-7 rounded-lg shadow-lg ${
                theme ? "btn1 text-white" : "bg-white text-slate-700"
              }`}
            >
              <div className="flex items-baseline">
                <span className="bg-blue-500 text-teal-100 text-xs py-2 px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  Verified Seller
                </span>
                <div className="ml-2  uppercase text-xs font-semibold tracking-wider">
                 Posted:{posted} &bull; {location}
                </div>
              </div>

              <h4 className="mt-1 text-3xl my-2 font-semibold uppercase font-serif leading-tight truncate">
               {name}
              </h4>
              <p className="text-xl font-semibold">{descriptions}</p>


              <div className="mt-1 text-xl font-mono">
                $ {price}
                <span className=" text-sm"> /Warranty serve {used}</span>
              </div>
              <div className="mt-4">
                <span className=" text-md font-semibold">Seller Name </span>
                <span className="text-sm ">( { seller } )</span>
                <br />
                <span className=" text-md font-semibold">Seller Mob : </span>
                <span className="text-sm ">( { mobile } )</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
