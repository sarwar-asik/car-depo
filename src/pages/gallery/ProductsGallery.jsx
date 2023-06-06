import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../shared/custom.css";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../loader/Loader";

const ProductsGallery = () => {
  const [productsData, setproductsData] = useState([]);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

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
        setLoading(true);
      });
  }, []);
  return (
    <div
      data-aos="fade-left"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="2000"
      className=" bg-slate-100 rounded-md shadow-2xl my-3"
    >
      <section>
        <h3 className="text-[3rem]  text-center py-5 font-bold mt-10 font-serif">
          {" "}
          Our Product Gallery
        </h3>
        <p className="text-[1.2rem] font-semibold text-center">
          Scroll the photo to see out products . And choice your best products
        </p>
      </section>

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
        {loading || <Loader />}
        <div className="carousel !gap-4 rounded-box w-[90%] mx-auto">
          {productsData?.map((item) => {
            return (
              <div
                onClick={() => detailHandler(item)}
                className="carousel-item cursor-alias h-[18rem] w-[22rem] items-center rounded-tr-[100px] bg-cover bg-center bg-no-repeat "
                style={{ backgroundImage: `url(${item?.img})` }}
              >
                <h4 className="mx-auto hidden inner-text text-w text-[1.5rem]   rounded  font-extrabold font-serif bg-slate-200 p-3">
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
