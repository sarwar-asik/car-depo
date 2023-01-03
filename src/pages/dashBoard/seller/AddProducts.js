import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../firebase/AuthProvider";
import useRoleCheck from "../../../hooks/useRoleCheck";

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  const allCategories = useLoaderData();

  // console.log(allCategories);

  const [roleCheck] = useRoleCheck(user?.email);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // console.log(oneCategory);

  const [oneCategory, setOneCategory] = useState({});

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
    const condition = data?.condition;

    const getcate = allCategories.find(
      (singCate) => singCate.name === category
    );

    // console.log('full category',getcate);

    const products = {
      name,
      category,
      categoryId: getcate?._id,
      img,
      email: user?.email,
      seller: user?.displayName,
      posted: new Date().toLocaleDateString(),
      price,
      condition,
      descriptions,
      discount,
      location,
      mobile,
      used,
      time: new Date().toLocaleDateString(),
    };

    if (roleCheck === "seller") {
      fetch(`https://sh-server-site.vercel.app/products?email=${user?.email}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(products),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("added Product");
          navigate("/selllerproducts");
          // reset()
        });
    } else {
      navigate("/signup");
    }

    console.log(products);
  };

  return (
    <div className="max-w-lg mx-auto my-5 rounded">
      <h1 className="text-3xl text-center py-3  "> Add Your Products </h1>

      <form onSubmit={handleSubmit(addProducts)} className="">
        {/* <Header /> */}

        <div className="form-control w-full ">
          <label className="label">
            <span className="text-xl font-semibold">Products Name</span>
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
            <span className="text-xl font-semibold">Photo Url</span>
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
          <label htmlFor="" className="mx-3 font-medium">
            Condition
          </label>
          <select
            {...register("condition", { required: true })}
            className=" my-2 py-2 mx-1"
          >
            <option value="Excelent">Excelant</option>
            <option value="Good">Good</option>

            <option value="Fair">Fair</option>
          </select>

          {errors.name && (
            <p className="text-red-400 text-sm" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>

        <label htmlFor="" className="mt-3 font-medium">
          Location
        </label>
        <select
          {...register("location", { required: true })}
          className="w-full py-3 my-2"
        >
          <option value="Dhaka">Dhaka</option>
          <option value="Chattagrame">Chattagrame</option>

          <option value="Maijdee">Maijdee</option>
        </select>

        <label htmlFor="" className="mt-3 font-medium">
          Category
        </label>
        <select
          {...register("category", { required: true })}
          className="w-full py-3 my-2"
        >
          {allCategories.map((singleCategory) => {
            return (
              <>
                <option value={singleCategory?.name}>
                  {singleCategory?.name}
                </option>
              </>
            );
          })}
        </select>

        <input
          type="submit"
          value="Add Product"
          className="btn btn-active btn-primary w-full my-5"
        />
      </form>
    </div>
  );
};

export default AddProducts;
