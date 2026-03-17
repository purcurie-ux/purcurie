"use client";
import { useState, useRef, useEffect } from "react";
import { useCart } from "@/context/CartContext";

type Message = { role: "user" | "assistant"; content: string };

export default function PurcurieChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! 💄 I'm Purcurie's beauty assistant. How can I help?",
    },
  ]);
  const [history, setHistory] = useState<Message[][]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  // 🔔 Notification bubble state
  const [showNotif, setShowNotif] = useState(false);
  const [notifDismissed, setNotifDismissed] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const { cartItems } = useCart();

  // Auto scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Animate chat open/close
  useEffect(() => {
    if (open) {
      setTimeout(() => setVisible(true), 10);
      setShowNotif(false);
    } else {
      setVisible(false);
    }
  }, [open]);

  // ✅ Show notification bubble after 15 seconds
  useEffect(() => {
    if (notifDismissed) return;
    const timer = setTimeout(() => {
      if (!open) setShowNotif(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, [notifDismissed, open]);

  const dismissNotif = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowNotif(false);
    setNotifDismissed(true);
  };
  // ✅ 1. Load chat history when the page loads
useEffect(() => {
    const savedMessages = localStorage.getItem("purcurie_history");
    const savedOpenStatus = localStorage.getItem("purcurie_chat_open");
    const savedAllHistory = localStorage.getItem("purcurie_history_all");
    
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
    if (savedAllHistory) {
      setHistory(JSON.parse(savedAllHistory));
    }
    if (savedOpenStatus === "true") {
      setOpen(true);
    }
  }, []);

  // ✅ 2. Save messages and open status whenever they change
  useEffect(() => {
    // We only save if there is more than the default message
    if (messages.length > 1) {
      localStorage.setItem("purcurie_history", JSON.stringify(messages));
    }
    localStorage.setItem("purcurie_chat_open", open.toString());
  }, [messages, open]);


  // ✅ Helper to turn text URLs into clickable links
  const renderMessageContent = (content: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return content.split(urlRegex).map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "inherit",
              textDecoration: "underline",
              wordBreak: "break-all",
            }}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  const sendMessage = async (overrideInput?: string) => {
    const text = overrideInput ?? input;

    // ✅ Handle Human/WhatsApp redirection immediately
    if (text.includes("Talk to Human") || text.includes("WhatsApp")) {
      window.open("https://wa.me/919769777006", "_blank"); // Put your number here
      setMessages([...messages, 
        { role: "user", content: text },
        { role: "assistant", content: "Redirecting you to our WhatsApp support... 📲" }
      ]);
      return;
    }

    if (!text.trim() || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updated,
          cartItems: cartItems || [],
        }),
      });

      const data = await res.json();
      setMessages([
        ...updated,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages([
        ...updated,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Function to start a completely fresh chat
  const startNewChat = () => {
    if (messages.length > 1) {
      const updatedHistory = [...history, messages];
      setHistory(updatedHistory);
      localStorage.setItem("purcurie_history_all", JSON.stringify(updatedHistory));
    }
    
    const initialMsg = [{
      role: "assistant" as const,
      content: "Hi there! 💄 Ready for a fresh start. How can I help you today?"
    }];
    setMessages(initialMsg);
    localStorage.setItem("purcurie_history", JSON.stringify(initialMsg));
  };

  // ✅ Function to go back to the previous conversation
  const goBackToPrevious = () => {
    if (history.length === 0) return;
    const previousChat = history[history.length - 1];
    const remainingHistory = history.slice(0, -1);
    
    setMessages(previousChat);
    setHistory(remainingHistory);
    localStorage.setItem("purcurie_history", JSON.stringify(previousChat));
    localStorage.setItem("purcurie_history_all", JSON.stringify(remainingHistory));
  };

  const resetAll = () => {
    localStorage.removeItem("purcurie_history");
    localStorage.removeItem("purcurie_history_all");
    localStorage.removeItem("purcurie_chat_open");
    setMessages([{ role: "assistant", content: "Hi there! 💄 I'm Purcurie's beauty assistant. How can I help?" }]);
    setHistory([]);
    setInput("");
    setLoading(false);
  };

    const suggestions = [
    "Track Order 📦",
    "Return/Refund ↩️",
    "Talk to Human 👤",
    "WhatsApp Us 💬",
    ];
  return (
    <>
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap');

        .purcurie-chat * {
          font-family: 'Satoshi', sans-serif;
          box-sizing: border-box;
        }

        .chat-window {
          transition: opacity 0.25s ease, transform 0.25s ease;
          opacity: 0;
          transform: translateY(12px) scale(0.97);
          pointer-events: none;
          position: absolute;
          bottom: 68px;
          right: 0;
          width: 360px;
          height: 520px;
        }
        .chat-window.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: all;
        }

        /* Mobile responsive */
        @media (max-width: 480px) {
          .chat-window {
            width: calc(100vw - 24px);
            height: calc(100dvh - 110px);
            right: 0;
            left: auto;
            bottom: 68px;
          }
          .purcurie-chat-root {
            right: 12px !important;
            bottom: 16px !important;
          }
        }

        .purcurie-scrollbar::-webkit-scrollbar { width: 4px; }
        .purcurie-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .purcurie-scrollbar::-webkit-scrollbar-thumb { background: #CEDFE7; border-radius: 99px; }

        .typing-dot {
          width: 6px; height: 6px;
          background: #1D2C34; border-radius: 50%;
          animation: typingBounce 1.2s infinite ease-in-out;
          opacity: 0.5;
        }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typingBounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-5px); opacity: 1; }
        }

        .send-btn { transition: background 0.2s, transform 0.15s; }
        .send-btn:hover:not(:disabled) { transform: scale(1.05); background: #162228 !important; }
        .send-btn:active:not(:disabled) { transform: scale(0.95); }

        .toggle-btn { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .toggle-btn:hover { transform: scale(1.08); box-shadow: 0 8px 32px rgba(29,44,52,0.25); }

        .suggestion-chip { transition: background 0.15s, color 0.15s; }
        .suggestion-chip:hover { background: #1D2C34 !important; color: white !important; }

        .msg-bubble { animation: msgFadeIn 0.2s ease forwards; }
        @keyframes msgFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .notif-bubble {
          animation: notifPop 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        @keyframes notifPop {
          from { opacity: 0; transform: translateY(8px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .notif-badge { animation: badgePulse 2s infinite; }
        @keyframes badgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .hdr-btn {
          background: none; border: none; color: #CEDFE7; cursor: pointer;
          width: 28px; height: 28px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; transition: background 0.15s, transform 0.15s;
        }
        .hdr-btn:hover { background: rgba(206,223,231,0.18); color: #fff; }
        .hdr-btn:active { transform: scale(0.88); }
        .hdr-btn.reset-btn:hover .spin-icon { display: inline-block; animation: spinOnce 0.4s ease forwards; }
        @keyframes spinOnce { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      <div
        className="purcurie-chat purcurie-chat-root"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        {/* Chat Window */}
        <div
          className={`chat-window flex flex-col overflow-hidden ${visible ? "visible" : ""}`}
          style={{
            background: "#EAF0F4",
            borderRadius: "20px",
            boxShadow: "0 16px 48px rgba(29,44,52,0.15), 0 2px 8px rgba(29,44,52,0.08)",
            border: "1px solid #CEDFE7",
          }}
        >
          {/* Header */}
          <div style={{
            background: "#1D2C34", padding: "14px 18px",
            display: "flex", alignItems: "center",
            justifyContent: "space-between", flexShrink: 0,
            borderRadius: "20px 20px 0 0",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "34px", height: "34px", borderRadius: "50%",
                background: "#CEDFE7", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: "16px", flexShrink: 0,
              }}>💄</div>
              <div>
                <div style={{ color: "#EAF0F4", fontWeight: 700, fontSize: "14px", letterSpacing: "0.02em" }}>
                  Purcurie Beauty
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "1px" }}>
                  <div style={{
                    width: "6px", height: "6px", borderRadius: "50%",
                    background: "#4ade80", boxShadow: "0 0 6px #4ade80",
                  }} />
                  <span style={{ color: "#CEDFE7", fontSize: "11px", fontWeight: 500 }}>Online now</span>
                </div>
              </div>
            </div>
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
    {history.length > 0 && (
        <button className="hdr-btn" onClick={goBackToPrevious} title="Go to last chat"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", height: "auto", padding: "4px 6px" }}>
        <span style={{ fontSize: "15px" }}>↩️</span>
        <span style={{ fontSize: "12px", color: "#CEDFE7", lineHeight: 1 }}>Last</span>
        </button>
    )}
    <button className="hdr-btn" onClick={startNewChat} title="Start new chat"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", height: "auto", padding: "4px 6px" }}>
        <span style={{ fontSize: "15px" }}>➕</span>
        <span style={{ fontSize: "12px", color: "#CEDFE7", lineHeight: 1 }}>New</span>
    </button>
    <button className="hdr-btn reset-btn" onClick={resetAll} title="Clear all & reset"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", height: "auto", padding: "4px 6px" }}>
        <span className="spin-icon" style={{ fontSize: "15px" }}>🔄</span>
        <span style={{ fontSize: "12px", color: "#CEDFE7", lineHeight: 1 }}>Reset</span>
    </button>
    <button className="hdr-btn" onClick={() => setOpen(false)} title="Close"
    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", height: "auto", padding: "4px 6px" }}>
    <span style={{ fontSize: "15px", fontWeight: 600, color: "#CEDFE7" }}>✕</span>
    <span style={{ fontSize: "12px", color: "#CEDFE7", lineHeight: 1 }}>Close</span>
  </button>
    </div>
            </div>

          {/* Messages */}
          <div
            className="purcurie-scrollbar"
            style={{
              flex: 1, overflowY: "auto", padding: "16px",
              display: "flex", flexDirection: "column",
              gap: "10px", background: "#EAF0F4",
            }}
          >
            {messages.map((m, i) => (
              <div key={i} className="msg-bubble" style={{
                display: "flex",
                justifyContent: m.role === "user" ? "flex-end" : "flex-start",
              }}>
              <div style={{
                maxWidth: "85%", // Made slightly wider for long links
                padding: "10px 14px",
                borderRadius: m.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                fontSize: "13.5px", lineHeight: "1.5", fontWeight: 400,
                color: m.role === "user" ? "#EAF0F4" : "#1D2C34",
                background: m.role === "user" ? "#1D2C34" : "#ffffff",
                boxShadow: m.role === "user" ? "none" : "0 1px 4px rgba(29,44,52,0.08)",
                border: m.role === "user" ? "none" : "1px solid #CEDFE7",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word", // ✅ Keeps text inside the bubble
                overflowWrap: "anywhere", // ✅ Forces long URLs to wrap
                }}>
                <>
                {m.content.includes("Verified Customer Account") && (
                    <div style={{ 
                    fontSize: '10px', 
                    background: '#4ade80', 
                    color: '#1D2C34', 
                    padding: '2px 6px', 
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    marginBottom: '6px',
                    display: 'inline-block',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap' // ✅ This keeps it on one line
}}>
                    SECURE VERIFIED
                    </div>
                )}
                {renderMessageContent(m.content)}
                </>
                </div>
                </div>
            ))}

            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{
                  background: "#ffffff", border: "1px solid #CEDFE7",
                  borderRadius: "18px 18px 18px 4px", padding: "12px 16px",
                  display: "flex", gap: "4px", alignItems: "center",
                  boxShadow: "0 1px 4px rgba(29,44,52,0.08)",
                }}>
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length === 1 && (
            <div style={{
              padding: "0 16px 10px", display: "flex",
              gap: "6px", flexWrap: "wrap", background: "#EAF0F4",
            }}>
              {suggestions.map((s) => (
                <button
                  key={s}
                  className="suggestion-chip"
                  onClick={() => sendMessage(s)}
                  style={{
                    background: "#ffffff", border: "1px solid #CEDFE7",
                    color: "#1D2C34", borderRadius: "99px",
                    padding: "5px 12px", fontSize: "12px",
                    fontWeight: 500, cursor: "pointer",
                    fontFamily: "Satoshi, sans-serif",
                  }}
                >{s}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: "12px 14px", borderTop: "1px solid #CEDFE7",
            background: "#ffffff", display: "flex",
            gap: "8px", alignItems: "center", flexShrink: 0,
            borderRadius: "0 0 20px 20px",
          }}>
            <input
              style={{
                flex: 1, border: "1.5px solid #CEDFE7",
                borderRadius: "99px", padding: "9px 16px",
                fontSize: "13.5px", outline: "none",
                color: "#1D2C34", background: "#EAF0F4",
                fontFamily: "Satoshi, sans-serif", transition: "border-color 0.2s",
              }}
              placeholder="Ask or enter order # e.g. 1053..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              onFocus={e => (e.currentTarget.style.borderColor = "#1D2C34")}
              onBlur={e => (e.currentTarget.style.borderColor = "#CEDFE7")}
              disabled={loading}
            />
            <button
              className="send-btn"
              onClick={() => sendMessage()}
              disabled={loading}
              style={{
                background: "#1D2C34", border: "none",
                color: "#EAF0F4", width: "38px", height: "38px",
                borderRadius: "50%", cursor: loading ? "not-allowed" : "pointer",
                fontSize: "15px", display: "flex",
                alignItems: "center", justifyContent: "center",
                flexShrink: 0, opacity: loading ? 0.5 : 1,
              }}
            >➤</button>
          </div>
        </div>

        {/* 🔔 Notification Bubble */}
        {showNotif && !open && (
          <div
            className="notif-bubble"
            style={{
              position: "absolute",
              bottom: "72px",
              right: "0",
              background: "#1D2C34",
              color: "#EAF0F4",
              borderRadius: "16px 16px 4px 16px",
              padding: "10px 14px",
              fontSize: "13px",
              fontWeight: 500,
              maxWidth: "220px",
              minWidth: "180px",
              whiteSpace: "normal",
              wordBreak: "keep-all",
              lineHeight: "1.4",
              boxShadow: "0 8px 24px rgba(29,44,52,0.2)",
              cursor: "pointer",
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
            }}
            onClick={() => { setOpen(true); setShowNotif(false); }}
          >
            <span style={{ flex: 1 }}>👋 How can I help you today?</span>
            <button
              onClick={dismissNotif}
              style={{
                background: "none", border: "none",
                color: "#CEDFE7", cursor: "pointer",
                fontSize: "12px", padding: "0",
                lineHeight: 1, flexShrink: 0, marginTop: "1px",
              }}
            >✕</button>
          </div>
        )}

        {/* Toggle Button */}
        <div style={{ position: "relative" }}>
          {showNotif && !open && (
            <div
              className="notif-badge"
              style={{
                position: "absolute", top: "-4px", right: "-4px",
                width: "16px", height: "16px",
                background: "#ef4444", borderRadius: "50%",
                border: "2px solid white", zIndex: 1,
              }}
            />
          )}
          <button
            className="toggle-btn"
           onClick={() => {
            const nextState = !open;
            setOpen(nextState);
            localStorage.setItem("purcurie_chat_open", nextState.toString());
            }}
            style={{
              background: "#1D2C34", border: "none",
              color: "#EAF0F4", width: "56px", height: "56px",
              borderRadius: "50%", cursor: "pointer",
              fontSize: "22px", display: "flex",
              alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 20px rgba(29,44,52,0.2)",
            }}
          >
            {open ? "✕" : "💬"}
          </button>
        </div>
      </div>
    </>
  );
}