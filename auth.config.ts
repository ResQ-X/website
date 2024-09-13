
import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isOnAuthRoutes = nextUrl.pathname.startsWith('/auth');

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } if (isOnAuthRoutes) {
        if (isLoggedIn)  return Response.redirect(new URL('/dashboard', nextUrl));
        return true; // Redirect unauthenticated users to login page
      }/*  else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      } */
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
