import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../firebase/AuthProvider";
import Loader from "../../../loader/Loader";

const Allbuyer = () => {
  const { user } = useContext(AuthContext);

  // console.log(user?.email);

  const {
    data: seller = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["seller"],
    queryFn: () =>
      fetch(
        `https://sh-server-site.vercel.app/allseller?email=${user?.email}&type=buyer`
      )
        .then((res) => res.json())
        .then((data) => data),
  });

  //   console.log(seller);
  const deleteUser = (seller) => {
    // toast(seller?.name);
    const isDelete = window.confirm(`Delete ${seller?.name}`);
    if (isDelete) {
      fetch("https://sh-server-site.vercel.app/deleteUser?type=buyer", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(seller),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast(`Deleted ${seller?.name}`);
          refetch();
        });
    }
  };
  return (
    <div className="max-w-[80%] mx-auto">
      {isLoading && <Loader />}
      <h1 className="text-center text-3xl my-3 "> Total Buyer </h1>

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

export default Allbuyer;
