import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  appId: process.env.REACT_APP_FIREBASE_appID,
};
// Initialize Firebase
const firebaseInitialize = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseInitialize.auth();
export const firebaseDatabase = firebaseInitialize.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
