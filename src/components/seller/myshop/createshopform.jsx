import React from "react";
import { useParams } from "react-router-dom";
import Shopinfopanel from "../../shopdetail/shopinfopanel";
import Addshopform from "./addshopform";

const Createshopform = ({
  shops,
  user,
  editShop,
  updateTradingTime,
  tradingToggle,
  tradingTime,
  filteredSearch,
  optionSearch,
  filtered,
  searchOption,
  deleteProduct,
  addProduct,
  setFiltered,
}) => {
  const { id } = useParams();
  console.log(tradingToggle);
  return (
    <section class="container w-11/12 flex flex-col">
      <Addshopform
        shop={shops[id]}
        id={id}
        editShop={editShop}
        updateTradingTime={updateTradingTime}
        tradingToggle={tradingToggle}
        tradingTime={tradingTime}
        filteredSearch={filteredSearch}
        optionSearch={optionSearch}
        filtered={filtered}
        searchOption={searchOption}
        deleteProduct={deleteProduct}
        addProduct={addProduct}
        setFiltered={setFiltered}
      />
    </section>
  );
};

export default Createshopform;
