import React, { useContext } from "react";
import { Link, useRouteError } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const ErrorDisplay = () => {
  const error = useRouteError();
  const { logout, user } = useContext(AuthContext);
  return (
    <div className="max-h-[700px] mt-24 max-w-[95%] mx-auto ">
      <div
        className="hero min-h-[500px]"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/error-text-broken-glass-font_53876-104949.jpg?w=1060&t=st=1669401571~exp=1669402171~hmac=05c8f0e973dd06c97f515ff3e288ba4cfc522c5231ce10e2a38493ecf9a9e923")`,
        }}
      >
        <div className="hero-overlay "></div>
        <div className=" text-center">
          <div className="max-w-md  flex flex-col gap-5 text-white">
            <p className="text-5xl font-extrabold ">
              {error?.statusText }
            </p>
            <p className="text-[2em] font-bold text-error">{error?.message}</p>
            {user?.email && (
              <>
                {" "}
                <button onClick={logout} className="btn btn-error">
                  Log Out
                </button>
              </>
            )}
            <Link
              to="/"
              className="text-center shadow-2xl rounded-md mx-auto bg-blue-500 text-white font-serif font-bold p-3"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;
