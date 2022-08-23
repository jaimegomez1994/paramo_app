// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw79bmtbZccniwaBl3rXUsv3Ev8HPW7eg",
  authDomain: "pokemon-72047.firebaseapp.com",
  projectId: "pokemon-72047",
  storageBucket: "pokemon-72047.appspot.com",
  messagingSenderId: "300836243103",
  appId: "1:300836243103:web:2dbb802dad108752c204aa",
  measurementId: "G-HLFLJP8DVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);