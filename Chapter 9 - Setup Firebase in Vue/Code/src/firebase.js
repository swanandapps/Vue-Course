// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA79MirapSCTliX2HxBrS5DHQQLvwpQYXo",
  authDomain: "vuestore-a820e.firebaseapp.com",
  projectId: "vuestore-a820e",
  storageBucket: "vuestore-a820e.appspot.com",
  messagingSenderId: "117616055161",
  appId: "1:117616055161:web:c4a464fc5f0ce36ad4d5a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, getDocs };
