import { db } from '../config/db.js';

export class Project {
  static findAll() {
    return db.projects;
  }

  static findById(id) {
    return db.projects.find(p => p.id === id) || null;
  }
}
