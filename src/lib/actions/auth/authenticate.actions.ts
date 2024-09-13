"use server";

import { signIn } from "auth";
import { AuthError } from "next-auth";
import { register } from "./auth.actions";

// AUTHENTICATE
export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }


  export async function registerAnduthenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
     const response =  await register(formData);
     if (response.result) {
      await signIn('credentials', formData);
     } else {
      return `${response.error}`;
     }
     
  
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }
  