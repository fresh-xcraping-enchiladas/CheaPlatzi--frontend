// import firebase from 'firebase'
// import 'firease/oauth'

// const firebaseConfig = {
//   apiKey: "AIzaSyDGSUptuEqcZ6Gr0Q3TBqcFG50YlFB_MzE",
//   authDomain: "cheaplatzi-4870b.firebaseapp.com",
//   databaseURL: "https://cheaplatzi-4870b.firebaseio.com",
//   projectId: "cheaplatzi-4870b",
//   storageBucket: "cheaplatzi-4870b.appspot.com",
//   messagingSenderId: "185389631800",
//   appId: "1:185389631800:web:78112c660b5192cfc599cd",
//   measurementId: "G-ZB879GL08Y"
// };

// firebase.auth().createUserWithEmailAndPassword

// const FBConfig = firebase.initializeApp(firebaseConfig);

// modules.export = { FBConfig {}
// // firebase.analytics();




const signUp = () => {

  const usrEmailSign = document.getElementById('emailSign').value
  const usrPassSign = document.getElementById('passwrdSign').value

  firebase.auth().createUserWithEmailAndPassword(usrEmailSign, usrPassSign)
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    });
}

const logIn = () => {

  const usrEmaiLog = document.getElementById('emailLog').value
  const usrPassLog = document.getElementById('passwrdLog').value

  firebase.auth().signInWithEmailAndPassword(usrEmaiLog, usrPassLog)
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    });
}
const observable = async () => {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
      console.log("User:", user);
      currentUser.set(user);
      // ...
    } else {
      // User is signed out.
      // currentUser.set(null);
      console.log("User is signed out");
      // ...
    }
  });
}
// observable()


module.exports = { signUp, logIn, observable }