import { db } from '../config/db.js';

export class Service {
  static findAll() {
    return db.services;
  }
}
