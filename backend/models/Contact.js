import { db } from '../config/db.js';

export class Contact {
  static create({ fullName, email, subject, message }) {
    const newContact = {
      id: `contact-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      fullName: fullName.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString()
    };
    db.contacts.push(newContact);
    return newContact;
  }

  static findAll() {
    return [...db.contacts].reverse();
  }
}
