import React, { useRef, useEffect } from 'react';
const heroPortrait = '/assets/hero-woman.jpg';
const heroSignature = '/assets/hero-signature.png';
const badgeDiscussSvg = '/assets/badge-discuss.svg';

export const Hero = () => {
  const heroRef = useRef(null);
  const brandingRef = useRef(null);
  const developerRef = useRef(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    const brandingEl = brandingRef.current;
    const developerEl = developerRef.current;

    if (!heroEl || !brandingEl || !developerEl) return;

    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      const rect = heroEl.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const moveX = (x / rect.width) * 20;
      const moveY = (y / rect.height) * 20;

      brandingEl.style.transform = `translate(${moveX * -1.2}px, ${moveY * -1.2}px) rotate(-15deg)`;
      developerEl.style.transform = `translate(${moveX * 1.5}px, ${moveY * 1.5}px) rotate(18deg)`;
    };

    const handleMouseLeave = () => {
      brandingEl.style.transform = 'rotate(-15deg)';
      developerEl.style.transform = 'rotate(18deg)';
    };

    heroEl.addEventListener('mousemove', handleMouseMove);
    heroEl.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      heroEl.removeEventListener('mousemove', handleMouseMove);
      heroEl.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="section-hero" id="hero" ref={heroRef}>
      {/* Watermark Background Text */}
      <div className="watermark watermark-hero" aria-hidden="true">DESIGNER</div>

      <div className="hero-content-wrapper">
        {/* Center Visual Portrait */}
        <div className="hero-centerpiece">
          <div className="hero-arch-container">
            {/* Floating Black Badges */}
            <div className="hero-badge badge-branding" id="badge-branding" ref={brandingRef}>Branding</div>
            <div className="hero-badge badge-designer" id="badge-designer" ref={developerRef}>Developer</div>

            {/* Neon Purple Signature Script Overlay */}
            <div className="hero-signature-wrapper" aria-hidden="true">
              <img src={heroSignature} alt="Sunny Kumar Signature" className="hero-signature-img" />
            </div>

            <img
              src={heroPortrait}
              alt="Sunny Kumar - Creative Developer & Designer"
              className="hero-portrait-img"
            />
          </div>
        </div>

        {/* Left Typography */}
        <div className="hero-left-col">
          <p className="hero-greeting">Hi 👋, I'm <span className="name-bold">Jessy Linda</span></p>
          <h1 className="hero-headline">
            BRANDING,<br />
            PRODUCT UI/UX<br />
            & DESIGN.
          </h1>
        </div>

        {/* Right Floating Card */}
        <div className="hero-right-col">
          <div className="hero-info-card">
            <p className="card-desc">
              7+ Years of Expertise, Award-Winning Creative Designer in California, USA.
            </p>
            <a href="mailto:sunnykumar6207058974@gmail.com" className="card-email">sunnykumar6207058974@gmail.com</a>

            {/* Scalloped Discuss Badge Button (SVG) */}
            <a href="#contact" className="starburst-badge discuss-badge" aria-label="Let's Discuss">
              <img src={badgeDiscussSvg} alt="Let's Discuss ↗" className="discuss-badge-img" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
