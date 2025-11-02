import React, { useState, useEffect } from "react";
import { FaUser, FaRobot, FaCheck, FaClock } from "react-icons/fa";

const ChatMessage = ({ message, showTyping = false }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!showTyping || message.isUser) {
      setDisplayedText(message.text);
      return;
    }

    if (currentIndex < message.text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + message.text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 20);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, message.text, message.isUser, showTyping]);

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, [message.text]);

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      className={`chat-message ${
        message.isUser ? "user-message" : "ai-message"
      }`}
    >
      <div className='message-avatar'>
        {message.isUser ? (
          <div className='user-avatar'>
            <FaUser />
          </div>
        ) : (
          <div className='ai-avatar'>
            <FaRobot />
          </div>
        )}
      </div>

      <div className='message-content-wrapper'>
        <div className='message-header'>
          <span className='sender-name'>
            {message.isUser ? "You" : "Even AI"}
          </span>
          <div className='message-status'>
            <FaClock className='time-icon' />
            <span className='message-time'>
              {formatTime(message.timestamp)}
            </span>
            {!message.isUser && !showTyping && (
              <FaCheck className='check-icon' />
            )}
          </div>
        </div>

        <div className='message-bubble'>
          <div className='message-text'>
            {displayedText}
            {showTyping && currentIndex < message.text.length && (
              <span className='typing-cursor'>|</span>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .chat-message {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.4s ease;
        }

        .user-message {
          flex-direction: row-reverse;
        }

        .message-avatar {
          flex-shrink: 0;
        }

        .user-avatar,
        .ai-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .user-avatar {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .ai-avatar {
          background: linear-gradient(135deg, var(--accent), #3742fa);
          color: white;
        }

        .message-content-wrapper {
          flex: 1;
          max-width: 70%;
        }

        .user-message .message-content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .message-header {
          display: flex;
          justify-content: between;
          align-items: center;
          margin-bottom: 0.5rem;
          gap: 0.5rem;
        }

        .user-message .message-header {
          flex-direction: row-reverse;
        }

        .sender-name {
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--text-primary);
        }

        .message-status {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-secondary);
          font-size: 0.75rem;
        }

        .time-icon,
        .check-icon {
          font-size: 0.7rem;
        }

        .check-icon {
          color: #00d2d3;
        }

        .message-bubble {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 0.875rem 1.125rem;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          position: relative;
          backdrop-filter: blur(10px);
        }

        .user-message .message-bubble {
          background: linear-gradient(135deg, var(--accent), #3742fa);
          color: white;
          border: none;
          border-bottom-right-radius: 6px;
        }

        .ai-message .message-bubble {
          border-bottom-left-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
        }

        .message-bubble::before {
          content: "";
          position: absolute;
          bottom: -1px;
          width: 12px;
          height: 12px;
          background: inherit;
          border: inherit;
        }

        .ai-message .message-bubble::before {
          left: -6px;
          border-bottom-right-radius: 8px;
          border-top: none;
          border-right: none;
        }

        .user-message .message-bubble::before {
          right: -6px;
          border-bottom-left-radius: 8px;
          border-top: none;
          border-left: none;
        }

        .message-text {
          line-height: 1.5;
          word-wrap: break-word;
          white-space: pre-wrap;
          font-size: 0.95rem;
        }

        .typing-cursor {
          animation: blink 1s infinite;
          color: var(--accent);
          font-weight: bold;
          margin-left: 2px;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .message-content-wrapper {
            max-width: 85%;
          }

          .user-avatar,
          .ai-avatar {
            width: 36px;
            height: 36px;
            font-size: 0.8rem;
          }

          .message-bubble {
            padding: 0.75rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .message-content-wrapper {
            max-width: 90%;
          }

          .chat-message {
            gap: 0.5rem;
            margin-bottom: 1.25rem;
          }

          .message-bubble {
            padding: 0.625rem 0.875rem;
          }

          .message-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ChatMessage;
