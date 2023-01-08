import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../firebase/AuthProvider";
import Loader from "../../../loader/Loader";
import RouteBanner from "../../../shared/routeBanners/RouteBanner";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(false);
  const { user, theme } = useContext(AuthContext);

  //   console.log(user.email);
  useEffect(() => {
    axios
      .get(`https://sh-server-site.vercel.app/orders/${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((data) => {
        //   console.log(data.data);
        setOrders(data.data);
        setLoading(true);
      });
  }, [user?.email]);

  console.log(orders);
  const handleDelete = (name) => {
    toast(` Deleting....`);
  };

  return (
    <div className={` ${theme ? "" : "text-slate-600 "}`}>
      <RouteBanner
        positionName={[
          { no: "Home", to: "/" },
          { no: "DashBoard", to: "/dashboard" },
          { no: "User", to: "/profile" },
          { no: "My Orders", to: "/myorders" },
        ]}
      ></RouteBanner>
      <h1 className="text-center text-4xl font-serif font-bold  mt-10 mb-5 ">
        Your Booked  [ {orders.length} ] Cars
      </h1>
      {loading || <Loader />}
      <div className="overflow-x-auto mx-auto max-w-[80%]">
        <table className="table w-full text-xl font-mono">
          <thead>
            <tr className="text-3xl">
              <th>No</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{order.name}</td>
                  <td>
                    <figure>
                      <img
                        src={order?.img}
                        className="mask mask-circle max-w-[80px] h-[100px]"
                        alt="img"
                      />
                    </figure>
                  </td>
                  <td>{order.price}</td>
                  <td>
                    {order?.price && !order?.paid && (
                      <Link
                        to={`/payment/${order?._id}`}
                        className="btn1 px-1 py-1 hover:bg-info"
                      >
                        Pay
                      </Link>
                    )}
                    {order?.price && order?.paid && (
                      <span className=" bg-green-500 text-white font-medium rounded p-2 ">
                        Paid
                      </span>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(order)}
                      className="btn btn-outline btn-error btn-sm"
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

export default MyOrders;
