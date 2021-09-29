import React, { useEffect, useState } from "react";
import SubmitForm from "./submitform";
const Orderform = ({
  product,
  addOrder,
  shops,
  shopid,
  profile,
  filteredSearch,
  filtered,
  optionSearch,
  setFiltered,
  user,
  searchOption,
}) => {
  // const [filtered, setFiltered] = useState();

  const [totalPrice, setTotal] = useState(0);

  const [cart, setCart] = useState({});

  const addonCart = (
    itemId,
    itemName,
    itemPrice,
    itemImg,
    itemBrand,
    itemSize,
    e
  ) => {
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
        itemImg,
        itemBrand,
        itemSize,
      };
      setCart(updated);
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

    const updated = { ...cart };
    delete updated[itemId.id];
    setCart(updated);
  };

  useEffect(() => {
    let totalPrice = 0;
    Object.keys(cart).map(
      (key) => (totalPrice += cart[key].qty * cart[key].price)
    );
    setTotal(totalPrice.toFixed(2));
  }, [cart]);

  return (
    <SubmitForm
      optionSearch={optionSearch}
      product={product}
      addonCart={addonCart}
      removeItemonCart={removeItemonCart}
      totalprice={totalPrice}
      searchOption={searchOption}
      filtered={filtered}
      addQty={addQty}
      cart={cart}
      addOrder={addOrder}
      shops={shops}
      shopid={shopid}
      profile={profile}
      filteredSearch={filteredSearch}
      setFiltered={setFiltered}
      user={user}
    />
  );
};

export default Orderform;
