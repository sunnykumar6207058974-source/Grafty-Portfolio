import React from 'react';
import { downloadResumePdf } from '../utils/downloadResume.js';

export const MobileDrawer = ({ isOpen, onClose, onDownloadResume }) => {
  const handleResumeDownload = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onDownloadResume) onDownloadResume();
    if (onClose) onClose();
    await downloadResumePdf('Sunny-Kumar-Resume.pdf');
  };

  return (
    <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`} id="mobile-drawer">
      <a href="#hero" className="mobile-nav-link" onClick={onClose}>Home</a>
      <a href="#services" className="mobile-nav-link" onClick={onClose}>Services</a>
      <a href="#about" className="mobile-nav-link" onClick={onClose}>About</a>
      <a href="#portfolio" className="mobile-nav-link" onClick={onClose}>Portfolio</a>
      <a href="#feedback" className="mobile-nav-link" onClick={onClose}>Feedback</a>
      <a href="#faq" className="mobile-nav-link" onClick={onClose}>FAQ</a>
      <a href="#contact" className="mobile-nav-link" onClick={onClose}>Contact</a>
      <div className="mobile-drawer-footer">
        <a
          href="/Sunny-Kumar-Resume.pdf"
          download="Sunny-Kumar-Resume.pdf"
          className="btn-resume-nav btn-resume-mobile"
          id="btn-resume-mobile"
          aria-label="Download Resume"
          onClick={handleResumeDownload}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="resume-download-icon"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
          <span>Download Resume</span>
        </a>
        <a href="#contact" className="btn-hire btn-hire-mobile" onClick={onClose}>Hire Me!</a>
      </div>
    </div>
  );
};
