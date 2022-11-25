import { useQuery } from "@tanstack/react-query";
import React from "react";

const SellerProducts = () => {
  const { data: myProducts, isLoading } = useQuery({
    queryKey: ["myproducts"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3008/myproducts/seller1@gmail.com`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-2xl text-center my-5 ">
        {" "}
        Your Products {myProducts?.length}
      </h1>

      <div className="overflow-x-auto mx-auto max-w-[80%]">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Status</th>
              <th>Price</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
           {
            myProducts?.map((product,index)=>{
                return<tr>
                <th>{index+1}</th>
                <td>{product.name}</td>
                <td>
                  sold
                </td>
               <td>
               {product.price}
               </td>
                <td>
                    <button className="btn btn-error btn-outline">Delete </button>
                </td>
              </tr>
            })
           }
         
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerProducts;
