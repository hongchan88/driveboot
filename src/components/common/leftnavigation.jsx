import React from "react";
import styles from "./common.module.css";
import { Link } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/solid";
import GoogleButton from "react-google-button";
const Leftnavigation = ({ authProvider, setLoggedInUser, user }) => {
  const googleLogin = () => {
    authProvider.login().then((result) => {
      if (!user) {
        setLoggedInUser(result);
      }
    });
  };
  const logOut = () => {
    console.log("logout");
    authProvider.signOut();
  };

  return (
    <div class="flex h-screen w-full flex-col justify-start">
      <ul className={styles.listcontainer}>
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/order">Order history</Link>
        </li>
        <li>
          <Link to="/profile">My account</Link>
        </li>
      </ul>
      <button
        onClick={user ? () => logOut() : () => googleLogin()}
        className="group mt-40 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className=" flex items-center ">
          <LockClosedIcon
            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
            aria-hidden="true"
          />
        </span>
        {user ? "Log out" : "Sign in with google"}
      </button>
    </div>
  );
};

export default Leftnavigation;
