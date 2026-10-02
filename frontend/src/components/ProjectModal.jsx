import React, { useEffect } from 'react';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop open"
      id="project-modal"
      aria-hidden="false"
      onClick={(e) => {
        if (e.target.classList.contains('modal-backdrop')) onClose();
      }}
    >
      <div className="modal-dialog">
        <button
          className="modal-close-btn"
          id="modal-close"
          aria-label="Close modal"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="modal-media-wrap">
          <img
            src={project.displayImg || project.image}
            alt={project.title}
            id="modal-img"
            className="modal-img"
          />
        </div>
        <div className="modal-info">
          <span className="modal-category" id="modal-category">{project.category}</span>
          <h3 className="modal-title" id="modal-title">{project.title}</h3>
          <p className="modal-desc" id="modal-desc">{project.desc}</p>

          {project.tech && project.tech.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '18px 0 12px' }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    background: 'rgba(0, 0, 0, 0.06)',
                    color: '#0d0d0d'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <ul style={{ margin: '14px 0 20px', paddingLeft: '20px', color: '#5e6873', fontSize: '14px', lineHeight: '1.7' }}>
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          )}

          {(project.demoUrl || project.githubUrl) && (
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hire"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 24px', fontSize: '14px' }}
                >
                  Live Demo ↗
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 22px',
                    fontSize: '14px',
                    fontWeight: '700',
                    border: '1.5px solid #0d0d0d',
                    borderRadius: '9999px',
                    color: '#0d0d0d',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  GitHub ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
