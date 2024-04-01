// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxq6IXJVgthEU6Y4tJy_se5oBv7Hfy5zY",
  authDomain: "demoone-2126b.firebaseapp.com",
  projectId: "demoone-2126b",
  storageBucket: "demoone-2126b.appspot.com",
  messagingSenderId: "722367978779",
  appId: "1:722367978779:web:f8e490a37e5e5c39f887be",
  measurementId: "G-STHFEX3P0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export default auth