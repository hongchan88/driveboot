import React from "react";
import styles from "./shop.module.css";
import { Link } from "react-router-dom";

const Shop = ({ shop }) => {
  console.log(shop);
  return (
    <li>
      <div class="p-10">
        <Link to={`/shop/${shop.id}`}>
          <div class="max-w-xs rounded overflow-hidden shadow-lg min-h-full">
            <div class="flex flex-col   px-6 py-4">
              <div className="flex justify-center">
                <img className="object-cover w-56 h-56 " src={shop.infoImg} />
              </div>

              <div class="font-bold text-xl text-center mb-2">{shop?.name}</div>
              <div class="text-sm mb-2 h-20 overflow-hidden">{shop?.desc}</div>
            </div>
            <div class="px-6 pt-4 pb-2 h-28">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{shop?.hashtag1}
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{shop?.hashtag2}
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{shop?.hashtag3}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default Shop;
