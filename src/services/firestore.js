import firebase from "firebase/app";
import "firebase/firestore";

const {
  REACT_API_KEY,
  REACT_AUTH_DOMAIN,
  REACT_DATABASE_URL,
  REACT_PROJECT_ID,
  REACT_STORAGE,
  REACT_MESSAGING,
  REACT_FIREBASE_APP_ID,
} = process.env;

var firebaseConfig = {
  apiKey: REACT_API_KEY,
  authDomain: REACT_AUTH_DOMAIN,
  databaseURL: REACT_DATABASE_URL,
  projectId: REACT_PROJECT_ID,
  storageBucket: REACT_STORAGE,
  messagingSenderId: REACT_MESSAGING,
  appId: REACT_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const createOffer = async (offer) => {
  return await db
    .collection("offers")
    .add(offer)
    .then((docRef) => {
      return true;
    })
    .catch((error) => {
      console.log("Error adding document: ", error);
    });
};

export const getOffers = async () => {
  return await db.collection("offers").get();
};
