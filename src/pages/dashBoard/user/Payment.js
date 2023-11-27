import { useLoaderData } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import RouteBanner from "../../../shared/routeBanners/RouteBanner";

const Payment = () => {
  const order = useLoaderData();
  //   console.log(order);
  const { price, name,img,  product } = order;
  const stripePromise = loadStripe(process.env.REACT_APP_STRIP_PK);

  return (
    <div className="text-center">
      <RouteBanner
        positionName={[
          { no: "Home", to: "/" },
          { no: "DashBoard", to: "/dashboard" },
          { no: "Buyer", to: "/profile" },
          { no: "Payment", to: `/` },
        ]}
      ></RouteBanner>

<main className=" lg:flex lg:justify-center sm:block md:block">
<div className="card w-96 my-6 mx-auto shadow-xl image-full ">
          <figure>
            <img src={img} alt="img" />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl font-bold font-serif">{product}</h2>
            <p className="text-xl font-semibold">Seller : {name}</p>
            <div className="card-actions justify-end">
              <button className="btn1 py-3 px-2 text-xl font-mono">${price}</button>
            </div>
          </div>
        </div>
        <div className="w-96 my-6 py-24 shadow-2xl px-5 rounded-md  mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      </div>
</main>
      
    </div>
  );
};

export default Payment;
