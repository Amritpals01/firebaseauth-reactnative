// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA43GKLujXtwA3hO0Dd4baipfGEPNOmohg",
  authDomain: "fir-chat-7d2cf.firebaseapp.com",
  projectId: "fir-chat-7d2cf",
  storageBucket: "fir-chat-7d2cf.appspot.com",
  messagingSenderId: "885736237067",
  appId: "1:885736237067:web:ce74b37f749fcf02cb7f0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = initializeAuth(app, {
    persistence : getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app);
export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');
