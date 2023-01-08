import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../firebase/AuthProvider";
import useRoleCheck from "../../../hooks/useRoleCheck";
import RouteBanner from "../../../shared/routeBanners/RouteBanner";

const AddCategories = () => {
  const { theme } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext);

  const [roleCheck] = useRoleCheck(user?.email);

  const navigate = useNavigate();

  console.log("role is ......", roleCheck);
  const addCategories = (event) => {
    // toast('add')
    const categories = {
      name: event.name,
      img: event.img,
      options: event.options,
    };
    console.log(categories);
    if (roleCheck === "Admin") {
      fetch(`https://sh-server-site.vercel.app/category?email=${user?.email}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(categories),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("added microbus");
          reset();
        });
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="container mx-auto my-5 rounded">
      <RouteBanner
        positionName={[
          { no: "Home", to: "/" },
          { no: "Dashboard", to: "/dashboard" },
          { no: "Admin", to: "/profile" },
          { no: "Add Categories", to: "/Addcategories" },
        ]}
      ></RouteBanner>
      <h1 className="text-center text-4xl font-serif font-bold  mt-10 mb-5">
        {" "}
        Add a Categories{" "}
      </h1>
      <form
        onSubmit={handleSubmit(addCategories)}
        className=" px-5 max-w-lg mx-auto"
      >
        {/* <Header /> */}

        <div className="form-control w-full my-3 ">
          <label className="label">
            <span
              className={`text-2xl normal ${
                theme ? "textColorHover1" : "textColorHover2"
              }`}
            >
              Category Name
            </span>
          </label>
          <input
            {...register("name")}
            aria-invalid={errors.name ? "true" : "false"}
            type="text"
            placeholder="Type here"
            className="py-3 outline-none bg-slate-300 px-3 font-mono text-2xl border-none text- w-full "
          />
          {errors.name && (
            <p className="text-red-400 text-sm" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full my-3 ">
          <label className="label">
            <span
              className={`text-2xl normal ${
                theme ? "textColorHover1" : "textColorHover2"
              }`}
            >
              Category Photo
            </span>
          </label>
          <input
            {...register("img")}
            aria-invalid={errors.img ? "true" : "false"}
            type="text"
            placeholder="Type here"
            className="py-3 outline-none bg-slate-300 px-3 font-mono text-2xl border-none text- w-full "
          />
          {errors.img && (
            <p className="text-red-400 text-sm" role="alert">
              {errors.img?.message}
            </p>
          )}
        </div>

        <select
          {...register("options", { required: true })}
          className="py-3 outline-none bg-slate-300 px-3 font-mono text-2xl border-none text- w-full "
        >
          <option value="buyer">Buyers</option>
          <option value="seller">Seller</option>
        </select>

        <input
          type="submit"
          value="Add Categories"
          className="btn1 py-3 font-bold text-2xl w-full my-5"
        />
      </form>
    </div>
  );
};

export default AddCategories;
