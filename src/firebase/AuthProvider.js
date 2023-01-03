import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./Firebase.config";
import { toast } from "react-toastify";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);
  const [dashbtn, setdashbtn] = useState(false);

  const [theme, setTheme] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // for currentUser //
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const logout = () => {
    const islogout = window.confirm(" Log Out ?");

    if (islogout) {
      return signOut(auth)
        .then(() => {
          dashbtn(false);
          setLoading(true);
          localStorage.removeItem("accessToken");
        })
        .catch((e) => console.log(e));
    }
  };

  const gitProvider = new GithubAuthProvider();

  const [tokenEmail, setTokenEmail] = useState("");
  const [token] = useToken(tokenEmail);

  const gitSignIn = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        toast("success github logIn");
        console.log(result, "are result.....");

        setToken(result.user.displayName);

        setLoading(true);
        const name = user.displayName;
        const email = "github@gmail.com";
        const type = "buyer";
        const users = { name, email, type };
        savedDB(users);
      })
      .catch((err) => console.log(err));
  };

  const setToken = (email) => {
    fetch(`https://sh-server-site.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem(`accessToken`, data.accessToken);
      });
  };

  //delete user //

  // google sign in

  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(" from google sign in ", user);
        setTokenEmail(user.email);
        const name = user.displayName;
        const email = user.email;
        const type = "buyer";
        const users = { name, email, type };
        savedDB(users);
        setToken(user.email);

        toast.success("Success Google ");
      })
      .catch((err) => console.log(err));
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

  const authInfo = {
    createUser,
    login,
    logout,
    user,
    gitSignIn,
    googleSignIn,
    dashbtn,
    setdashbtn,
    theme,
    setTheme,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
