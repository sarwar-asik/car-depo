import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import Loader from "../../loader/Loader";
import '../../shared/custom.css'

const Categories = () => {
  const { theme } = useContext(AuthContext);

  const [categories, setCategories] = useState([]);

  const [loading, setlodaing] = useState(false);

  useEffect(() => {
    axios.get(`https://sh-server-site.vercel.app/categories`).then((data) => {
      //   console.log(data.data);
      setCategories(data.data);
      setlodaing(true);
    });
  }, []);

  return (
    <div className={` my-5 ${theme || ""}`}>
      <h1 className="text-3xl text-center py-5 font-bold">
        Products Categories
      </h1>
      {loading || <Loader />}
      <div
        className="grid sm:grid-cols-1
    md:grid-cols-2 gap-4  lg:grid-cols-3 "
      >
        {categories.map((category) => {
          return (
            <Link to={`/products/${category._id}`} className="shadow-2xl hover:-translate-y-9 duration-500 ease-in-out">
              <div className="card  w-[400px] mx-auto">
                <figure>
                  <img
                    className="rounded-[30px] w-[200px] h-60  py-5  opacity-[1] hover:opacity-[0.6] "
                    src={category.img}
                    alt=""
                  />
                </figure>
                <div className="card-body ">
                  <h2 className="text-2xl font-semibold text-center">
                    {category.name}
                  </h2>
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
