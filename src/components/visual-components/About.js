import React from "react";
//import PropTypes from "prop-types";
import { Avatar, Grid, Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useRecoilValue } from "recoil";
import { makeStyles } from "@material-ui/core/styles";
//import inviteListState from "../../atoms/inviteList";
import selectedLanguageState from "../../atoms/selectedLanguage";
import us from "../../assets/images/us.jpg";
import { Typography } from "@material-ui/core";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
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
    width: theme.spacing(21),
    height: theme.spacing(21),
  },
  title: {
    fontFamily: "Dancing Script",
    margin: "auto",
    textAlign: "center",
  },
  subtitle: {
    margin: "0.75em",
    fontFamily: "Dancing Script",
    textAlign: "center",
  },
  content: {
    margin: "0.5em",
    textAlign: "center",
  },
  buttons: {
    margin: "1em",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "0",
    },
  },
  buttonCell: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "5px",
    },
  },
  icon: {
    margin: "auto",
  },
  mapButton: {
    textTransform: "unset !important",
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
        <Grid item>
          <Typography variant="h4" className={classes.subtitle}>
            {language.code === "EN" ? english.ABOUT.date : french.ABOUT.date}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" className={classes.content}>
            {language.code === "EN" ? english.ABOUT.infos : french.ABOUT.infos}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" className={classes.content}>
            {language.code === "EN" ? english.ABOUT.place : french.ABOUT.place}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="button"
            component="div"
            className={classes.content}
          >
            {language.code === "EN"
              ? english.ABOUT.addressFirstLine
              : french.ABOUT.addressFirstLine}
          </Typography>
          <Typography
            variant="button"
            component="div"
            className={classes.content}
          >
            {language.code === "EN"
              ? english.ABOUT.addressSecondLine
              : french.ABOUT.addressSecondLine}
          </Typography>
          <Typography
            variant="button"
            component="div"
            className={classes.content}
          >
            {language.code === "EN"
              ? english.ABOUT.addressThirdLine
              : french.ABOUT.addressThirdLine}
          </Typography>
          <Typography
            variant="button"
            component="div"
            className={classes.content}
          >
            {language.code === "EN"
              ? english.ABOUT.addressFourthLine
              : french.ABOUT.addressFourthLine}
          </Typography>
          <div className={classes.content}>
            <Button
              endIcon={<MapTwoToneIcon />}
              onClick={props.scroll}
              className={classes.mapButton}
            >
              {language.code === "EN"
                ? english.ABOUT.mapButton
                : french.ABOUT.mapButton}
            </Button>
          </div>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" className={classes.content}>
            {language.code === "EN"
              ? english.ABOUT.answerText
              : french.ABOUT.answerText}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" className={classes.content}>
            {language.code === "EN"
              ? english.ABOUT.updates
              : french.ABOUT.updates}
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="stretch"
            className={classes.buttons}
          >
            <Grid item className={classes.buttonCell}>
              <Button
                variant="contained"
                target="_blank"
                rel="noopener noreferrer"
                href={
                  language.code === "EN"
                    ? english.ABOUT.formLink
                    : french.ABOUT.formLink
                }
              >
                {language.code === "EN"
                  ? english.ABOUT.answerFormLabel
                  : french.ABOUT.answerFormLabel}
              </Button>
            </Grid>
            <Grid item className={classes.buttonCell}>
              <Button
                variant="contained"
                target="_blank"
                rel="noopener noreferrer"
                href={
                  language.code === "EN"
                    ? english.ABOUT.giftListLink
                    : french.ABOUT.giftListLink
                }
              >
                {language.code === "EN"
                  ? english.ABOUT.giftListLabel
                  : french.ABOUT.giftListLabel}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default About;

//About.propTypes = {};
