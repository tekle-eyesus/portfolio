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
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Flutter", icon: <SiFlutter /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNode /> },
        { name: "Python", icon: <FaPython /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
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
          justify-content: flex-start;
          align-items: center;
          gap: 0.5rem;
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
