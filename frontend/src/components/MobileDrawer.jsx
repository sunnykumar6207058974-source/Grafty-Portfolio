import React from 'react';

export const MobileDrawer = ({ isOpen, onClose }) => {
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
        <a href="#contact" className="btn-hire btn-hire-mobile" onClick={onClose}>Hire Me!</a>
      </div>
    </div>
  );
};
