import React from "react";
import { useRecoilValue } from "recoil";
import { makeStyles } from "@material-ui/core/styles";
import selectedLanguageState from "../../atoms/selectedLanguage";
//import PropTypes from "prop-types";
import { AppBar, Typography, Hidden } from "@material-ui/core";
import * as english from "../../assets/languages/EN.json";
import * as french from "../../assets/languages/FR.json";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: `${theme.palette.primary.main}`,
    textAlign: "center",
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const language = useRecoilValue(selectedLanguageState);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Hidden smDown>
        <Typography variant="body1">
          {language.code === "EN"
            ? english.FOOTER.message
            : french.FOOTER.message}
        </Typography>
      </Hidden>
      <Hidden mdUp>
        <Typography variant="caption">
          {language.code === "EN"
            ? english.FOOTER.message
            : french.FOOTER.message}
        </Typography>
      </Hidden>
    </AppBar>
  );
};

export default Footer;

//Footer.propTypes = {};
