import React from "react";
<<<<<<< HEAD
//import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { useRecoilValue } from "recoil";
import Login from "../visual-components/Login";
=======
import PropTypes from "prop-types";
import { Grid, Hidden } from "@material-ui/core";
import { useRecoilState } from "recoil";
>>>>>>> af496d7617243bf1ae0099c0e79c79ab7efeb7ea

const useStyles = makeStyles((theme) => ({}));

const HomePage = (props) => {
  const classes = useStyles();
<<<<<<< HEAD
  const isLogged = useRecoilValue(isLoggedState);
  const inviteList = useRecoilValue(inviteListState);
=======
  const [isLogged, setIsLogged] = useRecoilState(isLoggedState);
  const [inviteList, setInviteList] = useRecoilState(inviteListState);
>>>>>>> af496d7617243bf1ae0099c0e79c79ab7efeb7ea

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="stretch"
    >
<<<<<<< HEAD
      <Grid item className={classes.login}>
        {!isLogged ? <Login /> : ""}
      </Grid>
=======
      {}
      <Grid item className={classes.login}></Grid>
>>>>>>> af496d7617243bf1ae0099c0e79c79ab7efeb7ea
    </Grid>
  );
};

export default HomePage;

//Login.propTypes = {};
