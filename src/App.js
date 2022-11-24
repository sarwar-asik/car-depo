import logo from "./logo.svg";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default App;
