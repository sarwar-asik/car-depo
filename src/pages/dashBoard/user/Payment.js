import { useLoaderData } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const order = useLoaderData();
//   console.log(order);
  const { price, name, product } = order;
  const stripePromise = loadStripe(process.env.REACT_APP_STRIP_PK);

  return (
    <div className="text-center">
      <h1 className="text-2xl my-5 ">
        Payment <span className="font-bold"> ${price} </span>for{" "}
        <span className="font-bold"> {product} </span>
      </h1>
     
      <div className="w-96 my-6 py-24 shadow-lg px-5 rounded-md  mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      </div>
    </div>
    
  );
};

export default Payment;
