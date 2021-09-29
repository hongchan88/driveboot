import { firebaseDatabase } from "./firebase";

class sellerRepo {
  writeShopData(uid, data) {
    firebaseDatabase.ref("shops/" + uid).set(data);
  }

  updateShopData(data) {
    firebaseDatabase.ref("shops/").set(data);
  }
  updateTradingTime(uid, data) {
    firebaseDatabase.ref("shops/" + uid).set(data);
  }

  updateOrderStatus(uid, orderId, data) {
    firebaseDatabase.ref("shops/" + uid + "/order/" + orderId).set(data);
  }

  syncOrders(uid, getUpdated) {
    const starCountRef = firebaseDatabase.ref("shops/" + uid + "/order");
    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();

      getUpdated(data);
    });
    return () => starCountRef.off();
  }
}

export default sellerRepo;
