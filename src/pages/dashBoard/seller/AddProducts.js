import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../firebase/AuthProvider";
import useRoleCheck from "../../../hooks/useRoleCheck";

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [roleCheck] = useRoleCheck(user?.email);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addProducts = (data) => {
    // console.log(data);
    const name = data.name;
    const img = data.img;
    const price = data.reselPrice;
    const discount = data.discount;

    const location = data.location;
    const mobile = data.mobile;
    const used = data.usedTime;
    const category = data?.category;
    const descriptions = data.descriptions;

    const products = {
      name,
      category,
      img,
      email: user?.email,
      seller: user?.displayName,
      posted: new Date().toLocaleDateString(),
      price,
      descriptions,
      discount,
      location,
      mobile,
      used,
      time: new Date().toLocaleDateString(),
    };

    if (roleCheck === "seller") {
      fetch(
        `https://used-cars-project-a88b9.web.app/products?email=${user.email}&category=${category}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(products),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          fetch(
            `https://used-cars-project-a88b9.web.app/updateCategory?category=${category}`,
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(category),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast.success("Added products");
            });
        });
    } else {
      navigate("/signup");
    }

    // console.log(products);
  };

  //   const useCategory=name =>{

  //   const [gotcategory,setCategory]=useState({})
  //   useEffect(() => {
  //     axios.get(`https://used-cars-project-a88b9.web.app/productsCate?name=${name}`).then((data) => {
  //       //   console.log(data.data);
  //       setCategory(data.data)

  //     });
  //   }, [name])
  //   return gotcategory
  // }

  return (
    <div className="max-w-lg mx-auto my-5 rounded">
      <h1> Add Your Products </h1>

      <form onSubmit={handleSubmit(addProducts)} className="">
        {/* <Header /> */}

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text-alt">Products Name</span>
          </label>
          <input
            {...register("name", { required: "Fill up ,please" })}
            aria-invalid={errors.name ? "true" : "false"}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          {errors.name && (
            <p className="text-red-400 text-sm" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text-alt">Photo Url</span>
          </label>
          <input
            {...register("img", { required: "img is Required" })}
            aria-invalid={errors.img ? "true" : "false"}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          {errors.img && (
            <p className="text-red-400 text-sm" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>

        <div className="grid-cols-2  py-5">
          <input
            {...register("reselPrice", { required: "reselPrice is Required" })}
            aria-invalid={errors.reselPrice ? "true" : "false"}
            type="text"
            placeholder="Price"
            className="input my-2 mx-1"
          />
          <input
            {...register("discount", { required: "discount is Required" })}
            aria-invalid={errors.discount ? "true" : "false"}
            type="text"
            placeholder="Discount Price"
            className="input my-2 mx-1"
          />
          <input
            {...register("usedTime", { required: "usedTime is Required" })}
            aria-invalid={errors.usedTime ? "true" : "false"}
            type="text"
            placeholder="Used Timed"
            className="input my-2 mx-1"
          />

          <input
            {...register("mobile", { required: "mobile is Required" })}
            aria-invalid={errors.mobile ? "true" : "false"}
            type="text"
            placeholder="Your Mobile"
            className="input my-2 mx-1"
          />
          <input
            {...register("descriptions", {
              required: "descriptions is Required",
            })}
            aria-invalid={errors.descriptions ? "true" : "false"}
            type="text"
            placeholder="descriptions"
            className="input my-2 mx-1"
          />

          {errors.name && (
            <p className="text-red-400 text-sm" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>

        <select
          {...register("location", { required: true })}
          className="w-full py-3 my-2"
        >
          <option value="Dhaka">Dhaka</option>
          <option value="Chattagrame">Chattagrame</option>

          <option value="Maijdee">Maijdee</option>
        </select>

        <select
          {...register("category", { required: true })}
          className="w-full py-3 my-2"
        >
          <option value="Microbus">Microbus</option>
          <option value="Used Luxury Cars">Used Luxury Cars</option>
          <option value="Electric Cars">Electric Cars</option>
        </select>

        <input
          type="submit"
          value="Log In"
          className="btn btn-active btn-primary w-full my-5"
        />
      </form>
    </div>
  );
};

export default AddProducts;