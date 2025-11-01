import React, { useState, useRef, useEffect } from "react";
import { useChatBot } from "../../Hooks/useChatBot";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import RobotButton from "./RobotButton";
import { FaTimes, FaRobot, FaStar } from "react-icons/fa";

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isLoading, sendMessage, clearChat } = useChatBot();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (message) => {
    await sendMessage(message);
  };

  const handleClearChat = () => {
    clearChat();
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Robot Button */}
      <div className='robot-button-wrapper'>
        <RobotButton
          isOpen={isOpen}
          onClick={toggleChat}
          isThinking={isLoading}
        />
      </div>

      {/* Chat Modal */}
      {isOpen && (
        <div className='chat-modal-overlay' onClick={() => setIsOpen(false)}>
          <div className='chat-modal' onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className='chat-header'>
              <div className='chat-title'>
                <div className='title-avatar'>
                  <FaRobot />
                </div>
                <div className='title-content'>
                  <h3>Eve AI</h3>
                  <span className='subtitle'>Alex Chen's Assistant</span>
                  <span className='status'>
                    {isLoading ? (
                      <span className='status-dot thinking'></span>
                    ) : (
                      <span className='status-dot online'></span>
                    )}
                    {isLoading ? "Thinking..." : "Online"}
                  </span>
                </div>
              </div>
              <button
                className='close-button'
                onClick={() => setIsOpen(false)}
                aria-label='Close chat'
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className='chat-messages'>
              {messages.map((message, index) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  showTyping={
                    index === messages.length - 1 &&
                    !message.isUser &&
                    !isLoading
                  }
                />
              ))}
              {isLoading && messages[messages.length - 1]?.isUser && (
                <ChatMessage
                  message={{
                    id: "thinking",
                    text: "Eve AI is thinking...",
                    isUser: false,
                    timestamp: new Date(),
                  }}
                  showTyping={true}
                />
              )}
              <div ref={messagesEndRef} className='messages-end' />
            </div>

            {/* Input */}
            <ChatInput
              onSendMessage={handleSendMessage}
              onClearChat={handleClearChat}
              isLoading={isLoading}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .robot-button-wrapper {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 1000;
        }

        .chat-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
          animation: fadeIn 0.3s ease;
        }

        .chat-modal {
          width: 100%;
          max-width: 480px;
          height: 80vh;
          max-height: 700px;
          background: var(--primary-bg);
          border-radius: 24px;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid var(--border);
          animation: slideUp 0.4s ease;
        }

        .chat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background: linear-gradient(
            135deg,
            var(--card-bg) 0%,
            var(--secondary-bg) 100%
          );
          border-bottom: 1px solid var(--border);
          position: relative;
        }

        .chat-header::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--border),
            transparent
          );
        }

        .chat-title {
          display: flex;
          align-items: center;
          gap: 0.875rem;
        }

        .title-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent), #3742fa);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .title-content h3 {
          margin: 0 0 0.25rem 0;
          font-size: 1.3rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .subtitle {
          font-size: 0.85rem;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 0.25rem;
        }

        .status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .status-dot.online {
          background: #00d2d3;
          box-shadow: 0 0 8px #00d2d3;
        }

        .status-dot.thinking {
          background: #ff9f43;
          box-shadow: 0 0 8px #ff9f43;
          animation: pulse 1.5s infinite;
        }

        .close-button {
          background: rgba(0, 0, 0, 0.1);
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.75rem;
          border-radius: 50%;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-button:hover {
          background: rgba(0, 0, 0, 0.15);
          color: var(--text-primary);
          transform: rotate(90deg);
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
          background: var(--primary-bg);
          position: relative;
        }

        .messages-end {
          height: 1px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .robot-button-wrapper {
            bottom: 1rem;
            right: 1rem;
          }

          .chat-modal-overlay {
            padding: 0.5rem;
          }

          .chat-modal {
            height: 90vh;
            max-height: none;
            border-radius: 20px;
          }

          .chat-header {
            padding: 1.25rem;
          }

          .chat-messages {
            padding: 1.25rem;
          }

          .title-avatar {
            width: 42px;
            height: 42px;
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .robot-button-wrapper {
            bottom: 0.75rem;
            right: 0.75rem;
          }

          .chat-modal-overlay {
            padding: 0.25rem;
          }

          .chat-modal {
            height: 95vh;
            border-radius: 16px;
          }

          .chat-header {
            padding: 1rem;
          }

          .chat-title {
            gap: 0.75rem;
          }

          .title-content h3 {
            font-size: 1.1rem;
          }

          .chat-messages {
            padding: 1rem;
          }
        }

        /* Enhanced Scrollbar */
        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: transparent;
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 3px;
        }

        .chat-messages::-webkit-scrollbar-thumb:hover {
          background: var(--accent);
        }
      `}</style>
    </>
  );
};

export default AIChatBot;
