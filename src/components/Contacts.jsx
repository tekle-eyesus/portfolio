import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaCheck,
  FaExclamationTriangle,
} from "react-icons/fa";
import { useContactForm } from "../Hooks/useContactForm";

const Contact = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    submitStatus,
    submitMessage,
  } = useContactForm();

  return (
    <section id='contact' className='section'>
      <div className='container'>
        <h2 className='section-title'>Get In Touch</h2>
        <div className='contact-content'>
          <div className='contact-info'>
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities, whether it's a
              freelance project, collaboration, or full-time position. Feel free
              to reach out!
            </p>

            <div className='contact-details'>
              <div className='contact-item'>
                <FaEnvelope />
                <div>
                  <strong>Email</strong>
                  <span>tekleeyesus21@gmail.com</span>
                </div>
              </div>

              <div className='contact-item'>
                <FaMapMarkerAlt />
                <div>
                  <strong>Location</strong>
                  <span>Addis Abeba, Ethiopia</span>
                </div>
              </div>

              <div className='contact-item'>
                <FaPhone />
                <div>
                  <strong>Phone</strong>
                  <span>+251 (930) 482-206</span>
                </div>
              </div>
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
              <a
                href='https://x.com/TekleeyesusM?t=hX9AO5eE_UthJDqxRlHVkw&s=09'
                aria-label='Twitter'
              >
                <FaTwitter />
              </a>
              <a href='mailto:tekleeyesus21@gmail.com' aria-label='Email'>
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className='contact-form'>
            <form onSubmit={handleSubmit}>
              {/* Status Message */}
              {submitStatus && (
                <div className={`status-message ${submitStatus}`}>
                  {submitStatus === "success" ? (
                    <FaCheck />
                  ) : (
                    <FaExclamationTriangle />
                  )}
                  <span>{submitMessage}</span>
                </div>
              )}

              <div className='form-group'>
                <input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className='form-group'>
                <input
                  type='email'
                  name='email'
                  placeholder='Your Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className='form-group'>
                <textarea
                  name='message'
                  placeholder='Your Message'
                  rows='5'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type='submit'
                className={`btn btn-full submit-btn ${
                  isSubmitting ? "submitting" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className='loading-spinner'></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: var(--accent);
        }

        .contact-info p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--card-bg);
          border-radius: 10px;
          border: 1px solid var(--border);
          transition: transform 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(5px);
        }

        .contact-item svg {
          font-size: 1.2rem;
          color: var(--accent);
        }

        .contact-item div {
          display: flex;
          flex-direction: column;
        }

        .contact-item strong {
          color: var(--text-primary);
          font-size: 0.9rem;
        }

        .contact-item span {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          color: var(--text-primary);
          font-size: 1.5rem;
          padding: 0.5rem;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          color: var(--accent);
          transform: translateY(-3px);
        }

        .contact-form {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 15px;
          border: 1px solid var(--border);
          box-shadow: 0 10px 30px var(--shadow);
        }

        .status-message {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1.5rem;
          font-weight: 500;
          animation: slideIn 0.3s ease;
        }

        .status-message.success {
          background: rgba(46, 204, 113, 0.1);
          color: #27ae60;
          border: 1px solid rgba(46, 204, 113, 0.2);
        }

        .status-message.error {
          background: rgba(231, 76, 60, 0.1);
          color: #c0392b;
          border: 1px solid rgba(231, 76, 60, 0.2);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: var(--primary-bg);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-primary);
          font-family: "Open Sans", sans-serif;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
        }

        .form-group input:disabled,
        .form-group textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .btn-full {
          width: 100%;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          position: relative;
          overflow: hidden;
        }

        .submit-btn.submitting {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .loading-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 968px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-info {
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .contact-form {
            padding: 1.5rem;
          }

          .contact-item {
            padding: 0.75rem;
          }

          .form-group input,
          .form-group textarea {
            padding: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
