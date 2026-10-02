import express from 'express';
import {
  getServices,
  getTestimonials,
  getFaqs,
  getProfile,
  downloadCv
} from '../controllers/contentController.js';

const router = express.Router();

router.get('/services', getServices);
router.get('/testimonials', getTestimonials);
router.get('/faqs', getFaqs);
router.get('/profile', getProfile);
router.get('/cv', downloadCv);
router.get('/resume', downloadCv);

export default router;
