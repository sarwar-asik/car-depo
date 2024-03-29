import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../firebase/AuthProvider";
import Loader from "../../../loader/Loader";
import RouteBanner from "../../../shared/routeBanners/RouteBanner";

const Allbuyer = () => {
  const { user ,theme} = useContext(AuthContext);

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
    <div className={` ${theme ? "" : "text-slate-600 "}`}>
      {isLoading && <Loader />}
      <RouteBanner
        positionName={[
          { no: "Home", to: "/" },
          { no: "DashBoard", to: "/dashboard" },
          { no: "Admin", to: "/profile"},
          { no: "All Buyer", to: "/allbuyer" },
        ]}
      ></RouteBanner>
      <h1 className="text-center text-4xl font-serif font-bold  mt-10 mb-5"> Total Buyer </h1>

      <div className="overflow-x-auto mx-auto max-w-[80%]">
        <table className="table w-full text-xl font-mono">
          <thead>
            <tr className="text-5xl">
              <th>No.</th>
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
                        className="bg-red-500 text-white  px-2 py-1 rounded-[8px]"
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

export default Allbuyer;
