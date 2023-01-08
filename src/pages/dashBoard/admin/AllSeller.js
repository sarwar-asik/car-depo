import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../firebase/AuthProvider";
import Loader from "../../../loader/Loader";
import RouteBanner from "../../../shared/routeBanners/RouteBanner";

const AllSeller = () => {
  const { user,theme } = useContext(AuthContext);

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
    <div className={` ${theme ? "" : "text-slate-600 "}`}>
      {isLoading && <Loader />}
      <RouteBanner
        positionName={[
          { no: "Home",to: "/"},
          { no: "DashBoard", to: "/dashboard" },
          { no: "Admin", to: "/profile"},
          { no: "All Seller", to: "/allseller" },
        ]}
      ></RouteBanner>
      <h1 className="text-center text-4xl font-serif font-bold  mt-10 mb-5"> Total Seller </h1>

      <div className="overflow-x-auto mx-auto max-w-[80%]">
        <table className="table w-full text-xl font-mono">
          <thead>
            <tr className="text-5xl">
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
                        className="bg-red-500 text-white  px-2 py-1 rounded-[8px] "
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      {sell?.status === "verified" ? (
                        <h1 className="px-1 py-1 text-white bg-info"> Verified </h1>
                      ) : (
                        <h1
                          onClick={() => verifySeller(sell)}
                          className="btn1 px-1 py-1 hover:bg-info"
                        >
                          Verify
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
