
import 'server-only'
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from 'jose';
import { USERUID } from '../core/constants';
//import { SessionPayload } from '@/lib/definitions'

 
const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload: any) {
    return new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(encodedKey)
  }
   
  export async function decrypt(session: string | undefined = '') {
    try {
      const { payload } = await jwtVerify(session, encodedKey, {
        algorithms: ['HS256'],
      })
      return payload
    } catch (error) {
      console.log('Failed to verify session')
    }
  }



export async function getSessionCookieValue(key: string) {
    const session = cookies().get(key)?.value;
    const payload = await decrypt(session)
 
  if (!session || !payload) {
    return null
  }
  return payload;
}

export async function setSessionCookieValue(key: string, value: any) {
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
    const session = await encrypt({ value, expiresIn })
    cookies().set(key, session, { 
        maxAge: expiresIn, 
        httpOnly: true, 
        secure: true,
     });
}

export function deleteSessionCookieValue(key: string) {
    cookies().delete(key);
  }

