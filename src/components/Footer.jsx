import React from "react";
import { FaHeart, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-content'>
          <div className='footer-text'>
            <p>&copy; 2025 Tekleeyesus Munye.</p>
          </div>

          <button
            className='scroll-to-top'
            onClick={scrollToTop}
            aria-label='Scroll to top'
          >
            <FaArrowUp />
          </button>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--secondary-bg);
          border-top: 1px solid var(--border);
          padding: 2rem 0;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-text {
          color: var(--text-secondary);
        }

        .heart {
          color: #e25555;
          margin: 0 0.25rem;
        }

        .scroll-to-top {
          background: var(--accent);
          color: var(--primary-bg);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .scroll-to-top:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px var(--shadow);
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
