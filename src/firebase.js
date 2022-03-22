// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8O3QdIZ3oKHZPaseqJxbPVRCUyzLg_vs",
    authDomain: "bards-r-us.firebaseapp.com",
    projectId: "bards-r-us",
    storageBucket: "bards-r-us.appspot.com",
    messagingSenderId: "223757921275",
    appId: "1:223757921275:web:f3091f2af306704d16f95e",
    measurementId: "G-X7YQCME2C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;