import React from "react";
import Popup from "reactjs-popup";
import style from "./common.module.css";
import { Link, useHistory } from "react-router-dom";

const Globalheader = ({ authProvider }) => {
  console.log(authProvider);
  const history = useHistory();

  return (
    <section class="flex font-mono justify-between px-10 py-10 ">
      <div class="flex">
        <p class="font-bold">Boot Drive Thru</p>
      </div>
      <div class="flex">
        <p>Git hub</p>
        <p>Git hub</p>
      </div>
    </section>
  );
};
export default Globalheader;
