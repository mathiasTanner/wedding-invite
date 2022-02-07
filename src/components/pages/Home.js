import { React, useEffect } from "react";
//import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { useRecoilState } from "recoil";
import Cookies from "universal-cookie";
import { makeStyles } from "@material-ui/core/styles";
import isLoggedState from "../../atoms/isLogged";
import Login from "../visual-components/Login";
import About from "../visual-components/About";
//import Placeholder from "../visual-components/Placeholder";

const useStyles = makeStyles((theme) => ({
  element: {
    margin: "2em",
    [theme.breakpoints.down("sm")]: {
      margin: "1em",
    },
  },
}));

const HomePage = (props) => {
  const classes = useStyles();
  const [isLogged, setIslogged] = useRecoilState(isLoggedState);

  const cookies = new Cookies();

  useEffect(() => {
    if (cookies.get("isLogged") !== undefined) {
      setIslogged(cookies.get("isLogged"));
    }
  });

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
