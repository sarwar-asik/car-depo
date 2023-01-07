import logo from "./logo.svg";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Routes";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "./firebase/AuthProvider";

function App() {
  const {theme} = useContext(AuthContext)

  return (
    <div className={theme?'max-w-7xl mx-auto App':'bgTheme2 max-w-7xl mx-auto App' }  >
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default App;
