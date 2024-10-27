import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAL8BYUxLVtc9038WVw0paUf4sYxD3eLJY",
  authDomain: "counseling-app-28c44.firebaseapp.com",
  projectId: "counseling-app-28c44",
  storageBucket: "counseling-app-28c44.appspot.com",
  messagingSenderId: "51959456193",
  appId: "1:51959456193:web:53c0bebd361fd129708f40",
  measurementId: "G-DC0YEGGX99"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Firebase Auth with React Native Persistence
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
