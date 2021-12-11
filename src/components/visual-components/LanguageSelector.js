import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useRecoilState, useRecoilValue } from "recoil";
import selectedLanguageState from "../../atoms/selectedLanguage";
import languageState from "../../atoms/language";
import * as english from "../../assets/languages/EN.json";
import * as french from "../../assets/languages/FR.json";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    fill: `${theme.palette.secondary.dark}`,
  },
  label: {
    color: `${theme.palette.secondary.dark}`,
  },
  select: {
    color: `${theme.palette.secondary.contrastText}`,
  },
  labelFocused: {
    color: `${theme.palette.secondary.contrastText} !important`,
  },
  cssOutlinedInput: {
    backgroundColor: `${theme.palette.secondary.main}`,
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.secondary.dark} !important`,
    },
    "&:hover $notchedOutline": {
      borderColor: `${theme.palette.secondary.contrastText} !important`,
    },
  },
  cssFocused: {},
  cssHover: {},
  notchedOutline: {
    borderColor: `${theme.palette.secondary.dark} !important`,
  },
}));

const LanguageSelector = (props) => {
  const classes = useStyles();
  const languages = useRecoilValue(languageState);
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(
    selectedLanguageState
  );

  const handleChange = (event) => {
    let code = event.target.value;
    let lang = languages.find((el) => el.code === code);
    setSelectedLanguage(lang);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <TextField
        select
        label={
          selectedLanguage.code === "EN"
            ? english.HEADER.language
            : french.HEADER.language
        }
        value={selectedLanguage.code}
        onChange={handleChange}
        SelectProps={{
          classes: {
            icon: classes.icon,
            select: classes.select,
          },
        }}
        InputLabelProps={{
          classes: {
            root: classes.label,
            focused: classes.labelFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
        margin="dense"
        variant="outlined"
      >
        <MenuItem value="" disabled>
          Language
        </MenuItem>
        {languages.map((language, i) => {
          return (
            <MenuItem value={language.code} key={i}>
              {language.name}
            </MenuItem>
          );
        })}
      </TextField>
    </FormControl>
  );
};

export default LanguageSelector;

LanguageSelector.propTypes = {};
