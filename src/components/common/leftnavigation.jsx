import React from "react";
import styles from "./common.module.css";
import { Link } from "react-router-dom";
const Leftnavigation = (props) => {
  return (
    <ul className={styles.listcontainer}>
      <li>
        <Link to="/welcome">Welcome</Link>
      </li>
      <li>
        <Link to="/">Shop</Link>
      </li>
      <li>Order history</li>
      <li>Profile</li>
    </ul>
  );
};

export default Leftnavigation;
