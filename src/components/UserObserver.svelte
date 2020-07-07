<script>
  import { onMount } from "svelte";
  import { currentUser } from "../stores/user";

  onMount(() => {
    firebase.auth().onAuthStateChanged(function(user) {
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
        currentUser.set(null);
        console.log("User is signed out");
        // ...
      }
    });
  });
</script>
