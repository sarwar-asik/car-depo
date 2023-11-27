import React from "react";

import Advertisement from "../advertise/Advertisement";
import Banner from "../banner/Banner";
import Categories from "../categories/Categories";
import Hero1 from "../hero1/Hero1";
import ProductsGallery from "../gallery/ProductsGallery";
import Contacts from "../contact/Contact";
import ServiceHelo from "../hero/ServiceHelo";


const Home = () => {


  return (
    <div >
      <Banner />
      <Categories />

      <ServiceHelo/>
      <Advertisement />
      <ProductsGallery/>
     <Hero1></Hero1>
      <Contacts/>
    </div>
  );
};

export default Home;
