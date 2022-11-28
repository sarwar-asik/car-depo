import React from "react";
import { Link } from "react-router-dom";
import Advertisement from "../advertise/Advertisement";
import Banner from "../banner/Banner";
import Categories from "../categories/Categories";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />

      <div className="hero my-5">
        <div className="hero-content flex-col gap-3 lg:flex-row">
          <img
            src="https://img.freepik.com/free-photo/side-view-new-car-front-side-with-mirror_23-2148332905.jpg?w=1060&t=st=1669614059~exp=1669614659~hmac=ef2641116def94dddc2a83a35d53fb443b0f2bc3b5286d52ed07cd87751526f8"
            className=" rounded-lg shadow-2xl h-[400px] max-w-[70%]"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Used Cars service </h1>
            <p className="py-6 ">
              We provide Used Cars to our customer . Ours cars are almost brand
              new these used few years . You can order your car by sign in . And
              seller is able to sell his product by create a seller account .
            </p>

            <Link to="/signup" className="btn btn-primary ">
              {" "}
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <Advertisement />
    </div>
  );
};

export default Home;
