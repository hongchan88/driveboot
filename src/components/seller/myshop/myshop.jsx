import React from "react";
import { Link } from "react-router-dom";

const Myshop = ({ shop, user, addShop }) => {
  console.log(shop);

  return (
    <div class="flex flex-col">
      <Link to={`/myshop/${user.uid}`}>
        {shop ? (
          <div class="p-10">
            <div class="max-w-xs rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <img
                  src={
                    shop.infoImg
                      ? shop.infoImg
                      : "https://res.cloudinary.com/dwbsxpk82/image/upload/v1631881307/default/fikri-rasyid-ezeC8-clZSs-unsplash_dynpg4.jpg"
                  }
                />
                <div class="font-bold text-xl mb-2">{shop.name}</div>
                <p class="text-gray-700 text-base overflow-hidden h-28">
                  {shop?.desc.length > 120
                    ? `${shop?.desc.substring(0, 120)} ... Read More`
                    : shop?.desc}
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {shop.product
                    ? `Published products (${shop.product.length - 1})`
                    : "Published products(0)"}
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {shop.order
                    ? `Total orders (${Object.keys(shop.order)?.length})`
                    : "Total orders(0)"}
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {shop.order
                    ? `Order placed (
                  ${
                    Object.keys(shop?.order).filter(
                      (key) => shop?.order[key]["OrderStatus"] == 0
                    ).length
                  }
                  )`
                    : "Order placed(0)"}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div onClick={() => addShop(user.uid)} class="p-10">
            <div class="max-w-xs rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <img
                  src={
                    "https://res.cloudinary.com/dwbsxpk82/image/upload/v1632635607/default/store_jjuwzq.png"
                  }
                />
                <div class="font-bold text-xl mb-2">Create your own store</div>
              </div>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Myshop;
