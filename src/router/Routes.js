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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<ErrorDisplay/>,
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
        path: "/categories",
        element: <AddCategories />,
      },
      {
        path: "/addproducts",
        element: <AddProducts />,
      },
      {
        path: "/products/:name",
        loader: ({ params }) =>
          fetch(`http://localhost:3008/products/${params.name}`),
        element: <Products />,
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
        path:'/payment/:id',
        loader:({params})=>fetch(`http://localhost:3008/bookings/${params.id}`),
        element:<Payment/>
      }
    ],
  },
]);

export default router;
