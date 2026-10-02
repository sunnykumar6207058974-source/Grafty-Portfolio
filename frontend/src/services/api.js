/**
 * REST API client service connecting frontend to backend
 */

const API_BASE_URL = '/api';

export const api = {
  // Fetch portfolio projects
  async getProjects() {
    try {
      const res = await fetch(`${API_BASE_URL}/projects`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.warn('API getProjects failed, using fallback data:', err);
      return [
        {
          id: 'mockup-design',
          category: 'MOCKUP DESIGN',
          title: 'Macbook Pro 16 Studio Mockup',
          desc: 'High-fidelity 3D device showcase featuring vibrant contrast, realistic concrete textures, and custom responsive layouts designed for presentation pitching.',
          image: '/assets/portfolio-01-macbook.jpg'
        },
        {
          id: 'book-cover',
          category: 'BOOK COVER',
          title: 'Showcase A4 Minimalist Editorial',
          desc: 'Minimalist editorial publication design featuring clean typographic grids, premium spine layouts, and vibrant cobalt blue studio staging.',
          image: '/assets/portfolio-02-books.jpg'
        },
        {
          id: 'font-design',
          category: 'FONT DESIGN',
          title: 'Duct Tape Custom Typography',
          desc: 'Experimental dimensional font branding crafted for industrial street-culture packaging, featuring high-contrast orange and white visual dynamics.',
          image: '/assets/portfolio-03-tape.jpg'
        },
        {
          id: 'application',
          category: 'APPLICATION',
          title: 'iPhone 16 Pro Application Interface',
          desc: 'Next-generation mobile operating UI design featuring deep purple radial gradients, tactile glassmorphism elements, and refined micro-interactions.',
          image: '/assets/portfolio-04-iphone.jpg'
        }
      ];
    }
  },

  // Fetch services
  async getServices() {
    try {
      const res = await fetch(`${API_BASE_URL}/services`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.warn('API getServices failed, using fallback data:', err);
      return [
        {
          id: 'branding',
          num: '01',
          title: 'BRANDING & IDENTITY',
          desc: 'Comprehensive brand positioning, distinctive typography hierarchies, bespoke color palettes, and memorable brand guidelines tailored for digital and physical touchpoints.'
        },
        {
          id: 'ui-ux',
          num: '02',
          title: 'PRODUCT UI/UX DESIGN',
          desc: 'User-centric interface research, wireframing, high-fidelity responsive prototyping, and pixel-perfect design systems built to elevate conversions and delightful user flows.'
        },
        {
          id: 'development',
          num: '03',
          title: 'FULL-STACK DEVELOPMENT',
          desc: 'Performant, accessible, and scalable frontend and backend architectures utilizing modern component workflows, clean RESTful APIs, and responsive CSS styling.'
        },
        {
          id: 'art-direction',
          num: '04',
          title: 'CREATIVE ART DIRECTION',
          desc: 'Visual storytelling, bespoke 3D staging, creative photo direction, and interactive web layouts engineered to capture attention and differentiate brands in crowded markets.'
        }
      ];
    }
  },

  // Fetch testimonials
  async getTestimonials() {
    try {
      const res = await fetch(`${API_BASE_URL}/testimonials`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.warn('API getTestimonials failed, using fallback data:', err);
      return [
        {
          id: 'hugo',
          name: 'Hugo Boss',
          role: 'Creative Director',
          company: 'Nordic Studios',
          avatar: '/assets/testimonial-01-hugo.png',
          rating: 5,
          quote: 'Working with this studio elevated our product identity beyond expectations. The attention to typography, micro-interactions, and visual harmony resulted in a 40% jump in brand engagement.'
        },
        {
          id: 'rashed',
          name: 'Rashed Al-Mansoori',
          role: 'VP of Product',
          company: 'Apex Tech',
          avatar: '/assets/testimonial-02-rashed.png',
          rating: 5,
          quote: 'Exceptional design sensibility paired with pristine execution. The deliverables were delivered on time, perfectly organized, and praised by our executive leadership and investors.'
        },
        {
          id: 'james',
          name: 'James Wilson',
          role: 'Head of Marketing',
          company: 'Kinetic Digital',
          avatar: '/assets/testimonial-03-james.png',
          rating: 5,
          quote: 'The visual transformation of our brand resulted in instant recognition in our industry. Their ability to turn complex design challenges into sleek, conversion-focused UI is unmatched.'
        }
      ];
    }
  },

  // Fetch FAQs
  async getFaqs() {
    try {
      const res = await fetch(`${API_BASE_URL}/faqs`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.warn('API getFaqs failed, using fallback data:', err);
      return [
        {
          id: 'faq-1',
          question: 'What design services do you offer?',
          answer: 'I specialize in end-to-end digital product design, including brand identity systems, product UI/UX for web and mobile apps, design systems, interactive prototypes, and creative art direction.'
        },
        {
          id: 'faq-2',
          question: 'What is your typical project timeline?',
          answer: 'Timelines depend on project scope. A brand identity typically takes 2–3 weeks, while comprehensive UI/UX for a full web application usually spans 4–6 weeks from discovery to final handoff.'
        },
        {
          id: 'faq-3',
          question: 'Do you offer frontend development handoff?',
          answer: 'Yes, all design deliverables include production-ready design tokens, pixel-perfect component specifications, interactive prototypes, and full developer handoff documentation.'
        },
        {
          id: 'faq-4',
          question: 'How do we get started?',
          answer: 'Simply submit a message through the contact form or email sunnykumar6207058974@gmail.com with details about your timeline, goals, and budget. I will review and reply within 24 hours.'
        }
      ];
    }
  },

  // Submit contact message
  async submitContact(data) {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.message || 'Failed to submit contact message');
    }
    return json;
  }
};
