import React from "react";
import Order from "./order";
import styles from "./ordermain.module.css";

const Ordermain = ({ order }) => {
  return order ? (
    <div class="flex flex-col w-11/12 h-full">
      {Object.keys(order).map((key) => (
        <div class="border-2 border-gray-100 mt-10 rounded-lg w-full h-72 max-w-5xl min-w-custom shadow-sm py-4 px-6">
          <Order key={key} order={order[key]} />
        </div>
      ))}
    </div>
  ) : (
    <h1>no order</h1>
  );
};

export default Ordermain;
