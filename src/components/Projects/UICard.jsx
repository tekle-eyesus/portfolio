import React from 'react';
import { FaDribbble, FaBehance, FaExternalLinkAlt } from 'react-icons/fa';

const UICard = ({ project }) => {
  return (
    <div className="ui-card project-card">
      <div className="design-badge">
        🎨 UI/UX Design
      </div>
      
      <div className="project-image">
        <img 
          src={project.image} 
          alt={`${project.title} design`}
          className="project-screenshot"
        />
        {/* <div className="image-fallback">
          <span>Design Preview</span>
        </div> */}
        <div className="project-overlay">
          <div className="project-links">
            <a href={project.liveUrl} aria-label="View on Dribbble" className="project-link">
              <FaDribbble />
            </a>
            <a href={project.liveUrl} aria-label="View on Behance" className="project-link">
              <FaBehance />
            </a>
            <a href={project.liveUrl} target="_blank" aria-label="View Case Study" className="project-link" >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="design-process">
          <div className="process-step">
            <span className="step-dot"></span>
            <span>Research & Analysis</span>
          </div>
          <div className="process-step">
            <span className="step-dot"></span>
            <span>Wireframing</span>
          </div>
          <div className="process-step">
            <span className="step-dot"></span>
            <span>Prototyping</span>
          </div>
          <div className="process-step">
            <span className="step-dot"></span>
            <span>User Testing</span>
          </div>
        </div>

        <div className="project-actions">
          <a href={project.liveUrl} className="btn btn-small btn-view">
            View on Dribbble
          </a>
          <a href={project.liveUrl} className="btn btn-small btn-code">
            Case Study
          </a>
        </div>
      </div>

      <style jsx>{`
        .ui-card {
          background: var(--card-bg);
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .ui-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px var(--shadow);
          border-color: var(--accent);
        }

        .design-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--card-bg);
          color: var(--text-primary);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          z-index: 2;
          border: 1px solid var(--border);
        }

        .project-image {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: var(--secondary-bg);
        }

        .project-screenshot {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .ui-card:hover .project-screenshot {
          transform: scale(1.05);
        }

        .image-fallback {
          width: 100%;
          height: 100%;
          background: var(--secondary-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          font-style: italic;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .ui-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          color: var(--primary-bg);
          font-size: 1.2rem;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent);
          border-radius: 50%;
          transition: all 0.3s ease;
          border: 2px solid var(--primary-bg);
        }

        .project-link:hover {
          transform: scale(1.1);
          background: var(--primary-bg);
          color: var(--accent);
          border-color: var(--accent);
        }

        .project-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-size: 1.3rem;
          margin-bottom: 0.75rem;
          color: var(--accent);
          line-height: 1.3;
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.5;
          flex: 1;
        }

        .design-process {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin: 1rem 0;
        }

        .process-step {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .step-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
        }

        .project-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
        }

        .btn-small {
          padding: 0.6rem 1.2rem;
          font-size: 0.85rem;
          flex: 1;
          text-align: center;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .btn-view {
          background: var(--accent);
          color: var(--primary-bg);
          border: 1px solid var(--accent);
        }

        .btn-view:hover {
          background: transparent;
          color: var(--accent);
        }

        .btn-code {
          background: transparent;
          color: var(--accent);
          border: 1px solid var(--accent);
        }

        .btn-code:hover {
          background: var(--accent);
          color: var(--primary-bg);
        }

        @media (max-width: 768px) {
          .project-image {
            height: 200px;
          }
          
          .design-process {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          
          .project-link {
            width: 45px;
            height: 45px;
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .design-process {
            grid-template-columns: 1fr;
          }
          
          .project-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default UICard;