import { useState } from "react";
import { useChat } from "../context/ChatContext";

export default function ChatWindow() {
  const { messages, sendMessage, loading } = useChat();
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>SwiftReply AI</h2>

      <div style={{ minHeight: 300 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            {m.text && (
              <p>
                <b>{m.role === "user" ? "You" : "AI"}:</b> {m.text}
              </p>
            )}

            {m.image && (
              <img
                src={m.image}
                alt="AI"
                style={{ width: 256, borderRadius: 8 }}
              />
            )}
          </div>
        ))}

        {loading && <p>Processing...</p>}
      </div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type message or image prompt..."
      />

      <div style={{ marginTop: 10 }}>
        <button onClick={() => { sendMessage(text); setText(""); }}>
          Chat
        </button>

        <button
          onClick={() => { sendMessage(text, "image"); setText(""); }}
          style={{ marginLeft: 10 }}
        >
          Generate Image
        </button>
      </div>
    </div>
  );
}
