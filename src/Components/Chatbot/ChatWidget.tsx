"use client";

import React, { useState } from "react";
import ChatWindow from "./ChatWindow";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Window — renders when open */}
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}

      {/* Floating Bubble Button */}
      <button
        id="chatbot-toggle-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
        title="Chat with Circle Assistant"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: "none",
          background: "linear-gradient(135deg, #5b3d88 0%, #c53074 100%)",
          color: "#fff",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow:
            "0 8px 24px rgba(91,61,136,0.4), 0 2px 8px rgba(0,0,0,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10000,
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.transform = "scale(1.1)";
          el.style.boxShadow =
            "0 12px 32px rgba(91,61,136,0.5), 0 4px 12px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.transform = "scale(1)";
          el.style.boxShadow =
            "0 8px 24px rgba(91,61,136,0.4), 0 2px 8px rgba(0,0,0,0.15)";
        }}
        onMouseDown={(e) =>
          (e.currentTarget.style.transform = "scale(0.92)")
        }
        onMouseUp={(e) =>
          (e.currentTarget.style.transform = "scale(1.1)")
        }
      >
        {/* Toggle between chat icon and close icon */}
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Pulse ring animation — only when closed */}
      {!isOpen && (
        <style>{`
          @keyframes chatPulse {
            0%   { transform: scale(1);   opacity: 0.6; }
            70%  { transform: scale(1.6); opacity: 0;   }
            100% { transform: scale(1.6); opacity: 0;   }
          }
          #chatbot-pulse-ring {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: rgba(197,48,116,0.35);
            z-index: 9998;
            animation: chatPulse 2s ease-out infinite;
            pointer-events: none;
          }
        `}</style>
      )}
      {!isOpen && <div id="chatbot-pulse-ring" />}
    </>
  );
};

export default ChatWidget;
