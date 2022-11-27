import React from "react";
import Advertisement from "../advertise/Advertisement";
import Banner from "../banner/Banner";
import Categories from "../categories/Categories";

const Home = () => {
  return (
    <div>
        <Banner/>
      <Categories />
      <Advertisement />
    </div>
  );
};

export default Home;
