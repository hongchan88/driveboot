import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Orderform from "../common/orderform";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Pickuplocation from "./pickuplocation";

import Shopinfopanel from "./shopinfopanel";

import buyerRepo from "../service/buyer_repository";
const firebaseRepository = new buyerRepo();
const Shopdetail = ({
  addOrder,
  user,
  shops,
  profile,
  filteredSearch,
  filtered,
  optionSearch,
  setFiltered,
}) => {
  const { id } = useParams();

  const { name, product } = shops ? shops[id] : {};

  return (
    <>
      {shops ? (
        <section class="container w-11/12 flex flex-col">
          <Shopinfopanel shops={shops} id={id} />
          <Orderform
            product={product}
            addOrder={addOrder}
            shops={shops}
            shopid={id}
            profile={profile}
            filteredSearch={filteredSearch}
            filtered={filtered}
            optionSearch={optionSearch}
            setFiltered={setFiltered}
          />
        </section>
      ) : (
        <h1>shops loading</h1>
      )}
    </>
  );
};

export default Shopdetail;
