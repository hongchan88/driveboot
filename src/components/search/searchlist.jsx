import React, { useEffect, useState } from "react";

const SearchList = ({ product, addonCart }) => {
  const [nonFiltered, setNonFiltered] = useState(false);

  useEffect(() => {
    if (product.length == 0) {
      setNonFiltered(true);
    }
  });

  return (
    <a href="#" class="block py-1">
      <div class="flex justify-between">
        <div class="flex">
          <p class="text-2xl text-gray-700 dark:text-gray-100 hover:underline">
            {product?.name}
          </p>

          <button
            class="ml-10 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded"
            onClick={(e) =>
              addonCart(product.id, product.name, product.price, e)
            }
          >
            Add to cart
          </button>
        </div>
        <p>${product?.price}</p>
      </div>
      <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {product?.brand} {product?.size}
      </p>
    </a>
  );
};

export default SearchList;
