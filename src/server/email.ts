"use server"

const nodemailer = require('nodemailer');
import { ContactMessageModel } from '@/lib/models/contact.model';
import 'dotenv/config';

const SibApiV3Sdk = require('sib-api-v3-typescript');
const sender: string | undefined = process.env.EMAILSENDER;

const transporter = nodemailer.createTransport({
  host:process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_KEY
  },
});


export const createContact = async (email: string, firstName: string) => {
  //console.log('==== \n\n createContact CALLED !!! \n\n ====');
  let success, error: boolean = false;
  try {
    let apiInstance = new SibApiV3Sdk.ContactsApi();
    let apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    let createContact = new SibApiV3Sdk.CreateContact();
    createContact.email = email;
    createContact.listIds = [3];
    
    const attributes = {
      "FIRSTNAME": firstName
    };
    createContact.attributes = attributes;
    createContact.updateEnabled = true;
    
    const response = await apiInstance.createContact(createContact);
    success = true;
    //console.log('createContact SUCCESS !!!');
  } catch (e) {
    //console.error('createContact ERROR !!!', e);
    error = true;
  }
  return {success, error}
}


export const sendAdminMessage = async (data: ContactMessageModel) => {
  let success, error: boolean = false;
  //console.log('==== \n\n sendAdminMessage CALLED !!! \n\n ====');
  try {
    const msg = {
    to: sender,
    from: `"ResQ-X Website" <${sender}>`, 
    subject: 'Website Contact Message',
    html: await getAdminMessage(data),
    };
  
    const response = await transporter.sendMail(msg);
    //console.log('sendMail RESPONSE: ', response);
    success = true;
  }
  catch (e) {
    error = true;
    //console.log('sendAdminMessage Error !!!', e);
  }
  return {success, error}
}

export const sendUserMessage = async (data: ContactMessageModel) => {
  let success, error: boolean = false;
  //console.log('==== \n\n sendUserMessage CALLED !!! \n\n ====');
  const subject = "Welcome to ResQ-X! We've received your message 🎉";
  try {
    const msg = {
    to: data.email,
    from: `"ResQ-X" <${sender}>`, 
    subject: subject,
    html: await getUserMessage(data.firstName),
    };
  
    const response = await transporter.sendMail(msg);
    //console.log('sendMail RESPONSE: ', response);
    success = true;
  }
   catch(e) {
    //console.log('sendUserMessage Error !!!', e);
    error = true;
  }
  return {success, error}
}

export async function getAdminMessage(data: ContactMessageModel){
  return `<!DOCTYPE html>
  <html lang="en">
  ${htmlHead}
  <body>
      <div class="center-body">
          <div>
          <h2>Message details</h2>
          <strong>Sender: </strong>
          <p>${data.firstName} ${data.lastName}</p> 
          <strong>Email: </strong>
          <p>${data.email}</p> 
          <strong>Message: </strong> 
          <p>${data.message}</p> 
          </div>
      </div>
  </body>
  </html>`
}

export async function getUserMessage(firstName: string){
  return `<!DOCTYPE html>
  <html lang="en">
  ${htmlHead}
  <body>
      <div class="center-body">
          <div>
          <p>Hey ${firstName}, road warrior! 🚗💨</p>

          <p>This is to let you know that we've received your message</p>
          <p>We'll be in touch very soon</p> 
          
          <p>Stay safe and keep on rolling,</p> 
          <p>The ResQ-x Team 😎</p> 
          
          <p>P.S. Don't forget to follow us on social media for exciting updates and helpful tips!</p> 
          </div>
      </div>
  </body>
  </html>`
}

const htmlHead: string = `
  <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            .img-section {
                border-bottom: 2px solid #fe0000; 
                padding: 30px 0 ;
            }
            .center-body {
                margin: auto; 
                max-width: 600px;
            }
            p {
                color: #000000;
            }
            .time {
                font-size: 13px;
            }
            small {
                color: #000000; 
            }
            table td {
                border: 0.5px solid #000000;
                padding: 5px;
            }
        </style>
    </head>
  `