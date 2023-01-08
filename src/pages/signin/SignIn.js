import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../firebase/AuthProvider";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/Firebase.config";
import useToken from "../../hooks/useToken";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { FaGithub, FaGoogle } from "react-icons/fa";
import signImg from "../../assets/signup.png";

const SignIn = () => {
  const { googleSignIn, theme, createUser, gitSignIn } =
    useContext(AuthContext);
  //   console.log(user);
  const auth = getAuth(app);

const handleGoogelSignIn = ()=>{
  googleSignIn().then((result) => {
    const user = result.user;
    console.log(" from google sign in ", user);
    setTokenEmail(user.email);
    const name = user.displayName;
    const email = user.email;
    const users = {  name, email, role: "buyer"};
    savedDB(users);
    setToken(user.email);

    toast.success("Success Google ");
  })
  .catch((err) => console.log(err));
}
const setToken = (email) => {
  fetch(`https://sh-server-site.vercel.app/jwt?email=${email}`)
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem(`accessToken`, data.accessToken);
    });
};

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };

  const [tokenEmail, setTokenEmail] = useState("");
  const [token] = useToken(tokenEmail);
  if (token) {
    return navigate(from, { replace: true });
  }

  const handleSignup = (data) => {
    // console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const usertype = data.user;
    const user = { name, email, role: usertype };
    // console.log(user);
    // create user//

    createUser(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL:
            "https://pbs.twimg.com/profile_images/1594759062939267072/mtaBjtjA_400x400.jpg",
        })
          .then(() => {
            toast.success("sign up");
            console.log("for token .....", email);
            setTokenEmail(email);

            savedDB(user);
            setError("");
            reset();
          })
          .catch((e) => setError(e.message));
      })
      .catch((err) => setError(err.message));
  };


  const savedDB = (user) => {
    fetch(`https://sh-server-site.vercel.app/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .catch((data) => {
        console.log(data);
        navigate(from, { replace: true });
        toast.success("added DB");
      });
  };

  return (
    <div
      className={`mx-auto my-5 rounded lg:flex lg:justify-center  h-full  sm:block md:block gap-[50px] lg:items-center  max-w-[95%] ${
        theme ? "#cdcfd0" : ""
      } `}
    >
      <div className="px-3 w-full">
        <figure>
          <img className="rounded" src={signImg} alt="" />
        </figure>
      </div>

      <div className=" px-4 w-full">
        <h1 className="text-5xl text-center py-5 font-bold mt-10 font-serif">
          {" "}
          Sign Up please{" "}
        </h1>
        <form onSubmit={handleSubmit(handleSignup)} className="">
          {/* <Header /> */}

          <div className="form-control w-full">
            <label className="label">
              <span
                className={`text-2xl normal ${
                  theme ? "textColorHover1" : "textColorHover2"
                }`}
              >
                Your Name
              </span>
            </label>
            <input
              {...register("name", { required: "Name is Required" })}
              aria-invalid={errors.name ? "true" : "false"}
              type="text"
              placeholder="Type here"
              className="py-3 outline-none bg-slate-300 px-3 font-mono text-2xl border-none text- w-full "
            />
            {errors.name && (
              <p className="text-red-400 text-sm" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span
                className={`text-2xl normal ${
                  theme ? "textColorHover1" : "textColorHover2"
                }`}
              >
                Your Email
              </span>
            </label>
            <input
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Provide correct email",
                },
              })}
              aria-invalid={errors.email ? "true" : "false"}
              type="text"
              placeholder="xyz@gamil.com"
              className="py-3 outline-none bg-slate-300 px-3 font-mono text-2xl border-none text- w-full"
            />
            {errors.email && (
              <p className="text-red-400 text-sm" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span
                className={`text-2xl normal ${
                  theme ? "textColorHover1" : "textColorHover2"
                }`}
              >
                Your Password
              </span>
              <span>
                {show ? (
                  <HiEyeOff onClick={handleShow} />
                ) : (
                  <HiEye onClick={handleShow} />
                )}
              </span>
            </label>
            <input
              {...register("password", {
                required: "Please provide correct password",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character",
                },
              })}
              type={show ? "password" : "text"}
              placeholder="Type password"
              className="py-3 outline-none bg-slate-300 px-3 font-mono text-2xl border-none text- w-full"
            />
            <label className="label">
              {errors.password && (
                <p className="text-red-400 text-sm" role="alert">
                  {errors.password?.message}
                </p>
              )}
            </label>
          </div>

          <select
            {...register("user", { required: true })}
            className={`text-2xl outline-none border border-opacity-0 w-full py-3 normal ${
              theme ? "textColorHover1" : "textColorHover2 bg-slate-500"
            }`}
          >
            <option value="buyer">Buyers</option>
            <option value="seller">Seller</option>
          </select>

          <p className="text-sm mt-2 font-mono text-red-500 mb-3"> {error}</p>

          <input
            type="submit"
            value="Sign Up"
            className="btn1 py-3 font-bold text-2xl w-full my-5"
          />
        </form>
        <p className="flex text-lg font-mono justify-between">
          <span>Already Registered?</span>
          <Link to="/login" className="link link-hover">
            Please Log In......
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={ handleGoogelSignIn}
          className=" w-full text-xl text-[#4086f4] bg-white flex items-center hover:shadow-lg text-center py-3 font-bold justify-between px-5"
        >
          <FaGoogle className="text-3xl mx-2" />
          Continue With Google
        </button>
        <button
          onClick={gitSignIn}
          className="w-full hover:shadow-lg text-xl text-slate-600 mt-5 bg-white flex items-center text-center py-3 font-bold justify-between px-5"
        >
          <FaGithub className="text-3xl mx-2" />
          Continue With Git Hub
        </button>
      </div>
    </div>
  );
};

export default SignIn;
