import React from "react";
import { connect } from "react-redux";
import Movies from "../ui/Movies";
import C from "../../constants";
import { getMovie } from "../../actions";

// Importing the constants for testing

// This funtion takes the state from redux and maps as props to the compnent
const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetMovie(index) {
      dispatch(getMovie(index));
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);

export default Container;
