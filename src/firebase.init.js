// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsPDk6TXEZ0WwvJd4VHvjCXpaFQoj1HUE",
    authDomain: "traveller-website-4e9da.firebaseapp.com",
    projectId: "traveller-website-4e9da",
    storageBucket: "traveller-website-4e9da.appspot.com",
    messagingSenderId: "827848195310",
    appId: "1:827848195310:web:f678ea6739c5397dcd47ff",
    measurementId: "G-JCXQY5QY47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;