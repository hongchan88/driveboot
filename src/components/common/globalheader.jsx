import React from "react";
import Popup from "reactjs-popup";
import style from "./common.module.css";
import { Link, useHistory } from "react-router-dom";

const Globalheader = ({ authProvider }) => {
  console.log(authProvider);
  const history = useHistory();

  return (
    <section>
      <div class="flex justify-end"></div>
    </section>
  );
};
export default Globalheader;
