import React from "react";
import { useParams } from "react-router-dom";
import Shopinfopanel from "../../shopdetail/shopinfopanel";
import Addshopform from "./addshopform";

const Createshopform = ({ shops, user, editShop }) => {
  const { id } = useParams();

  return (
    <section class="container w-11/12 flex flex-col">
      <Addshopform shop={shops[user.uid]} id={id} editShop={editShop} />
    </section>
  );
};

export default Createshopform;
