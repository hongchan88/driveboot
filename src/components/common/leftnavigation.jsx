import {
  AtSymbolIcon,
  LockClosedIcon,
  SwitchHorizontalIcon,
  XIcon,
} from "@heroicons/react/solid";
import cogoToast from "cogo-toast";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import styles from "./common.module.css";

const Leftnavigation = ({
  authProvider,
  setLoggedInUser,
  user,
  isBuyer,
  changeBuyerOrSeller,
  setUserNull,
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
    });
  };
  const logOut = () => {
    authProvider.signOut();
    setUserNull();
  };
  const changeAccount = () => {
    history.push("/");
    changeBuyerOrSeller();
  };

  const onSubmit = (data) => {
    authProvider
      .loginEmail(data.email, data.password)
      .then((result) => {
        if (!user) {
          setLoggedInUser(result);
        }
        setError();
        reset();
      })
      .catch((error) => {
        cogoToast.error("Failed logged in");
        setError(error.message);
      });
  };

  return (
    <div className="flex h-screen w-full flex-col justify-start">
      <div className="h-7/12">
        {isBuyer ? (
          <ul className={styles.listcontainer}>
            <li className="flex justify-center  mb-5">
              <div className="flex-col ">
                <div className="flex justify-center">
                  <img
                    className="inline object-scale-down w-16 h-16"
                    src="https://res.cloudinary.com/dwbsxpk82/image/upload/v1632708383/default/fzwg7y978hsamttmmyoz.png"
                    alt="buyer icon"
                  />
                </div>
                <p className="font-bold font-mono">Buyer Account</p>
              </div>
            </li>
            <li>
              <Link to="/">
                <button className="w-full bg-white-500 hover:bg-gray-100 text-black font-mono font-thin py-2 px-4 rounded">
                  Welcome
                </button>
              </Link>
            </li>
            <li>
              <Link to="/shop">
                <button className="w-full bg-white-500 hover:bg-gray-100 text-black font-mono font-thin py-2 px-4 rounded">
                  Shop
                </button>
              </Link>
            </li>
            <li>
              <Link to="/order">
                <button className="w-full bg-white-500 hover:bg-gray-100 text-black font-mono font-thin py-2 px-4 rounded">
                  Orders
                </button>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <button className="w-full bg-white-500 hover:bg-gray-100 text-black font-mono font-thin py-2 px-4 rounded">
                  Profile
                </button>
              </Link>
            </li>
          </ul>
        ) : (
          <ul className={styles.listcontainer}>
            <li className="flex justify-center mb-5">
              <div className="flex-col ">
                <div className="flex justify-center">
                  <img
                    className="inline object-scale-down w-16 h-16"
                    src="https://res.cloudinary.com/dwbsxpk82/image/upload/v1632708383/default/pkxz9unmefmsdwitval0.png"
                    alt="buyer icon"
                  />
                </div>
                <p className="font-bold font-mono">Seller Account</p>
              </div>
            </li>
            <li>
              <Link to="/">
                <button className="w-full bg-white-500 hover:bg-gray-100 text-black font-mono font-thin py-2 px-4 rounded">
                  Welcome
                </button>
              </Link>
            </li>
            <li>
              <Link to="/myshop">
                <button className="w-full bg-white-500 hover:bg-gray-100 text-black font-mono font-thin py-2 px-4 rounded">
                  My shop
                </button>
              </Link>
            </li>
            <li>
              <Link to="/manageorder">
                <button className="w-full bg-white-500 hover:bg-gray-100 text-black font-mono font-thin py-2 px-4 rounded">
                  Manage orders
                </button>
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div className="flex flex-col mt-10 ">
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
              <div className="flex items-center justify-center">
                <XIcon
                  className="absolute right-5 top-3 h-5 w-5"
                  onClick={() => {
                    close();
                  }}
                />

                <div className="w-full max-w-md">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white rounded px-12 pt-6 pb-8 mb-4"
                  >
                    <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
                      Login
                    </div>

                    {error && <small className="text-red-500">{error}</small>}
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-normal mb-2">
                        Email
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="email"
                        value="hello@boot.drive.thru"
                        type="email"
                        required
                        autoFocus
                        placeholder="Email"
                        {...register("email")}
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-normal mb-2">
                        Password
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        value="hello1234"
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        autoComplete="current-password"
                        {...register("password")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                  <p className="text-center text-gray-500 text-xs"></p>
                </div>
              </div>
            )}
          </Popup>
        )}
        {!user && (
          <div className="mt-5 font-sans border-2 flex justify-center border-gray-300 py-3 px-3">
            <span className="text-red-500 font-bold flex ">
              Please sign in !
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leftnavigation;
