import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { addDoc, getFirestore, setDoc } from "firebase/firestore";
import {
  collection,
  doc,
  getDocs,
  query,
  where,
  orderBy,
  writeBatch,
  increment,
  serverTimestamp,
  limit,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const fireBaseApp = initializeApp(firebaseConfig);

const fireBaseFireStore = getFirestore();

const fireBaseAuth = getAuth();

const addEmail = async (email, name) => {
  try {
    const emailsRef = collection(fireBaseFireStore, "emails");
    const newDocRef = doc(emailsRef);
    await setDoc(newDocRef, { email, name });
  } catch (error) {
    console.log(`[FAILED TO SAVE MAIL ERR]`, error);
  }
};

export default fireBaseApp;

export { fireBaseFireStore, fireBaseAuth, addEmail };
