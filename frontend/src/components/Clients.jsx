import React from 'react';
const logo1 = '/assets/client-logo-1.png';
const logo2 = '/assets/client-logo-2.png';
const logo3 = '/assets/client-logo-3.png';
const logo4 = '/assets/client-logo-4.png';
const logo5 = '/assets/client-logo-5.png';

export const Clients = () => {
  const logos = [
    { src: logo1, alt: 'Client 1' },
    { src: logo2, alt: 'Client 2' },
    { src: logo3, alt: 'Client 3' },
    { src: logo4, alt: 'Client 4' },
    { src: logo5, alt: 'Client 5' }
  ];

  return (
    <section className="section-clients" id="clients">
      <div className="watermark watermark-clients" aria-hidden="true">CLIENTS</div>

      <div className="section-header-wrap">
        <div className="section-subtitle">
          <span className="subtitle-text">COLLABORATIONS</span>
          <span className="subtitle-bar"></span>
        </div>
        <h2 className="section-title">TRUSTED BY GLOBAL TEAMS</h2>
      </div>

      <div className="clients-cards-track">
        {logos.map((logo, idx) => (
          <div key={idx} className="client-brand-card">
            <img src={logo.src} alt={logo.alt} className="client-logo-img" />
          </div>
        ))}
      </div>
    </section>
  );
};
