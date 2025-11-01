import React from "react";

const About = () => {
  return (
    <section id='about' className='section'>
      <div className='container'>
        <h2 className='section-title'>About Me</h2>
        <div className='about-content'>
          <div className='about-image'>
            <img
              src='/images/profile_photo.png'
              alt='Professional Headshot of Alex Chen'
              className='profile-photo'
            />
          </div>
          <div className='about-text'>
            <h3>Building Digital Solutions That Make a Difference</h3>
            <p>
              I'm a passionate software engineer with 4+ years of experience
              specializing in front-end web, mobile app, and AI-driven
              solutions. I love building efficient, scalable, and user-friendly
              applications that solve real-world problems and enhance everyday
              experiences through intelligent, intuitive design.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work,
              and it has evolved into a career dedicated to crafting exceptional
              digital experiences. I believe in writing clean, maintainable code
              and staying updated with the latest industry trends.
            </p>
            <div className='about-highlights'>
              <div className='highlight-item'>
                <strong>4+</strong>
                <span>Years Experience</span>
              </div>
              <div className='highlight-item'>
                <strong>20+</strong>
                <span>Projects Completed</span>
              </div>
              <div className='highlight-item'>
                <strong>100%</strong>
                <span>Client Satisfaction</span>
              </div>
            </div>
            <div className='about-actions'>
              <a href='#contact' className='btn'>
                Hire Me
              </a>
              <a href='/resume.pdf' className='btn btn-outline' download>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-image {
          display: flex;
          justify-content: center;
        }

        .profile-photo {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--accent);
          box-shadow: 0 10px 30px var(--shadow);
          transition: all 0.3s ease;
        }

        .profile-photo:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 40px var(--shadow);
        }

        .about-text h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--accent);
        }

        .about-text p {
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .about-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin: 2rem 0;
        }

        .highlight-item {
          text-align: center;
          padding: 1.5rem;
          background: var(--card-bg);
          border-radius: 10px;
          border: 1px solid var(--border);
          transition: transform 0.3s ease;
        }

        .highlight-item:hover {
          transform: translateY(-5px);
        }

        .highlight-item strong {
          display: block;
          font-size: 2rem;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }

        .highlight-item span {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .about-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        @media (max-width: 968px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .profile-photo {
            width: 200px;
            height: 200px;
          }

          .about-highlights {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .about-actions {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .about-actions {
            flex-direction: column;
            align-items: center;
          }

          .profile-photo {
            width: 180px;
            height: 180px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
