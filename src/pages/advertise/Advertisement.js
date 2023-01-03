import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../firebase/AuthProvider";
import BookModal from "../bookModal/BookModal";

const Advertisement = () => {
  const { user, theme } = useContext(AuthContext);
  console.log(user?.email);

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

  const [paids, setPaid] = useState([]);

  useEffect(() => {
    axios.get(`https://sh-server-site.vercel.app/payment`).then((data) => {
      //   console.log(data.data);
      setPaid(data.data);
    });
  }, []);

  // console.log(paids);

  const [productInfo, setproducts] = useState({});
  const [isModal, setModal] = useState(true);

  const productData = (data) => {
    setproducts(data);
    // console.log(data);
  };

  return (
    <div className={` max-w-[98%] mx-auto  mt-[30px] ${theme || "t"}`}>
      <h1 className="text-center text-5xl font-semibold mt-5 ">
        Available Products{" "}
      </h1>
      <div
        className="my-[200px] grid sm:grid-cols-1
    md:grid-cols-2  lg:grid-cols-3 gap-5"
      >
        {advertises?.map((advertise) => {
          const { name, price, img, descriptions } = advertise;
          // console.log(paids);
          const alreadyPaid = paids.find(
            (pay) => pay?.name === advertise?.name
          );
          // console.log(alreadyPaid);
          if (!alreadyPaid) {
            return (
              <div className="card h-[350px]  mx-auto w-[80%] shadow-lg  ">
                <figure className=" h-[250px]">
                  <img className="w-[100%] " src={img} alt="img" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-semibold">{name}</h2>
                  <p>{descriptions}</p>
                  <div className="card-actions justify-end">
                    <button className=" rounded hover:translate-x-3 duration-500 ease-in-out ">
                      ${price}
                    </button>

                    <label
                      onClick={() => productData(advertise)}
                      htmlFor="my-modal-6"
                      className="btn1 py-2 px-2 "
                    >
                      Book Now
                    </label>
                  </div>
                </div>
                {isModal && (
                  <BookModal productInfo={productInfo} setModal={setModal} />
                )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Advertisement;
