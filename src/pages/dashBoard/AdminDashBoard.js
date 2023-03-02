import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashBoard = () => {
  const itemData = [
    { name: "Categories", path: "/adminDash/categories" },
    { name: "Products", path: "/adminDash/products" },
    { name: "All User", path: "/adminDash/categories" },
    { name: "Seller", path: "/adminDash/products" },
    { name: "Our Sell", path: "/adminDash/categories" },
    { name: "Document", path: "/adminDash/products" },
    { name: "Sold ", path: "/adminDash/categories" },
    { name: "All User", path: "/adminDash/categories" },
    { name: "Seller", path: "/adminDash/products" },
    { name: "Our Sell", path: "/adminDash/categories" },
    { name: "Document", path: "/adminDash/products" },
    { name: "Sold ", path: "/adminDash/categories" },
    { name: "Document", path: "/adminDash/products" },
    { name: "Sold ", path: "/adminDash/categories" },
    { name: "Document", path: "/adminDash/products" },
    { name: "Sold ", path: "/adminDash/categories" },
    { name: "Document", path: "/adminDash/products" },
    { name: "Sold ", path: "/adminDash/categories" },
  ];
  const [close, setClose] = useState(true);

  return (
    <main className="block lg:flex  gap-3 justify-between !relative ">
      {close ? (
        <svg
          onClick={() => setClose(false)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      ) : (
        <svg
          onClick={() => setClose(true)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
      {close && (
        <section
          className={`flex flex-col gap-7 py-8 text-slate-700 font-semibold px-3 mt-5  ${
            close ? "lg:sticky left-1 lg:w-[25%] mx-auto  overflow-auto max-h-[100vh]" : "hidden"
          }`}
        >
          {itemData?.map((item) => {
            return <Link to={item.path}>{item?.name}</Link>;
          })}
        </section>
      )}
      <section
        className={`pr-5 pl-2 mt-3 mx-auto overflow-y-scroll   h-screen ${
          close ? "lg:sticky right-0 lg:w-[75%]" : "lg:w-[100%]"
        }`}
      >
        <Outlet></Outlet>
      </section>
    </main>
  );
};

export default AdminDashBoard;
