import MOCK_DATA from './data.json' assert { type: 'json'}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore"

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
const db = getFirestore( app )

const productosRef = collection(db, 'productos')

MOCK_DATA.forEach(item => {
    delete item.id

    addDoc(productosRef, item)
})