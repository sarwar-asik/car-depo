import React, { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import useRoleCheck from "../hooks/useRoleCheck";
import "../shared/custom.css";
import RouteBanner from "../shared/routeBanners/RouteBanner";

const Profile = () => {
  const { user, theme } = useContext(AuthContext);
  const [roleCheck] = useRoleCheck(user?.email);
  return (
    <div>
      <RouteBanner
        positionName={[
          { no: "Home", to: "/" },
          { no: "Profile", to: "/profile" },
        ]}
      ></RouteBanner>
      <div
        className={`card  container mx-auto  shadow-xl image-full mt-5 ${
          theme ? "btn1" : ""
        }`}
      >
        <figure>
          <img
            className="w-[100%] max-h-[650px]"
            src={
              user?.photoURL
                ? user.photoURL
                : "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1669397457~exp=1669398057~hmac=1d170eb2ae4cac166202f10f04deca93467975c391fa5aaf7ec5f388a102bb74"
            }
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className=" text-lime-50 font-bold font-mono text-xl">
            User :{user?.email}
          </h2>

          <div className="indicator mt-3">
            <span className="indicator-item badge btn1 py-2 font-mono">
              {roleCheck ? roleCheck : "Buyer"}
            </span>
            <div className="grid w-32 h-24 place-items-center">
              <p className="text-5xl font-semibold font-serif ">
                {user?.displayName}
              </p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <h2 className="text-xl text-white">
              Provided by {user?.providerId}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
