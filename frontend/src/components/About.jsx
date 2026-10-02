import React from 'react';
const aboutAvatar = '/assets/about-avatar.jpg';
const badgeCvSvg = '/assets/badge-cv.svg';

const technologiesList = [
  'React.js',
  'JavaScript (ES6+)',
  'Node.js',
  'Express.js',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'REST APIs',
  'MongoDB',
  'Git',
  'GitHub',
  'Vercel',
  'Vite'
];

const creativeExpertiseList = [
  'Video Cutting & Trimming',
  'Motion Graphics',
  'Audio Synchronization',
  'Color Grading',
  'Storyboarding',
  'Social Media Clips',
  'Promo Videos',
  'Reel Editing'
];

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
          <div className="about-avatar-circle">
            <img src={aboutAvatar} alt="Sunny Kumar - Full-Stack Developer" className="about-avatar-img" />
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

      {/* Technologies & Creative Expertise Showcase */}
      <div
        className="about-expertise-grid"
        style={{
          marginTop: '64px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          width: '100%'
        }}
      >
        {/* Technologies Card */}
        <div
          className="expertise-card"
          style={{
            background: 'var(--card-bg)',
            borderRadius: 'var(--radius-card)',
            padding: '40px',
            boxShadow: 'var(--shadow-card)',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '26px' }}>💻</span>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '22px',
                  color: 'var(--text-main)',
                  letterSpacing: '0.02em',
                  margin: 0
                }}
              >
                TECHNOLOGIES &amp; TECHNICAL SKILLS
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  margin: '4px 0 0 0',
                  fontWeight: 500
                }}
              >
                Core engineering stack &amp; modern web tools from resume
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
            {technologiesList.map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(0, 0, 0, 0.05)',
                  color: 'var(--text-main)',
                  transition: 'all 0.2s ease',
                  cursor: 'default'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Creative Expertise Card */}
        <div
          className="expertise-card"
          style={{
            background: 'var(--card-bg)',
            borderRadius: 'var(--radius-card)',
            padding: '40px',
            boxShadow: 'var(--shadow-card)',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '26px' }}>🎬</span>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '22px',
                  color: 'var(--text-main)',
                  letterSpacing: '0.02em',
                  margin: 0
                }}
              >
                CREATIVE EXPERTISE
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  margin: '4px 0 0 0',
                  fontWeight: 500
                }}
              >
                Visual media, video editing &amp; motion production
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
            {creativeExpertiseList.map((skill) => (
              <span
                key={skill}
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(0, 0, 0, 0.05)',
                  color: 'var(--text-main)',
                  transition: 'all 0.2s ease',
                  cursor: 'default'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
