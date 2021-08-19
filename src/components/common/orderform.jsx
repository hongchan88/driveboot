import React, { useEffect, useRef, useState } from "react";
import Bootdrivethru from "./bootdrivethru";

const Orderform = ({ product, addOrder, shops, shopid }) => {
  const [filtered, setFiltered] = useState();
  const [hideOrall, setHideorAll] = useState("");
  const [totalPrice, setTotal] = useState(0);

  const [cart, setCart] = useState({});
  const [searchOption, setSearchOption] = useState("name");
  console.log(filtered);
  const filteredSearch = (e, query) => {
    let filteredKey = [];
    if (searchOption == "name") {
      filteredKey = Object.keys(product).filter((key) =>
        product[key].name.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      console.log("hello");

      filteredKey = Object.keys(product).filter((key) =>
        product[key].brand.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFiltered(filteredKey);
    console.log(filtered, "filtered");
  };

  const addonCart = (itemId, itemName, itemPrice, e) => {
    e.preventDefault();
    if (cart[itemId]) {
      addQtyfromClick(itemId);
    } else {
      const updated = { ...cart };
      updated[itemId] = {
        name: itemName,
        price: itemPrice,
        id: itemId,
        qty: 1,
      };
      setCart(updated);
      console.log(cart);
    }
  };

  const addQty = (itemId, qty) => {
    const updated = { ...cart };
    updated[itemId].qty = qty;
    setCart(updated);
  };

  const addQtyfromClick = (itemId) => {
    const updated = { ...cart };
    updated[itemId].qty += 1;
    setCart(updated);
  };

  const removeItemonCart = (itemId, e) => {
    e.preventDefault();
    console.log(itemId);
    const updated = { ...cart };
    delete updated[itemId.id];
    setCart(updated);
  };

  useEffect(() => {
    let totalPrice = 0;
    Object.keys(cart).map((key) => {
      totalPrice += cart[key].qty * cart[key].price;
    });
    setTotal(totalPrice);
  }, [cart]);

  const optionSearch = (optionValue) => {
    console.log(optionValue);
    setSearchOption(optionValue);
  };

  return (
    <Bootdrivethru
      filteredSearch={filteredSearch}
      optionSearch={optionSearch}
      product={product}
      addonCart={addonCart}
      removeItemonCart={removeItemonCart}
      totalprice={totalPrice}
      searchOption={searchOption}
      filtered={filtered}
      addQty={addQty}
      cart={cart}
      optionSearch={optionSearch}
      addOrder={addOrder}
      shops={shops}
      shopid={shopid}
    />
  );
};

export default Orderform;
