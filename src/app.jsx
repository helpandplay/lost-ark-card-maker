import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/home/home";
import Login from "./component/login/login";
import ImageMaker from "./component/image-maker/image-maker";
import "./app.css";

function app() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/image-maker">
          <ImageMaker />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default app;
