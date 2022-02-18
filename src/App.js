import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { useRecoilState } from "recoil";
import { makeStyles } from "@material-ui/core/styles";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Header from "./components/visual-components/Header";
import Footer from "./components/visual-components/Footer";
import HomePage from "./components/pages/Home";
import bodyBackground from "./assets/images/body_background.jpg";
import languageState from "./atoms/language";
import inviteListState from "./atoms/inviteList";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Loading from "./components/visual-components/Loading";

const useStyles = makeStyles((theme) => ({
  app: {
    display: "inline-block",
    backgroundImage: `url(${bodyBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "100vh",
    minWidth: "100%",
    borderRadius: 8,
    overflow: "auto",
  },

  header: {},
  body: {
    marginBottom: "6vh",
    [theme.breakpoints.up("sm")]: {
      height: "100vh",
    },
    [theme.breakpoints.up("xs")]: {
      marginTop: "9vh",
    },

    [theme.breakpoints.up("lg")]: {
      marginTop: "12vh",
    },
    margin: "auto",
    maxWidth: "80hw",
  },
  footer: {},
}));

function App() {
  const classes = useStyles();
  const [languages, setLanguages] = useRecoilState(languageState);
  const [inviteList, setInviteList] = useRecoilState(inviteListState);
  const [isLoading, setIsLoading] = useState(
    {
      languageLoaded: false,
      inviteListLoaded: false,
    },
    []
  );

  const fetchLanguages = useCallback(() => {
    onSnapshot(collection(db, "language"), (snapshot) => {
      setLanguages(snapshot.docs.map((doc) => doc.data()));
      setIsLoading({ ...isLoading, languageLoaded: true });
    });
  }, [isLoading, setLanguages]);

  const fetchInviteList = useCallback(() => {
    onSnapshot(collection(db, "inviteList"), (snapshot) => {
      setInviteList(snapshot.docs.map((doc) => doc.data()));
      setIsLoading({ ...isLoading, inviteListLoaded: true });
    });
  }, [isLoading, setInviteList]);

  useEffect(() => {
    if (languages === null) {
      fetchLanguages();
    }
    if (inviteList === null) {
      fetchInviteList();
    }
  }, [languages, inviteList, fetchInviteList, fetchLanguages]);

  return (
    <Paper className={classes.app}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="stretch"
      >
        {isLoading.languageLoaded && isLoading.inviteListLoaded ? (
          <span>
            <Grid item className={classes.header}>
              <Header />
            </Grid>
            <Grid item xs={10} className={classes.body}>
              <HomePage />
            </Grid>
            <Grid item className={classes.footer}>
              <Footer />
            </Grid>{" "}
          </span>
        ) : (
          <Loading />
        )}
      </Grid>
    </Paper>
  );
}

export default App;
