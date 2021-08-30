import React from "react";
import styles from "./common.module.css";
import { Link, useHistory } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/solid";
import GoogleButton from "react-google-button";
const Leftnavigation = ({
  authProvider,
  setLoggedInUser,
  user,
  isBuyer,
  changeBuyerOrSeller,
}) => {
  let history = useHistory();
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
  const changeAccount = () => {
    history.push("/");
    changeBuyerOrSeller();
  };
  console.log(isBuyer, "navigation");

  return (
    <div class="flex h-screen w-full flex-col justify-start">
      <div class="h-7/12">
        {isBuyer ? (
          <ul className={styles.listcontainer}>
            <li class="flex justify-center mb-5">
              <p>Buyer Account</p>
            </li>
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
        ) : (
          <ul className={styles.listcontainer}>
            <li class="flex justify-center mb-5">
              <p>Seller Account</p>
            </li>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/myshop">My Shop</Link>
            </li>
            <li>
              <Link to="/manageorder">Manage Order</Link>
            </li>
          </ul>
        )}
      </div>
      <div class="flex flex-col mt-10 ">
        <button
          onClick={changeAccount}
          className="group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className=" flex items-center ">
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          {isBuyer ? "Change to seller Account" : "Change to buyer Account"}
        </button>
        <button
          onClick={user ? () => logOut() : () => googleLogin()}
          className="group mt-5 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
    </div>
  );
};

export default Leftnavigation;
