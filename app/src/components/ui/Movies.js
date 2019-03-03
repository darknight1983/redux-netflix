import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    backgroundColor: "#000"
  },
  logo: {
    width: "50%",
    height: 300
  },
  movie: {
    marginTop: 40
  }
});

const Movies = props => {
  const { classes, movies } = props;

  return (
    <div className={classes.root}>
      <Grid container align="center">
        {movies.map(movie => (
          <Grid item xs={4} className={classes.movie}>
            <div>
              <img src={movie.cover} className={classes.logo} />
              <Typography variant="title" color="secondary">
                {movie.title}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Movies.propTypes = {
  classes: PropTypes.object,
  movies: PropTypes.array
};

export default withStyles(styles)(Movies);
