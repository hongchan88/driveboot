import React, { useEffect } from "react";
import Order from "./order";
import styles from "./ordermain.module.css";

const Ordermain = ({ order, deleteOrder }) => {
  return order ? (
    <div class="flex flex-col w-11/12 h-full">
      {Object.keys(order)
        .reverse()
        .map((key) => (
          <div class="border-2 border-gray-100 mt-10 rounded-lg w-full h-72 max-w-5xl min-w-custom shadow-sm py-4 px-6">
            <Order key={key} order={order[key]} deleteOrder={deleteOrder} />
          </div>
        ))}
    </div>
  ) : (
    <div className="-mt-12 w-5/6 max-w-xl ">
      <div className="py-5">
        <div className="border-t border-gray-200 my-10" />
        <div class="flex justify-center">
          <p class="text-lg">Order does exist</p>
        </div>
        <div className="border-t border-gray-200 my-10" />
      </div>
    </div>
  );
};

export default Ordermain;
