import React from "react";
import { Link } from "react-router-dom";

const Shop = ({ shop }) => {
  return (
    <li>
      <div className="p-10">
        <Link to={`/shop/${shop.id}`}>
          <div className="max-w-xs rounded overflow-hidden shadow-lg min-h-full">
            <div className="flex flex-col   px-6 py-4">
              <div className="flex justify-center">
                <img
                  alt="shopinfoimg"
                  className="object-cover w-56 h-56 "
                  src={shop.infoImg}
                />
              </div>

              <div className="font-bold text-xl text-center mb-2">
                {shop?.name}
              </div>
              <div className="text-sm mb-2 h-20 overflow-hidden">
                {shop?.desc.length > 200
                  ? `${shop?.desc.substring(0, 150)} ... Read More`
                  : shop?.desc}
              </div>
            </div>
            <div className="px-6 pt-4 pb-2 h-28">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{shop?.hashtag1}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{shop?.hashtag2}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
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
