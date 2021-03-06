import React, { useEffect, useState } from "react";
import Welcome from "./buyer/buyerwelcome/welcome";
import Ordermain from "./buyer/orderhistory/ordermain";
import Profile from "./buyer/profile/profile";
import Shopdetail from "./buyer/shopdetail/shopdetail";
import Shops from "./buyer/shops/shops";
import Leftnavigation from "./common/leftnavigation";
import styles from "./maincontent.module.css";
import Manageorder from "./seller/manageorder/manageorder";
import Createshopform from "./seller/myshop/createshopform";
import Myshop from "./seller/myshop/myshop";
import SellerWelcome from "./seller/sellerwelcome/sellerwelcome";
import buyerRepo from "./service/buyer_repository";
import sellerRepo from "./service/seller_repository";

const Maincontent = ({
  path,
  user,
  authProvider,
  setLoggedInUser,
  isBuyer,
  changeBuyerOrSeller,
  setUserNull,
  firebaseBuyerRepo,
  firebaseSellerRepo,
}) => {
  const [order, setOrder] = useState();
  const [sellerOrders, setSellerOrder] = useState();
  const [shops, setShops] = useState();
  const [profile, setProfile] = useState();

  const [filtered, setFiltered] = useState(null);
  const [searchOption, setSearchOption] = useState("name");

  const updateArriveStatus = (orderData) => {
    const updated = { ...orderData };
    updated["arrived"] = true;
    const orderId = updated.id;

    firebaseSellerRepo.updateOrderStatus(orderData.shopid, orderId, updated);
    firebaseBuyerRepo.updateUserStat(user.uid, orderId, updated);
  };

  const updatedSellerOrderStatus = (orderData, updateStatus) => {
    const updated = { ...orderData };

    updated["OrderStatus"] = updateStatus["id"];
    const orderId = updated.id;

    firebaseSellerRepo.updateOrderStatus(user.uid, orderId, updated);
    firebaseBuyerRepo.updateUserStat(orderData.buyerId, orderId, updated);
  };

  const deleteProduct = (productId, e, filterOn) => {
    e.preventDefault();

    if (filterOn) {
      setFiltered((prev) => {
        return prev.filter((key) => key !== productId);
      });
    }

    setShops((prev) => {
      const updatedProductShop = { ...prev };
      delete updatedProductShop[user.uid].product[productId];

      firebaseSellerRepo.updateShopData(updatedProductShop);

      return updatedProductShop;
    });
  };

  const addProduct = (data) => {
    setShops((prev) => {
      const updatedProductShop = { ...prev };
      if (data.id === 1) {
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

    if (product === undefined) {
      return;
    } else if (query !== "" && searchOption === "name") {
      filteredKey = Object.keys(product).filter((key) =>
        product[key].name.toLowerCase().includes(query.toLowerCase())
      );
      return setFiltered(filteredKey);
    } else if (query !== "" && searchOption === "brand") {
      filteredKey = Object.keys(product).filter((key) =>
        product[key].brand.toLowerCase().includes(query.toLowerCase())
      );
      return setFiltered(filteredKey);
    }

    return setFiltered(null);
  };

  const optionSearch = (optionValue) => {
    setSearchOption(optionValue);
  };

  const updateProfile = (data) => {
    console.log(data);
    const updated = { ...data };
    setProfile(updated);
    firebaseBuyerRepo.writeProfile(user.uid, updated);
  };

  console.log(user);
  useEffect(() => {
    if (!isBuyer && user) {
      const synoff = firebaseSellerRepo.syncOrders(user.uid, (data) => {
        setSellerOrder(data);
      });
      return () => synoff();
    }
  }, [isBuyer, user]);

  useEffect(() => {
    if (user) {
      const synoff = firebaseBuyerRepo.syncProfile(user.uid, (data) => {
        setProfile(data);
      });
      return () => synoff();
    }
  }, [user]);

  const setOrderData = (data) => {
    setOrder(data);
  };

  useEffect(() => {
    if (user) {
      const synoff = firebaseBuyerRepo.syncShops((data) => {
        setShops(data);
      });
      return () => synoff();
    }
  }, [user]);

  const addOrder = (newOrder) => {
    orderToSeller(newOrder);
    setOrder((prev) => {
      let updated = {};
      if (prev === undefined) {
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
    firebaseBuyerRepo.writeOrderToSeller(newOrderData);
  };

  const deleteOrder = (deleteOrderId, shopId) => {
    setOrder((prev) => {
      const updated = { ...prev };
      updated[deleteOrderId].OrderStatus = "4";
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
      infoImg:
        "https://res.cloudinary.com/dwbsxpk82/image/upload/v1631881307/default/fikri-rasyid-ezeC8-clZSs-unsplash_dynpg4.jpg",
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
      return <Welcome user={user} />;
    } else if (user && isBuyer) {
      switch (path) {
        case "/shop":
          return <Shops shops={shops} user={user} />;

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
              searchOption={searchOption}
            />
          );
        case "/order":
          return (
            <Ordermain
              setOrderData={setOrderData}
              order={order}
              user={user}
              deleteOrder={deleteOrder}
              updateArriveStatus={updateArriveStatus}
              firebaseBuyerRepo={firebaseBuyerRepo}
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
        default:
          break;
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
        default:
          break;
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
          setUserNull={setUserNull}
        />
      </section>
      <section className={styles.rightcontent}>{pathsNavi(path)}</section>
    </div>
  );
};

export default Maincontent;
