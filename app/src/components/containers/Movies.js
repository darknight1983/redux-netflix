import React from "react";
import { connect } from "react-redux";
import Movies from "../ui/Movies";

// This funtion takes the state from redux and maps as props to the compnent
const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const Container = connect(mapStateToProps)(Movies);

export default Container;
