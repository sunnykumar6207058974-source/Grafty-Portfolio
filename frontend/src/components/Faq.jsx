import React, { useState } from 'react';

export const Faq = ({ faqs = [] }) => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section-faq" id="faq">
      <div className="watermark watermark-faq" aria-hidden="true">QUESTIONS</div>

      <div className="section-header-wrap">
        <div className="section-subtitle">
          <span className="subtitle-text">FAQ</span>
          <span className="subtitle-bar"></span>
        </div>
        <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
      </div>

      <div className="faq-accordion-container">
        {faqs.map((faq) => {
          const isActive = activeFaq === faq.id;
          return (
            <div key={faq.id} className={`faq-item ${isActive ? 'active' : ''}`}>
              <button
                className="faq-trigger"
                aria-expanded={isActive}
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  {isActive ? '—' : '+'}
                </span>
              </button>

              <div
                className="faq-content"
                style={{
                  maxHeight: isActive ? '250px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease'
                }}
              >
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
