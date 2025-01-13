import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

const EMAILJS_SERVICE_ID = 'gmail';
const EMAILJS_TEMPLATE_ID = 'template_jtznlsc';
const EMAILJS_PUBLIC_KEY = 'pHZFUjOGvVXyS0yMz';

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    const templateParams = {
      to_email: 'contacto@riosglobalexperts.com',
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};