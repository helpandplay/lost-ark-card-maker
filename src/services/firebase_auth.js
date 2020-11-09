import firebaseApp from "./firebase_config";
import firebase from "firebase";

class Auth {
  onLogin(type) {
    const provider = new firebase.auth[`${type}AuthProvider`]();
    return firebaseApp
      .auth()
      .signInWithPopup(provider)
      .then((result) => result.user)
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode);
        console.log(errorMessage);
        console.log(email);
        console.log(credential);
      });
  }
  onAuthChange(onAuthChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onAuthChanged(user);
    });
  }
  onLogout() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        console.log("로그아웃 되었습니다.");
      })
      .catch(function (error) {
        // An error happened.
        console.log(`로그아웃 실패 : ${error}`);
      });
  }
}
export default Auth;
