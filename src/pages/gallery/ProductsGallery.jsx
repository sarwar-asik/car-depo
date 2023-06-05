import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../shared/custom.css";
import { Link, useNavigate } from "react-router-dom";

const ProductsGallery = () => {
  const [productsData, setproductsData] = useState([]);
  const navigate = useNavigate();

  const detailHandler = (carDetails) => {
    navigate(`/productDetails/${carDetails?._id}`, { state: carDetails });
    // console.log(carDetails,"from btn");
  };

  useEffect(() => {
    axios
      .get(`https://sh-server-site.vercel.app/advertise?email=test@gmail.com`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((data) => {
        //   console.log(data.data);
        setproductsData(data.data);
      });
  }, []);
  return (
    <div className="my-3 bg-slate-100 rounded-md shadow-2xl my-3">
      <h3 className="text-[3rem]  text-center py-5 font-bold mt-10 font-serif">
        {" "}
        Our Product Gallery
      </h3>
      <p className="text-[1.2rem] font-semibold text-center">
        Scroll the photo to see out products . And choice your best products 
        
      </p>

      <section className="flex items-center px-2">

        <Link className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-7 font-bold"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
        </Link>
        <div className="carousel !gap-4 rounded-box w-[90%] mx-auto">
          {productsData?.map((item) => {
            return (
              <div
              onClick={() => detailHandler(item)}
               className="carousel-item h-[18rem] w-[22rem] items-center rounded-tr-[100px] bg-cover bg-center bg-no-repeat "   style={{ backgroundImage: `url(${item?.img})` }}>
            
               <h4 className="mx-auto hidden inner-text text-w text-[1.5rem]  p-2 rounded  font-extrabold font-serif">
               see Products
               </h4> 
              </div>
            );
          })}
        </div>
      
      </section>
    </div>
  );
};

export default ProductsGallery;
