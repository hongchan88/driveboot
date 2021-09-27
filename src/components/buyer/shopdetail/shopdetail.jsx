import React from "react";
import { useParams } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import buyerRepo from "../../service/buyer_repository";
import Orderform from "../orderform/orderform";
import Shopinfopanel from "./shopinfopanel";

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
            user={user}
          />
        </section>
      ) : (
        <h1>shops loading</h1>
      )}
    </>
  );
};

export default Shopdetail;
