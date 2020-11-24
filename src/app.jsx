import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/home/home";
import Login from "./component/login/login";
import ImageMaker from "./component/image-maker/image-maker";
import "./app.css";
import JobImage from "./component/job_image/job_image";

function app({ auth }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home auth={auth} />
        </Route>
        <Route path="/login">
          <Login auth={auth} />
        </Route>
        <Route path="/image-maker">
          <ImageMaker />
        </Route>
        <Route path="/sprite">
          <JobImage job="배틀마스터" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default app;
