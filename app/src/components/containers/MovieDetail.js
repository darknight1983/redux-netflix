import React from "react";
import MovieDetail from "../ui/MovieDetail";
import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  console.log(props);
};

const Container = connect(mapStateToProps)(MovieDetail);

export default Container;
