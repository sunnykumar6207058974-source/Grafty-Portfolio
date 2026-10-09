import React from 'react';
const avatarHugo = '/assets/testimonial-01-hugo.png';
const avatarRashed = '/assets/testimonial-02-rashed.png';
const avatarJames = '/assets/testimonial-03-james.png';

const avatarMap = {
  'hugo': avatarHugo,
  'rashed': avatarRashed,
  'james': avatarJames
};

export const Testimonials = ({ testimonials = [] }) => {
  return (
    <section className="section-feedback" id="feedback">
      <div className="watermark watermark-feedback" aria-hidden="true">FEEDBACK</div>

      <div className="section-header-wrap">
        <div className="section-subtitle">
          <span className="subtitle-text">FEEDBACK</span>
          <span className="subtitle-bar"></span>
        </div>
        <h2 className="section-title">WHAT CLIENTS SAY ABOUT ME</h2>
      </div>

      <div className="feedback-cards-grid">
        {testimonials.map((item) => {
          const rawAvatar = item.avatar || '';
          const avatarSrc = avatarMap[item.id] || (rawAvatar.startsWith('/') ? rawAvatar : `/${rawAvatar}`);
          const ratingCount = Math.max(0, Math.min(5, Number(item.rating) || 5));
          return (
            <div key={item.id} className="feedback-card">
              <div className="card-top-row">
                <div className="feedback-stars" aria-label={`${ratingCount} out of 5 stars`}>
                  {'★'.repeat(ratingCount)}
                </div>
                <div className="quote-mark" aria-hidden="true">“</div>
              </div>

              <p className="feedback-quote">{item.quote}</p>

              <div className="feedback-author-row">
                <img
                  src={avatarSrc}
                  alt={item.name}
                  className="feedback-avatar-img"
                />
                <div className="author-meta">
                  <h4 className="author-name">{item.name}</h4>
                  <p className="author-role">{item.role}, {item.company}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
