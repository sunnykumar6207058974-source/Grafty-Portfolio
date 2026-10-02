import React from 'react';

export const Footer = () => {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-inner">
        {/* Centered Logo */}
        <div className="footer-brand-wrap">
          <a href="#top" className="footer-logo-link" aria-label="Sunny Home">
            <img src="/assets/logo.png" alt="Sunny" className="footer-logo-img" />
          </a>
        </div>

        {/* Social Icons Circle */}
        <div className="footer-social-row">
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Dribbble">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
              <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
              <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/sunny" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.37 9.74v-8.37H5.1v8.37h2.73z"/>
            </svg>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="X (Twitter)">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Behance">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M8.228 15.01c.42 0 .77-.07 1.05-.21.28-.14.5-.32.66-.54.16-.22.28-.48.34-.78.07-.3.1-.63.1-1 0-.75-.2-1.34-.6-1.78-.4-.44-1.02-.66-1.85-.66H5.538v4.97h2.69zm-.27-6.28c.67 0 1.19-.13 1.56-.4.37-.27.56-.7.56-1.28 0-.33-.07-.61-.21-.84-.14-.23-.33-.41-.57-.54-.24-.13-.52-.22-.84-.26-.32-.04-.67-.06-1.05-.06H5.538v3.38h2.42zm7.99 4.31c-.34 0-.64.05-.9.16-.26.11-.47.26-.64.44-.17.18-.3.39-.38.64-.08.25-.13.51-.15.79h3.76c-.03-.57-.2-1.06-.51-1.46-.31-.4-.7-.57-1.18-.57zm4.05-4.48h-4.88v1.36h4.88V8.56zm-1.86 3.19c.77.34 1.37.84 1.8 1.5.43.66.65 1.48.65 2.46 0 .4-.04.81-.12 1.23h-6.86c.07.61.32 1.1.75 1.47.43.37.98.56 1.65.56.54 0 1.01-.11 1.41-.33.4-.22.7-.51.9-.87h2.24c-.31.81-.84 1.46-1.59 1.95-.75.49-1.74.74-2.96.74-.93 0-1.75-.16-2.46-.48-.71-.32-1.3-.77-1.77-1.35-.47-.58-.82-1.28-1.05-2.1-.23-.82-.35-1.73-.35-2.73 0-.96.12-1.85.36-2.67.24-.82.6-1.53 1.08-2.13.48-.6 1.08-1.06 1.8-1.38.72-.32 1.55-.48 2.49-.48.97 0 1.82.16 2.55.48.73.32 1.33.77 1.8 1.35.47.58.81 1.27 1.02 2.07.21.8.32 1.67.32 2.61v.37h-.01zM2.85 5.56h5.36c.78 0 1.47.07 2.07.21.6.14 1.11.36 1.53.66.42.3.74.68.96 1.14.22.46.33 1 .33 1.62 0 .54-.1 1.01-.3 1.41-.2.4-.49.74-.87 1.02.53.25.96.61 1.29 1.08.33.47.5 1.06.5 1.77 0 .68-.13 1.28-.39 1.8-.26.52-.63.95-1.11 1.29-.48.34-1.06.59-1.74.75-.68.16-1.44.24-2.28.24H2.85V5.56z"/>
            </svg>
          </a>
        </div>

        {/* Copyright & Links Row */}
        <div className="footer-meta-row">
          <p className="copyright-text">@2025 Grafty inc. All Right Reserved</p>
          <div className="footer-nav-links">
            <a href="#about" className="footer-nav-item">About</a>
            <span className="dot-separator">.</span>
            <a href="#portfolio" className="footer-nav-item">Work Gallery</a>
            <span className="dot-separator">.</span>
            <a href="#services" className="footer-nav-item">Service</a>
          </div>
        </div>

        {/* Bottom Watermark */}
        <div className="footer-watermark-wrap">
          <div className="watermark watermark-footer" aria-hidden="true">SUNNY KUMAR</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
