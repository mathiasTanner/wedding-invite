import React, { useEffect } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { makeStyles } from "@material-ui/core/styles";
import languageState from "./atoms/language";
import { firebaseApp, db } from "./firebase";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, onSnapshot } from "firebase/firestore";
import { getLanguages } from "./firebase";
import Footer from "./components/visual-components/Footer";

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();
  const [languages, setLanguages] = useRecoilState(languageState);

  useEffect(() => {
    onSnapshot(collection(db, "language"), (snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
      setLanguages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="stretch"
    >
      <Grid item className={classes.header}>
        <p>header area</p>
      </Grid>
      <Grid item className={classes.body}>
        <p>body area</p>
      </Grid>
      <Grid item className={classes.footer}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
