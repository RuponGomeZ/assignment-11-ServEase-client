// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2rGu-cZC_eMJUVOCnYnhb8d3HHfQ5xgc",
    authDomain: "servease-2ccfe.firebaseapp.com",
    projectId: "servease-2ccfe",
    storageBucket: "servease-2ccfe.firebasestorage.app",
    messagingSenderId: "599068612615",
    appId: "1:599068612615:web:26132fb85cbffcdcaaf2a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;