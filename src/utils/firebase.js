import { tick } from 'svelte';
import swal from 'sweetalert';

export const signUp = () => {

  const usrEmailSign = document.getElementById('emailSign').value
  const usrPassSign = document.getElementById('passwrdSign').value

  firebase.auth().createUserWithEmailAndPassword(usrEmailSign, usrPassSign)
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export const logIn = () => {

  const usrEmaiLog = document.getElementById('emailLog').value
  const usrPassLog = document.getElementById('passwrdLog').value

  firebase.auth().signInWithEmailAndPassword(usrEmaiLog, usrPassLog)
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;


      if (errorCode === 'auth/wrong-password') {
        swal('Wrong password', 'Please try again', 'error');
      } else {
        alert(errorMessage)
      }
    });
}

export const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(async () => {
      // Signed Out Successfully
      await tick();
      createLoginButton();
    })
    .catch(error => {
      // An Error hapenned :/
      console.error(error);
    });
};

export const createLoginButton = () => {
  const uiConfig = {
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        return false;
      }
    }
  };
  const ui =
    firebaseui.auth.AuthUI.getInstance() ||
    new firebaseui.auth.AuthUI(firebase.auth());
  ui.start('#firebaseui-auth-container', uiConfig);
};
