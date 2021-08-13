import React from "react";
import Globalheader from "./globalheader";
import Globalfooter from "./globalfooter";
import styles from "./common.module.css";
const HeaderFooter = (props) => {
  return (
    <div className={styles.container}>
      <section className={styles.globalheader}>
        <Globalheader />
      </section>
      <section className={styles.globalcontent}>{props.children}</section>
      <section className={styles.globalfooter}>
        <Globalfooter />
      </section>
    </div>
  );
};

export default HeaderFooter;
