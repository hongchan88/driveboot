import React from "react";
import styles from "./common.module.css";
import Globalfooter from "./globalfooter";
import Globalheader from "./globalheader";
const HeaderFooter = ({ authProvider, children, setLoggedInUser }) => {
  console.log("headfooter");
  return (
    <div className={styles.container}>
      <section className={styles.globalheader}>
        <Globalheader
          authProvider={authProvider}
          setLoggedInUser={setLoggedInUser}
        />
      </section>
      <section className={styles.globalcontent}>{children}</section>
      <section className={styles.globalfooter}>
        <Globalfooter />
      </section>
    </div>
  );
};

export default HeaderFooter;
