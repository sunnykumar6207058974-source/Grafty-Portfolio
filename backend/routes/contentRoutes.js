import express from 'express';
import {
  getServices,
  getTestimonials,
  getFaqs,
  getProfile
} from '../controllers/contentController.js';

const router = express.Router();

router.get('/services', getServices);
router.get('/testimonials', getTestimonials);
router.get('/faqs', getFaqs);
router.get('/profile', getProfile);

export default router;
