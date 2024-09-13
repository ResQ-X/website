import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { User as FirebaseUser } from 'firebase/auth';
import { login } from '@/lib/actions/auth/auth.actions';

// =======
// All commented out parts to be used if we are commmunicating with Stream API to authenticate with the API
// =======

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => 
        {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const {error, result} = await login(email, password);
          if (error) return null;
          if (result) {
            const idToken = await result.user.getIdToken(true);

            const firebaseUser: FirebaseUser = result.user;
            const value = {
              id: firebaseUser.uid,
              name: firebaseUser.displayName,
              email: firebaseUser.email,
              image: firebaseUser.photoURL,
              idToken: '',    //idToken,  
              refreshToken: '',   //firebaseUser.refreshToken,
              emailVerified: firebaseUser.emailVerified,
            }
            return value;
          }
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.emailVerified = user.emailVerified;
        token.idToken = user.idToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    async session({session, token}) {
      /* const {token: result, issue} = await getIdTokenFromSavedUser(token.idToken as string, token.refreshToken as string);
        if (result){
          session.user.idToken = result;
          token.idToken = result;
          session.user.

        } */
      //session.user.refreshToken = token.refreshToken as string;
      session.user.id = token.id as string;
      session.user.email = token.email as string;
      session.user.name = token.name as string;
      //session.user.emailVerified = token.emailVerified as boolean;
      return session;
    },
  },
});