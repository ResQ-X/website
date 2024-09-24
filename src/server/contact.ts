"use server"

import { ContactMessageModel, NewsletterModel } from "@/lib/models/contact.model";
//import { now } from "lodash";
import { createContact, sendAdminMessage, sendUserMessage } from "./email";

const now = new Date().toISOString();

export const handleContactMessage = async (data: ContactMessageModel) => {
  try {
    const { success: adminSuccess, error: adminError } = await sendAdminMessage(data);
    const { success: userSuccess, error: userError } = await sendUserMessage(data);
    const { success: contactSuccess, error: contactError } = await createContact(data.email, data.firstName);
   
    if (adminSuccess && userSuccess && contactSuccess) {
      const result = {
        status: 'success',
        statusCode: 201,
        message: 'Message Sent Successfully',
        timestamp: now,
      }
      return result;
    } else {
      const result = {
        status: 'error',
        statusCode: 400,
        message: 'Message Not Sent',
        timestamp: now,
      }
      return result;
    }
  } catch (error) {
    const result = {
      status: 'error',
      statusCode: 500,
      message: 'Internal Server Error',
      timestamp: now,
    }
    return result;
  }
}


export const handleNewsletterSignup = async (data: NewsletterModel) => {
  try {
    const { success: contactSuccess, error: contactError } = await createContact(data.email, data.firstName);
   
    if (contactSuccess) {
      const result = {
        status: 'success',
        statusCode: 201,
        message: 'SIgned Up Successfully',
        timestamp: now,
      }
      return result;
    } else {
      const result = {
        status: 'error',
        statusCode: 400,
        message: 'Error: Signup Not Successful',
        timestamp: now,
      }
      return result;
    }
  } catch (error) {
    const result = {
      status: 'error',
      statusCode: 500,
      message: 'Internal Server Error',
      timestamp: now,
    }
    return result;
  }
}