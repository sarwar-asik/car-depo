import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import Loader from "../../loader/Loader";
import BookModal from "../bookModal/BookModal";

const Advertisement = () => {
  const { user, theme } = useContext(AuthContext);
  // console.log(user?.email);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

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
        setLoading(true);
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
    if (user?.email) {
      setproducts(data);
    } else {
      navigate("/login");
    }
    // console.log(data);
  };

  return (
    <div className={` max-w-[98%] my-10 mx-auto  mt-[30px] ${theme || "t"} `}>
      <h1 className="text-[3rem] text-center py-5 font-bold mt-10 font-serif">
        Available Products
      </h1>
      <p
        className={` text-lg font-semibold text-center ${
          theme ? "textColorHover1" : "textColorHover2"
        }`}
      >
        These Projects are advertised by the Seller who are verified .The
        Products did not sell yet .
      </p>

      {loading || <Loader />}
      <div
        className="mt-9 grid sm:grid-cols-1
    md:grid-cols-2  lg:grid-cols-3 gap-5"
      >
        {advertises?.slice(0, 4).map((advertise) => {
          const { name, price, img, descriptions } = advertise;
          // console.log(paids);
          const alreadyPaid = paids.find(
            (pay) => pay?.name === advertise?.name
          );
          console.log("from advertise", productInfo?.name);
          // console.log(alreadyPaid);
          if (!alreadyPaid) {
            return (
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1200"
                className="card  mx-auto w-[90%] shadow-lg  "
              >
                <figure className="">
                  <img
                    className="w-[90%] mx-auto h-[250px] rounded-[3%]"
                    src={img}
                    alt="img"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-2xl textColor1 font-bold font-serif">
                    {name}
                  </h2>
                  <p
                    className={` font-semibold ${
                      theme ? "textColorHover1" : "textColorHover2"
                    }`}
                  >
                    {descriptions}
                  </p>
                  <div className="flex justify-between bg-slate-100 shadow pr-2 rounded-[5px]">
                    <label
                      onClick={() => productData(advertise)}
                      htmlFor={productInfo?._id}
                      className="btn1 py-2 px-2 rounded-l-none font-semibold  cursor-pointer"
                    >
                      Book Now
                    </label>
                    <button className="font-bold text-slate-500 text-lg font-mono rounded">
                      Price:${price}
                    </button>
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
      <section className="w-[14rem] mx-auto mt-5 text-center !rounded-t-[50%]  btn1 px-7 font-semibold font-serif  py-4">
        {advertises?.length > 3 && (
          <Link to='/allProducts' className="w-full  cursor-pointer">
            See {advertises?.length} Car
          </Link>
        )}
      </section>
    </div>
  );
};

export default Advertisement;
