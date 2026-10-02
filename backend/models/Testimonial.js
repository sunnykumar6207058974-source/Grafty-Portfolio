import { db } from '../config/db.js';

export class Testimonial {
  static findAll() {
    return db.testimonials;
  }
}
