import { CardElement, useElements } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {

    const stripe = useState()
    const elements = useElements()
    
    const handleSubmit= async(event)=>{
    event.preventDefault()
    if(!stripe || !elements){
        return 
    }



    }
    return (
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
          disabled={!stripe}
        >
          Pay 
        </button>
      </form>
    );
};

export default CheckoutForm;