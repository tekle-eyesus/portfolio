import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaTrash, FaMagic, FaRobot } from "react-icons/fa";

const ChatInput = ({ onSendMessage, onClearChat, isLoading }) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage("");
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const quickQuestions = [
    "What are Tekle's skills?",
    "Tell me about his projects",
    "How to contact Tekle?",
    "Schedule a meeting",
  ];

  const handleQuickQuestion = (question) => {
    onSendMessage(question);
  };

  return (
    <div className='chat-input-container'>
      {/* Quick Questions */}
      <div className='quick-questions'>
        {quickQuestions.map((question, index) => (
          <button
            key={index}
            onClick={() => handleQuickQuestion(question)}
            disabled={isLoading}
            className='quick-question-btn'
          >
            {question}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className='chat-input-form'>
        <div className='input-wrapper'>
          <div className='input-content'>
            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder='Message Even AI...'
              disabled={isLoading}
              rows='1'
              className='chat-textarea'
            />
            <div className='input-actions'>
              <button
                type='button'
                onClick={onClearChat}
                className='action-button clear'
                aria-label='Clear conversation'
                title='Clear conversation'
                disabled={isLoading}
              >
                <FaTrash />
              </button>
              <button
                type='submit'
                disabled={!message.trim() || isLoading}
                className='action-button send'
                aria-label='Send message'
              >
                {isLoading ? (
                  <div className='loading-spinner'></div>
                ) : (
                  <FaPaperPlane />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* AI Badge */}
        <div className='ai-badge'>
          <FaRobot className='ai-icon' />
          <span>Even AI · Tekle's Assistant</span>
        </div>
      </form>

      <style jsx>{`
        .chat-input-container {
          border-top: 1px solid var(--border);
          background: linear-gradient(
            135deg,
            var(--primary-bg) 0%,
            var(--secondary-bg) 100%
          );
          padding: 0.5rem 1rem 1rem;
        }

        .quick-questions {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .quick-question-btn {
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .quick-question-btn:hover:not(:disabled) {
          background: var(--accent);
          color: var(--primary-bg);
          border-color: var(--accent);
          transform: translateY(-1px);
        }

        .quick-question-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .chat-input-form {
          width: 100%;
        }

        .input-wrapper {
          background: var(--card-bg);
          border: 2px solid var(--border);
          border-radius: 20px;
          padding: 0.75rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }

        .input-wrapper:focus-within {
          border-color: var(--accent);
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15),
            0 0 0 4px rgba(0, 0, 0, 0.05);
          transform: translateY(-2px);
        }

        .input-content {
          display: flex;
          align-items: flex-end;
          gap: 0.75rem;
        }

        .chat-textarea {
          flex: 1;
          border: none;
          background: transparent;
          color: var(--text-primary);
          font-family: "Open Sans", sans-serif;
          font-size: 0.95rem;
          resize: none;
          outline: none;
          min-height: 24px;
          max-height: 120px;
          line-height: 1.5;
          padding: 0.25rem 0;
        }

        .chat-textarea::placeholder {
          color: var(--text-secondary);
          opacity: 0.7;
        }

        .chat-textarea:disabled {
          opacity: 0.6;
        }

        .input-actions {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .action-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.6rem;
          border-radius: 50%;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .action-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .action-button:hover::before {
          left: 100%;
        }

        .action-button.clear {
          color: var(--text-secondary);
        }

        .action-button.clear:hover:not(:disabled) {
          color: #ff4757;
          background: rgba(255, 71, 87, 0.1);
          transform: scale(1.1);
        }

        .action-button.send {
          background: linear-gradient(135deg, var(--accent), #3742fa);
          color: white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .action-button.send:hover:not(:disabled) {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .action-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none !important;
        }

        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .ai-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.8rem;
          justify-content: center;
        }

        .ai-icon {
          color: var(--accent);
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .chat-input-container {
            padding: 0.7rem;
          }

          .input-wrapper {
            padding: 0.6rem;
          }

          .quick-questions {
            gap: 0.25rem;
          }

          .quick-question-btn {
            padding: 0.4rem 0.8rem;
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .chat-input-container {
            padding: 0.56rem;
          }

          .input-content {
            flex-direction: column;
            gap: 0.5rem;
          }

          .input-actions {
            width: 100%;
            justify-content: space-between;
          }

          .quick-questions {
            flex-direction: column;
          }

          .quick-question-btn {
            text-align: left;
            white-space: normal;
          }
        }
      `}</style>
    </div>
  );
};

export default ChatInput;
