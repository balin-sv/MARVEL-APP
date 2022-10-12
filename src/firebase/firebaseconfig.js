import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYawW1Fr6N_xePWytV22gqOQNlLWvJHbo",
  authDomain: "marvel-app-410f0.firebaseapp.com",
  projectId: "marvel-app-410f0",
  storageBucket: "marvel-app-410f0.appspot.com",
  messagingSenderId: "687337423602",
  appId: "1:687337423602:web:d58ad9309912538adbc66b",
  measurementId: "G-2WK8EWF1GH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
