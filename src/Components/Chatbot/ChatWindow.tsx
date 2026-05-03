"use client";

import React, { useState, useRef, useEffect } from "react";
import ChatMessage, { TMessage } from "./ChatMessage";

// Quick suggestion chips shown above the input
const SUGGESTIONS = [
  "Show cheapest events 🎟️",
  "Any free events? 🆓",
  "Featured events ⭐",
  "Events this weekend 📅",
];

const WELCOME_MESSAGE: TMessage = {
  id: "welcome",
  role: "bot",
  text: "👋 Hi! I'm your Circle Events assistant. Ask me anything about upcoming events, ticket prices, or venues — I'll help you find the perfect match!",
  timestamp: new Date(),
};

type ChatWindowProps = {
  onClose: () => void;
};

const ChatWindow = ({ onClose }: ChatWindowProps) => {
  const [messages, setMessages] = useState<TMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: TMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: text.trim(),
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    // Build history for context (excluding welcome & current)
    const history = messages
      .filter((m) => m.id !== "welcome")
      .map((m) => ({ role: m.role, text: m.text }));

    const payload = {
      message: text.trim(),
      history,
    };

    // ✅ Now connecting to the backend API
    try {
      const { chatWithAI } = await import("../../action/chatbot");
      const result = await chatWithAI(text.trim(), history);
      
      if (result?.success && result.data) {
        const botMessage: TMessage = {
          id: `bot-${Date.now()}`,
          role: "bot",
          text: result.data,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error(result?.message || "Failed to get response from AI");
      }
    } catch (error) {
      console.error("Chatbot Error:", error);
      const errorMessage: TMessage = {
        id: `bot-err-${Date.now()}`,
        role: "bot",
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestion = (chip: string) => {
    sendMessage(chip);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "88px",
        right: "24px",
        width: "min(380px, calc(100vw - 32px))",
        height: "min(560px, calc(100vh - 120px))",
        background: "#ffffff",
        borderRadius: "20px",
        boxShadow:
          "0 24px 64px rgba(91,61,136,0.18), 0 4px 16px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        zIndex: 9999,
        border: "1px solid rgba(91,61,136,0.12)",
        animation: "chatSlideIn 0.25s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      <style>{`
        @keyframes chatSlideIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
        @keyframes typingDot {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.4; }
          40%            { transform: scale(1.2); opacity: 1; }
        }
      `}</style>

      {/* ── Header ── */}
      <div
        style={{
          background: "linear-gradient(135deg, #5b3d88 0%, #c53074 100%)",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
            }}
          >
            🎫
          </div>
          <div>
            <p
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "15px",
                margin: 0,
              }}
            >
              Circle Assistant
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "12px", margin: 0 }}>
              Find your perfect event
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close chat"
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            cursor: "pointer",
            color: "#fff",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLButtonElement).style.background =
              "rgba(255,255,255,0.3)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLButtonElement).style.background =
              "rgba(255,255,255,0.15)")
          }
        >
          ✕
        </button>
      </div>

      {/* ── Messages Area ── */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "16px",
          background: "#f8f7fc",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(91,61,136,0.2) transparent",
        }}
      >
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {/* Typing indicator */}
        {isLoading && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #5b3d88, #c53074)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
              }}
            >
              🤖
            </div>
            <div
              style={{
                padding: "10px 16px",
                background: "rgba(91,61,136,0.1)",
                borderRadius: "4px 16px 16px 16px",
                display: "flex",
                gap: "5px",
                alignItems: "center",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#5b3d88",
                    display: "inline-block",
                    animation: `typingDot 1.2s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* ── Suggestion Chips ── */}
      <div
        style={{
          padding: "8px 12px 4px",
          background: "#fff",
          display: "flex",
          gap: "6px",
          flexWrap: "wrap",
          borderTop: "1px solid rgba(91,61,136,0.08)",
        }}
      >
        {SUGGESTIONS.map((chip) => (
          <button
            key={chip}
            onClick={() => handleSuggestion(chip)}
            disabled={isLoading}
            style={{
              padding: "5px 10px",
              borderRadius: "20px",
              border: "1px solid rgba(91,61,136,0.3)",
              background: "transparent",
              color: "#5b3d88",
              fontSize: "12px",
              cursor: isLoading ? "not-allowed" : "pointer",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "#5b3d88";
              el.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "#5b3d88";
            }}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* ── Input Area ── */}
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "12px",
          background: "#fff",
          display: "flex",
          gap: "8px",
          alignItems: "center",
          borderTop: "1px solid rgba(91,61,136,0.1)",
        }}
      >
        <input
          id="chatbot-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about events, prices, venues..."
          disabled={isLoading}
          autoComplete="off"
          style={{
            flex: 1,
            padding: "10px 14px",
            borderRadius: "24px",
            border: "1.5px solid rgba(91,61,136,0.25)",
            outline: "none",
            fontSize: "14px",
            background: "#f8f7fc",
            color: "#1a1a2e",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) =>
            (e.target.style.borderColor = "#5b3d88")
          }
          onBlur={(e) =>
            (e.target.style.borderColor = "rgba(91,61,136,0.25)")
          }
        />
        <button
          id="chatbot-send-btn"
          type="submit"
          disabled={!input.trim() || isLoading}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "none",
            background:
              input.trim() && !isLoading
                ? "linear-gradient(135deg, #5b3d88, #c53074)"
                : "#e0e0e0",
            color: input.trim() && !isLoading ? "#fff" : "#aaa",
            cursor: input.trim() && !isLoading ? "pointer" : "not-allowed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            flexShrink: 0,
            transition: "background 0.2s, transform 0.1s",
          }}
          onMouseDown={(e) =>
            input.trim() &&
            !isLoading &&
            ((e.currentTarget as HTMLButtonElement).style.transform =
              "scale(0.9)")
          }
          onMouseUp={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.transform = "scale(1)")
          }
        >
          ➤
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
