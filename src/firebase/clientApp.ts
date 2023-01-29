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
export const app = !getApps().length? initializeApp(firebaseConfig):getApp();
export const firestore = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)

connectFirestoreEmulator(firestore,"localhost",8080)
connectStorageEmulator(storage,"localhost",9199)
connectAuthEmulator(auth,"http://localhost:9099",{disableWarnings:true})
//const analytics = getAnalytics(app);