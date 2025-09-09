import emailjs from '@emailjs/browser';

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  // Utilise les variables d'environnement ou des valeurs par défaut
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ,
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ,
};

// Initialize EmailJS
export const initEmailJS = () => {
  const publicKey = EMAILJS_CONFIG.PUBLIC_KEY || "";
  // Guard: avoid calling init with undefined
  if (!publicKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("EmailJS public key is missing. Skipping emailjs.init().");
    }
    return;
  }
  emailjs.init(publicKey);
};

// Send email function
export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; message: string }> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Adham', // Votre nom
    };

    const serviceId = EMAILJS_CONFIG.SERVICE_ID || "";
    const templateId = EMAILJS_CONFIG.TEMPLATE_ID || "";
    const publicKey = EMAILJS_CONFIG.PUBLIC_KEY || "";

    if (!serviceId || !templateId || !publicKey) {
      throw new Error("EmailJS configuration is missing. Check env variables.");
    }

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Email sent successfully!'
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again.'
    };
  }
};
