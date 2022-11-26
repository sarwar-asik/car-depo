import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../firebase/AuthProvider";
import Loader from "../../../loader/Loader";

const AllSeller = () => {
  const { user } = useContext(AuthContext);

  const {
    data: seller = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["seller"],
    queryFn: () =>
      fetch(`https://sh-server-site.vercel.app/allseller?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => data),
  });

  //   console.log(seller);
  const deleteUser = (seller) => {
    toast(seller?.name);
  };

  return (
    <div className="max-w-[80%] mx-auto">
      {isLoading && <Loader />}
      <h1 className="text-center text-3xl "> Total Seller </h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {seller?.length &&
              seller?.map((sell, i) => {
                return (
                  <tr>
                    <th>{i + 1}</th>
                    <td>{sell.name}</td>
                    <td>{sell.email}</td>
                    <td>
                      <button
                        onClick={() => deleteUser(sell)}
                        className="bg-red-500 text-white  p-2 rounded-[20%]"
                      >
                        {" "}
                        Delete{" "}
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

export default AllSeller;
