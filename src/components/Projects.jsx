import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { projects } from "../data/projects";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "featured"
      ? projects.filter((project) => project.featured)
      : projects;

  return (
    <section id='projects' className='section'>
      <div className='container'>
        <h2 className='section-title'>My Projects</h2>

        <div className='projects-filter'>
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${filter === "featured" ? "active" : ""}`}
            onClick={() => setFilter("featured")}
          >
            Featured
          </button>
        </div>

        <div className='projects-grid'>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${
                project.featured ? "featured" : ""
              } fade-in-up`}
            >
              {project.featured && (
                <div className='featured-badge'>
                  <FaStar />
                  Featured
                </div>
              )}

              <div className='project-image'>
                <div className='image-placeholder'>
                  <span>Project Screenshot</span>
                </div>
                <div className='project-overlay'>
                  <div className='project-links'>
                    <a href={project.githubUrl} aria-label='GitHub Repository'>
                      <FaGithub />
                    </a>
                    <a href={project.liveUrl} aria-label='Live Demo'>
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>

              <div className='project-content'>
                <h3 className='project-title'>{project.title}</h3>
                <p className='project-description'>{project.description}</p>

                <div className='project-technologies'>
                  {project.technologies.map((tech) => (
                    <span key={tech} className='tech-tag'>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='project-actions'>
                  <a href={project.liveUrl} className='btn btn-small'>
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className='btn btn-small btn-outline'
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-filter {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          background: var(--card-bg);
          border: 1px solid var(--border);
          color: var(--text-primary);
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .filter-btn:hover {
          border-color: var(--accent);
        }

        .filter-btn.active {
          background: var(--accent);
          color: var(--primary-bg);
          border-color: var(--accent);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--card-bg);
          border-radius: 15px;
          overflow: hidden;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px var(--shadow);
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
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .image-placeholder {
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

        .project-links a {
          color: white;
          font-size: 1.2rem;
          padding: 0.3rem;
          background: var(--accent);
          color: var(--primary-bg);
          border-radius: 20%;
          transition: transform 0.3s ease;
        }

        .project-links a:hover {
          transform: scale(1.1);
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--accent);
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.5;
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
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .project-actions {
          display: flex;
          gap: 0.75rem;
        }

        .btn-small {
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .projects-filter {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
