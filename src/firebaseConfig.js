// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-rNXGst-YH5PmWsbOY1-7iVe4uaDoDqY",
  authDomain: "file-share-1f44a.firebaseapp.com",
  projectId: "file-share-1f44a",
  storageBucket: "file-share-1f44a.appspot.com",
  messagingSenderId: "742092110444",
  appId: "1:742092110444:web:5fc2541eced4a19a803649",
  measurementId: "G-8X5KLNNMTB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);