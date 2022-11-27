import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../firebase/AuthProvider";
import useRoleCheck from "../../hooks/useRoleCheck";
import BookModal from "../bookModal/BookModal";

const Products = () => {
  const { user } = useContext(AuthContext);

  const [roleCheck] = useRoleCheck(user?.email);
  // console.log(roleCheck);
  const products = useLoaderData();
  // console.log(products);
  const [productInfo, setproducts] = useState({});
  const [isModal, setModal] = useState(true);

  const productData = (data) => {
    setproducts(data);
    // console.log(data);
  };

  // console.log();
  const ReportAdmin = (info) => {
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
        console.log(data);
        toast.success(`Reported Admin ${info?.name}`);
      });
  };

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-5xl font-bold my-5 text-center"> Our Products</h1>
      <div className="grid lg:grid-cols-2 gap-3 my-5 sm:grid-cols-1 md:grid-cols-2 ">
        {products.map((prod) => {
          return (
            <>
              <div className="card lg:card-side   shadow-xl">
                <figure>
                  <img
                    src={prod.img}
                    alt="Album"
                    className="w-[100%] h-[350px] rounded-sm"
                  />
                </figure>
                <div className="card-body py-4">
                  <h2 className="text-4xl font-bold ">{prod.name}</h2>
                  <p> {prod.descriptions} </p>
                  <h6 className="text-md font-medium">
                    Location : {prod.location}{" "}
                  </h6>

                  <div className="flex justify-between gap-3">
                    <p className="flex flex-col gap-1 text-sm">
                      <h5>Price : {prod.price} </h5>
                      <h5> Contact : {prod.mobile} </h5>
                      <h5>Used{prod.used} </h5>
                      <h5>Posted {prod.time} </h5>
                    </p>

                    <p className="flex flex-col gap-3 font-semibold ">
                      <h5> Offer Price : $5500</h5>
                      <h4> Posted : {prod?.posted}</h4>
                      <h4>Seller :{prod?.seller} </h4>
                    </p>
                  </div>

                  <label
                    onClick={() => productData(prod)}
                    htmlFor="my-modal-6"
                    className="btn btn-outline btn-error"
                  >
                    Book Now
                  </label>
                  {user?.email && (
                    <button
                      onClick={() => ReportAdmin(prod)}
                      className="bg-blue-400 py-2 hover:bg-lime-800 text-zinc-200 "
                    >
                      {" "}
                      Report to Admin
                    </button>
                  )}
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
