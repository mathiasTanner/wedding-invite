import React from "react";
//import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { useRecoilValue } from "recoil";
import Login from "../visual-components/Login";

const useStyles = makeStyles((theme) => ({}));

const HomePage = (props) => {
  const classes = useStyles();
  const isLogged = useRecoilValue(isLoggedState);
  const inviteList = useRecoilValue(inviteListState);

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="stretch"
    >
      <Grid item className={classes.login}>
        {!isLogged ? <Login /> : ""}
      </Grid>
    </Grid>
  );
};

export default HomePage;

//Login.propTypes = {};
