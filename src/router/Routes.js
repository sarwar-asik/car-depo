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
import PractiseModules from "../practiseModule/PractiseModules";

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
        path: "/modules",
        element: <PractiseModules />,
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
        path: "/categories",
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
        element: <PrivateRoute><Products></Products></PrivateRoute>
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
        path:'/blogs',
        element:<Blogs/>
      }
    ],
  },
]);

export default router;
