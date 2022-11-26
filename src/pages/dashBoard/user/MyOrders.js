import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../firebase/AuthProvider";
import Loader from "../../../loader/Loader";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  //   console.log(user.email);
  useEffect(() => {
    axios
      .get(`https://sh-server-site.vercel.app/orders/${user?.email}`)
      .then((data) => {
        //   console.log(data.data);
        setOrders(data.data);
        setLoading(true);
      });
  }, [user?.email]);

  console.log(orders);

  return (
    <div>
      <h1 className="text-center text-3xl my-3 ">
        {" "}
        Your Orders {orders.length}
      </h1>
      {loading || <Loader />}
      <div className="overflow-x-auto mx-auto max-w-[80%]">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Pay</th>
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
                        className="btn btn-outline btn-info"
                      >
                        {" "}
                        Pay{" "}
                      </Link>
                    )}
                    {order?.price && order?.paid && (
                      <span className=" bg-green-500 text-white font-medium rounded p-2 ">Paid</span>
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

export default MyOrders;
