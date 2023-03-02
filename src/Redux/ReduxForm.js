import React from "react";
import { useReducer } from "react";
import { initialState, reducer } from "./state/FormReducer";

const ReduxForm = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <form
        onSubmit={handleForm}
        action=""
        className="mt-10 px-3 shadow-xl w-[70%] mx-auto text-2xl font-serif font-semibold"
      >
        <div className="">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="firstName"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            className="w-full p-5 bg-slate-300 rounded-md mt-2 mb-4 font-semibold outline-none"
            placeholder="Type here"
          />
        </div>
        <div className="">
          <label htmlFor="">Last Name</label>
          <input
          onBlur={(e) =>
            dispatch({
              type: "INPUT",
              payload: { name: e.target.name, value: e.target.value },
            })
          }
            type="text"
            name="lastName"
            className="w-full  outline-none p-5 bg-slate-300 rounded-md mt-2 mb-4 font-semibold"
            placeholder="Type here"
          />
        </div>
        <div className="">
          <label htmlFor="">Email</label>
          <input
          onBlur={(e) =>
            dispatch({
              type: "INPUT",
              payload: { name: e.target.name, value: e.target.value },
            })
          }
            type="email"
            name="email"
            className="w-full outline-none  p-5 bg-slate-300 rounded-md mt-2 mb-4 font-semibold"
            placeholder="Type here"
          />
          <span className="h-5 text-sm font-medium text-green-600"></span>
        </div>
        <input
          type="submit"
          name="firstName"
          className=" p-4 bg-[#00AE87] text-white rounded-md mt-5 mb-4 text-xl hover:bg-slate-300 hover:text-[#00AE87] hover:shadow-2xl font-semibold delay-[100ms] ease-in-out"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default ReduxForm;
