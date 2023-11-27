import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../shared/custom.css";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../loader/Loader";

const ProductsGallery = () => {
  const [productsData, setproductsData] = useState([]);
  console.log(
    "🚀 ~ file: ProductsGallery.jsx:9 ~ ProductsGallery ~ productsData:",
    productsData
  );
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
      // data-aos="fade-left"
      // data-aos-anchor-placement="center-bottom"
      // data-aos-duration="2000"
      className=" bg-slate-100 rounded-md shadow-2xl my-3"
    >
      <section>
        <h3 className="text-[3rem]  text-center py-5 font-bold mt-10 font-serif">
          {" "}
          Our Product Gallery
        </h3>
        <p className="text-[1.2rem] font-semibold text-center">
        Nemo deserunt possimus quo provident recusandae! , non nesciunt aspernatur a? And choice your best products
        </p>
      </section>

      <section className="py-6 bg-gray-100 text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://as1.ftcdn.net/v2/jpg/01/21/72/86/1000_F_121728619_0ICOOIdQxXGn97RMM2xcW1aVhoaE9Xa0.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://img.freepik.com/free-photo/cropped-photo-particle-view-modern-luxury-white-car-parked-indoors-daytime_146671-16498.jpg?w=1060&t=st=1673351763~exp=1673352363~hmac=30c0f51fa1181f8d537e37c2610ff4fdb90e3c16d0f70715aa6ff3ba94538867"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://img.freepik.com/free-photo/white-pickup-truck-loaded-with-atv-near-gas-station_93675-133932.jpg?w=1060&t=st=1669636899~exp=1669637499~hmac=3e0fae118f63cee405f35e22e304a634afafd411a48d8e0fb8edd715c72d0bec"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://img.freepik.com/free-photo/f1-racing-24-hours-le-mans-render-3d-illustration_654080-375.jpg?w=1380&t=st=1670260906~exp=1670261506~hmac=24ed8c2b9fa5a84abd64f949f48e6a144e4d985865a7837824bdf7073beef651"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://img.freepik.com/free-photo/low-angle-white-modern-car-outdoors_23-2149385730.jpg?w=996&t=st=1701061161~exp=1701061761~hmac=1f868d9ac3b59d5c4d7266ebd7af3015f5a5ba13c54b7ed577dfaf3bb2cd4d06"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://as1.ftcdn.net/v2/jpg/00/54/09/88/1000_F_54098895_7z9MpQsP49tRcsy7sVua3nhUrthulBCj.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://as1.ftcdn.net/v2/jpg/01/21/72/86/1000_F_121728619_0ICOOIdQxXGn97RMM2xcW1aVhoaE9Xa0.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://img.freepik.com/free-photo/3d-render-fleet-delivery-vehicles_1048-5606.jpg?w=1060&t=st=1701061239~exp=1701061839~hmac=5028e805d8be62ea3c7cdd0f863ff0200fee57562c6a51266e995dcf29b7b130"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://img.freepik.com/free-photo/low-angle-white-modern-car-outdoors_23-2149385730.jpg?w=996&t=st=1701061161~exp=1701061761~hmac=1f868d9ac3b59d5c4d7266ebd7af3015f5a5ba13c54b7ed577dfaf3bb2cd4d06"
          />
          <img
            src="https://img.freepik.com/free-vector/electric-automobiles-are-charging-garage-power-station-vector-illustration-flat-design_1150-43131.jpg?w=1060&t=st=1669274347~exp=1669274947~hmac=1cceddc39a171c29f66abaf20fd4a7372ee692a15d32e83a7aa3c90383072aed"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default ProductsGallery;
