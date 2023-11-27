import React from "react";
import "../../shared/custom.css";
import { toast } from "react-toastify";

const Contacts = () => {
  const contactHandler = (event) => {
    event.preventDefault(); 
    toast.success("Sent your Message");
    const form = event.target;
    form.reset();
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="1200"
      className="py-[130px] bgThem1 rounded hover:shadow-xl my-5"
    >
      <h1 className=" text-5xl text-center text-gray-50 font-bold font-serif">
        Contact Us{" "}
      </h1>
      <p className="text-center text-slate-300 text-xl font-mono mt-2 mb-7">
        {" "}
        You can connect with us for any query . Write your message here .{" "}
      </p>
      <div className="text-center font-semibold">
        <form onSubmit={contactHandler} action="">
          <input
            type="text"
            required
            placeholder="Write here"
            className="h-[48px] input-[white] rounded-xl w-full lg:rounded-r-none max-w-xs border-r-0 px-3 input input-bordered "
          />
          <button
            type="submit"
            className="bg-slate-700 h-[48px] text-slate-100 rounded  px-5 lg:rounded-r-md lg:rounded-l-none"
          >
            Message{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
