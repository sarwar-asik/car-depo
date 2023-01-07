import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../firebase/AuthProvider";

const ReportedItem = () => {
  //   const reports = useLoaderData();
  const { user } = useContext(AuthContext);

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
    <div className="max-w-[80%] mx-auto">
      <div className="overflow-x-auto  ">
        <h1 className="text-3xl text-center my-3"> Report Products</h1>
        <table className="table w-full">
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
                      className="bg-red-500 text-white p-2 btn-sm rounded-3xl"
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
