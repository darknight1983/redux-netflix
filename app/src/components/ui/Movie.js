import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {},
  logo: {
    width: "50%",
    height: 300
  },
  movie: {
    marginTop: 40
  }
});

const Movie = props => {
  const { classes, cover, title, id } = props;
  return (
    <Grid item xs={12} sm={2} md={4} className={classes.movie}>
      <Link
        to={{
          pathname: "/movieDetail",
          search: `?id=${id}`
        }}
      >
        <div>
          <img src={cover} className={classes.logo} />
          <Typography variant="title" color="secondary">
            {title}
          </Typography>
        </div>
      </Link>
    </Grid>
  );
};

Movie.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Movie);
