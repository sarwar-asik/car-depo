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
      fetch(
        `https://sh-server-site.vercel.app/allseller?email=${user?.email}&type=seller`
      )
        .then((res) => res.json())
        .then((data) => data),
  });

  //   console.log(seller);
  const deleteUser = (seller) => {
    toast(seller?.name);
    const isDelete = window.confirm(`Delete ${seller?.name}`);
    if (isDelete) {
      fetch("https://sh-server-site.vercel.app/deleteUser?type=seller", {
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

  const verifySeller = (seller) => {
    fetch(`https://sh-server-site.vercel.app/verify?email=${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(seller),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(`verified ${seller?.name}`);
        refetch();
      });
  };

  return (
    <div className="max-w-[80%] mx-auto">
      {isLoading && <Loader />}
      <h1 className="text-center text-3xl  py-5"> Total Seller </h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
              <th>Verify</th>
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
                    <td>
                      {sell?.status === "verified" ? (
                        <h1 className="btn btn-sm btn-success"> Verified </h1>
                      ) : (
                        <h1
                          onClick={() => verifySeller(sell)}
                          className="btn btn-sm btn-info "
                        >
                          {" "}
                          Verify{" "}
                        </h1>
                      )}
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
