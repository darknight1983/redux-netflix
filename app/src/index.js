import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import routes from "./routes";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import createStore from "./store";

// All the code for creating the store is encapsulated within the store folder
const store = createStore();

// Exposing the store on the window object
window.store = store;

store.subscribe(() => {
  // Save state to localStorage
  const state = JSON.stringify(store.getState());
  localStorage["redux-store"] = state;
});

ReactDOM.render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
