import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {}
});
const Movies = props => {
  const { movies, classes } = props;
  console.log(movies);
  return (
    <div className={classes.root}>
      <Grid container align="center">
        {movies.map(movie => (
          <Grid item xs={3}>
            <div>
              <img src={movie.cover} alt={movie.title} />
              <h1>{movie.title}</h1>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Movies.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Movies);
