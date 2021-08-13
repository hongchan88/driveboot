import React from "react";
import { useParams } from "react-router-dom";

const Shopdetail = ({ shops }) => {
  const { id } = useParams();
  const { name, desc, ShopImg, location } = shops[id];
  return (
    <section>
      <div>
        <p>name : {name}</p>
        <p>description : {desc}</p>
        <p>location : {location}</p>
      </div>
    </section>
  );
};

export default Shopdetail;
