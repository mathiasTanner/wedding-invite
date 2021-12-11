import React from "react";
//import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { useRecoilValue } from "recoil";
import { makeStyles } from "@material-ui/core/styles";
import isLoggedState from "../../atoms/isLogged";
import Login from "../visual-components/Login";
import About from "../visual-components/About";
//import Placeholder from "../visual-components/Placeholder";

const useStyles = makeStyles((theme) => ({
  element: {
    margin: "2em",
  },
}));

const HomePage = (props) => {
  const classes = useStyles();
  const isLogged = useRecoilValue(isLoggedState);
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="stretch"
    >
      {!isLogged ? (
        <Grid item className={classes.login}>
          <Login />
        </Grid>
      ) : (
        ""
      )}
      {isLogged ? (
        <span>
          <Grid item className={classes.element}>
            <About />
          </Grid>
          <Grid item className={classes.element}>
            {/*<Placeholder />*/}
          </Grid>
          <Grid item className={classes.element}>
            {/*<Placeholder />*/}
          </Grid>
        </span>
      ) : (
        ""
      )}
    </Grid>
  );
};

export default HomePage;

//Login.propTypes = {};
