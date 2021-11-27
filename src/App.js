import React, { useEffect, useState } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import { useRecoilState } from "recoil";
import { makeStyles } from "@material-ui/core/styles";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Header from "./components/visual-components/Header";
import Footer from "./components/visual-components/Footer";
import languageState from "./atoms/language";
import inviteListState from "./atoms/inviteList";

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();
  const [languages, setLanguages] = useRecoilState(languageState);
  const [inviteList, setInviteList] = useRecoilState(inviteListState);
  const [isLoading, setIsLoading] = useState({
    languageLoaded: false,
    inviteListLoaded: false,
  });

  const fetchLanguages = () => {
    onSnapshot(collection(db, "language"), (snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
      setLanguages(snapshot.docs.map((doc) => doc.data()));
      setIsLoading({ ...isLoading, languageLoaded: true });
    });
  };

  const fetchInviteList = () => {
    onSnapshot(collection(db, "inviteList"), (snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
      setInviteList(snapshot.docs.map((doc) => doc.data()));
      setIsLoading({ ...isLoading, inviteListLoaded: true });
    });
  };

  useEffect(() => {
    if (languages === null) {
      fetchLanguages();
    }
    if (inviteList === null) {
      fetchInviteList();
    }
  }, [languages, inviteList]);

  return (
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
          <Grid item className={classes.body}>
            <p>body area</p>
          </Grid>
          <Grid item className={classes.footer}>
            <p>footer area</p>
          </Grid>{" "}
        </span>
      ) : (
        ""
      )}
    </Grid>
  );
}

export default App;
