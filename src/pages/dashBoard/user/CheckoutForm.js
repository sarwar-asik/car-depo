import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckoutForm = ({ order }) => {
  const { price, name, email, _id } = order;

  // //after server side ///

  const [clientSecret, setClientSecret] = useState("");
  const [success, setsuccess] = useState("");
  const [processing, setprocessing] = useState(false);
  const [transictionId, settransictionId] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`https://sh-server-site.vercel.app/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setsuccess("");
    settransictionId("");
    setprocessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
        name:name,
        about: "posted from checkoutForm",
      };
      fetch(`https://sh-server-site.vercel.app/payment`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setsuccess("Your payment is successfull");
            settransictionId(paymentIntent.id);
            console.log(data);
            toast.success("Payment Success");
          }
        });
    }
    setprocessing(false);
    //   console.log(paymentIntent);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                padding: "10px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          className="btn btn-accent my-8 text-center"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {<h1 className="text-error font-medium"> {cardError}</h1>}
      {}
      {success && (
        <>
          <h1 className="text-green-500  font-medium"> {success} </h1>
          <h1 className="text-blue-500  font-medium">
            TransactionId: {transictionId}{" "}
          </h1>
        </>
      )}
    </>
  );
};

export default CheckoutForm;
