import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../loader/Loader";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const [loading,setlodaing]= useState(false)

  useEffect(() => {
    axios.get(`http://localhost:3008/categories`).then((data) => {
      //   console.log(data.data);
      setCategories(data.data);
      setlodaing(true)
    });
  }, []);




  return (
    <div className="my-5">
      
      <h1 className="text-3xl text-center py-5 font-bold">
     
        Total Categories
      </h1>
      {
        loading||<Loader/>
      }
      <div
        className="grid sm:grid-cols-1
    md:grid-cols-2  lg:grid-cols-3 gap-3"
      >
        {categories.map((category) => {
          return (
            <Link to={`/products/${category.name}`}>
              <div className="card shadow-xl w-[400px] mx-auto">
                <figure>
                  <img
                    src={category.img}
                    alt="Shoes"
                    className="max-w-[80%] max-h-60 "
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{category.name}</h2>

                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Products</button>
                  </div>
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
