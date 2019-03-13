import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    backgroundColor: "#000",
    width: "100vw",
    height: "100vh"
  },
  cover: {
    width: 400,
    height: "auto",
    marginTop: 20
  },
  white: {
    color: "#FFF"
  }
});

const MovieDetail = props => {
  const { classes, movie } = props;
  console.log(movie);
  return (
    <div className={classes.root}>
      <Grid container xs={12}>
        <Grid item xs={6} align="center">
          <img src={movie.cover} alt="movie" className={classes.cover} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3" color="secondary">
            {movie.title}
          </Typography>
          <span className={classes.white}>{movie.year}</span>
          <ul>
            {movie.starring.map((star, i) => (
              <li key={i}>
                <Typography variant="subtitle2" color="secondary">
                  {star.name}
                </Typography>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
      <Link to="/">Go Back</Link>
    </div>
  );
};

MovieDetail.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(MovieDetail);
