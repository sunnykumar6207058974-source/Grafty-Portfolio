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
        </div>
      </div>
    </div>
  );
};
