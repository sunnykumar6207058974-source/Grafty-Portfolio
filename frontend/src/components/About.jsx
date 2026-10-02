import React from 'react';
const aboutAvatar = '/assets/about-avatar.jpg';
const badgeCvSvg = '/assets/badge-cv.svg';

export const About = ({ onDownloadCv }) => {
  return (
    <section className="section-about" id="about">
      <div className="watermark watermark-about" aria-hidden="true">ABOUT ME</div>

      <div className="section-header-wrap">
        <div className="section-subtitle">
          <span className="subtitle-text">ABOUT ME</span>
          <span className="subtitle-bar"></span>
        </div>
        <h2 className="section-title">CREATIVE VISION &amp; EXPERTISE</h2>
      </div>

      <div className="about-visual-stats">
        {/* Left Column Stats */}
        <div className="stats-col stats-col-left">
          <div className="stat-card">
            <span className="stat-number">12+</span>
            <span className="stat-label">Design &amp; Innovation Awards</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">150+</span>
            <span className="stat-label">Digital Products Shipped</span>
          </div>
        </div>

        {/* Center Visual Circle */}
        <div className="about-center-circle-wrap">
          <div className="about-circle-frame">
            <img src={aboutAvatar} alt="About Me Portrait" className="about-avatar-img" />
          </div>
          {/* Download CV circular starburst badge */}
          <button
            className="starburst-badge cv-badge"
            id="btn-download-cv"
            aria-label="Download CV"
            onClick={onDownloadCv}
          >
            <img src={badgeCvSvg} alt="Download CV ↘" className="cv-badge-img" />
          </button>
        </div>

        {/* Right Column Stats */}
        <div className="stats-col stats-col-right">
          <div className="stat-card">
            <span className="stat-number">7+</span>
            <span className="stat-label">Years of Industry Experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">99%</span>
            <span className="stat-label">Client Satisfaction Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};
