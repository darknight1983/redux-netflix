import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import App from "./components/containers/App";
import Movies from "./components/containers/Movies";
import Movie from "./components/containers/Movie";

const history = createBrowserHistory();

export default (
  <Router history={history}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/movies" component={Movies} />
    </div>
  </Router>
);
