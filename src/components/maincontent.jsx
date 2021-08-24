import React, { useEffect, useState } from "react";
import Contents from "./contents/contents";
import Leftnavigation from "./common/leftnavigation";
import styles from "./maincontent.module.css";
import Welcome from "./welcome";
import Shopdetail from "./shopdetail/shopdetail";
import Ordermain from "./order/ordermain";

import orderRepo from "./service/order_repository";
import { set } from "react-hook-form";
import Profile from "./profile/profile";

const firebaseRepository = new orderRepo();

const Maincontent = ({ path, user, authProvider, setLoggedInUser }) => {
  const [order, setOrder] = useState();
  const [shops, setShops] = useState();
  const [profile, setProfile] = useState();

  const updateProfile = (data) => {
    const updated = { ...data };
    setProfile(updated);
    firebaseRepository.writeProfile(user.uid, updated);
  };

  useEffect(() => {
    if (user) {
      const synoff = firebaseRepository.syncProfile(user.uid, (data) => {
        setProfile(data);
      });
      return () => synoff();
    } else {
      return;
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const synoff = firebaseRepository.syncOrders(user.uid, (data) => {
        setOrder(data);
        console.log(shops);
      });
      return () => synoff();
    } else {
      return;
    }
  }, [user]);

  useEffect(() => {
    const synoff = firebaseRepository.syncShops((data) => {
      setShops(data);
      console.log("shop updated");
    });
    return () => synoff();
  }, []);

  // useEffect(() => {
  //   firebaseRepository.getShops().then((data) => {
  //     setShops(data);
  //   });
  // }, []);

  const addOrder = (newOrder) => {
    setOrder((prev) => {
      console.log(prev);
      let updated = {};
      if (prev == undefined) {
        updated[newOrder.id] = { ...newOrder };
        firebaseRepository.writeUserData(user.uid, updated);
        return updated;
      } else {
        updated = { ...prev };
        updated[newOrder.id] = { ...newOrder };
        firebaseRepository.writeUserData(user.uid, updated);
        return updated;
      }
    });
  };

  const deleteOrder = (deleteOrderId) => {
    setOrder((prev) => {
      const updated = { ...prev };
      delete updated[deleteOrderId];
      firebaseRepository.writeUserData(user.uid, updated);
      return updated;
    });
  };

  const pathsNavi = (path) => {
    if (!user) {
      return <Welcome />;
    } else if (user) {
      switch (path) {
        case "/shop":
          return <Contents shops={shops} user={user} />;

        case "/":
          return <Welcome user={user} />;
        case "/shop/:id":
          return <Shopdetail shops={shops} addOrder={addOrder} user={user} />;
        case "/order":
          return (
            <Ordermain order={order} user={user} deleteOrder={deleteOrder} />
          );

        case "/profile":
          return (
            <Profile
              user={user}
              updateProfile={updateProfile}
              profile={profile}
            />
          );
      }
    }
  };
  return (
    <div className={styles.mainbody}>
      <section className={styles.leftnavi}>
        <Leftnavigation
          authProvider={authProvider}
          setLoggedInUser={setLoggedInUser}
          user={user}
        />
      </section>
      <section className={styles.rightcontent}>{pathsNavi(path)}</section>
    </div>
  );
};

export default Maincontent;
