import React, { useState } from "react";
import Contents from "./contents/contents";
import Leftnavigation from "./common/leftnavigation";
import styles from "./maincontent.module.css";
import Welcome from "./welcome";
import Shopdetail from "./shopdetail/shopdetail";
const Maincontent = ({ path }) => {
  const [shops, setShops] = useState({
    1: {
      name: "Fresh Grocery",
      desc: "",
      ShopImg: "",
      location: "",
      id: 1,
    },
    2: { name: "Asian market", desc: "", ShopImg: "", location: "", id: 2 },
    3: { name: "Chiken Zone", desc: "", ShopImg: "", location: "", id: 3 },
    4: { name: "Chiken Zone", desc: "", ShopImg: "", location: "", id: 3 },
    5: { name: "Chiken Zone", desc: "", ShopImg: "", location: "", id: 3 },
  });

  const pathsNavi = (path) => {
    switch (path) {
      case "/":
        return <Contents shops={shops} />;

      case "/welcome":
        return <Welcome />;
      case "/shop/:id":
        return <Shopdetail shops={shops} />;
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
