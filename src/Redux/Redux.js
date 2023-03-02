import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import { toast } from "react-toastify";
import ReduxForm from "./ReduxForm";

const Redux = () => {
  const initialState = 3;

  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + action.payload;
    } else if (action.type === "DECREMENT") {
      return state - action.data;
    } else {
      return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  // start form ///
  const [FirstName, SetFirstName] = useState("");
  const [LastName, SetLastName] = useState("");
  const [Email, SetEmail] = useState("");
  // const [FirstName,SetFirstName] = useState("")
  const handleForm = (e) => {
    e.preventDefault();
    const data = {
      FirstName,
      LastName,
      Email,
    };
    toast(FirstName);
    console.log(data);
  };

  return (
    <div className="my-[50px]">
      <h1 className="text-center font-bold  text-3xl "> Practise Redux </h1>

      <h1 className="text-center font-bold  text-2xl"> state : {state} </h1>

      <div className="text-center  flex flex-co gap-[10px] my-5 ">
        <button
          onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}
          className="p-[20px] btn btn-info text-slate-100 w-[] mx-auto"
        >
          Increament
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT", data: 5 })}
          className="p-[20px] btn btn-error text-slate-100 w-[] mx-auto"
        >
          Decrecreament
        </button>
      </div>

      {/* <form
        onSubmit={handleForm}
        action=""
        className="mt-10 px-3 shadow-xl w-[70%] mx-auto text-2xl font-serif font-semibold"
      >
        <div className="">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="firstName"
            className="w-full p-5 bg-slate-300 rounded-md mt-2 mb-4 font-semibold outline-none"
            onBlur={(e) => SetFirstName(e.target.value)}
            placeholder="Type here"
          />
        </div>
        <div className="">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="w-full  outline-none p-5 bg-slate-300 rounded-md mt-2 mb-4 font-semibold"
            onBlur={(e) => SetLastName(e.target.value)}
            placeholder="Type here"
          />
        </div>
        <div className="">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            onBlur={(e) => SetEmail(e.target.value)}
            className="w-full outline-none  p-5 bg-slate-300 rounded-md mt-2 mb-4 font-semibold"
            placeholder="Type here"
          />
          <span className="h-5 text-sm font-medium text-green-600">
            {Email}
          </span>
        </div>
        <input
          type="submit"
          name="firstName"
          className=" p-4 bg-[#00AE87] text-white rounded-md mt-5 mb-4 text-xl hover:bg-slate-300 hover:text-[#00AE87] hover:shadow-2xl font-semibold delay-[100ms] ease-in-out"
          value="Submit"
        />
      </form> */}
      <ReduxForm></ReduxForm>
    </div>
  );
};

export default Redux;
