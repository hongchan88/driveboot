import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";

const SearchList = ({ product, addonCart }) => {
  const [nonFiltered, setNonFiltered] = useState(false);

  useEffect(() => {
    if (product.length == 0) {
      setNonFiltered(true);
    }
  });

  return (
    <div class="flex justify-between py-2 px-2">
      <div class="flex">
        <div>
          <Popup
            trigger={
              <img
                class="inline object-cover w-16 h-16 mr-2 cursor-pointer hover:opacity-75 "
                src={product?.productImg}
                alt="Product image"
              />
            }
            modal
          >
            <div className="flex justify-center">
              <img
                class="w-1/2"
                src={product?.productImg}
                alt="Product image"
              />
              <span class="w-1/2 ml-5">{product?.desc}</span>
            </div>
          </Popup>
        </div>
        <div className="flex flex-col">
          <p class="text-2xl text-gray-700 dark:text-gray-100 ">
            {product?.name}
          </p>
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {product?.brand} {product?.size}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="font-bold">${product?.price}</p>
        <button
          className="ml-10 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded-lg"
          onClick={(e) =>
            addonCart(
              product.id,
              product.name,
              product.price,
              product.productImg,
              product.brand,
              product.size,
              e
            )
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SearchList;
