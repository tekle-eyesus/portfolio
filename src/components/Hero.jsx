import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id='home' className='hero'>
      <div className='container'>
        <div className='hero-content'>
          <div className='hero-text fade-in-up'>
            <h1 className='hero-title'>
              Hi, I'm <span className='highlight'>Tekleeyesus</span>
            </h1>
            <h2 className='hero-subtitle'>Software Engineer</h2>
            <p className='hero-description'>
              I build exceptional digital experiences that are fast, accessible,
              visually appealing, and responsive. Let's bring your ideas to
              life.
            </p>
            <div className='hero-buttons'>
              <a href='#projects' className='btn'>
                View My Work
              </a>
              <a href='#contact' className='btn btn-outline'>
                Get In Touch
              </a>
            </div>
            <div className='social-links'>
              <a href='https://github.com/tekle-eyesus' aria-label='GitHub'>
                <FaGithub />
              </a>
              <a
                href='https://linkedin.com/in/tekleeyesus-munye'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </a>
              <a href='mailto:tekleeyesus21@gmail.com' aria-label='Email'>
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className='hero-visual'>
            <div className='code-animation'>
              <div className='code-line'>function myPortfolio() {"{"}</div>
              <div className='code-line'>
                &nbsp;&nbsp;return {"<"}
                <span className='code-tag'>AwesomeProjects</span>
                {">"}
              </div>
              <div className='code-line'>
                &nbsp;&nbsp;&nbsp;&nbsp;{"<"}Innovation /{">"}
              </div>
              <div className='code-line'>
                &nbsp;&nbsp;&nbsp;&nbsp;{"<"}Creativity /{">"}
              </div>
              <div className='code-line'>
                &nbsp;&nbsp;{"<"}/
                <span className='code-tag'>AwesomeProjects</span>
                {">"}
              </div>
              <div className='code-line'>{"}"}</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(
            135deg,
            var(--primary-bg) 0%,
            var(--secondary-bg) 100%
          );
          padding-top: 80px;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .highlight {
          color: var(--accent);
          position: relative;
        }

        .highlight::after {
          content: "";
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: var(--accent);
          opacity: 0.2;
          z-index: -1;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 400;
        }

        .hero-description {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          color: var(--text-secondary);
          max-width: 500px;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          color: var(--text-primary);
          font-size: 1.5rem;
          transition: all 0.3s ease;
          padding: 0.5rem;
        }

        .social-links a:hover {
          color: var(--accent);
          transform: translateY(-3px);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
        }

        .code-animation {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 2rem;
          font-family: "Courier New", monospace;
          font-size: 1rem;
          line-height: 1.8;
          box-shadow: 0 10px 30px var(--shadow);
        }

        .code-line {
          opacity: 0;
          animation: typeLine 0.5s ease-out forwards;
        }

        .code-line:nth-child(1) {
          animation-delay: 0.5s;
        }
        .code-line:nth-child(2) {
          animation-delay: 1s;
        }
        .code-line:nth-child(3) {
          animation-delay: 1.5s;
        }
        .code-line:nth-child(4) {
          animation-delay: 2s;
        }
        .code-line:nth-child(5) {
          animation-delay: 2.5s;
        }
        .code-line:nth-child(6) {
          animation-delay: 3s;
        }

        .code-tag {
          color: #e06c75;
        }

        @keyframes typeLine {
          to {
            opacity: 1;
          }
        }

        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .code-animation {
            font-size: 0.9rem;
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
