import { firebaseDatabase } from "./firebase";

class buyerRepo {
  // updateOrderStatus(uid, orderId, data) {
  //
  //   firebaseDatabase.ref("orders/" + uid + "/" + orderId).set(data);
  // }
  updateUserStat(uid, orderId, data) {
    firebaseDatabase.ref("orders/" + uid + "/" + orderId).set(data);
  }

  writeUserOrder(uid, data) {
    firebaseDatabase.ref("orders/" + uid).set(data);
  }
  writeProfile(uid, data) {
    firebaseDatabase.ref("profile/" + uid).set(data);
  }

  writeOrderToSeller(newOrderData) {
    firebaseDatabase
      .ref("shops/" + newOrderData.shopid + "/order/" + newOrderData.id)
      .set(newOrderData);
  }

  syncShops(getUpdated) {
    const starCountRef = firebaseDatabase.ref("shops");
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      getUpdated(data);
    });
    return () => starCountRef.off();
  }

  syncOrders(uid, getUpdated) {
    const starCountRef = firebaseDatabase.ref("orders/" + uid);
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      getUpdated(data);
    });
    return () => starCountRef.off();
  }

  syncProfile(uid, getUpdated) {
    const starCountRef = firebaseDatabase.ref("profile/" + uid);
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      getUpdated(data);
    });
    return () => starCountRef.off();
  }
}

export default buyerRepo;
