import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaMobile, FaPalette, FaVideo, FaLaptop } from 'react-icons/fa';

const ProjectCard = ({ project, category }) => {
  const getCategoryIcon = () => {
    switch (category) {
      case 'mobile': return <FaMobile />;
      case 'uiux': return <FaPalette />;
      case 'graphic': return <FaPalette />;
      case 'video': return <FaVideo />;
      default: return <FaLaptop />;
    }
  };

  const getPlatformBadge = () => {
    switch (category) {
      case 'mobile': return 'Mobile App';
      case 'uiux': return 'UI/UX Design';
      case 'graphic': return 'Graphic Design';
      case 'video': return 'Video Editing';
      default: return 'Web App';
    }
  };

  return (
    <div className={`project-card ${project.featured ? 'featured' : ''} category-${category}`}>
      {project.featured && (
        <div className="featured-badge">
          <FaStar />
          Featured
        </div>
      )}
      
      <div className="category-badge">
        {getCategoryIcon()}
        {getPlatformBadge()}
      </div>
      
      <div className="project-image">
        <img 
          src={project.image} 
          alt={`${project.title} screenshot`}
          className="project-screenshot"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="image-fallback">
          <span>Project Preview</span>
        </div>
        <div className="project-overlay">
          <div className="project-links">
            {project.githubUrl && (
              <a href={project.githubUrl} aria-label="GitHub Repository" className="project-link">
                <FaGithub />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} aria-label="Live Demo" className="project-link">
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.liveUrl && (
            <a href={project.liveUrl} className="btn btn-small btn-view">
              View Project
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} className="btn btn-small btn-code">
              Source Code
            </a>
          )}
        </div>
      </div>

      <style jsx>{`
        .project-card {
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

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px var(--shadow);
          border-color: var(--accent);
        }

        .project-card.featured {
          border: 2px solid var(--accent);
        }

        .featured-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--accent);
          color: var(--primary-bg);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          z-index: 2;
          border: 1px solid var(--accent);
        }

        .category-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--card-bg);
          color: var(--text-primary);
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          z-index: 2;
          border: 1px solid var(--border);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: var(--secondary-bg);
        }

        .project-screenshot {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-screenshot {
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

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          color: var(--primary-bg);
          font-size: 0.8rem;
          width: 30px;
          height: 30px;
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

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background: var(--secondary-bg);
          color: var(--text-primary);
          padding: 0.3rem 0.8rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid var(--border);
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

        /* Remove category-specific gradient backgrounds */
        .category-mobile .project-image,
        .category-uiux .project-image,
        .category-graphic .project-image,
        .category-video .project-image {
          background: var(--secondary-bg);
        }

        @media (max-width: 768px) {
          .project-content {
            padding: 1.25rem;
          }
          
          .project-image {
            height: 180px;
          }
          
          .featured-badge,
          .category-badge {
            font-size: 0.7rem;
            padding: 0.4rem 0.8rem;
          }
          
          .project-link {
            width: 45px;
            height: 45px;
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .project-actions {
            flex-direction: column;
          }
          
          .project-content {
            padding: 1rem;
          }
          
          .project-title {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;