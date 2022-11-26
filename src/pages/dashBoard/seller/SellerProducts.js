import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../firebase/AuthProvider";
import Loader from "../../../loader/Loader";

const SellerProducts = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  // console.log(user.email);

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
        `http://localhost:3008/deleteproducts/${product._id}?email=${user?.email}`,
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
