import React, { useState, useEffect } from "react";
import { FaRobot, FaThumbsUp, FaThumbsDown, FaCar } from "react-icons/fa";

const ChatMessage = ({ message, showTyping = false }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  // Simple typing effect
  useEffect(() => {
    if (!showTyping || message.isUser || message.isThinking) {
      setDisplayedText(message.text);
      return;
    }
    
    // Reset if message changes
    setDisplayedText("");
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => message.text.slice(0, i + 1));
      i++;
      if (i > message.text.length) clearInterval(interval);
    }, 15); // Fast typing

    return () => clearInterval(interval);
  }, [message.text, showTyping, message.isUser]);

  return (
    <div className={`message-row ${message.isUser ? "user-row" : "bot-row"}`}>
      
      {/* Bot Avatar (Only for Bot) */}
      {!message.isUser && (
        <div className="avatar-container">
          <div className="bot-icon">
            {/* <FaRobot /> */}

            <img src="/images/bot_logo.png" alt="" className="bot-icon"/>
          </div>
        </div>
      )}

      <div className="message-content-stack">
        {/* The Message Bubble/Text */}
        <div className={`bubble ${message.isUser ? "user-bubble" : "bot-bubble"}`}>
          {message.isThinking ? (
             <div className="typing-dots">
               <span>.</span><span>.</span><span>.</span>
             </div>
          ) : (
             <p>{displayedText}</p>
          )}
        </div>

        {/* Feedback Icons (Only for Bot & Not Thinking) */}
        {!message.isUser && !message.isThinking && (
          <div className="feedback-actions">
            <button aria-label="Helpful"><FaThumbsUp /></button>
            <button aria-label="Not helpful"><FaThumbsDown /></button>
          </div>
        )}
      </div>

      <style jsx>{`
        .message-row {
          display: flex;
          gap: 1rem;
          width: 100%;
        }

        /* ALIGNMENT FIX: Justify Content */
        .user-row {
          justify-content: flex-end;
        }

        .bot-row {
          justify-content: flex-start;
        }

        .avatar-container {
          flex-shrink: 0;
          margin-top: 4px;
        }

        .bot-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #4F46E5; /* Indigo */
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
        }

        .message-content-stack {
          display: flex;
          flex-direction: column;
          max-width: 80%;
          gap: 0.5rem;
        }

        .bubble {
          padding: 0.75rem 1rem;
          border-radius: 12px;
          font-size: 0.95rem;
          line-height: 1.5;
          word-wrap: break-word;
        }

        /* User Style: Gray Bubble, Right Aligned */
        .user-bubble {
          background: var(--user-bubble-bg);
          color: var(--user-text);
          border-bottom-right-radius: 2px;
        }

        /* Bot Style: No Background, Left Aligned */
        .bot-bubble {
          background: transparent;
          color: var(--bot-text);
          padding-left: 0;
          padding-top: 0;
        }

        .feedback-actions {
          display: flex;
          gap: 0.75rem;
          padding-left: 0;
        }

        .feedback-actions button {
          background: none;
          border: none;
          color: var(--chat-text-secondary);
          cursor: pointer;
          font-size: 0.9rem;
          opacity: 0.6;
          transition: opacity 0.2s, color 0.2s;
        }

        .feedback-actions button:hover {
          opacity: 1;
          color: var(--chat-text);
        }

        .typing-dots span {
          animation: blink 1.4s infinite both;
          font-size: 1.5rem;
          margin: 0 1px;
        }
        .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes blink {
          0% { opacity: 0.2; }
          20% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};

export default ChatMessage;