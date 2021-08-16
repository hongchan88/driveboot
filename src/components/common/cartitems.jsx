import React, { useEffect, useRef, useState } from "react";

const Cartitems = ({ items, removeItem, addQty }) => {
  const [qty, setQty] = useState(1);
  const qtyRef = useRef();
  const changeQty = () => {
    if (qtyRef.current.value > 0) {
      setQty(qtyRef.current.value);
    }
  };

  useEffect(() => {
    addQty(items.id, qty);
  }, [qty]);
  return (
    <tr>
      <td class="hidden pb-4 md:table-cell">
        <a href="#">
          <img
            src="https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg"
            class="w-20 rounded"
            alt="Thumbnail"
          />
        </a>
      </td>
      <td>
        <a href="#">
          <p class="mb-2 md:ml-4">{items.name}</p>
          <form>
            <button type="submit" class="text-gray-700 md:ml-4">
              <small onClick={(e) => removeItem(items, e)}>(Remove item)</small>
            </button>
          </form>
        </a>
      </td>
      <td class="justify-center md:justify-end md:flex mt-6">
        <div class="w-20 h-10">
          <div class="relative flex flex-row w-full h-8">
            <input
              type="number"
              value={items.qty}
              onChange={() => changeQty()}
              ref={qtyRef}
              class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
            />
          </div>
        </div>
      </td>
      <td class="hidden text-right md:table-cell">
        <span class="text-sm lg:text-base font-medium">{items.price}</span>
      </td>
      <td class="text-right">
        <span class="text-sm lg:text-base font-medium">
          ${items.price * qty}
        </span>
      </td>
    </tr>
  );
};
export default Cartitems;
