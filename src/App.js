
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
    <div className={`${theme?' App':'bgTheme2  App'} max-w-7xl mx-auto `}  >
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer autoClose={1200} />
    </div>
  );
}

export default App;
