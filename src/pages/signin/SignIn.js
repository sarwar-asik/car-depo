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

const SignIn = () => {
  const { googleSignIn, createUser, gitSignIn } = useContext(AuthContext);
  //   console.log(user);
  const auth = getAuth(app);

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
            navigate("/");
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

        toast.success("added DB");
      });
  };

  return (
    <div className=" mx-auto  my-5 rounded lg:flex lg:justify-center  h-full  sm:block md:block gap-[100px] lg:items-center max-w-[85%] ">
      <div className="">
        <figure>
          <img
            className="rounded"
            src="https://img.freepik.com/free-photo/businessman-logging-his-tablet_53876-102029.jpg?w=900&t=st=1670220119~exp=1670220719~hmac=dce84407f8961a3207e3abaaa1c82880ba7781971e8a9286352ec76fbc7cda21"
            alt=""
          />
        </figure>
      </div>

      <div className=" max-h-[70%] px-2">
        <h1 className="text-3xl my-3 text-center "> Sign Up please </h1>
        <form onSubmit={handleSubmit(handleSignup)} className="">
          {/* <Header /> */}

          <div className="form-control w-full my-2 ">
            <label className="label">
              <span className=" text-xl">Your Name</span>
            </label>
            <input
              {...register("name", { required: "Name is Required" })}
              aria-invalid={errors.name ? "true" : "false"}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            {errors.name && (
              <p className="text-red-400 text-sm" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className=" text-xl">Your Email</span>
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
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-400 text-sm" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className=" text-xl">Your Password</span>
              <span>
                {" "}
                {show ? (
                  <HiEyeOff onClick={handleShow} />
                ) : (
                  <HiEye onClick={handleShow} />
                )}{" "}
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
              placeholder="type password"
              className="input input-bordered w-full"
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
            className="w-full py-3 my-2"
          >
            <option value="buyer">Buyers</option>
            <option value="seller">Seller</option>
          </select>

          <p className="text-xl text-red-500 mb-3"> {error}</p>

          <input
            type="submit"
            value="Sign In"
            className="btn btn-active btn-primary w-full my-5"
          />
        </form>
        <p>
          {" "}
          Already have an Account ?{" "}
          <Link to="/login" className="text-primary">
            {" "}
            Please Log In
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={googleSignIn}
          className="btn btn-outline btn-primary w-full text-lg "
        >
          <FaGoogle className="mx-3 text-2xl" />
          Continue With Google
        </button>
        <button
          onClick={gitSignIn}
          className="btn btn-outline w-full text-lg mt-2"
        >
          <FaGithub className="mx-3 text-2xl" />
          Continue With Git Hub
        </button>
      </div>
    </div>
  );
};

export default SignIn;
