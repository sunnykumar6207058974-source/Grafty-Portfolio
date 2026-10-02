/**
 * GRAFTY — Creative Personal Portfolio
 * Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initServicesAccordion();
  initFaqAccordion();
  initPortfolioModal();
  initContactForm();
  initScrollSpy();
  initParallaxBadges();
  initCvDownload();
});

/* ==========================================================================
   1. MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const navLinks = drawer.querySelectorAll('.mobile-nav-link, .btn-hire-mobile');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  function openMenu() {
    drawer.classList.add('open');
    toggleBtn.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    toggleBtn.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   2. SERVICES ACCORDION
   ========================================================================== */
function initServicesAccordion() {
  const cards = document.querySelectorAll('.service-card');

  cards.forEach(card => {
    const trigger = card.querySelector('.service-trigger');
    const content = card.querySelector('.service-content');
    const icon = card.querySelector('.service-icon');

    trigger.addEventListener('click', () => {
      const isActive = card.classList.contains('active');

      // Close all cards in services
      cards.forEach(c => {
        c.classList.remove('active');
        const cTrigger = c.querySelector('.service-trigger');
        const cContent = c.querySelector('.service-content');
        const cIcon = c.querySelector('.service-icon');

        cTrigger.setAttribute('aria-expanded', 'false');
        cContent.style.maxHeight = '0px';
        cIcon.textContent = '+';
      });

      // If it wasn't active before, open it
      if (!isActive) {
        card.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.textContent = '—';
      }
    });
  });
}

/* ==========================================================================
   3. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all FAQ items
      items.forEach(it => {
        it.classList.remove('active');
        const itTrigger = it.querySelector('.faq-trigger');
        const itContent = it.querySelector('.faq-content');
        const itIcon = it.querySelector('.faq-icon');

        itTrigger.setAttribute('aria-expanded', 'false');
        itContent.style.maxHeight = '0px';
        itIcon.textContent = '+';
      });

      // Open clicked item if not active
      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.textContent = '—';
      }
    });
  });
}

/* ==========================================================================
   4. PORTFOLIO MODAL PREVIEW
   ========================================================================== */
const projectData = {
  'cartify': {
    category: 'E-COMMERCE',
    title: 'Cartify - Premium E-Commerce Shopping Platform',
    desc: 'Built a full-stack e-commerce platform with product category management, interactive shopping cart, dark mode toggle, and instant dispatch tracking.',
    img: 'assets/cartify.jpg'
  },
  'urbanthread': {
    category: 'E-COMMERCE',
    title: 'UrbanThread - Luxe Sneakers & Streetwear Drops',
    desc: 'Developed a high-end streetwear e-commerce platform featuring exclusive sneaker drops, flash sales, promo code discount engine, wishlist, and admin analytics dashboard.',
    img: 'assets/urbanthread.jpg'
  },
  'pixelforge': {
    category: 'WEB APPS',
    title: 'PixelForge - Developer Portfolio & Digital Showcase',
    desc: 'Created an interactive developer portfolio featuring an HTML5 canvas particle background, theme switching context, video demo popups, custom cursor, and printable resume viewer.',
    img: 'assets/pixelforge.jpg'
  },
  'aetheria': {
    category: 'WEBGL 3D',
    title: 'Aetheria - Immersive WebGL 3D Matrix Experience',
    desc: 'Architected a 3D WebGL digital experience with 60 FPS matrix torus particles, audio sound FX, zero-trust API security, and ultra-fast sub-second loading speeds.',
    img: 'assets/aetheria.jpg'
  },
  'mockup-design': {
    category: 'MOCKUP DESIGN',
    title: 'Macbook Pro 16 Studio Mockup',
    desc: 'High-fidelity 3D device showcase featuring vibrant contrast, realistic concrete textures, and custom responsive layouts designed for presentation pitching.',
    img: 'assets/portfolio-01-macbook.jpg'
  },
  'book-cover': {
    category: 'BOOK COVER',
    title: 'Showcase A4 Minimalist Editorial',
    desc: 'Minimalist editorial publication design featuring clean typographic grids, premium spine layouts, and vibrant cobalt blue studio staging.',
    img: 'assets/portfolio-02-books.jpg'
  },
  'font-design': {
    category: 'FONT DESIGN',
    title: 'Duct Tape Custom Typography',
    desc: 'Experimental dimensional font branding crafted for industrial street-culture packaging, featuring high-contrast orange and white visual dynamics.',
    img: 'assets/portfolio-03-tape.jpg'
  },
  'application': {
    category: 'APPLICATION',
    title: 'iPhone 16 Pro Application Interface',
    desc: 'Next-generation mobile operating UI design featuring deep purple radial gradients, tactile glassmorphism elements, and refined micro-interactions.',
    img: 'assets/portfolio-04-iphone.jpg'
  }
};

function initPortfolioModal() {
  const modal = document.getElementById('project-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const closeBtn = document.getElementById('modal-close');
  const cards = document.querySelectorAll('.portfolio-card');

  if (!modal) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const projId = card.getAttribute('data-project');
      const data = projectData[projId];
      if (data) {
        modalImg.src = data.img;
        modalImg.alt = data.title;
        modalCategory.textContent = data.category;
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;

        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   5. CONTACT FORM & TOAST
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset errors
    document.querySelectorAll('.field-error').forEach(el => el.textContent = '');

    let hasError = false;
    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!fullName) {
      document.getElementById('error-fullName').textContent = 'Please enter your name.';
      hasError = true;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('error-email').textContent = 'Please provide a valid email address.';
      hasError = true;
    }

    if (!subject) {
      document.getElementById('error-subject').textContent = 'Please enter a subject.';
      hasError = true;
    }

    if (!message) {
      document.getElementById('error-message').textContent = 'Please write your message.';
      hasError = true;
    }

    if (hasError) return;

    // Simulate sending message
    const submitBtn = document.getElementById('btn-submit-form');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      showToast('🎉 Thank you! Your message has been sent to Jessy Linda.');
    }, 900);
  });
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* ==========================================================================
   6. SCROLL SPY FOR NAVIGATION
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   7. PARALLAX EFFECT ON HERO BADGES
   ========================================================================== */
function initParallaxBadges() {
  const brandingBadge = document.getElementById('badge-branding');
  const designerBadge = document.getElementById('badge-designer');
  const heroSection = document.getElementById('hero');

  if (!brandingBadge || !designerBadge || !heroSection || window.innerWidth < 1024) return;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const moveX = (x / rect.width) * 20;
    const moveY = (y / rect.height) * 20;

    brandingBadge.style.transform = `translate(${moveX * -1.2}px, ${moveY * -1.2}px) rotate(-15deg)`;
    designerBadge.style.transform = `translate(${moveX * 1.5}px, ${moveY * 1.5}px) rotate(18deg)`;
  });

  heroSection.addEventListener('mouseleave', () => {
    brandingBadge.style.transform = 'rotate(-15deg)';
    designerBadge.style.transform = 'rotate(18deg)';
  });
}

/* ==========================================================================
   8. CV DOWNLOAD ACTION
   ========================================================================== */
function initCvDownload() {
  const cvBtn = document.getElementById('btn-download-cv');
  if (!cvBtn) return;

  cvBtn.addEventListener('click', async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    showToast('📄 Downloading Sunny Kumar Curriculum Vitae (PDF)...');
    if (typeof window.downloadResumePdf === 'function') {
      try {
        await window.downloadResumePdf();
      } catch (err) {
        console.warn('downloadResumePdf error:', err);
      }
    } else {
      const a = document.createElement('a');
      a.href = 'assets/Sunny_Kumar_Resume.pdf';
      a.download = 'Sunny_Kumar_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        if (document.body.contains(a)) document.body.removeChild(a);
      }, 1000);
    }
  });

  const resumeNavBtns = document.querySelectorAll('#btn-resume-nav, #btn-resume-mobile');
  resumeNavBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      if (e && e.preventDefault) e.preventDefault();
      showToast('📄 Downloading Sunny Kumar Resume (PDF)...');
      if (typeof window.downloadResumePdf === 'function') {
        try {
          await window.downloadResumePdf('Sunny-Kumar-Resume.pdf');
        } catch (err) {
          console.warn('downloadResumePdf error:', err);
        }
      } else {
        const a = document.createElement('a');
        a.href = 'assets/Sunny-Kumar-Resume.pdf';
        a.download = 'Sunny-Kumar-Resume.pdf';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          if (document.body.contains(a)) document.body.removeChild(a);
        }, 1000);
      }
    });
  });

  const exploreFeedbackBtn = document.getElementById('btn-explore-feedback');
  if (exploreFeedbackBtn) {
    exploreFeedbackBtn.addEventListener('click', () => {
      showToast('🌟 Displaying all verified client testimonials and case study reviews.');
    });
  }
}
