import React, { useState } from "react";
//import PropTypes from "prop-types";
import { useRecoilValue, useRecoilState } from "recoil";
import { makeStyles } from "@material-ui/core/styles";
import isLoggedState from "../../atoms/isLogged";
import inviteListState from "../../atoms/inviteList";
import selectedLanguageState from "../../atoms/selectedLanguage";
import * as english from "../../assets/languages/EN.json";
import * as french from "../../assets/languages/FR.json";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core";
import Cookies from "universal-cookie";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: `${theme.palette.primary.main}`,
    padding: "2em",
  },
  title: {
    fontFamily: "Dancing Script",
    margin: "auto",
    textAlign: "center",
  },
  message: {
    margin: "2em",
    textAlign: "center",
  },
  form: {},
  textfield: {
    backgroundColor: `${theme.palette.secondary.main}`,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: `${theme.palette.secondary.dark}`,
      },
      "&:hover fieldset": {
        borderColor: `${theme.palette.secondary.light}`,
      },
      "&.Mui-focused fieldset": {
        borderColor: `#000000`,
      },
    },
    "& label.Mui-focused": {
      color: `#000000`,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "5px",
    },
  },
  button: {
    border: "1px solid",
    borderColor: `${theme.palette.secondary.dark}`,
    "&:hover": {
      backgroundColor: `${theme.palette.primary.light} `,
      color: `${theme.palette.secondary.dark} `,
      borderColor: `${theme.palette.secondary.light} `,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "5px",
    },
  },
  errorMessage: {
    color: "red",
  },
  wrongMessage: {
    textAlign: "center",
    marginTop: "2em",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [isLogged, setIslogged] = useRecoilState(isLoggedState);
  const inviteList = useRecoilValue(inviteListState);
  const selectedLanguage = useRecoilValue(selectedLanguageState);
  const [formInput, setFormInput] = useState({ first: "", last: "" });
  const [errorHidden, setErrorHidden] = useState(true);
  const [wrongHidden, setWrongHidden] = useState(true);
  const cookies = new Cookies();

  const submitForm = () => {
    console.log(isLogged);
    if (formInput.first === "" || formInput.last === "") {
      setErrorHidden(false);
      setWrongHidden(true);
    } else {
      setErrorHidden(true);
      if (inviteList[0].first_name !== undefined) {
        for (let invited of inviteList) {
          let firstName = invited.first_name || "";
          let lastName = invited.last_name || "";
          if (
            firstName.toUpperCase() === formInput.first.toUpperCase() &&
            lastName.toUpperCase() === formInput.last.toUpperCase()
          ) {
            setErrorHidden(true);
            setWrongHidden(true);
            setIslogged(true);
            cookies.set("isLogged", true, { maxAge: 3600 });
          } else {
            setWrongHidden(false);
          }
        }
      }
    }
  };

  return (
    <Paper className={classes.container}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="stretch"
      >
        <Grid item className={classes.titleContainer}>
          <Typography variant="h1" className={classes.title}>
            {selectedLanguage.code === "EN"
              ? english.LOGIN.welcome
              : french.LOGIN.welcome}
          </Typography>
        </Grid>
        <Grid item className={classes.message}>
          <Typography variant="body1">
            {selectedLanguage.code === "EN"
              ? english.LOGIN.message
              : french.LOGIN.message}
          </Typography>
        </Grid>
        <Grid item className={classes.form}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid item>
              <TextField
                className={classes.textfield}
                required
                id="outlined-required"
                label={
                  selectedLanguage.code === "EN"
                    ? english.LOGIN.firstName
                    : french.LOGIN.firstName
                }
                variant="outlined"
                value={formInput.first || ""}
                onChange={(event) => {
                  setFormInput({ ...formInput, first: event.target.value });
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                className={classes.textfield}
                required
                id="outlined-required"
                label={
                  selectedLanguage.code === "EN"
                    ? english.LOGIN.lastName
                    : french.LOGIN.lastName
                }
                variant="outlined"
                value={formInput.last || ""}
                onChange={(event) => {
                  setFormInput({ ...formInput, last: event.target.value });
                }}
              />
            </Grid>
            <Grid item>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                onClick={submitForm}
                className={classes.button}
              >
                {selectedLanguage.code === "EN"
                  ? english.LOGIN.submit
                  : french.LOGIN.submit}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {!errorHidden ? (
          <Grid item className={classes.wrongMessage}>
            <Typography variant="caption" className={classes.errorMessage}>
              {selectedLanguage.code === "EN"
                ? english.LOGIN.emptyMessage
                : french.LOGIN.emptyMessage}
            </Typography>
          </Grid>
        ) : (
          ""
        )}
        {!wrongHidden ? (
          <Grid item className={classes.wrongMessage}>
            <Typography variant="body1">
              {selectedLanguage.code === "EN"
                ? english.LOGIN.wrongMessage
                : french.LOGIN.wrongMessage}
            </Typography>
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </Paper>
  );
};

export default Login;

Login.propTypes = {};
