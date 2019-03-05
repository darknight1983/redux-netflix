import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    backgroundColor: "gray",
    width: "100vw",
    height: "100vh"
  }
});

const MovieDetail = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <h1>This is a test</h1>
      <Link to="/">Go Back</Link>
    </div>
  );
};

MovieDetail.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(MovieDetail);
