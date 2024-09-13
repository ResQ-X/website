import * as admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore';

const adminConfig  = process.env.NEXT_PUBLIC_SERVICE_ACCOUNT_CREDENTIAL as admin.ServiceAccount; 

export const firebaseServerApp =  getApps().length === 0 ? admin.initializeApp({
    credential: admin.credential.cert( adminConfig),
    databaseURL: `https://${adminConfig.projectId}.firebaseio.com`,
    storageBucket: 'gs://trade-app-a8994.appspot.com', 
}, 'stream-app') : getApps()[0];

export const serverAuth = getAuth(firebaseServerApp);
export const firestoreAdmin = getFirestore(firebaseServerApp);