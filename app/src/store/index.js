import C from "../constants";
import { showMovie } from "./reducers";
import { createStore, applyMiddleware } from "redux";
import initialState from "../movies.json";

const consoleMessage = store => next => action => {
  let result;

  console.groupCollapsed(`dispatching action ${action.type}`);
  console.log("movies", store.getState().movies);
  result = next(action);

  // Here I can log information about the store and the state of the application.
  console.groupEnd();
  return result;
};

export default () => {
  return applyMiddleware(consoleMessage)(createStore)(showMovie, initialState);
};
