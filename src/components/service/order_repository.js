import { firebaseDatabase } from "./firebase";

class orderRepo {
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

  // async getShops() {
  //   const dbRef = firebaseDatabase.ref();

  //   return dbRef
  //     .child("shops")

  //     .get()
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         const data = snapshot.val();
  //         console.log(data);
  //         return data;
  //       } else {
  //         console.log("No data available");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error, " error");
  //     });
  // }
}

export default orderRepo;
