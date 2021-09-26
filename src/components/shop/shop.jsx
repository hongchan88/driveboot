import React from "react";
import styles from "./shop.module.css";
import { Link } from "react-router-dom";

const Shop = ({ shop }) => {
  return (
    <li>
      <div class="p-10">
        <Link to={`/shop/${shop.id}`}>
          <div class="max-w-xs rounded overflow-hidden shadow-lg">
            <div class="flex flex-col items-center justify-center px-6 py-4">
              <img className="object-cover w-56 h-56" src={shop.infoImg} />

              <div class="font-bold text-xl mb-2">{shop.name}</div>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #KoreanFood
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Asian grocery
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Fast delivery
              </span>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default Shop;
