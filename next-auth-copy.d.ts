import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    idToken: string;
    refreshToken: string;
    emailVerified: boolean;
  }

  interface Session {
    user: User;
  }
}