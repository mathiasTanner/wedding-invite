import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  /*apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,*/
  apiKey: "AIzaSyASYoB6xbhAwg3wtJdnxA3bQgqQ8is-fBw",
  authDomain: "sarahandmath-fb761.firebaseapp.com",
  databaseURL:
    "https://sarahandmath-fb761-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sarahandmath-fb761",
  storageBucket: "sarahandmath-fb761.appspot.com",
  messagingSenderId: "228385652514",
  appId: "1:228385652514:web:b05883b2d23160941fef7b",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
