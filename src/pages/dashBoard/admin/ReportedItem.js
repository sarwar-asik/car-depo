// import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
// import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../firebase/AuthProvider";
import RouteBanner from "../../../shared/routeBanners/RouteBanner";

const ReportedItem = () => {
  //   const reports = useLoaderData();
  const { user,theme } = useContext(AuthContext);

  const { data: reports = [], refetch } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await fetch(`https://sh-server-site.vercel.app/getreport`);
      const data = await res.json();
      return data;
    },
  });

  console.log(reports);
  const deleteReport = (report) => {
    fetch(
      `https://sh-server-site.vercel.app/deletereport/${report?._id}?email=${user?.email}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(report),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast(`Deleted ${report?.name}`);
          refetch();
        }
      });
  };

  return (
    <div className={` ${theme ? "" : "text-slate-600 "}`}>
        <RouteBanner
        positionName={[
          { no: "Home", to: "/" },
          { no: "DashBoard", to: "/dashboard" },
          { no: "Admin", to: "/profile"},
          { no: "Reoprted Cars", to: "/report" },
        ]}
      ></RouteBanner>
        <h1 className="text-center text-4xl font-serif font-bold  mt-10 mb-5"> Reported Cars </h1>
      <div className="overflow-x-auto mx-auto max-w-[80%]">
      
        <table className="table w-full text-xl font-mono">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>price</th>
              <th>Reporter</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {reports?.map((report, i) => {
              return (
                <tr>
                  <th>{i}</th>
                  <td>{report.name}</td>
                  <td>{report.price}</td>
                  <td>{report.buyer}</td>
                  <td>
                    <button
                      onClick={() => deleteReport(report)}
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

export default ReportedItem;
