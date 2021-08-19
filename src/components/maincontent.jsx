import React, { useState } from "react";
import Contents from "./contents/contents";
import Leftnavigation from "./common/leftnavigation";
import styles from "./maincontent.module.css";
import Welcome from "./welcome";
import Shopdetail from "./shopdetail/shopdetail";
import Ordermain from "./order/ordermain";
const Maincontent = ({ path }) => {
  const [order, setOrder] = useState();
  const [shops, setShops] = useState({
    1: {
      name: "Fresh Grocery",
      desc: "",
      ShopImg: "",
      location: "",
      id: 1,
    },
    2: {
      name: "Asian market",
      desc: "",
      ShopImg: "",
      location: "",
      id: 2,
      product: {
        1: {
          name: "rice",
          price: 22,
          description: "Please ask for EXP",
          brand: "Chungjungwon",
          size: "",
          id: 1,
        },
        2: {
          name: "chilli pepper",
          price: 23,
          description: "only have fine",
          id: 2,
          brand: "haetae",
        },
        3: {
          name: "pepper",
          price: 23,
          description: "only have fine",
          id: 3,
          brand: "ottogi",
        },
        4: {
          name: "dasida",
          price: 23,
          description: "only have fine",
          id: 4,
          brand: "wang",
        },
        5: {
          name: "soy pepper",
          price: 23,
          description: "only have fine",
          id: 5,
          brand: "Chung",
        },
        6: {
          name: "tofu sauce",
          price: 23,
          description: "only have fine",
          id: 6,
          brand: "fresh",
        },
      },
    },
    3: { name: "Chiken Zone", desc: "", ShopImg: "", location: "", id: 3 },
    4: { name: "Noodle shop", desc: "", ShopImg: "", location: "", id: 4 },
    5: { name: "Korean rice", desc: "", ShopImg: "", location: "", id: 5 },
  });

  const addOrder = (newOrder) => {
    setOrder((prev) => {
      console.log(prev);
      let updated = {};
      if (prev == undefined) {
        updated[newOrder.id] = { ...newOrder };

        return updated;
      } else {
        updated = { ...prev };
        updated[newOrder.id] = { ...newOrder };
        return updated;
      }
    });
  };

  const pathsNavi = (path) => {
    switch (path) {
      case "/shop":
        return <Contents shops={shops} />;

      case "/":
        return <Welcome />;
      case "/shop/:id":
        return <Shopdetail shops={shops} addOrder={addOrder} />;
      case "/order":
        return <Ordermain order={order} />;
    }
  };
  return (
    <div className={styles.mainbody}>
      <section className={styles.leftnavi}>
        <Leftnavigation />
      </section>
      <section className={styles.rightcontent}>{pathsNavi(path)}</section>
    </div>
  );
};

export default Maincontent;
