import React from "react";
import styles from "./shop.module.css";
import { Link } from "react-router-dom";

const Shop = ({ shop }) => {
  return (
    <li>
      <Link to={`/shop/${shop.id}`}>
        <div class="p-10">
          <div class="max-w-xs rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <img src="img/header.jpg" />
              <div class="font-bold text-xl mb-2">{shop.name}</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Shop;
