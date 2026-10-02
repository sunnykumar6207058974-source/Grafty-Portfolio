import { Service } from '../models/Service.js';
import { Testimonial } from '../models/Testimonial.js';
import { Faq } from '../models/Faq.js';
import { db } from '../config/db.js';

export const getServices = async (req, res, next) => {
  try {
    const services = Service.findAll();
    return res.json({ success: true, data: services });
  } catch (err) {
    next(err);
  }
};

export const getTestimonials = async (req, res, next) => {
  try {
    const testimonials = Testimonial.findAll();
    return res.json({ success: true, data: testimonials });
  } catch (err) {
    next(err);
  }
};

export const getFaqs = async (req, res, next) => {
  try {
    const faqs = Faq.findAll();
    return res.json({ success: true, data: faqs });
  } catch (err) {
    next(err);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    return res.json({ success: true, data: db.profile });
  } catch (err) {
    next(err);
  }
};
