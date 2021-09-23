import React, { useEffect, useState } from "react";
import Contents from "./contents/contents";
import Leftnavigation from "./common/leftnavigation";
import styles from "./maincontent.module.css";
import Welcome from "./welcome";
import Shopdetail from "./shopdetail/shopdetail";
import Ordermain from "./orderhistory/ordermain";

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
  const [sellerOrders, setSellerOrder] = useState();
  const [shops, setShops] = useState();
  const [profile, setProfile] = useState();

  const [filtered, setFiltered] = useState(null);
  const [searchOption, setSearchOption] = useState("name");

  console.log(user);
  console.log(path);
  console.log(shops);

  const updatedOrderStatus = (orderData) => {
    const updated = { ...orderData };
    updated["arrived"] = true;
    const orderId = updated.id;
    firebaseSellerRepo.updateOrderStatus(user.uid, orderId, updated);
    firebaseBuyerRepo.updateUserStat(user.uid, orderId, updated);
  };

  const updatedSellerOrderStatus = (orderData, updateStatus) => {
    const updated = { ...orderData };
    console.log(updateStatus["id"], "update status");

    updated["OrderStatus"] = updateStatus["id"];
    const orderId = updated.id;

    firebaseSellerRepo.updateOrderStatus(user.uid, orderId, updated);
    firebaseBuyerRepo.updateUserStat(user.uid, orderId, updated);
  };

  useEffect(() => {
    if (isBuyer && user) {
      const synoff = firebaseSellerRepo.syncOrders(user.uid, (data) => {
        setSellerOrder(data);
      });
      return () => synoff();
    }
  }, [user]);

  const deleteProduct = (productId, e, filterOn) => {
    e.preventDefault();

    if (filterOn) {
      setFiltered((prev) => {
        return prev.filter((key) => key != productId);
      });
    }

    setShops((prev) => {
      const updatedProductShop = { ...prev };
      delete updatedProductShop[user.uid].product[productId];

      firebaseSellerRepo.updateShopData(updatedProductShop);

      console.log(filtered, "delete filter");
      return updatedProductShop;
    });
  };

  const addProduct = (data) => {
    setShops((prev) => {
      const productId = data.id;
      const updatedProductShop = { ...prev };
      if (data.id == 1) {
        updatedProductShop[user.uid]["product"] = {
          [data.id]: { ...data },
        };
      } else {
        updatedProductShop[user.uid]["product"][data.id] = { ...data };
      }

      firebaseSellerRepo.updateShopData(updatedProductShop);
      return updatedProductShop;
    });
  };

  const filteredSearch = (product, query) => {
    let filteredKey = [];
    console.log(query);

    if (product === undefined) {
      return;
    } else if (query != "" && searchOption == "name") {
      filteredKey = Object.keys(product).filter((key) =>
        product[key].name.toLowerCase().includes(query.toLowerCase())
      );
      return setFiltered(filteredKey);
    } else if (query != "" && searchOption == "brand") {
      filteredKey = Object.keys(product).filter((key) =>
        product[key].brand.toLowerCase().includes(query.toLowerCase())
      );
      return setFiltered(filteredKey);
    }

    return setFiltered(null);
  };

  const optionSearch = (optionValue) => {
    console.log(optionValue);
    setSearchOption(optionValue);
  };

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
      console.log(shops, "shop updated");
    });
    return () => synoff();
  }, [user]);

  // useEffect(() => {
  //   firebaseRepository.getShops().then((data) => {
  //     setShops(data);
  //   });
  // }, []);

  const addOrder = (newOrder) => {
    orderToSeller(newOrder);
    setOrder((prev) => {
      console.log(prev);
      let updated = {};
      if (prev == undefined) {
        updated[newOrder.id] = { ...newOrder };
        firebaseBuyerRepo.writeUserOrder(user.uid, updated);

        return updated;
      } else {
        updated = { ...prev };
        updated[newOrder.id] = { ...newOrder };
        firebaseBuyerRepo.writeUserOrder(user.uid, updated);

        return updated;
      }
    });
  };

  const orderToSeller = (newOrderData) => {
    console.log(newOrderData.shopid);
    firebaseBuyerRepo.writeOrderToSeller(newOrderData);
  };

  const deleteOrder = (deleteOrderId, shopId) => {
    setOrder((prev) => {
      const updated = { ...prev };
      updated[deleteOrderId].OrderStatus = 4;
      firebaseSellerRepo.updateOrderStatus(
        shopId,
        deleteOrderId,
        updated[deleteOrderId]
      );
      delete updated[deleteOrderId];
      firebaseBuyerRepo.writeUserOrder(user.uid, updated);
      return updated;
    });
  };

  const addShop = (uid) => {
    const updated = {
      shopImg: "img/grocery",
      id: uid,
      name: "New Shop name",
      location: "",
      desc: "Introduce your shop",
      opencloseTime: {
        monday: { open: "08:00", close: "18:00" },
        tuesday: { open: "08:00", close: "18:00" },
        wednesday: { open: "08:00", close: "18:00" },
        thursday: { open: "08:00", close: "18:00" },
        friday: { open: "08:00", close: "18:00" },
        saturday: { open: "08:00", close: "18:00" },
        sunday: { open: "08:00", close: "18:00" },
      },
      opencloseDate: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      },
    };

    firebaseSellerRepo.writeShopData(uid, updated);
  };
  const editShop = (uid, data) => {
    const updated = { ...shops };
    updated[uid] = { ...data };

    firebaseSellerRepo.updateShopData(updated);
  };

  const updateTradingTime = (uid, data, dateOrTime) => {
    const updated = { ...shops };
    updated[uid][dateOrTime] = { ...data };

    firebaseSellerRepo.updateShopData(updated);
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
              filteredSearch={filteredSearch}
              filtered={filtered}
              optionSearch={optionSearch}
              setFiltered={setFiltered}
            />
          );
        case "/order":
          return (
            <Ordermain
              order={order}
              user={user}
              deleteOrder={deleteOrder}
              updatedOrderStatus={updatedOrderStatus}
            />
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
            <Myshop user={user} shop={shops?.[user.uid]} addShop={addShop} />
          );
        case "/myshop/:id":
          return (
            <Createshopform
              user={user}
              shops={shops}
              addShop={addShop}
              editShop={editShop}
              updateTradingTime={updateTradingTime}
              tradingToggle={shops?.[user.uid]?.opencloseDate}
              tradingTime={shops?.[user.uid]?.opencloseTime}
              filteredSearch={filteredSearch}
              optionSearch={optionSearch}
              filtered={filtered}
              searchOption={searchOption}
              deleteProduct={deleteProduct}
              addProduct={addProduct}
              setFiltered={setFiltered}
            />
          );

        case "/manageorder":
          return (
            <Manageorder
              user={user}
              sellerOrders={sellerOrders}
              updatedSellerOrderStatus={updatedSellerOrderStatus}
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
          changeBuyerOrSeller={changeBuyerOrSeller}
          isBuyer={isBuyer}
        />
      </section>
      <section className={styles.rightcontent}>{pathsNavi(path)}</section>
    </div>
  );
};

export default Maincontent;
