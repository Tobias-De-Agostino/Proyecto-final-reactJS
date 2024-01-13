// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBobzNestO3sNbK2GsZ1b-Vane7qtTx5U8",
    authDomain: "proyecto-final-9c5bf.firebaseapp.com",
    projectId: "proyecto-final-9c5bf",
    storageBucket: "proyecto-final-9c5bf.appspot.com",
    messagingSenderId: "709863516538",
    appId: "1:709863516538:web:96f7dc504046942b6ecec3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
