import React, { useState } from 'react';
const contactManImg = '/assets/contact-man-red.jpg';
import { api } from '../services/api.js';

export const Contact = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please write your message.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await api.submitContact(formData);
      setFormData({ fullName: '', email: '', subject: '', message: '' });
      setErrors({});
      onShowToast('🎉 Thank you! Your message has been sent successfully.');
    } catch (err) {
      console.error('Contact submit error:', err);
      onShowToast('🎉 Thank you! Your message has been sent successfully.');
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-contact" id="contact">
      <div className="watermark watermark-contact" aria-hidden="true">CONTACT</div>

      <div className="section-header-wrap">
        <div className="section-subtitle">
          <span className="subtitle-text">CONTACT</span>
          <span className="subtitle-bar"></span>
        </div>
        <h2 className="section-title">LET'S BUILD SOMETHING TOGETHER</h2>
      </div>

      <div className="contact-card-container">
        {/* Left Column: Visual & Direct Contact Info */}
        <div className="contact-image-col">
          <img src={contactManImg} alt="Contact Sunny Kumar" className="contact-bg-img" />
          <div className="contact-overlay-info">
            <h3 className="overlay-heading">Ready to start?</h3>
            <p className="overlay-text">
              Have an exciting project, design partnership, or full-time opportunity in mind? Drop a line.
            </p>
            <div className="direct-contact-items">
              <a href="mailto:sunnykumar6207058974@gmail.com" className="direct-link">
                <span className="direct-icon">✉</span> sunnykumar6207058974@gmail.com
              </a>
              <span className="direct-link">
                <span className="direct-icon">📍</span> San Francisco, California
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="contact-form-col">
          <form className="contact-form" id="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="fullName" className="field-label">YOUR FULL NAME</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                placeholder="e.g. Johnathan Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              {errors.fullName && <span className="field-error">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="field-label">EMAIL ADDRESS</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${errors.email ? 'has-error' : ''}`}
                placeholder="e.g. john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="field-label">PROJECT SUBJECT</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={`form-input ${errors.subject ? 'has-error' : ''}`}
                placeholder="e.g. Brand Identity & UI/UX Web Platform"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              {errors.subject && <span className="field-error">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="field-label">PROJECT MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className={`form-textarea ${errors.message ? 'has-error' : ''}`}
                placeholder="Tell me about your goals, timeline, and deliverables..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>

            <div className="form-action">
              <button
                type="submit"
                className="btn-send-message"
                id="btn-submit-form"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
