import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./components/service/auth_service";
import buyerRepo from "./components/service/buyer_repository";
import sellerRepo from "./components/service/seller_repository";
const authProvider = new AuthService();
const firebaseBuyerRepo = new buyerRepo();
const firebaseSellerRepo = new sellerRepo();

ReactDOM.render(
  <React.StrictMode>
    <App
      authProvider={authProvider}
      firebaseBuyerRepo={firebaseBuyerRepo}
      firebaseSellerRepo={firebaseSellerRepo}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
