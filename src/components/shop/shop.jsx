import React from "react";
import styles from "./shop.module.css";
import { Link } from "react-router-dom";

const Shop = ({ shop }) => {
  return (
    <li className={styles.shop}>
      <li>
        <Link to={`/shop/${shop.id}`}> {shop.name}</Link>
      </li>
    </li>
  );
};

export default Shop;
