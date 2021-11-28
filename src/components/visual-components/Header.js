import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useRecoilState } from "recoil";
import selectedLanguageState from "../../atoms/selectedLanguage";
import * as english from "../../assets/languages/EN.json";
import * as french from "../../assets/languages/FR.json";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LanguageSelector from "./LanguageSelector";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Dancing Script",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(
    selectedLanguageState
  );

  return (
    <AppBar>
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4" className={classes.title}>
              {selectedLanguage.code === "EN"
                ? english.HEADER.title
                : french.HEADER.title}
            </Typography>
          </Grid>
          <Grid item>
            <LanguageSelector />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

Header.propTypes = {};
