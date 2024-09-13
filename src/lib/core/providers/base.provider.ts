"use server"

import { ResponseHandler } from '@/lib/core/entities/response_handler.entity';
import { currentUser } from '@/lib/firebase/firebase.config';
import { ERROR, BEARER, POST, PATCH, DELETE, ID_TOKEN, REFRESH_TOKEN } from '../constants';
import { unstable_noStore as noStore } from 'next/cache';
//import  { getServerSession }  from 'next-auth/';
import { authConfig } from 'auth.config';
import { auth } from 'auth';
import { getIdTokenFromSavedUser } from '../../actions/auth/auth.actions';
import { getSessionCookieValue } from '../../actions/cookie.actions';

const serverStatusCodes = [200, 201, 500];
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const defaultResponseHandler: ResponseHandler = {
  statusCode: 404,
  code: ERROR,
  message: 'Something went wrong on your end',
};

async function getToken() {
  /* const idTokenPayload = await getSessionCookieValue(ID_TOKEN);
  const currentIdToken = idTokenPayload?.value as string;

  const refreshTokenPayload = await getSessionCookieValue(REFRESH_TOKEN);
  const refreshToken = refreshTokenPayload?.value as string; */

  const session = await auth();
  const token = session?.user!.idToken as string;
  return token;
}

async function getDefaultHeaders(): Promise<Record<string, string>> {
  const token = await getToken();
  return {
    Authorization: `${BEARER} ${token}`,
  };
}

export async function get(
    endpoint: string, 
    customHeaders?: Record<string, string>,
): Promise<ResponseHandler> {

  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  let responseHandler = defaultResponseHandler;
  const url = `${baseUrl}/${endpoint}`;
  let headers = await getDefaultHeaders();

  if (customHeaders) {
    headers =  customHeaders;
  }

  const token = await getToken();

  if (token) {
    const response: Response = await fetch(url, { headers });
    const data = await response.json();
    responseHandler = data as ResponseHandler;
  }

  console.log(`GET RESPONSE: ${JSON.stringify(responseHandler)}`);
  return responseHandler;
}

export async function post(endpoint: string, body?: any, customHeaders?: Record<string, string>): Promise<ResponseHandler> {
  noStore();
  let responseHandler = defaultResponseHandler;
  const url = `${baseUrl}/${endpoint}`;
  let headers = await getDefaultHeaders();
  headers['Content-Type'] = 'application/json';

  if (customHeaders) {
    headers =  customHeaders;
  }

  const token = await getToken();
  if (token) {
    const response = await fetch(url, {
      method: POST,
      headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    responseHandler = data as ResponseHandler;
  }
  console.log(`====\n\nPROVIDER POST: ${JSON.stringify(responseHandler)}`);
  return responseHandler;
}

export async function patch(endpoint: string, body: Record<string, any>, customHeaders?: Record<string, string>): Promise<ResponseHandler> {
  noStore();
  let responseHandler = defaultResponseHandler;
  const url = `${baseUrl}/${endpoint}`;
  let headers = await getDefaultHeaders();
  headers['Content-Type'] = 'application/json';

  if (customHeaders) {
    headers =  customHeaders;
  }

  const token = await getToken();
  if (token) {
    const response = await fetch(url, {
      method: PATCH,
      headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    responseHandler = data as ResponseHandler;
  }

  return responseHandler;
}

export async function remove(endpoint: string, customHeaders?: Record<string, string>): Promise<ResponseHandler> {
  noStore();
  let responseHandler = defaultResponseHandler;
  const url = `${baseUrl}/${endpoint}`;
  let headers = await getDefaultHeaders();

  if (customHeaders) {
    headers =  customHeaders;
  }

  const token = await getToken();
  if (token) {
    const response = await fetch(url, {
      method: DELETE,
      headers,
    });
    const data = await response.json();
    responseHandler = data as ResponseHandler;
  }

  return responseHandler;
}
