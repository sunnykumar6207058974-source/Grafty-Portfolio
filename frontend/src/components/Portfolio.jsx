import React from 'react';

const proj1 = '/assets/portfolio-01-macbook.jpg';
const proj2 = '/assets/portfolio-02-books.jpg';
const proj3 = '/assets/portfolio-03-tape.jpg';
const proj4 = '/assets/portfolio-04-iphone.jpg';

const imageMap = {
  'mockup-design': proj1,
  'book-cover': proj2,
  'font-design': proj3,
  'application': proj4
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
              <div className="portfolio-media-wrap">
                <img src={imgSrc} alt={proj.title} className="portfolio-img" />
              </div>
              <div className="portfolio-info">
                <span className="portfolio-category">{proj.category}</span>
                <h3 className="portfolio-title">{proj.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
