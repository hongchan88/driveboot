import React, { useEffect, useState } from "react";
import Contents from "./contents/contents";
import Leftnavigation from "./common/leftnavigation";
import styles from "./maincontent.module.css";
import Welcome from "./welcome";
import Shopdetail from "./shopdetail/shopdetail";
import Ordermain from "./order/ordermain";

import { set } from "react-hook-form";
import Profile from "./profile/profile";
import SellerWelcome from "./seller/sellerwelcome/sellerwelcome";
import Myshop from "./seller/myshop/myshop";
import Manageorder from "./seller/manageorder/manageorder";
import buyerRepo from "./service/buyer_repository";
import sellerRepo from "./service/seller_repository";
import Createshopform from "./seller/myshop/createshopform";

const firebaseBuyerRepo = new buyerRepo();
const firebaseSellerRepo = new sellerRepo();

const Maincontent = ({
  path,
  user,
  authProvider,
  setLoggedInUser,
  isBuyer,
  changeBuyerOrSeller,
}) => {
  const [order, setOrder] = useState();
  const [shops, setShops] = useState();
  const [profile, setProfile] = useState();

  const updateProfile = (data) => {
    const updated = { ...data };
    setProfile(updated);
    firebaseBuyerRepo.writeProfile(user.uid, updated);
  };

  useEffect(() => {
    if (user) {
      const synoff = firebaseBuyerRepo.syncProfile(user.uid, (data) => {
        setProfile(data);
      });
      return () => synoff();
    } else {
      return;
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const synoff = firebaseBuyerRepo.syncOrders(user.uid, (data) => {
        setOrder(data);
        console.log(shops);
      });
      return () => synoff();
    } else {
      return;
    }
  }, [user]);

  useEffect(() => {
    const synoff = firebaseBuyerRepo.syncShops((data) => {
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
        firebaseBuyerRepo.writeUserData(user.uid, updated);
        return updated;
      } else {
        updated = { ...prev };
        updated[newOrder.id] = { ...newOrder };
        firebaseBuyerRepo.writeUserData(user.uid, updated);
        return updated;
      }
    });
  };

  const deleteOrder = (deleteOrderId) => {
    setOrder((prev) => {
      const updated = { ...prev };
      delete updated[deleteOrderId];
      firebaseBuyerRepo.writeUserData(user.uid, updated);
      return updated;
    });
  };

  const addShop = (uid) => {
    if (!shops[uid]) {
      const updated = {
        shopImg: "img/grocery",
        id: uid,
        name: "Asiana Airlines",
        location: "",
        desc: "",
      };
      firebaseSellerRepo.writeShopData(uid, updated);
    }
  };
  const editShop = (uid, data) => {
    const updated = { ...shops };
    updated[uid] = { ...data };
    firebaseSellerRepo.writeShopData(uid, updated);
    setShops(updated);
  };
  const pathsNavi = (path) => {
    if (!user) {
      return <Welcome />;
    } else if (user && isBuyer) {
      switch (path) {
        case "/shop":
          return <Contents shops={shops} user={user} />;

        case "/":
          return <Welcome user={user} />;
        case "/shop/:id":
          return (
            <Shopdetail
              shops={shops}
              addOrder={addOrder}
              user={user}
              profile={profile}
            />
          );
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
    } else if (user && !isBuyer) {
      switch (path) {
        case "/":
          return <SellerWelcome user={user} />;

        case "/myshop":
          return (
            <Myshop user={user} shops={shops?.user?.uid} addShop={addShop} />
          );
        case "/myshop/:id":
          return (
            <Createshopform
              user={user}
              shops={shops}
              addShop={addShop}
              editShop={editShop}
            />
          );

        case "/manageorder":
          return <Manageorder user={user} />;
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
          changeBuyerOrSeller={changeBuyerOrSeller}
          isBuyer={isBuyer}
        />
      </section>
      <section className={styles.rightcontent}>{pathsNavi(path)}</section>
    </div>
  );
};

export default Maincontent;
