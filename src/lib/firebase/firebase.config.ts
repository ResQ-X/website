
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Auth, User, getAuth} from 'firebase/auth';
import {getFirestore, Firestore, collection, CollectionReference, getDoc, DocumentReference, doc} from 'firebase/firestore';
import { getStorage, FirebaseStorage} from 'firebase/storage';
import { USERS } from "../core/constants";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

//export const analytics = getAnalytics(app);
export const auth: Auth = getAuth(app);
export const firestore: Firestore = getFirestore(app);
export const storage: FirebaseStorage  = getStorage(app);
export const currentUser: User | null = auth.currentUser;
export const userDocRef: DocumentReference = doc(firestore, USERS, `${currentUser?.uid}`)

// GET ID TOKEN OF THE CURRENT LOGGED IN USER
export async function getToken(): Promise<string> {
  const currentUser = auth.currentUser;
  console.log(`==== \n\n USER: ${JSON.stringify(currentUser)}`);

  if (!currentUser) {
    return '';
  }
  const token = await currentUser.getIdToken();
  return token || '';
}




