import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../firebase/AuthProvider";
import useRoleCheck from "../../hooks/useRoleCheck";
import RouteBanner from "../../shared/routeBanners/RouteBanner";
import BookModal from "../bookModal/BookModal";

const Products = () => {
  const { user, theme } = useContext(AuthContext);
  const navigate = useNavigate();
  const [roleCheck] = useRoleCheck(user?.email);
  // console.log(roleCheck);
  const products = useLoaderData();
  // console.log(products);
  const [productInfo, setproducts] = useState({});
  const [isModal, setModal] = useState(true);
  console.log("products",productInfo?.name);

  const productData = (data) => {
    if (user?.email) {
      setproducts(data);
    } else {
      navigate("/login");
    }
    // console.log(data);
  };

  const [users, setusers] = useState([]);
  useEffect(() => {
    axios.get(`https://sh-server-site.vercel.app/users`).then((data) => {
      //   console.log(data.data);
      setusers(data.data);
    });
  }, []);

  // console.log(users);
  // console.log(products);

  // console.log();
  const ReportAdmin = (info) => {
    if (user?.email) {
      info["buyer"] = user?.email;
      fetch(`https://sh-server-site.vercel.app/reportadmin`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          toast.success(`Reported Admin ${info?.name}`);
        });
    } else {
      navigate("/login");
    }
  };
  const detailHandler = (carDetails) => {
    navigate(`/productDetails/${carDetails?._id}`, { state: carDetails });
    // console.log(carDetails,"from btn");
  };

  // console.log(products);

  // const types = [{e:"Excelent"},{e:"Good"},{e:"Better"}]

  // const rests =  types.filter(ty => ty.e !== 'Excelent')
  // console.log(rests);

  return (
    <div className={theme ? "w-[80%] mx-auto   " : " w-[80%] mx-auto "}>
      <RouteBanner
        positionName={[
          { no: "Home", to: "/" },
          { no: "Categories", to: "/categories" },
          { no: products[0]?.category },
        ]}
      ></RouteBanner>
      <h1
        className={` text-[40px] mb-7 font-bold font-serif my-5 text-center ${
          theme ? "textColorHover1" : "textColorHover2"
        }`}
      >
        {products[0]?.category} Products
      </h1>
      <div className="grid lg:grid-cols-3 gap-3 my-5 sm:grid-cols-1 md:grid-cols-2 ">
        {products.map((prod) => {
          const getUser = users.find((user) => user.email === prod.email);
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
          } = prod;

          return (
            <>
              <div className="card shadow-xl">
                <figure>
                  <img
                    src={img}
                    alt="Album"
                    className="w-[380px] h-[320px] rounded-sm"
                  />
                </figure>
                <div className="card-body py-4">
                  <h2 className="text-4xl font-bold font-serif">{name}</h2>
                  <p className="text-[16px] font-medium"> {descriptions} </p>

                  <div className="flex justify-between gap-3">
                    {/* {getUser?.status === "verified" && (
                          <span className="indicator-item badge badge-primary">
                            verified
                          </span>
                        )} */}
                  </div>

                  <label
                    onClick={() => productData(prod)}
                    htmlFor={productInfo?._id}
                    className="btn1 py-2 font-bold text-2xl w-full my-3 text-center"
                  >
                    Book Now
                  </label>
                  <div className="flex justify-between font-mono mt-1">
                    <button
                      onClick={() => ReportAdmin(prod)}
                      className="shadow-xl hover:bg-error hover:text-white rounded-[5px] py-3 px-1"
                    >
                      Report Admin
                    </button>
                    <button
                      onClick={() => detailHandler(prod)}
                      className="shadow-xl bg-primary text-white rounded-sm py-3 px-1"
                    >
                      Full Details
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {isModal && <BookModal productInfo={productInfo} setModal={setModal} />}
    </div>
  );
};

export default Products;
