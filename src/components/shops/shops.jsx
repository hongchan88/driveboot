import React from "react";
import Shop from "../shop/shop";
import styles from "./shops.module.css";

const Shops = ({ shops }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {shops &&
          Object.keys(shops).map((key) => <Shop key={key} shop={shops[key]} />)}
      </ul>
    </div>
  );
};

export default Shops;
