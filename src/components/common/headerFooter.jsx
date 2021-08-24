import React from "react";
import Globalheader from "./globalheader";
import Globalfooter from "./globalfooter";
import styles from "./common.module.css";
const HeaderFooter = ({ authProvider, children, setLoggedInUser }) => {
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
