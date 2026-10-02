import React, { useState } from 'react';

export const Services = ({ services = [] }) => {
  const [activeId, setActiveId] = useState(services[0]?.id || 'full-stack');

  const toggleService = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section-services" id="services">
      <div className="watermark watermark-services" aria-hidden="true">SERVICES</div>

      <div className="section-header-wrap">
        <div className="section-subtitle">
          <span className="subtitle-text">SERVICES</span>
          <span className="subtitle-bar"></span>
        </div>
        <h2 className="section-title">MY CORE SPECIALTIES</h2>
      </div>

      <div className="services-list-container">
        {services.map((service) => {
          const isActive = activeId === service.id;
          return (
            <div
              key={service.id}
              className={`service-card ${isActive ? 'active' : ''}`}
            >
              <button
                className="service-trigger"
                aria-expanded={isActive}
                onClick={() => toggleService(service.id)}
              >
                <span className="service-title">{service.title}</span>
                <div className="service-icon" aria-hidden="true">
                  {isActive ? '—' : '+'}
                </div>
              </button>

              <div
                className="service-content"
                style={{
                  maxHeight: isActive ? '380px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease'
                }}
              >
                <p className="service-desc">{service.desc}</p>
                {service.tags && (
                  <div className="service-tags" style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          padding: '4px 12px',
                          borderRadius: '100px',
                          background: 'rgba(0,0,0,0.06)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
