import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddCategories from "../pages/dashBoard/AddCategories";
import Dashbord from "../pages/dashBoard/Dashbord";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignIn from "../pages/signin/SignIn";

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
      }
    ],
  },
]);

export default router;
