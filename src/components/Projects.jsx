import React, { useState } from 'react';
import { projects, getProjectsByCategory } from '../data/projects';
import ProjectCard from './projects/ProjectCard';
import UICard from './projects/UICard';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const filteredProjects = getProjectsByCategory(activeCategory);

  const handleCategoryChange = (categoryId) => {
    setIsLoading(true);
    setActiveCategory(categoryId);
    
    // Simulate loading for better UX
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const renderProjectCard = (project) => {
    // Use specialized cards for design categories
    if (project.category === 'uiux') {
      return <UICard key={project.id} project={project} />;
    }
    
    return (
      <ProjectCard 
        key={project.id} 
        project={project} 
        category={project.category}
      />
    );
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Explore my work across different domains and technologies
        </p>
        
        {/* Category Tabs */}
        <div className="category-tabs">
          {projects.categories.map((category) => (
            <button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''} ${
                category.count === 0 ? 'disabled' : ''
              }`}
              onClick={() => handleCategoryChange(category.id)}
              disabled={category.count === 0}
            >
              <span className="tab-name">{category.name}</span>
              <span className="tab-count">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-section">
          {isLoading ? (
            <div className="loading-grid">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="project-skeleton">
                  <div className="skeleton-image"></div>
                  <div className="skeleton-content">
                    <div className="skeleton-title"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-tags"></div>
                    <div className="skeleton-buttons"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {filteredProjects.length > 0 ? (
                <div className="projects-grid">
                  {filteredProjects.map(renderProjectCard)}
                </div>
              ) : (
                <div className="empty-state">
                  <div className="empty-icon">📁</div>
                  <h3>No projects found</h3>
                  <p>There are no projects in this category yet.</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 5rem 0;
        }

        .section-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 1rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background-color: var(--accent);
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .category-tabs {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          padding: 0 1rem;
        }

        .category-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: var(--card-bg);
          border: 1px solid var(--border);
          color: var(--text-primary);
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          position: relative;
          overflow: hidden;
        }

        .category-tab::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .category-tab:hover::before {
          left: 100%;
        }

        .category-tab:hover:not(.disabled) {
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px var(--shadow);
        }

        .category-tab.active {
          background: var(--accent);
          color: var(--primary-bg);
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }

        .category-tab.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .tab-icon {
          font-size: 1.1rem;
        }

        .tab-name {
          font-size: 0.9rem;
          white-space: nowrap;
        }

        .tab-count {
          background: rgba(0, 0, 0, 0.1);
          color: inherit;
          padding: 0.2rem 0.5rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .active .tab-count {
          background: rgba(255, 255, 255, 0.2);
        }

        .projects-section {
          min-height: 400px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .loading-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-skeleton {
          background: var(--card-bg);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          animation: pulse 2s infinite;
        }

        .skeleton-image {
          height: 200px;
          background: var(--secondary-bg);
        }

        .skeleton-content {
          padding: 1.5rem;
        }

        .skeleton-title {
          height: 1.5rem;
          background: var(--secondary-bg);
          border-radius: 4px;
          margin-bottom: 1rem;
          width: 80%;
        }

        .skeleton-text {
          height: 0.875rem;
          background: var(--secondary-bg);
          border-radius: 4px;
          margin-bottom: 0.5rem;
        }

        .skeleton-text:last-child {
          width: 60%;
        }

        .skeleton-tags {
          display: flex;
          gap: 0.5rem;
          margin: 1rem 0;
        }

        .skeleton-tags::before {
          content: '';
          height: 1.5rem;
          background: var(--secondary-bg);
          border-radius: 12px;
          flex: 1;
        }

        .skeleton-buttons {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .skeleton-buttons::before {
          content: '';
          height: 2.5rem;
          background: var(--secondary-bg);
          border-radius: 8px;
          flex: 1;
        }

        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-secondary);
        }

        .empty-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .empty-state h3 {
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }

        @media (max-width: 768px) {
          .category-tabs {
            gap: 0.25rem;
            padding: 0;
          }

          .category-tab {
            padding: 0.6rem 1rem;
            font-size: 0.8rem;
          }

          .tab-name {
            font-size: 0.8rem;
          }

          .projects-grid,
          .loading-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1rem;
            padding: 0 1rem;
          }
        }

        @media (max-width: 480px) {
          .category-tabs {
                flex-direction: column;
            align-items: center;
          }

          .category-tab {
            width: 100%;
            max-width: 200px;
            justify-content: center;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;