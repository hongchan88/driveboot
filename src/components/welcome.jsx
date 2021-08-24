import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import GoogleButton from "react-google-button";

const Welcome = ({ user }) => {
  return <>{user ? <h1>Welcome back!</h1> : <h1>Please Sign in</h1>}</>;
};

export default Welcome;
