import axios from "axios";
import React, { useEffect } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import Loader from "../../loader/Loader";
import { categoriesActionType } from "../../Redux/state/actionType";
import {
  categoriesReducer,
  initialState,
} from "../../Redux/state/categoryState/CategoryReducer";
import "../../shared/custom.css";

const Categories = () => {
  const { theme } = useContext(AuthContext);

  // from redux   ////
  const [state, dispatch] = useReducer(categoriesReducer, initialState);
  const { categories } = state;
  
  console.log("state", state);
  useEffect(() => {
    dispatch({ type: categoriesActionType.FETCHING_START });
    axios
      .get(`https://sh-server-site.vercel.app/categories`)
      .then((data) => {
        // setCategories(data.data);
        dispatch({
          type: categoriesActionType.FETCHING_SUCCESS,
          payload: data.data,
        });
      })
      .catch(() => {
        dispatch({ type: categoriesActionType.FETCHING_ERROR });
      });
  }, []);

  return (
    <div className={` my-5 `}>
      <h1 className="text-[3rem] text-center py-5 font-bold mt-10 font-serif">
        Products Categories
      </h1>
      <p
        className={` text-lg font-semibold text-center ${
          theme ? "textColorHover1" : "textColorHover2"
        }`}
      >
        {" "}
        We are servicing 3 Categories Products to customers with garranty and
        warranty{" "}
      </p>
      {state?.loading && <Loader />}
      <div
        className="grid sm:grid-cols-1
    md:grid-cols-2 gap-4  lg:grid-cols-3 "
      >
        {categories?.map((category) => {
          return (
            <Link
              to={`/products/${category._id}`}
              key={category?._id}
              className="shadow-2xl hover:-translate-y-9 duration-[700ms] rounded-[10px]  ease-in-out mt-10 "
            >
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1200"
                className="card mx-auto"
              >
                <figure>
                  <img
                    className=" h-[310px] opacity-[0.8]  hover:opacity-[1] duration-150  rounded-[0pxinde] w-full"
                    src={category.img}
                    alt=""
                  />
                </figure>
                <div className="card-body ">
                  <h2 className="text-2xl font-mono font-semibold text-center">
                    {category.name}
                  </h2>
                  <button className="btn1 py-2 font-semibold">Details</button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
