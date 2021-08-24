import firebase from "firebase";
import { firebaseAuth, googleProvider } from "./firebase";

class AuthService {
  login() {
    return firebaseAuth.signInWithPopup(googleProvider);
  }

  onAuthChange(userChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      userChanged(user);
    });
  }
  signOut() {
    firebaseAuth.signOut();
  }
}

export default AuthService;
