import React, { useRef, useState } from "react";
import styles from "./common.module.css";
import { Link, useHistory } from "react-router-dom";
import {
  LockClosedIcon,
  SwitchHorizontalIcon,
  AtSymbolIcon,
} from "@heroicons/react/solid";
import GoogleButton from "react-google-button";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import { XIcon } from "@heroicons/react/solid";
import cogoToast from "cogo-toast";
import { resetIdCounter } from "react-tabs";

const Leftnavigation = ({
  authProvider,
  setLoggedInUser,
  user,
  isBuyer,
  changeBuyerOrSeller,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState();

  let history = useHistory();

  const popupRef = useRef();

  const googleLogin = () => {
    authProvider.login().then((result) => {
      if (!user) {
        setLoggedInUser(result);
      }
      cogoToast.success("Success logged in!");
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
  // const createUserEmail = () => {
  //   authProvider
  //     .createUser("hongchan88@hotmail.com", "ghdcksdl1")
  //     .then((result) => {
  //       if (!user) {
  //         setLoggedInUser(result);
  //       }
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
  // };

  const onSubmit = (data) => {
    authProvider
      .loginEmail(data.email, data.password)
      .then((result) => {
        if (!user) {
          setLoggedInUser(result);
        }
        setError();
        reset();
        cogoToast.success("Success logged in!");
      })
      .catch((error) => {
        cogoToast.error("Failed logged in");
        setError(error.message);
      });
  };

  return (
    <div class="flex h-screen w-full flex-col justify-start">
      <div class="h-7/12">
        {isBuyer ? (
          <ul className={styles.listcontainer}>
            <li class="flex justify-center mb-5">
              <p>Buyer Account</p>
            </li>
            <li>
              <Link to="/">Welcome Buyer</Link>
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
              <Link to="/">Welcome Seller</Link>
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
            <SwitchHorizontalIcon
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
        {!user && (
          <Popup
            trigger={
              <button className="group mt-5 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className=" flex items-center ">
                  <AtSymbolIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                {!user && "Sign in with Demo account"}
              </button>
            }
            ref={popupRef}
            modal
          >
            {(close) => (
              <div class="flex items-center justify-center">
                <XIcon
                  className="absolute right-5 top-3 h-5 w-5"
                  onClick={() => {
                    close();
                  }}
                />

                <div class="w-full max-w-md">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    class="bg-white rounded px-12 pt-6 pb-8 mb-4"
                  >
                    <div class="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
                      Login
                    </div>

                    {error && <small className="text-red-500">{error}</small>}
                    <div class="mb-4">
                      <label
                        class="block text-gray-700 text-sm font-normal mb-2"
                        for="username"
                      >
                        Email
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="email"
                        v-model="form.email"
                        type="email"
                        required
                        autofocus
                        placeholder="Email"
                        {...register("email")}
                      />
                    </div>
                    <div class="mb-6">
                      <label
                        class="block text-gray-700 text-sm font-normal mb-2"
                        for="password"
                      >
                        Password
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="form.password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        autocomplete="current-password"
                        {...register("password")}
                      />
                    </div>
                    <div class="flex items-center justify-between">
                      <button
                        class="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                  <p class="text-center text-gray-500 text-xs"></p>
                </div>
              </div>
            )}
          </Popup>
        )}
      </div>
    </div>
  );
};

export default Leftnavigation;
