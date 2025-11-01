import React from "react";
import { FaRobot, FaTimes } from "react-icons/fa";

const RobotButton = ({ isOpen, onClick, isThinking }) => {
  return (
    <button
      className={`robot-button ${isOpen ? "active" : ""} ${
        isThinking ? "thinking" : ""
      }`}
      onClick={onClick}
      aria-label={isOpen ? "Close chat" : "Chat with Alex"}
    >
      {isOpen ? (
        <FaTimes className='robot-icon' />
      ) : (
        <FaRobot className='robot-icon' />
      )}
      {isThinking && <div className='pulse-dot'></div>}

      <style jsx>{`
        .robot-button {
          position: relative;
          background: var(--accent);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--primary-bg);
          box-shadow: 0 4px 15px var(--shadow);
        }

        .robot-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px var(--shadow);
        }

        .robot-button.active {
          background: #ff4757;
          transform: scale(1.1);
        }

        .robot-button.thinking {
          background: #3742fa;
        }

        .robot-icon {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .robot-button:hover .robot-icon {
          transform: scale(1.1);
        }

        .pulse-dot {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 12px;
          height: 12px;
          background: #3742fa;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
          100% {
            transform: scale(0.8);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .robot-button {
            width: 45px;
            height: 45px;
          }

          .robot-icon {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </button>
  );
};

export default RobotButton;
