import React from "react";

const SearchList = ({ product, addCart }) => {
  return (
    <a href="#" class="block py-1">
      <div class="flex justify-between">
        <h3
          class="font-medium text-gray-700 dark:text-gray-100 hover:underline"
          onClick={(e) => addCart(product.id, product.name, product.price, e)}
        >
          {product?.name}
        </h3>
        <p>${product?.price}</p>
      </div>
      <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {product?.brand} {product?.size}
      </p>
    </a>
  );
};

export default SearchList;
