import React from "react";
import PropTypes from "prop-types";
import { Grid, Hidden } from "@material-ui/core";
import { useRecoilState } from "recoil";

const useStyles = makeStyles((theme) => ({}));

const HomePage = (props) => {
  const classes = useStyles();
  const [isLogged, setIsLogged] = useRecoilState(isLoggedState);
  const [inviteList, setInviteList] = useRecoilState(inviteListState);

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="stretch"
    >
      {}
      <Grid item className={classes.login}></Grid>
    </Grid>
  );
};

export default HomePage;

HomePage.propTypes = {};
