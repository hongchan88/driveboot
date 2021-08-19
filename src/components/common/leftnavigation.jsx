import React from "react";
import styles from "./common.module.css";
import { Link } from "react-router-dom";
const Leftnavigation = (props) => {
  return (
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
      <li>Profile</li>
    </ul>
  );
};

export default Leftnavigation;
