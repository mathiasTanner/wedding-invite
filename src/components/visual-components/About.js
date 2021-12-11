import React from "react";
//import PropTypes from "prop-types";
import { Avatar, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useRecoilValue } from "recoil";
import { makeStyles } from "@material-ui/core/styles";
//import inviteListState from "../../atoms/inviteList";
import selectedLanguageState from "../../atoms/selectedLanguage";
import us from "../../assets/images/us.jpg";
import { Typography } from "@material-ui/core";
import * as english from "../../assets/languages/EN.json";
import * as french from "../../assets/languages/FR.json";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: `${theme.palette.primary.light}`,
    padding: "2em",
  },
  avatar: {
    textAlign: "center",
    margin: "auto",
  },
  image: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  title: {
    fontFamily: "Dancing Script",
    margin: "auto",
    textAlign: "center",
  },
}));

const About = (props) => {
  const classes = useStyles();
  //const inviteList = useRecoilValue(inviteListState);
  const language = useRecoilValue(selectedLanguageState);

  return (
    <Paper className={classes.container}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="stretch"
      >
        <Grid item className={classes.avatar}>
          <Avatar alt="us" src={us} className={classes.image} />
        </Grid>
        <Grid item>
          <Typography variant="h2" className={classes.title}>
            {language.code === "EN"
              ? english.ABOUT.married
              : french.ABOUT.married}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default About;

//About.propTypes = {};
