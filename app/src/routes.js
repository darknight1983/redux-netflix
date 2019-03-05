import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import App from "./components/ui/App";
import Movies from "./components/containers/Movies";
import MovieDetail from "./components/containers/MovieDetail";

const history = createBrowserHistory();

export default (
  <Router history={history}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/movies" component={Movies} />
      <Route path="/movieDetail" component={MovieDetail} />
    </div>
  </Router>
);
