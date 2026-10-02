import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header.jsx';
import { MobileDrawer } from '../components/MobileDrawer.jsx';
import { Hero } from '../components/Hero.jsx';
import { Services } from '../components/Services.jsx';
import { About } from '../components/About.jsx';
import { Portfolio } from '../components/Portfolio.jsx';
import { Testimonials } from '../components/Testimonials.jsx';
import { Clients } from '../components/Clients.jsx';
import { Faq } from '../components/Faq.jsx';
import { Contact } from '../components/Contact.jsx';
import { Footer } from '../components/Footer.jsx';
import { ProjectModal } from '../components/ProjectModal.jsx';
import { Toast } from '../components/Toast.jsx';
import { api } from '../services/api.js';
import { downloadResumePdf } from '../utils/downloadResume.js';

export const Home = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toasts, setToasts] = useState([]);

  // Data states fetched from backend API
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [faqs, setFaqs] = useState([]);

  // Toast helper
  const showToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Fetch initial data from backend API
  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const [servicesData, projectsData, testimonialsData, faqsData] = await Promise.all([
          api.getServices(),
          api.getProjects(),
          api.getTestimonials(),
          api.getFaqs()
        ]);

        if (isMounted) {
          if (servicesData) setServices(servicesData);
          if (projectsData) setProjects(projectsData);
          if (testimonialsData) setTestimonials(testimonialsData);
          if (faqsData) setFaqs(faqsData);
        }
      } catch (err) {
        console.error('Failed to load portfolio data:', err);
      }
    }

    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Scroll spy effect
  useEffect(() => {
    const sections = document.querySelectorAll('section[id], header[id]');
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle CV Download action
  const handleDownloadCv = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    showToast('📄 Downloading Sunny Kumar Curriculum Vitae (PDF)...');
    try {
      await downloadResumePdf();
    } catch (err) {
      console.error('Download error:', err);
    }
  };

  // Handle Resume Download from Navbar
  const handleDownloadResume = () => {
    showToast('📄 Downloading Sunny Kumar Resume (PDF)...');
  };

  return (
    <div className="site-wrapper">
      {/* Toast Notification Container */}
      <Toast toasts={toasts} />

      {/* Header Navigation */}
      <Header
        activeSection={activeSection}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
        onDownloadResume={handleDownloadResume}
      />

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onDownloadResume={handleDownloadResume}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <Services services={services} />
        <About onDownloadCv={handleDownloadCv} />
        <Portfolio projects={projects} onSelectProject={setSelectedProject} />
        <Testimonials testimonials={testimonials} />
        <Clients />
        <Faq faqs={faqs} />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Home;
