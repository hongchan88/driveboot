import { firebaseDatabase } from "./firebase";

class buyerRepo {
  constructor() {}

  writeUserData(uid, data) {
    firebaseDatabase.ref("orders/" + uid).set(data);
  }
  writeProfile(uid, data) {
    firebaseDatabase.ref("profile/" + uid).set(data);
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
    console.log(uid);
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
