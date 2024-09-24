export interface ContactMessageModel {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  phone?: string;
  message: string;
}

export interface NewsletterModel {
  firstName: string;
  email: string;
}