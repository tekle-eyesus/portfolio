import React from "react";
import {
  FaReact,
  FaJs,
  FaPython,
  FaNode,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiFlutter,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90, icon: <FaReact /> },
        { name: "JavaScript", level: 95, icon: <FaJs /> },
        { name: "TypeScript", level: 85, icon: <SiTypescript /> },
        { name: "Flutter", level: 85, icon: <SiFlutter /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88, icon: <FaNode /> },
        { name: "Python", level: 85, icon: <FaPython /> },
        { name: "PostgreSQL", level: 80, icon: <SiPostgresql /> },
        { name: "MongoDB", level: 75, icon: <SiMongodb /> },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: 90, icon: <FaGitAlt /> },
        { name: "Docker", level: 75, icon: <SiDocker /> },
        { name: "AWS", level: 70, icon: <FaAws /> },
        { name: "Kubernetes", level: 65, icon: <SiKubernetes /> },
      ],
    },
  ];

  return (
    <section id='skills' className='section'>
      <div className='container'>
        <h2 className='section-title'>Skills & Technologies</h2>
        <div className='skills-grid'>
          {skillCategories.map((category) => (
            <div key={category.title} className='skill-category fade-in-up'>
              <h3 className='category-title'>{category.title}</h3>
              <div className='skills-list'>
                {category.skills.map((skill) => (
                  <div key={skill.name} className='skill-item'>
                    <div className='skill-header'>
                      <div className='skill-info'>
                        <span className='skill-icon'>{skill.icon}</span>
                        <span className='skill-name'>{skill.name}</span>
                      </div>
                      <span className='skill-percentage'>{skill.level}%</span>
                    </div>
                    <div className='skill-bar'>
                      <div
                        className='skill-progress'
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 15px;
          border: 1px solid var(--border);
          box-shadow: 0 5px 20px var(--shadow);
        }

        .category-title {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--accent);
          text-align: center;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .skill-item {
          transition: transform 0.3s ease;
        }

        .skill-item:hover {
          transform: translateX(5px);
        }

        .skill-header {
          display: flex;
          justify-content: between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
        }

        .skill-icon {
          font-size: 1.2rem;
          color: var(--accent);
        }

        .skill-name {
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-percentage {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .skill-bar {
          height: 6px;
          background: var(--secondary-bg);
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: var(--accent);
          border-radius: 3px;
          transition: width 1s ease-in-out;
          position: relative;
        }

        .skill-progress::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
