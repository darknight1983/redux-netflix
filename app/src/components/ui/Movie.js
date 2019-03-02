import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {}
});

const Movie = props => {
  const { classes } = props;
  return (
    <div className="movie">
      <h1>This is the movies page</h1>
    </div>
  );
};

Movie.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Movie);
