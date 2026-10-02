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
      id: "full-stack",
      num: "01",
      title: "FULL-STACK WEB DEVELOPMENT",
      desc: "Building fast, responsive, and modern websites using React.js, JavaScript (ES6+), Tailwind CSS, Node.js, and sub-second performance architectures.",
      tags: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Vite", "Responsive UI"]
    },
    {
      id: "backend-api",
      num: "02",
      title: "BACKEND & RESTFUL API ARCHITECTURE",
      desc: "Creating secure, scalable backend server systems with Node.js, Express.js, MongoDB databases, RESTful endpoints, and robust authentication workflows.",
      tags: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"]
    },
    {
      id: "ecommerce",
      num: "03",
      title: "E-COMMERCE STOREFRONTS & PLATFORMS",
      desc: "Engineering full-funnel digital shopping stores with cart drawers, product category filters, instant search, promo discount engines, and checkout systems.",
      tags: ["Shopping Cart", "Product Grids", "Checkout Flow", "Admin Analytics"]
    },
    {
      id: "ui-ux",
      num: "04",
      title: "UI/UX & INTERACTIVE WEB EXPERIENCES",
      desc: "Translating brand visions into intuitive responsive user interfaces, wireframes, accessible component design systems, and delightful digital user flows.",
      tags: ["UI/UX Design", "Wireframing", "Component Systems", "Micro-Interactions"]
    },
    {
      id: "video-editing",
      num: "05",
      title: "VIDEO EDITING & CREATIVE MEDIA",
      desc: "Crafting high-engagement video content, multi-track cutting, color grading, audio synchronization, motion graphics, promo reels, and social media clips.",
      tags: ["Video Cutting", "Motion Graphics", "Color Grading", "Audio Sync", "Promo Videos"]
    },
    {
      id: "cloud-deployment",
      num: "06",
      title: "CLOUD DEPLOYMENT & WEB OPTIMIZATION",
      desc: "Production-ready deployment pipelines using Vercel, Git & GitHub, performance tuning, and SEO-optimized web standards.",
      tags: ["Git & GitHub", "Vercel", "CI/CD Workflows", "SEO Optimization"]
    }
  ],

  projects: [
    {
      id: "cartify",
      category: "E-COMMERCE",
      title: "Cartify - Premium E-Commerce Shopping Platform",
      desc: "Built a full-stack e-commerce platform with product category management, interactive shopping cart, dark mode toggle, and instant dispatch tracking.",
      image: "/assets/cartify.jpg",
      year: "2026",
      tech: ["React.js", "Node.js", "Tailwind CSS", "MongoDB", "Express.js"],
      features: [
        "Interactive Shopping Cart & Express Checkout",
        "Category Filters & Product Search Bar",
        "Dark / Light Theme & 24/7 Express Support"
      ],
      demoUrl: "https://cartify-store-amber.vercel.app",
      githubUrl: "https://github.com/sunnykumar6207058974-source/Cartify",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      id: "urbanthread",
      category: "E-COMMERCE",
      title: "UrbanThread - Luxe Sneakers & Streetwear Drops",
      desc: "Developed a high-end streetwear e-commerce platform featuring exclusive sneaker drops, flash sales, promo code discount engine, wishlist, and admin analytics dashboard.",
      image: "/assets/urbanthread.jpg",
      year: "2026",
      tech: ["React.js", "Tailwind CSS", "Redux", "REST API", "Vite"],
      features: [
        "Sneakerhead Drops & Flash Deal Banners",
        "Promo Code Discount Engine (SNEAKER20)",
        "Wishlist, Cart Drawer & Admin Analytics Dashboard"
      ],
      demoUrl: "https://urban-thread-sand.vercel.app",
      githubUrl: "https://github.com/sunnykumar6207058974-source/UrbanThread",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      id: "pixelforge",
      category: "WEB APPS",
      title: "PixelForge - Developer Portfolio & Digital Showcase",
      desc: "Created an interactive developer portfolio featuring an HTML5 canvas particle background, theme switching context, video demo popups, custom cursor, and printable resume viewer.",
      image: "/assets/pixelforge.jpg",
      year: "2026",
      tech: ["React.js", "Framer Motion", "Tailwind CSS", "HTML5 Canvas", "Vite"],
      features: [
        "Interactive 3D Matrix Canvas Particle Grid",
        "Video Lightbox Player with Framer Motion Dialog",
        "Executive Resume Printable PDF & Dynamic Dark Theme"
      ],
      demoUrl: "https://pixelforge-dev.vercel.app",
      githubUrl: "https://github.com/sunnykumar6207058974-source/PixelForge",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
      id: "aetheria",
      category: "WEBGL 3D",
      title: "Aetheria - Immersive WebGL 3D Matrix Experience",
      desc: "Architected a 3D WebGL digital experience with 60 FPS matrix torus particles, audio sound FX, zero-trust API security, and ultra-fast sub-second loading speeds.",
      image: "/assets/aetheria.jpg",
      year: "2026",
      tech: ["Three.js", "WebGL", "GSAP", "Tailwind CSS", "Node.js"],
      features: [
        "Real-time Three.js Particle Physics Engine",
        "Post-Processing Bloom Filters & Spatial Audio",
        "Zero-Trust API Architecture & Ultra Fast Load (<0.8s)"
      ],
      demoUrl: "https://aetheria-matrix.vercel.app",
      githubUrl: "https://github.com/sunnykumar6207058974-source/Aetheria",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4"
    }
  ],

  technologies: [
    "React.js",
    "JavaScript (ES6+)",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "REST APIs",
    "MongoDB",
    "Git",
    "GitHub",
    "Vercel",
    "Vite"
  ],

  creativeExpertise: [
    "Video Cutting & Trimming",
    "Motion Graphics",
    "Audio Synchronization",
    "Color Grading",
    "Storyboarding",
    "Social Media Clips",
    "Promo Videos",
    "Reel Editing"
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
