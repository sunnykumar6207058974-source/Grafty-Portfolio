import React from 'react';

const cartifyImg = '/assets/cartify.jpg';
const urbanthreadImg = '/assets/urbanthread.jpg';
const pixelforgeImg = '/assets/pixelforge.jpg';
const aetheriaImg = '/assets/aetheria.jpg';

const imageMap = {
  'cartify': cartifyImg,
  'urbanthread': urbanthreadImg,
  'pixelforge': pixelforgeImg,
  'aetheria': aetheriaImg,
  'mockup-design': '/assets/portfolio-01-macbook.jpg',
  'book-cover': '/assets/portfolio-02-books.jpg',
  'font-design': '/assets/portfolio-03-tape.jpg',
  'application': '/assets/portfolio-04-iphone.jpg'
};

export const Portfolio = ({ projects = [], onSelectProject }) => {
  return (
    <section className="section-portfolio" id="portfolio">
      <div className="watermark watermark-portfolio" aria-hidden="true">PORTFOLIO</div>

      <div className="section-header-wrap">
        <div className="section-subtitle">
          <span className="subtitle-text">PORTFOLIO</span>
          <span className="subtitle-bar"></span>
        </div>
        <h2 className="section-title">FEATURED CREATIVE WORK</h2>
      </div>

      <div className="portfolio-grid">
        {projects.map((proj) => {
          const imgSrc = imageMap[proj.id] || proj.image;
          return (
            <div
              key={proj.id}
              className="portfolio-card"
              data-project={proj.id}
              onClick={() => onSelectProject({ ...proj, displayImg: imgSrc })}
              style={{ cursor: 'pointer' }}
            >
              <div className="portfolio-card-media">
                <img src={imgSrc} alt={proj.title} className="portfolio-img" />
              </div>
              <div className="portfolio-badge-group">
                <span className="project-tag-pill">{proj.title.split(' - ')[0] || proj.title}</span>
                <span className="project-arrow-btn" aria-hidden="true">↗</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
