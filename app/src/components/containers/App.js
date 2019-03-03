import React from "react";
import { connect } from "react-redux";
import App from "../ui/App";

// This funtion takes the state from redux and maps as props to the compnent
const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const Container = connect(mapStateToProps)(App);

export default Container;
