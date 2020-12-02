import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/home/home";
import Login from "./component/login/login";
import ImageMaker from "./component/image-maker/image-maker";
import "./app.css";

function app({ auth, imageUploader, database, ImageDownload }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home
            auth={auth}
            imageUploader={imageUploader}
            database={database}
            ImageDownload={ImageDownload}
          />
        </Route>
        <Route path="/login">
          <Login auth={auth} />
        </Route>
        <Route path="/image-maker">
          <ImageMaker />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default app;
