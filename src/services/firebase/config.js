import firebase from "firebase";
import dotenv from "dotenv";
dotenv.config();
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
};
// Initialize Firebase
const Firebase =
  !firebase.apps.length && firebase.initializeApp(firebaseConfig);
export default Firebase;
