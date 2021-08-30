import { firebaseDatabase } from "./firebase";

class sellerRepo {
  constructor() {}

  writeShopData(uid, data) {
    firebaseDatabase.ref("shops/" + uid).set(data);
  }
}

export default sellerRepo;
