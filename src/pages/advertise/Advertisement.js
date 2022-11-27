import axios from "axios";
import React, { useEffect, useState } from "react";
import BookModal from "../bookModal/BookModal";

const Advertisement = () => {
  const [advertises, setAdvertise] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3008/advertise`).then((data) => {
      //   console.log(data.data);
      setAdvertise(data.data);
    });
  }, []);
  const [productInfo, setproducts] = useState({});
  const [isModal, setModal] = useState(true);

  const productData = (data) => {
    setproducts(data);
    // console.log(data);
  };


  return (
    <div className="max-w-[90%] mx-auto ">
      <h1 className="text-center text-5xl my-5 "> Advertise </h1>
      <div
        className=" grid sm:grid-cols-1
    md:grid-cols-2  lg:grid-cols-3 gap-5"
      >
        {advertises?.map((advertise) => {
            const {name,price ,img,descriptions} =advertise;
            
          return (
            <div className="card w-96 bg-base-100 mx-auto shadow-xl image-full">
              <figure className=" h-[250px]">
                <img className="w-[100%]" src={img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">{name}</h2>
                <p>{descriptions}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">{price}</button>


                  <label
                    onClick={() => productData(advertise)}
                    htmlFor="my-modal-6"
                    className="btn btn-outline btn-accent"
                  >
                    Book Now
                  </label>
                </div>
              </div>
              {isModal && <BookModal productInfo={productInfo} setModal={setModal} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Advertisement;
