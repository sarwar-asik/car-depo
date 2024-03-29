import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../firebase/AuthProvider";
import Loader from "../../../loader/Loader";
import RouteBanner from "../../../shared/routeBanners/RouteBanner";

const SellerProducts = () => {
  const { user, theme } = useContext(AuthContext);

  // const navigate = useNavigate();

  // console.log(user.email);

  // const [prods, setProd] = useState(null);
  // console.log(prods);

  const {
    data: myProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myproducts"],
    queryFn: async () => {
      const res = await fetch(
        `https://sh-server-site.vercel.app/myproducts/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const [advertisess, setAdvertise] = useState([]);

  useEffect(() => {
    axios.get(`https://sh-server-site.vercel.app/advertise`).then((data) => {
      //   console.log(data.data);
      setAdvertise(data.data);
      refetch();
    });
  }, []);

  // console.log(advertisess);

  const deleteProduct = (product) => {
    // toast(id);
    const isDelete = window.confirm(`will you remove ${product?.name}`);

    if (isDelete) {
      fetch(
        `https://sh-server-site.vercel.app/deleteproducts/${product._id}?email=${user?.email}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast(`deleted ${product?.name}`);
          refetch();
        });
    }
  };

  // console.log(advertisess);

  const advertise = (product) => {
    // toast(product.name)
    fetch(`https://sh-server-site.vercel.app/addAdvertisement`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("added Product");
      });
  };

  const update = (product) => {
    toast(`Updating ${product.name}`);
  };

  return (
    <div className={` ${theme ? "" : "text-slate-400 "}`}>
       <RouteBanner
        positionName={[
          { no: "Home", to: "/" },
          { no: "DashBoard", to: "/dashboard" },
          { no: "Seller", to: "/profile" },
          { no: "My Products", to: "/selllerproducts" },
        ]}
      ></RouteBanner>
      <h1 className="text-center text-4xl font-serif font-bold  mt-10 mb-5"> Your Products</h1>

      <h1>{isLoading && <Loader />}</h1>

      <div className="overflow-x-auto mx-auto max-w-[80%]">
        <table className="table w-full text-xl font-mono">
          <thead >
            <tr className="text-3xl">
              <th>No</th>
              <th>Name</th>
              <th>Status</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Advertise</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {myProducts?.map((product, index) => {
              // console.log(advertisess);

              const alreadybooked = advertisess.find(
                (adver) => adver.name === product.name
              );

              // console.log(alreadybooked);

              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{product?.name}</td>
                  <td>.....</td>
                  <td>{product?.price}</td>
                  <td>
                    <button
                      onClick={() => deleteProduct(product)}
                      className="btn btn-error btn-sm btn-outline"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    {alreadybooked?.name ? (
                      <button  className=" text-white px-1 py-1 bg-info">
                        Advertised
                      </button>
                    ) : (
                      <button
                        onClick={() => advertise(product)}
                       
                        className="btn1 px-1 py-1 hover:bg-info"
                      >
                        Advertise
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => update(product)}
                      className="btn btn-info btn-sm hover:btn-success btn-outline"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerProducts;
