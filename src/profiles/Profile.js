import React, { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import useRoleCheck from "../hooks/useRoleCheck";
import "../shared/custom.css";
import RouteBanner from "../shared/routeBanners/RouteBanner";

const Profile = () => {
  const { user, theme } = useContext(AuthContext);
  const [roleCheck] = useRoleCheck(user?.email);
  
  console.log(user);
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
                ? user?.photoURL
                : "https://img.freepik.com/free-psd/3d-illustration-cartoon-character-businessman-wearing-glasses-working-desktop-computer-desk-office_1150-52380.jpg?w=900&t=st=1674386077~exp=1674386677~hmac=801c0ef9b2ba5d3dbbff8c0e5d024de33aafe3d326649376bebea94f25c3d3d3"
            }
            alt="profile"
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
