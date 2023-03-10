import { initializeApp,getApp,getApps } from "firebase/app";
import {connectFirestoreEmulator, getFirestore} from "firebase/firestore"
import {connectAuthEmulator, getAuth} from "firebase/auth"
import {connectStorageEmulator, getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBOpElWQEZFCJ06GKX3pgolZoc0apj7vNI",
  authDomain: "reddit-9523e.firebaseapp.com",
  projectId: "reddit-9523e",
  storageBucket: "reddit-9523e.appspot.com",
  messagingSenderId: "886860596973",
  appId: "1:886860596973:web:3f50cb2e04585e34deeee4",
  measurementId: "G-KJPRMMMR7N"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)
const host = (firestore.toJSON() as { settings?: { host?: string } }).settings?.host ?? '';

// if (!getApps().length)
// if(!host.startsWith('localhost'))
// connectFirestoreEmulator(firestore,"localhost",8080)
// connectStorageEmulator(storage,"localhost",9199)
// connectAuthEmulator(auth,"http://localhost:9099",{disableWarnings:true})

export {app,firestore,auth, storage}