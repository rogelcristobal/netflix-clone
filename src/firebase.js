// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APPID
};
// const firebaseConfig = {
// 	apiKey: "AIzaSyDjxDRykjHGbMm9Tsn1ogptsH106QbqQVc",
// 	authDomain: "netflix-clone-a76ad.firebaseapp.com",
// 	projectId: "netflix-clone-a76ad",
// 	storageBucket: "netflix-clone-a76ad.appspot.com",
// 	messagingSenderId: "246656365912",
// 	appId: "1:246656365912:web:508d19e9d05e622fab212d",
// };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
