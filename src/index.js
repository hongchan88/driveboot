import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./components/service/auth_service";
import Imagefileinput from "./components/imagefileinput/imagefileinput";
import Imageupload from "./components/service/imageupload";

const authProvider = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authProvider={authProvider} />
  </React.StrictMode>,
  document.getElementById("root")
);
