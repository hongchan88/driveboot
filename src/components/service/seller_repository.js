import { firebaseDatabase } from "./firebase";

class sellerRepo {
  constructor() {}

  writeShopData(uid, data) {
    firebaseDatabase.ref("shops/" + uid).set(data);
  }

  updateShopData(data) {
    firebaseDatabase.ref("shops/").set(data);
  }
  updateTradingTime(uid, data) {
    firebaseDatabase.ref("shops/" + uid).set(data);
  }
}

export default sellerRepo;
