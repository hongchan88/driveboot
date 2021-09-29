import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./components/service/auth_service";

const authProvider = new AuthService();

ReactDOM.render(
  <App authProvider={authProvider} />,
  document.getElementById("root")
);
