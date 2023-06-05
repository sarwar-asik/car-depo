import React from "react";
import LoaderImg from "../assets/loaderSquare.gif"

const Loader = () => {
  return (
    <div className="my-5 p-1 text-center mx-auto">
      <div role="status">
       <img src={LoaderImg} className="h-[190px] w-[190px] mx-auto" alt="" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
