import React, { useEffect, useRef, useState } from "react";

const Orderproducts = ({ items }) => {
  console.log(items);
  return (
    <tr>
      <td class="hidden pb-4 md:table-cell">
        <img src={items.itemImg} class="w-20 rounded" alt="Thumbnail" />
      </td>
      <td>
        <div class="mb-2 md:ml-4">
          <p class="font-bold">{items.name}</p>
          <p>{items.itemBrand}</p>
          <p>{items.itemSize}</p>
        </div>
      </td>
      <td class="justify-center md:justify-end md:flex mt-6">
        <div class="w-20 h-10">
          <div class="relative flex flex-row w-full h-8">
            <input
              readOnly
              type="number"
              value={items?.qty}
              class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
            />
          </div>
        </div>
      </td>
      <td class="hidden text-right md:table-cell">
        <span class="text-sm lg:text-base font-medium">{items?.price}</span>
      </td>
      <td class="text-right">
        <span class="text-sm lg:text-base font-medium">
          ${items?.price * items?.qty}
        </span>
      </td>
    </tr>
  );
};
export default Orderproducts;
