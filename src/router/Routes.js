import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddCategories from "../pages/dashBoard/AddCategories";
import AddProducts from "../pages/dashBoard/AddProducts";
import Dashbord from "../pages/dashBoard/Dashbord";
import SellerProducts from "../pages/dashBoard/seller/SellerProducts";
import MyOrders from "../pages/dashBoard/user/MyOrders";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Products from "../pages/products/Products";
import SignIn from "../pages/signin/SignIn";
import Profile from "../profiles/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path:'/categories',
        element:<AddCategories/>
      },
      {
        path:'/addproducts',
        element:<AddProducts/>

      },
      {
        path:'/products/:name',
        loader:({params})=>fetch(`http://localhost:3008/products/${params.name}`),
        element:<Products/>
      },
      {
        path:'/selllerproducts',
        element:<SellerProducts/>
      },
      {
        path:'/myorders',
        element:<MyOrders/>
      },
      {
        path:'/profile',
        element:<Profile/>
      }
    ],
  },
]);

export default router;
