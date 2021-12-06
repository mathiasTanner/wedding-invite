import React from "react";
//import PropTypes from "prop-types";
import { Grid, Hidden } from "@material-ui/core";
import { useRecoilState } from "recoil";

const useStyles = makeStyles((theme) => ({}));

const Login = (props) => {
  const classes = useStyles();
  const isLogged = useRecoilState(isLoggedState);
  const inviteList = useRecoilValue(inviteListState);

  return (
    <div>
      <p>login component</p>
    </div>
  );
};

export default login;

HomePage.propTypes = {};
