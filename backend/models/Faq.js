import { db } from '../config/db.js';

export class Faq {
  static findAll() {
    return db.faqs;
  }
}
