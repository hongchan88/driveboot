import React, { useEffect, useRef, useState } from "react";
import Popup from "reactjs-popup";
import styles from "./cart.module.css";

const Cartitems = ({ items, removeItem, addQty }) => {
  const [qty, setQty] = useState(1);
  const qtyRef = useRef();
  const changeQty = () => {
    if (qtyRef.current.value > 0) {
      setQty(qtyRef.current.value);
    }
  };

  useEffect(() => {
    addQty(items.id, parseInt(qty));
  }, [qty, items.id]);
  return (
    <tr>
      <td className="hidden pb-4 md:table-cell">
        <Popup
          trigger={
            <img
              src={items.itemImg}
              className="w-20 rounded cursor-pointer"
              alt="Thumbnail"
            />
          }
          modal
        >
          <div className="flex justify-center">
            <img className="" src={items.itemImg} alt="Product" />
          </div>
        </Popup>
      </td>
      <td className={styles.productTd}>
        <div className="mb-2 md:ml-4">
          <p className="font-bold">{items.name}</p>
          <p>{items.itemBrand}</p>
          <p>{items.itemSize}</p>
        </div>
        <form>
          <button type="submit" className="text-gray-700 md:ml-4">
            <small onClick={(e) => removeItem(items, e)}>(Remove item)</small>
          </button>
        </form>
      </td>
      <td className="justify-center md:justify-end md:flex mt-6">
        <div className="w-20 h-10">
          <div className="relative flex flex-row w-full h-8">
            <input
              type="number"
              value={items.qty}
              onChange={() => changeQty()}
              ref={qtyRef}
              className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
            />
          </div>
        </div>
      </td>
      <td className="hidden text-right md:table-cell">
        <span className="text-sm lg:text-base font-medium">{items.price}</span>
      </td>
      <td className="text-right">
        <span className="text-sm lg:text-base font-medium">
          ${items.price * qty}
        </span>
      </td>
    </tr>
  );
};
export default Cartitems;
