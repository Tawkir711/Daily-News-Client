// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrGh4qNQA6STYeFo3xjhS-CW3zxL8aiuU",
  authDomain: "daily-news-fd9d3.firebaseapp.com",
  projectId: "daily-news-fd9d3",
  storageBucket: "daily-news-fd9d3.appspot.com",
  messagingSenderId: "1015059848432",
  appId: "1:1015059848432:web:bf67140917352fab5ef635"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;