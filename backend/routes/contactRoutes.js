import express from 'express';
import { submitContactForm, getContacts } from '../controllers/contactController.js';
import { validateContact } from '../middleware/validateContact.js';

const router = express.Router();

router.post('/', validateContact, submitContactForm);
router.get('/', getContacts);

export default router;
