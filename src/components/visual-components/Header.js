import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useRecoilState } from "recoil";
import languageState from "../../atoms/language";
import * as english from "../../assets/languages/EN.json";
import * as french from "../../assets/languages/FR.json";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Dancing Script",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [languages, setLanguages] = useRecoilState(languageState);

  const handleChange = (event) => {
    console.log(event.target.name);
  };

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
              {english.HEADER.title}
            </Typography>
          </Grid>
          <Grid item>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
              <Select
                native
                value={languages[0].code}
                onChange={handleChange}
                label={english.HEADER.title}
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                {languages.map((lang, i) => {
                  return (
                    <MenuItem value={lang.code} key={i}>
                      {lang.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

Header.propTypes = {};
