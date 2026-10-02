/**
 * In-memory Data Store & Seed Database for Grafty Portfolio
 */

export const db = {
  profile: {
    name: "Sunny Kumar",
    displayName: "Jessy Linda",
    title: "BRANDING, PRODUCT UI/UX & DESIGN.",
    badge1: "Branding",
    badge2: "Developer",
    experienceYears: "7+",
    awardsCount: "12+",
    satisfactionRate: "99%",
    projectsCompleted: "150+",
    bio: "7+ Years of Expertise, Award-Winning Creative Designer in California, USA.",
    email: "sunnykumar6207058974@gmail.com",
    availableForHire: true
  },

  services: [
    {
      id: "branding",
      num: "01",
      title: "BRANDING & IDENTITY",
      desc: "Comprehensive brand positioning, distinctive typography hierarchies, bespoke color palettes, and memorable brand guidelines tailored for digital and physical touchpoints.",
      tags: ["Logo Design", "Styleguides", "Visual Strategy"]
    },
    {
      id: "ui-ux",
      num: "02",
      title: "PRODUCT UI/UX DESIGN",
      desc: "User-centric interface research, wireframing, high-fidelity responsive prototyping, and pixel-perfect design systems built to elevate conversions and delightful user flows.",
      tags: ["Mobile Apps", "Web Apps", "Design Systems"]
    },
    {
      id: "development",
      num: "03",
      title: "FULL-STACK DEVELOPMENT",
      desc: "Performant, accessible, and scalable frontend and backend architectures utilizing modern component workflows, clean RESTful APIs, and responsive CSS styling.",
      tags: ["React & Node.js", "REST APIs", "Modern CSS"]
    },
    {
      id: "art-direction",
      num: "04",
      title: "CREATIVE ART DIRECTION",
      desc: "Visual storytelling, bespoke 3D staging, creative photo direction, and interactive web layouts engineered to capture attention and differentiate brands in crowded markets.",
      tags: ["Editorial", "3D Mockups", "Campaigns"]
    }
  ],

  projects: [
    {
      id: "mockup-design",
      category: "MOCKUP DESIGN",
      title: "Macbook Pro 16 Studio Mockup",
      desc: "High-fidelity 3D device showcase featuring vibrant contrast, realistic concrete textures, and custom responsive layouts designed for presentation pitching.",
      image: "assets/portfolio-01-macbook.jpg",
      year: "2025"
    },
    {
      id: "book-cover",
      category: "BOOK COVER",
      title: "Showcase A4 Minimalist Editorial",
      desc: "Minimalist editorial publication design featuring clean typographic grids, premium spine layouts, and vibrant cobalt blue studio staging.",
      image: "assets/portfolio-02-books.jpg",
      year: "2024"
    },
    {
      id: "font-design",
      category: "FONT DESIGN",
      title: "Duct Tape Custom Typography",
      desc: "Experimental dimensional font branding crafted for industrial street-culture packaging, featuring high-contrast orange and white visual dynamics.",
      image: "assets/portfolio-03-tape.jpg",
      year: "2024"
    },
    {
      id: "application",
      category: "APPLICATION",
      title: "iPhone 16 Pro Application Interface",
      desc: "Next-generation mobile operating UI design featuring deep purple radial gradients, tactile glassmorphism elements, and refined micro-interactions.",
      image: "assets/portfolio-04-iphone.jpg",
      year: "2025"
    }
  ],

  testimonials: [
    {
      id: "hugo",
      name: "Hugo Boss",
      role: "Creative Director",
      company: "Nordic Studios",
      avatar: "assets/testimonial-01-hugo.png",
      rating: 5,
      quote: "Working with this studio elevated our product identity beyond expectations. The attention to typography, micro-interactions, and visual harmony resulted in a 40% jump in brand engagement."
    },
    {
      id: "rashed",
      name: "Rashed Al-Mansoori",
      role: "VP of Product",
      company: "Apex Tech",
      avatar: "assets/testimonial-02-rashed.png",
      rating: 5,
      quote: "Exceptional design sensibility paired with pristine execution. The deliverables were delivered on time, perfectly organized, and praised by our executive leadership and investors."
    },
    {
      id: "james",
      name: "James Wilson",
      role: "Head of Marketing",
      company: "Kinetic Digital",
      avatar: "assets/testimonial-03-james.png",
      rating: 5,
      quote: "The visual transformation of our brand resulted in instant recognition in our industry. Their ability to turn complex design challenges into sleek, conversion-focused UI is unmatched."
    }
  ],

  faqs: [
    {
      id: "faq-1",
      question: "What design services do you offer?",
      answer: "I specialize in end-to-end digital product design, including brand identity systems, product UI/UX for web and mobile apps, design systems, interactive prototypes, and creative art direction."
    },
    {
      id: "faq-2",
      question: "What is your typical project timeline?",
      answer: "Timelines depend on project scope. A brand identity typically takes 2–3 weeks, while comprehensive UI/UX for a full web application usually spans 4–6 weeks from discovery to final handoff."
    },
    {
      id: "faq-3",
      question: "Do you offer frontend development handoff?",
      answer: "Yes, all design deliverables include production-ready design tokens, pixel-perfect component specifications, interactive prototypes, and full developer handoff documentation."
    },
    {
      id: "faq-4",
      question: "How do we get started?",
      answer: "Simply submit a message through the contact form or email sunnykumar6207058974@gmail.com with details about your timeline, goals, and budget. I will review and reply within 24 hours."
    }
  ],

  contacts: []
};
