import { defineStore } from "pinia";
import { auth } from "../firebase/firebaseconfig";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const useAuthStore = defineStore(
  "auth",
  {
    state: () => ({
      user: {},
    }),
    actions: {
      getUserStatus() {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            this.user.email = user.email;
            this.user.id = user.uid;
            console.log("loged in", this.user);
          } else {
            this.user = {};
            console.log("loged out", this.user);
          }
        });
      },
      logIn() {
        const provider = new GoogleAuthProvider(auth);
        signInWithPopup(auth, provider)
          .then((result) => {
            console.log(result);
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            // ...
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
      },
      logOut() {
        signOut(auth)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
      },
    },
  }
  //   { persist: true }
);
