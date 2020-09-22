import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCfo84ei_WwIGTWkX5VH4Le8KfEQZ2qunQ",
  authDomain: "react-firebase-a77b2.firebaseapp.com",
  databaseURL: "https://react-firebase-a77b2.firebaseio.com",
  projectId: "react-firebase-a77b2",
  storageBucket: "react-firebase-a77b2.appspot.com",
  messagingSenderId: "887283175925",
  appId: "1:887283175925:web:3c8e801d920ca6940250bc",
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
