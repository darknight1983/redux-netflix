import React, { Component } from "react";
import Movies from "../containers/Movies";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import BKGLOGO from "../../images/netflix-bkG.jpg";
import NetflixLogo from "../../images/Netflix_Logo_RGB.png";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000"
    },
    secondary: {
      main: "#FFF"
    }
  }
});
const styles = theme => ({
  root: {
    backgroundColor: "red"
  },
  container: {
    backgroundImage: `url(${BKGLOGO})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    width: "100vw",
    height: "100vh"
  },
  logo: {
    width: 100,
    height: "auto"
  }
});
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.container}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Grid container xs={12}>
                <Grid item xs={12}>
                  <img
                    src={NetflixLogo}
                    alt="netflix-logo"
                    className={classes.logo}
                  />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>
        <Movies />
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(App);
