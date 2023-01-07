import React from "react";
import { useReducer } from "react";

const PractiseModules = () => {
  const initialState = 2;

  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + action.payload;
    } else if (action.type === "DECREMENT") {
      return state - 1;
    } else {
      return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="my-[50px]">
      <h1 className="text-center font-bold  text-3xl "> Practise Modules </h1>

      <h1 className="text-center font-bold  text-2xl"> state : {state} </h1>

      <div className="text-center  flex flex-col gap-[20px] my-5">
        <button
          onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}
          className="p-[20px] btn btn-info w-[50%] mx-auto"
        >
          Increament
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT", data: 5 })}
          className="p-[20px] btn btn-error w-[50%] mx-auto"
        >
          Decrecreament
        </button>
      </div>
    </div>
  );
};

export default PractiseModules;
