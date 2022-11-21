// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

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
const storage = getStorage(app);
const storageRef = ref(storage);
const db = getFirestore(app);
const firebaseref = ref;

export {
  storageRef,
  getStorage,
  firebaseref,
  uploadBytesResumable,
  getDownloadURL,
  collection,
  addDoc,
  db,
  getDocs,
  getDoc,
  doc,
};
