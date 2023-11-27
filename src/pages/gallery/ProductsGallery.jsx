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

      <div className="max-w-screen-xl p-5 mx-auto bg-gray-100 text-gray-800">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group bg-gray-500"
            style={{
              backgroundImage:
                "url(https://source.unsplash.com/random/245x320)",
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="/"
                className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline text-gray-100 bg-blue-600"
              >
                Art
              </a>
              <div className="flex flex-col justify-start text-center text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">31</span>
                <span className="leadi uppercase">Jul</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="/"
                className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold text-gray-100"
              >
                Fuga ea ullam earum assumenda, beatae labore eligendi.
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
            style={{
              backgroundImage:
                "url(https://source.unsplash.com/random/240x320)",
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="/"
                className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline text-gray-100 bg-blue-600"
              >
                Politics
              </a>
              <div className="flex flex-col justify-start text-center text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">04</span>
                <span className="leadi uppercase">Aug</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="/"
                className="font-medium text-md group-hover:underline text-gray-100"
              >
                {" "}
                Autem sunt tempora mollitia magnam non voluptates
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
            style={{
              backgroundImage:
                "url(https://source.unsplash.com/random/240x320)",
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="/"
                className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline text-gray-100 bg-blue-600"
              >
                Health
              </a>
              <div className="flex flex-col justify-start text-center text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">01</span>
                <span className="leadi uppercase">Aug</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="/"
                className="font-medium text-md group-hover:underline text-gray-100"
              >
                Inventore reiciendis aliquam excepturi
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
            style={{
              backgroundImage:
                "url(https://source.unsplash.com/random/240x320)",
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="/"
                className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline text-gray-100 bg-blue-600"
              >
                Science
              </a>
              <div className="flex flex-col justify-start text-center text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">28</span>
                <span className="leadi uppercase">Jul</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="/"
                className="font-medium text-md group-hover:underline text-gray-100"
              >
                Officiis mollitia dignissimos commodi optio vero animi
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
            style={{
              backgroundImage:
                "url(https://source.unsplash.com/random/240x320)",
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="/"
                className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline text-gray-100 bg-blue-600"
              >
                Sports
              </a>
              <div className="flex flex-col justify-start text-center text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">19</span>
                <span className="leadi uppercase">Jul</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="/"
                className="font-medium text-md group-hover:underline text-gray-100"
              >
                Doloribus sit illo necessitatibus architecto exercitationem enim
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsGallery;
