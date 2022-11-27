import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../firebase/AuthProvider";
import Loader from "../../../loader/Loader";

const SellerProducts = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  // console.log(user.email);

  // const [prods, setProd] = useState(null);
  // console.log(prods);
  
  // const [advertisess, setAdvertise] = useState([]);
  // useEffect(() => {
  //   axios.get(`http://localhost:3008/advertise`).then((data) => {
  //     //   console.log(data.data);
  //     setAdvertise(data.data);
  //   });
  // }, []);


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
    // const getProduct = advertisess.find(single =>single.name ===product?.name)
    //     setProd(getProduct)

    // console.log(product);
    fetch("http://localhost:3008/addAdvertisement", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast.success(`advertised ${product.name}`);
      });
  };

  return (
    <div>
      <h1 className="text-2xl text-center my-5 "> Your Products</h1>

      <h1>{isLoading && <Loader />}</h1>

      <div className="overflow-x-auto mx-auto max-w-[80%]">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Status</th>
              <th>Price</th>
              <th>Advertise</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myProducts?.map((product, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{product.name}</td>
                  <td>.....</td>
                  <td>{product.price}</td>
                  <td>
                    <button
                      onClick={() => deleteProduct(product)}
                      className="btn btn-error btn-outline"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    {/* {prods ? (
                      <p>Advertised</p>
                    ) : (
                      <button
                        onClick={() => advertise(product)}
                        className="btn btn-sm btn-accent"
                      >
                        Advertise
                      </button>
                    )} */}
                     <button
                        onClick={() => advertise(product)}
                        className="btn btn-sm btn-accent"
                      >
                        Advertise
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
