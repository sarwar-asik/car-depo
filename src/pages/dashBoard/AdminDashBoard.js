import React from "react";
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
  return (
    <main className="block lg:flex gap-3 justify-between relative overflow-y-hidden ">
      
      <section className="flex flex-col gap-7 lg:w-[25%] mx-auto overflow-y-sc overflow-auto max-h-[100vh]  py-8 text-slate-700 font-semibold   px-7  mt-[64px] lg:fixed left-0 ">
        {itemData?.map((item) => {
          return <Link to={item.path}>{item?.name}</Link>;
        })}
      </section>
      <section className="pr-5 pl-2 mt-0 lg:w-[75%] mx-auto overflow-y-scroll lg:fixed right-0  h-screen ">
        <Outlet></Outlet>
      </section>
    </main>
  );
};

export default AdminDashBoard;
