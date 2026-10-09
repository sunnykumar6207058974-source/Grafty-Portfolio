import { Contact } from '../models/Contact.js';
import { sendAdminNotification, sendClientWelcomeEmail } from '../services/emailService.js';
import { saveContactToFirebase } from '../config/firebase.js';

export const submitContactForm = async (req, res, next) => {
  try {
    const { fullName, email, subject, message } = req.body;

    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields (fullName, email, subject, message) are required.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    // 1. Create in database
    const newContact = Contact.create({ fullName, email, subject, message });

    // 2. Asynchronously save to Firebase (if configured)
    saveContactToFirebase(newContact).catch((err) => {
      console.warn('Firebase sync warning:', err.message);
    });

    // 3. Send Gmail notification to Sunny Kumar's phone
    sendAdminNotification(newContact).catch((err) => {
      console.warn('Admin email notification warning:', err.message);
    });

    // 4. Send automated welcome & thank-you email to the client
    sendClientWelcomeEmail(newContact).catch((err) => {
      console.warn('Client welcome email warning:', err.message);
    });

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      data: newContact
    });
  } catch (err) {
    next(err);
  }
};

export const getContacts = async (req, res, next) => {
  try {
    const contacts = Contact.findAll();
    return res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (err) {
    next(err);
  }
};
