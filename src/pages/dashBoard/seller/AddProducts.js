import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../firebase/AuthProvider";
import useRoleCheck from "../../../hooks/useRoleCheck";
import RouteBanner from "../../../shared/routeBanners/RouteBanner";

const AddProducts = () => {
  const { user ,theme} = useContext(AuthContext);
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
    <div className="container mx-auto my-5 rounded">
       <RouteBanner
        positionName={[
          { no: "Home", to: "/" },
          { no: "DashBoard", to: "/dashboard" },
          { no: "Seller", to: "/profile"},
          { no: "Add Products", to: "/addproducts" },
        ]}
      ></RouteBanner>
      <h1 className="text-center text-4xl font-serif font-bold  mt-10 mb-5"> Add Your Products </h1>

      <form onSubmit={handleSubmit(addProducts)} className=" px-5 max-w-[80%] mx-auto">
        {/* <Header /> */}

        <div className="form-control w-full ">
          <label className="label">
            <span  className={`text-2xl normal ${
                theme ? "textColorHover1" : "textColorHover2"
              }`}>Products Name</span>
          </label>
          <input
            {...register("name", { required: "Fill up ,please" })}
            aria-invalid={errors.name ? "true" : "false"}
            type="text"
            placeholder="Product Name"
            className="py-3 outline-none bg-slate-300 px-3 font-mono text-2xl border-none text- w-full "
          />
          {errors.name && (
            <p className="text-red-400 text-sm" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span  className={`text-2xl normal ${
                theme ? "textColorHover1" : "textColorHover2"
              }`}>Photo Url</span>
          </label>
          <input
            {...register("img", { required: "img is Required" })}
            aria-invalid={errors.img ? "true" : "false"}
            type="url"
            placeholder="Paste URL"
            className="py-3 outline-none bg-slate-300 px-3 font-mono text-2xl border-none text- w-full "
          />
          {errors.img && (
            <p className="text-red-400 text-sm" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2 py-5">
          <input
            {...register("reselPrice", { required: "reselPrice is Required" })}
            aria-invalid={errors.reselPrice ? "true" : "false"}
            type="text"
            placeholder="Price"
            className="py-2 outline-none bg-slate-300 pl-1 font-mono  border-none"
          />
          <input
            {...register("discount", { required: "discount is Required" })}
            aria-invalid={errors.discount ? "true" : "false"}
            type="text"
            placeholder="Discount Price"
            className="py-2 outline-none bg-slate-300 pl-1 font-mono border-none"
          />
          <input
            {...register("usedTime", { required: "usedTime is Required" })}
            aria-invalid={errors.usedTime ? "true" : "false"}
            type="text"
            placeholder="Used Timed"
            className="py-2 outline-none bg-slate-300 pl-1 font-mono  border-none"
          />

          <input
            {...register("mobile", { required: "mobile is Required" })}
            aria-invalid={errors.mobile ? "true" : "false"}
            type="text"
            placeholder="Your Mobile"
            className="py-2 outline-none bg-slate-300 pl-1 font-mono  border-none"
          />
          <input
            {...register("descriptions", {
              required: "descriptions is Required",
            })}
            aria-invalid={errors.descriptions ? "true" : "false"}
            type="text"
            placeholder="descriptions"
            className="py-2 outline-none bg-slate-300 pl-1 font-mono  border-none"
          />
          
          <select
            {...register("condition", { required: true })}
            className="py-2 outline-none bg-slate-300 pl-1 font-mono  border-none"
          >
            <option value="Fresh">Condition</option>
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

        <label htmlFor=""  className={`text-2xl normal ${
                theme ? "textColorHover1" : "textColorHover2"
              }`}>
          Location
        </label>
        <select
          {...register("location", { required: true })}
          className="py-3 outline-none bg-slate-300 px-3 font-mono text-2xl border-none text- w-full "
        >
          <option value="Dhaka">Dhaka</option>
          <option value="Chattagrame">Chattagrame</option>

          <option value="Maijdee">Maijdee</option>
        </select>

        <label htmlFor=""  className={`text-2xl normal ${
                theme ? "textColorHover1" : "textColorHover2"
              }`}>
          Category
        </label>
        <select
          {...register("category", { required: true })}
          className="py-3 outline-none bg-slate-300 px-3 font-mono text-2xl border-none text- w-full "
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
          className="btn1 py-3 font-bold text-2xl w-full my-5"
        />
      </form>
    </div>
  );
};

export default AddProducts;
