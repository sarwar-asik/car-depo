import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../firebase/AuthProvider";

const SIdeProducts = () => {
  const { user, theme } = useContext(AuthContext);
  const [advertises, setAdvertise] = useState([]);
  useEffect(() => {
    axios
      .get(`https://sh-server-site.vercel.app/advertise?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((data) => {
        //   console.log(data.data);
        setAdvertise(data.data);
      });
  }, [user?.email]);
  
  return (
    <div className="px-3 text-slate-800 text-[18px]">
        <h2 className="text-3xl font-bold font-serif">Your Products</h2>
      <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mt-3 gap-6">
        {advertises?.map((p) => {
          const { name, price, img, descriptions } = p;
          return (
            <div className={`shadow-2xl rounded-xl p-2 flex gap-5 ${name==="VW Microbus"? "hidden":""}`}>
              <figure className="w-[25%]">
                <img
                  className="w-[200px] mx-auto h-[100px] rounded-[3%]"
                  src={img}
                  alt="img"
                />
              </figure>
              <section className="flex flex-col gap-2 w-[75%]">
                <h3 className="font-bold font-serif">{name}</h3>
                <p className="text-[14px] font-[600] text-slate-500">
                  {descriptions.slice(0,43)}.....
                </p>
                <aside className="flex justify-between">
                  <h6 className="text-[13px] font-[500] font-sans ">
                    Price: {price}
                  </h6>
                  <button className="bg-[#61cab2] font-semibold rounded px-3 text-white">
                    Sell
                  </button>
                </aside>
              </section>
              <section>
                <button className=""></button>
              </section>
            </div>
          );
        })}
      </section>
    
      <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mt-3 gap-6">
        {advertises?.map((p) => {
          const { name, price, img, descriptions } = p;
          return (
            <div className={`shadow-2xl rounded-xl p-2 flex gap-5 ${name==="VW Microbus"? "hidden":""}`}>
              <figure className="w-[25%]">
                <img
                  className="w-[200px] mx-auto h-[100px] rounded-[3%]"
                  src={img}
                  alt="img"
                />
              </figure>
              <section className="flex flex-col gap-2 w-[75%]">
                <h3 className="font-bold font-serif">{name}</h3>
                <p className="text-[14px] font-[600] text-slate-500">
                  {descriptions.slice(0,43)}.....
                </p>
                <aside className="flex justify-between">
                  <h6 className="text-[13px] font-[500] font-sans ">
                    Price: {price}
                  </h6>
                  <button className="bg-[#61cab2] font-semibold rounded px-3 text-white">
                    Sell
                  </button>
                </aside>
              </section>
              <section>
                <button className=""></button>
              </section>
            </div>
          );
        })}
      </section>
    
      <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mt-3 gap-6">
        {advertises?.map((p) => {
          const { name, price, img, descriptions } = p;
          return (
            <div className={`shadow-2xl rounded-xl p-2 flex gap-5 ${name==="VW Microbus"? "hidden":""}`}>
              <figure className="w-[25%]">
                <img
                  className="w-[200px] mx-auto h-[100px] rounded-[3%]"
                  src={img}
                  alt="img"
                />
              </figure>
              <section className="flex flex-col gap-2 w-[75%]">
                <h3 className="font-bold font-serif">{name}</h3>
                <p className="text-[14px] font-[600] text-slate-500">
                  {descriptions.slice(0,43)}.....
                </p>
                <aside className="flex justify-between">
                  <h6 className="text-[13px] font-[500] font-sans ">
                    Price: {price}
                  </h6>
                  <button className="bg-[#61cab2] font-semibold rounded px-3 text-white">
                    Sell
                  </button>
                </aside>
              </section>
              <section>
                <button className=""></button>
              </section>
            </div>
          );
        })}
      </section>
    
      <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mt-3 gap-6">
        {advertises?.map((p) => {
          const { name, price, img, descriptions } = p;
          return (
            <div className={`shadow-2xl rounded-xl p-2 flex gap-5 ${name==="VW Microbus"? "hidden":""}`}>
              <figure className="w-[25%]">
                <img
                  className="w-[200px] mx-auto h-[100px] rounded-[3%]"
                  src={img}
                  alt="img"
                />
              </figure>
              <section className="flex flex-col gap-2 w-[75%]">
                <h3 className="font-bold font-serif">{name}</h3>
                <p className="text-[14px] font-[600] text-slate-500">
                  {descriptions.slice(0,43)}.....
                </p>
                <aside className="flex justify-between">
                  <h6 className="text-[13px] font-[500] font-sans ">
                    Price: {price}
                  </h6>
                  <button className="bg-[#61cab2] font-semibold rounded px-3 text-white">
                    Sell
                  </button>
                </aside>
              </section>
              <section>
                <button className=""></button>
              </section>
            </div>
          );
        })}
      </section>
    
    </div>
  );
};

export default SIdeProducts;
