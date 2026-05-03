import React from "react";

export type TMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
  timestamp: Date;
};

type ChatMessageProps = {
  message: TMessage;
};

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isBot = message.role === "bot";

  const timeStr = message.timestamp.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isBot ? "row" : "row-reverse",
        alignItems: "flex-end",
        gap: "8px",
        marginBottom: "12px",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          background: isBot
            ? "linear-gradient(135deg, #5b3d88, #c53074)"
            : "linear-gradient(135deg, #19729f, #5b3d88)",
        }}
      >
        {isBot ? "🤖" : "🙂"}
      </div>

      {/* Bubble + Timestamp */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: isBot ? "flex-start" : "flex-end",
          maxWidth: "75%",
        }}
      >
        <div
          style={{
            padding: "10px 14px",
            borderRadius: isBot ? "4px 16px 16px 16px" : "16px 4px 16px 16px",
            background: isBot
              ? "rgba(91, 61, 136, 0.15)"
              : "linear-gradient(135deg, #5b3d88, #c53074)",
            color: isBot ? "#1a1a2e" : "#ffffff",
            fontSize: "14px",
            lineHeight: "1.5",
            border: isBot ? "1px solid rgba(91,61,136,0.25)" : "none",
            wordBreak: "break-word",
          }}
        >
          {message.text}
        </div>
        <span
          style={{
            fontSize: "11px",
            color: "#a0a1a1",
            marginTop: "4px",
          }}
        >
          {timeStr}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
