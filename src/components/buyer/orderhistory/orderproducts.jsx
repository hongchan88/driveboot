import React from "react";

const Orderproducts = ({ items }) => {
  return (
    <tr>
      <td className="hidden pb-4 md:table-cell">
        <img src={items.itemImg} className="w-20 rounded" alt="Thumbnail" />
      </td>
      <td>
        <div className="mb-2 md:ml-4">
          <p className="font-bold">{items.name}</p>
          <p>{items.itemBrand}</p>
          <p>{items.itemSize}</p>
        </div>
      </td>
      <td className="justify-center md:justify-end md:flex mt-6">
        <div className="w-20 h-10">
          <div className="relative flex flex-row w-full h-8">
            <input
              readOnly
              type="number"
              value={items?.qty}
              className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
            />
          </div>
        </div>
      </td>
      <td className="hidden text-right md:table-cell">
        <span className="text-sm lg:text-base font-medium">{items?.price}</span>
      </td>
      <td className="text-right">
        <span className="text-sm lg:text-base font-medium">
          ${items?.price * items?.qty}
        </span>
      </td>
    </tr>
  );
};
export default Orderproducts;
