import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Auth from "./services/firebase/auth";
import Database from "./services/firebase/database";
import ImageUploader from "./services/cloudary/imageUploader";
import "@fortawesome/fontawesome-free/js/all";
import ImageDownload from "./services/image-download/image_download";

const imageUploader = new ImageUploader();
const auth = new Auth();
const database = new Database();
const imageDownload = new ImageDownload();
ReactDOM.render(
  <React.StrictMode>
    <App
      auth={auth}
      imageUploader={imageUploader}
      database={database}
      ImageDownload={imageDownload}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
