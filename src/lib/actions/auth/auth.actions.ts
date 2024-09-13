"use server";

import {auth} from '@/lib/firebase/firebase.config';
import { signOut } from 'auth';
import { User, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { UserEntity } from '../../../modules/general/user/entities/user.entity';
import { v4 as uuidv4 } from 'uuid';
import * as userService from '../../../modules/general/user/user.service';
import { useAuth } from '../../contexts/auth.context';
import { deleteSessionCookieValue, getSessionCookieValue, setSessionCookieValue } from '../cookie.actions';
import { APPUSER, ID_TOKEN, POST, REFRESH_TOKEN, USER, USERNAME, USERUID } from '../../core/constants';
import { serverAuth } from '../../firebase/firebase.admin.config';


// GET APP USER RECORD
export async function getAppUser(): Promise<UserEntity> {
  const appUserPayload = await getSessionCookieValue(APPUSER);
  const appUser: UserEntity = appUserPayload?.value as UserEntity;
  return appUser;
}


// GET USERUID
export async function getUserUid() {
  const userUidPayload = await getSessionCookieValue(USERUID);
  const userUid = userUidPayload?.value as string;
  return userUid;
}

// GET ID TOKEN FROM USER SAVED IN COOKIE
export async function getIdTokenFromSavedUser(currentIdToken: string, refreshToken: string) {
  let token = null;
  let issue = null;

  try {
    const result1: boolean = await verifyIdToken(currentIdToken);
    if (result1) {
      // Current idToken is still valid
      token = currentIdToken;
    }
    else {
      const  {result: result2, error: error2} =  await getRefreshedIdToken(refreshToken);

      if (result2){
        token = result2;
        await setSessionCookieValue(ID_TOKEN, token);
      } else {
        issue = error2;
      }
    }
  } catch (e) {
    issue = e as string;
  }
  return {token, issue};
}

// VERIFY ID_TOKEN
export async function verifyIdToken(idToken: string) {
  try {
    const decodedToken =  await serverAuth.verifyIdToken(idToken, true);
    const currentTime = Math.floor(Date.now() / 1000);

    if ((decodedToken.exp - currentTime) < (60 * 5)) { // If token expires in less than 5 minutes
      return false;
    } else {
      return true;
    }
    
  }
  catch (e) {
    console.log(`error in verifyIdToken: \n\n${e}`);
    return false;
  }
}


export async function getRefreshedIdToken(refreshToken: string) {
  let result = null;
  let error = null;

  const response = await fetch(`https://securetoken.googleapis.com/v1/token?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`, {
    method: POST,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    })
  });

  if (!response.ok) {
    error = 'Error getting new Id Token' as string;
    throw new Error('Failed to refresh token');
  }

  const data = await response.json();
  result = data.id_token as string;
  await setSessionCookieValue(ID_TOKEN, result);

  return {result, error};
}

// GET USER AUTH ID TOKEN FROM CLIENT COMPONENTS
let cachedToken: string | null = null;
export const getAuthToken = async (): Promise<string | null> => {
  if (cachedToken) {
    return cachedToken;
  }

  const authContext = useAuth();
  const token = await authContext.getToken();
  cachedToken = token; // Cache the token for subsequent calls
  return token;
};


// LOGIN
export async function login(email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);

        const user = result.user;
        const userString = JSON.stringify(user);
        await setSessionCookieValue(USER, userString);
        await setSessionCookieValue(USERUID, result.user.uid);

        const appUser = (await userService.findOne(user.uid)).data;
        await setSessionCookieValue(APPUSER, appUser);
        
    } catch (e) {
        error = e;
    }
   
    return { result, error };
}


// REGISTER


/* const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
}); */

export async function getRegistrationData(
  formData: FormData
): Promise<[UserEntity, string]> {
  const thisUserUid = uuidv4();
  const data = Object.fromEntries(formData.entries()) as { [key: string]: string };
  const password: string = data.password;

  const userData: UserEntity = {
    userUid: undefined,

    userName:data.email.trim(),
    firstName:data.firstName.trim(),
    lastName:data.lastName.trim(),
    email: data.email.trim(),

    phone:data.phone,
    phoneInt: data.phone,
    phoneRaw: data.phone,
    phoneFormatted: data.phone,
   
    phoneVariants: [
      data.phone,
      data.phone,
      data.phone,
    ],
    country: data.country ?? '',
    countryDialCode: data.countryDialCode ?? '',
    countryIsoCode: data.countryIsoCode ?? '',

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),

    onlineStatus: "Online",
    lastSeen: new Date().toISOString(),
    userType: 'Owner',
    premium: false,
    level: 1,
  };

  return [userData, password];

}

export type State = {
  result?: UserCredential | null;
  error?: string | null | unknown;
};


export async function register(
  formData: FormData, 
): Promise<State> {
    let result = null,
        error = null;
    const [userData, password] = await getRegistrationData(formData);

    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, userData.email!, password);
      result = userCredential;
      userData.userUid = result.user.uid;
      const response = await userService.add(userData);
    } catch (e) {
        error = e;
    }
    return { result, error };
}

// LOGOUT
export async function logout() {
    await auth.signOut(); //  From Firebase Auth
    await signOut(); // from NextAuth
    deleteSessionCookieValue(USERUID);
    deleteSessionCookieValue(USER);
    deleteSessionCookieValue(APPUSER);
}



