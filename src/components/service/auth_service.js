import firebase from "firebase";
import { firebaseAuth, googleProvider } from "./firebase";

class AuthService {
  login() {
    return firebaseAuth.signInWithPopup(googleProvider);
  }

  createUser(email, password) {
    return firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  loginEmail(email, password) {
    return firebaseAuth.signInWithEmailAndPassword(email, password);
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
