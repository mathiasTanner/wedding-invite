import { React } from "react";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@mui/material/Skeleton";
//import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

//import Placeholder from "../visual-components/Placeholder";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: `${theme.palette.primary.light}`,
    padding: "2em",
    width: "80%",
    margin: "auto",
    marginTop: "30%",
    height: "50%",
  },
}));

const Loading = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Skeleton variant="text" animation="pulse" />
      <Skeleton variant="text" animation="pulse" />
      <Skeleton variant="text" animation="pulse" />
      <Skeleton variant="text" animation="pulse" />
    </Paper>
  );
};

export default Loading;

//Login.propTypes = {};
