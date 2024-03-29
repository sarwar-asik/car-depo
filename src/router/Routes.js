import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddCategories from "../pages/dashBoard/admin/AddCategories";
import AddProducts from "../pages/dashBoard/seller/AddProducts";
import Dashbord from "../pages/dashBoard/Dashbord";
import SellerProducts from "../pages/dashBoard/seller/SellerProducts";
import MyOrders from "../pages/dashBoard/user/MyOrders";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Products from "../pages/products/Products";
import SignIn from "../pages/signin/SignIn";
import Profile from "../profiles/Profile";
import Payment from "../pages/dashBoard/user/Payment";
import ErrorDisplay from "../errors/ErrorDisplay";
import AllSeller from "../pages/dashBoard/admin/AllSeller";
import Allbuyer from "../pages/dashBoard/admin/Allbuyer";
import ReportedItem from "../pages/dashBoard/admin/ReportedItem";
import Blogs from "../pages/blogs/Blogs";
import PrivateRoute from "./PrivateRoute";

import ProductsDetails from "../pages/products/ProductsDetails";
import Categories from "../pages/categories/Categories";
import Advertisement from "../pages/advertise/Advertisement";
import Redux from "../Redux/Redux";
import AdminDashBoard from "../pages/dashBoard/AdminDashBoard";
import SIdeProducts from "../pages/dashBoard/SIdeProducts";
import AllProducts from "../pages/products/AllProducts";
import DashBoardLayout from "../layout/DashBoardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorDisplay />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignIn />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/dashboard", element: <Dashbord /> },
      {
        path: "/Addcategories",
        element: <AddCategories />,
      },
      {
        path: "/addproducts",
        loader: () => fetch(`https://sh-server-site.vercel.app/categories`),
        element: <AddProducts />,
      },
      {
        path: "/products/:id",
        loader: ({ params }) =>
          fetch(`https://sh-server-site.vercel.app/products/${params.id}`),
        element: <Products />,
      },
      {
        path: "/allProducts",
        element: <AllProducts />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/advertised",
        element: <Advertisement />,
      },
      {
        path: "/productDetails/:_id",
        element: <ProductsDetails />,
      },
      {
        path: "/selllerproducts",
        element: <SellerProducts />,
      },
      {
        path: "/myorders",
        element: <MyOrders />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/payment/:id",
        loader: ({ params }) =>
          fetch(`https://sh-server-site.vercel.app/bookings/${params.id}`),
        element: <Payment />,
      },
      {
        path: "/allseller",
        element: <AllSeller />,
      },
      {
        path: "/allbuyer",
        element: <Allbuyer />,
      },
      {
        path: "/report",
        loader: () => fetch(`https://sh-server-site.vercel.app/getreport`),
        element: <ReportedItem />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/redux",
        element: <Redux />,
      },

      {
        path: "/adminDash",
        element: <AdminDashBoard />,
        children: [
          {
            path: "/adminDash",
            element: <SIdeProducts />,
          },
          {
            path: "/adminDash/products",
            element: <SIdeProducts />,
          },
          {
            path: "/adminDash/categories",
            element: <Advertisement />,
          },
        ],
      },
      {
        path: "/dashboardLayout",
        element: <DashBoardLayout />,
      },
    ],
  },
]);

export default router;
