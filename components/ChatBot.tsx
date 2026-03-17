// "use client";
// import { useState, useRef, useEffect } from "react";
// import { useCart } from "@/context/CartContext";


// type Message = { role: "user" | "assistant"; content: string };

// export default function PurcurieChat() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       role: "assistant",
//       content:
//         "Hi there! 👋\nI'm Purcurie's support.\nHow can I help you today?",
//     },
//   ]);
//   const [history, setHistory] = useState<Message[][]>([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [visible, setVisible] = useState(false);

//   // 🔔 Notification bubble state
//   const [showNotif, setShowNotif] = useState(false);
//   const [notifDismissed, setNotifDismissed] = useState(false);

//   const bottomRef = useRef<HTMLDivElement>(null);
//   const { items: cartItems } = useCart();

//   // Auto scroll to bottom
//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Animate chat open/close
//   useEffect(() => {
//     if (open) {
//       setTimeout(() => setVisible(true), 10);
//       setShowNotif(false);
//     } else {
//       setVisible(false);
//     }
//   }, [open]);

//   // ✅ Show notification bubble after 15 seconds
//   useEffect(() => {
//     if (notifDismissed) return;
//     const timer = setTimeout(() => {
//       if (!open) setShowNotif(true);
//     }, 15000);
//     return () => clearTimeout(timer);
//   }, [notifDismissed, open]);

//   const dismissNotif = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setShowNotif(false);
//     setNotifDismissed(true);
//   };
//   // ✅ 1. Load chat history when the page loads
// useEffect(() => {
//     const savedMessages = localStorage.getItem("purcurie_history");
//     const savedOpenStatus = localStorage.getItem("purcurie_chat_open");
//     const savedAllHistory = localStorage.getItem("purcurie_history_all");
    
//     if (savedMessages) {
//       setMessages(JSON.parse(savedMessages));
//     }
//     if (savedAllHistory) {
//       setHistory(JSON.parse(savedAllHistory));
//     }
//     if (savedOpenStatus === "true") {
//       setOpen(true);
//     }
//   }, []);

//   // ✅ 2. Save messages and open status whenever they change
//   useEffect(() => {
//     // We only save if there is more than the default message
//     if (messages.length > 1) {
//       localStorage.setItem("purcurie_history", JSON.stringify(messages));
//     }
//     localStorage.setItem("purcurie_chat_open", open.toString());
//   }, [messages, open]);


//   // ✅ Helper to turn text URLs into clickable links
//   const renderMessageContent = (content: string) => {
//     const urlRegex = /(https?:\/\/[^\s]+)/g;
//     return content.split(urlRegex).map((part, i) => {
//       if (part.match(urlRegex)) {
//         return (
//           <a
//             key={i}
//             href={part}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{
//               color: "inherit",
//               textDecoration: "underline",
//               wordBreak: "break-all",
//             }}
//           >
//             {part}
//           </a>
//         );
//       }
//       return part;
//     });
//   };

//   const sendMessage = async (overrideInput?: string) => {
//     const text = overrideInput ?? input;

//     // ✅ Handle Human/WhatsApp redirection immediately
//     if (text.includes("Talk to Human") || text.includes("WhatsApp")) {
//       window.open("https://wa.me/919769777006", "_blank"); // Put your number here
//       setMessages([...messages, 
//         { role: "user", content: text },
//         { role: "assistant", content: "Redirecting you to our WhatsApp support... 📲" }
//       ]);
//       return;
//     }

//     if (!text.trim() || loading) return;

//     const userMsg: Message = { role: "user", content: text };
//     const updated = [...messages, userMsg];
//     setMessages(updated);
//     setInput("");
//     setLoading(true);

//     try {
//       const res = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           messages: updated,
//           cartItems: cartItems || [],
//         }),
//       });

//       const data = await res.json();
//       setMessages([
//         ...updated,
//         { role: "assistant", content: data.reply },
//       ]);
//     } catch {
//       setMessages([
//         ...updated,
//         {
//           role: "assistant",
//           content: "Sorry, something went wrong. Please try again!",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Function to start a completely fresh chat
//   const startNewChat = () => {
//     if (messages.length > 1) {
//       const updatedHistory = [...history, messages];
//       setHistory(updatedHistory);
//       localStorage.setItem("purcurie_history_all", JSON.stringify(updatedHistory));
//     }
    
//     const initialMsg = [{
//       role: "assistant" as const,
//       content: "Hi there! 💄 Ready for a fresh start. How can I help you today?"
//     }];
//     setMessages(initialMsg);
//     localStorage.setItem("purcurie_history", JSON.stringify(initialMsg));
//   };

//   // ✅ Function to go back to the previous conversation
//   const goBackToPrevious = () => {
//     if (history.length === 0) return;
//     const previousChat = history[history.length - 1];
//     const remainingHistory = history.slice(0, -1);
    
//     setMessages(previousChat);
//     setHistory(remainingHistory);
//     localStorage.setItem("purcurie_history", JSON.stringify(previousChat));
//     localStorage.setItem("purcurie_history_all", JSON.stringify(remainingHistory));
//   };

//   const resetAll = () => {
//     localStorage.removeItem("purcurie_history");
//     localStorage.removeItem("purcurie_history_all");
//     localStorage.removeItem("purcurie_chat_open");
//     setMessages([{ role: "assistant", content: "Hi there! 💄 I'm Purcurie's beauty assistant. How can I help?" }]);
//     setHistory([]);
//     setInput("");
//     setLoading(false);
//   };

//     const suggestions = [
//     "Track Order 📦",
//     "Return/Refund ↩️",
//     "Talk to Human 👤",
//     "WhatsApp Us 💬",
//     ];
//   return (
//     <>
//       <style>{`
//         @import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap');

//         .purcurie-chat * {
//           font-family: 'Satoshi', sans-serif;
//           box-sizing: border-box;
//         }

//         .chat-window {
//           transition: opacity 0.25s ease, transform 0.25s ease;
//           opacity: 0;
//           transform: translateY(12px) scale(0.97);
//           pointer-events: none;
//           position: absolute;
//           bottom: 68px;
//           right: 0;
//           width: 360px;
//           height: 520px;
//         }
//         .chat-window.visible {
//           opacity: 1;
//           transform: translateY(0) scale(1);
//           pointer-events: all;
//         }

//         /* Mobile responsive */
//         @media (max-width: 480px) {
//           .chat-window {
//             width: calc(100vw - 24px);
//             height: calc(100dvh - 110px);
//             right: 0;
//             left: auto;
//             bottom: 68px;
//           }
//           .purcurie-chat-root {
//             right: 12px !important;
//             bottom: 16px !important;
//           }
//         }

//         .purcurie-scrollbar::-webkit-scrollbar { width: 4px; }
//         .purcurie-scrollbar::-webkit-scrollbar-track { background: transparent; }
//         .purcurie-scrollbar::-webkit-scrollbar-thumb { background: #CEDFE7; border-radius: 99px; }

//         .typing-dot {
//           width: 6px; height: 6px;
//           background: #1D2C34; border-radius: 50%;
//           animation: typingBounce 1.2s infinite ease-in-out;
//           opacity: 0.5;
//         }
//         .typing-dot:nth-child(2) { animation-delay: 0.2s; }
//         .typing-dot:nth-child(3) { animation-delay: 0.4s; }
//         @keyframes typingBounce {
//           0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
//           40% { transform: translateY(-5px); opacity: 1; }
//         }

//         .send-btn { transition: background 0.2s, transform 0.15s; }
//         .send-btn:hover:not(:disabled) { transform: scale(1.05); background: #162228 !important; }
//         .send-btn:active:not(:disabled) { transform: scale(0.95); }

//         .toggle-btn { transition: transform 0.2s ease, box-shadow 0.2s ease; }
//         .toggle-btn:hover { transform: scale(1.08); box-shadow: 0 8px 32px rgba(29,44,52,0.25); }

//         .suggestion-chip { transition: background 0.15s, color 0.15s; }
//         .suggestion-chip:hover { background: #1D2C34 !important; color: white !important; }

//         .msg-bubble { animation: msgFadeIn 0.2s ease forwards; }
//         @keyframes msgFadeIn {
//           from { opacity: 0; transform: translateY(6px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .notif-bubble {
//           animation: notifPop 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards;
//         }
//         @keyframes notifPop {
//           from { opacity: 0; transform: translateY(8px) scale(0.9); }
//           to { opacity: 1; transform: translateY(0) scale(1); }
//         }

//         .notif-badge { animation: badgePulse 2s infinite; }
//         @keyframes badgePulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.2); }
//         }

//         .hdr-btn {
//           background: none; border: none; color: #CEDFE7; cursor: pointer;
//           width: 28px; height: 28px; border-radius: 6px;
//           display: flex; align-items: center; justify-content: center;
//           font-size: 14px; transition: background 0.15s, transform 0.15s;
//         }
//         .hdr-btn:hover { background: rgba(206,223,231,0.18); color: #fff; }
//         .hdr-btn:active { transform: scale(0.88); }
//         .hdr-btn.reset-btn:hover .spin-icon { display: inline-block; animation: spinOnce 0.4s ease forwards; }
//         @keyframes spinOnce { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//       `}</style>

//       <div
//         className="purcurie-chat purcurie-chat-root"
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           right: "20px",
//           zIndex: 9999,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-end",
//         }}
//       >
//         {/* Chat Window */}
//         <div
//           className={`chat-window flex flex-col overflow-hidden ${visible ? "visible" : ""}`}
//           style={{
//             background: "#EAF0F4",
//             borderRadius: "20px",
//             boxShadow: "0 16px 48px rgba(29,44,52,0.15), 0 2px 8px rgba(29,44,52,0.08)",
//             border: "1px solid #CEDFE7",
//           }}
//         >
//           {/* Header */}
//           <div style={{
//             background: "#1D2C34", padding: "14px 18px",
//             display: "flex", alignItems: "center",
//             justifyContent: "space-between", flexShrink: 0,
//             borderRadius: "20px 20px 0 0",
//           }}>
//             <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//               <div style={{
//                 width: "34px", height: "34px", borderRadius: "50%",
//                 background: "#fff", display: "flex",
//                 alignItems: "center", justifyContent: "center",
//                 overflow: "hidden", // Ensures the image stays round
//                 flexShrink: 0,
//             }}>
//             {/* Replace '/logo.png' with your actual logo path */}
//             <img 
//                 src="https://cdn.shopify.com/s/files/1/0984/6843/0146/files/PUR_CURIE_1_9f44e2e8-b95a-4b61-a256-70fabf2012f6.jpg?v=1773774612" // Ensure this path is correct
//                 alt="Purcurie Logo" 
//                 style={{ 
//                 width: "100%", 
//                 height: "100%", 
//                 objectFit: "cover" // Changed from 'contain' to 'cover' to fill the area
//                 }}
//             />
//             </div>
//            {/* Header text container */}
//             <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
//             <div style={{ 
//                 color: "#EAF0F4", 
//                 fontWeight: 700, 
//                 fontSize: "14px", 
//                 letterSpacing: "0.02em",
//                 lineHeight: "1.2" // Tightens the space around the text
//             }}>
//                 Purcurie Support
//             </div>
//             <div style={{ 
//                 display: "flex", 
//                 alignItems: "center", 
//                 gap: "5px", 
//                 marginTop: "-2px" // Negative margin pulls it upward
//             }}>
//                 <div style={{
//                 width: "6px", height: "6px", borderRadius: "50%",
//                 background: "#4ade80", boxShadow: "0 0 6px #4ade80",
//                 }} />
//                 <span style={{ color: "#CEDFE7", fontSize: "11px", fontWeight: 500 }}>
//                 Online now
//                 </span>
//             </div>
//             </div>
//             </div>
//     <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
//     {history.length > 0 && (
//         <button className="hdr-btn" onClick={goBackToPrevious} title="Go to last chat"
//         style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", height: "auto", padding: "4px 6px" }}>
//         <span style={{ fontSize: "15px" }}>↩️</span>
//         <span style={{ fontSize: "12px", color: "#CEDFE7", lineHeight: 1 }}>Last</span>
//         </button>
//     )}
//     <button className="hdr-btn" onClick={startNewChat} title="Start new chat"
//         style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", height: "auto", padding: "4px 6px" }}>
//         <span style={{ fontSize: "15px" }}>➕</span>
//         <span style={{ fontSize: "12px", color: "#CEDFE7", lineHeight: 1 }}>New</span>
//     </button>
//     <button className="hdr-btn reset-btn" onClick={resetAll} title="Clear all & reset"
//         style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", height: "auto", padding: "4px 6px" }}>
//         <span className="spin-icon" style={{ fontSize: "15px" }}>🔄</span>
//         <span style={{ fontSize: "12px", color: "#CEDFE7", lineHeight: 1 }}>Reset</span>
//     </button>
//     <button className="hdr-btn" onClick={() => setOpen(false)} title="Close"
//     style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", height: "auto", padding: "4px 6px" }}>
//     <span style={{ fontSize: "15px", fontWeight: 600, color: "#CEDFE7" }}>✕</span>
//     <span style={{ fontSize: "12px", color: "#CEDFE7", lineHeight: 1 }}>Close</span>
//   </button>
//     </div>
//             </div>

//           {/* Messages */}
//           <div
//             className="purcurie-scrollbar"
//             style={{
//               flex: 1, overflowY: "auto", padding: "16px",
//               display: "flex", flexDirection: "column",
//               gap: "10px", background: "#EAF0F4",
//             }}
//           >
//             {messages.map((m, i) => (
//               <div key={i} className="msg-bubble" style={{
//                 display: "flex",
//                 justifyContent: m.role === "user" ? "flex-end" : "flex-start",
//               }}>
//               <div style={{
//                 maxWidth: "85%", // Made slightly wider for long links
//                 padding: "10px 14px",
//                 borderRadius: m.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
//                 fontSize: "13.5px", lineHeight: "1.5", fontWeight: 400,
//                 color: m.role === "user" ? "#EAF0F4" : "#1D2C34",
//                 background: m.role === "user" ? "#1D2C34" : "#ffffff",
//                 boxShadow: m.role === "user" ? "none" : "0 1px 4px rgba(29,44,52,0.08)",
//                 border: m.role === "user" ? "none" : "1px solid #CEDFE7",
//                 whiteSpace: "pre-wrap",
//                 wordBreak: "break-word", // ✅ Keeps text inside the bubble
//                 overflowWrap: "anywhere", // ✅ Forces long URLs to wrap
//                 }}>
//                 <>
//                 {m.content.includes("Verified Customer Account") && (
//                     <div style={{ 
//                     fontSize: '10px', 
//                     background: '#4ade80', 
//                     color: '#1D2C34', 
//                     padding: '2px 6px', 
//                     borderRadius: '4px',
//                     fontWeight: 'bold',
//                     marginBottom: '6px',
//                     display: 'inline-block',
//                     letterSpacing: '0.05em',
//                     whiteSpace: 'nowrap' // ✅ This keeps it on one line
// }}>
//                     SECURE VERIFIED
//                     </div>
//                 )}
//                 {renderMessageContent(m.content)}
//                 </>
//                 </div>
//                 </div>
//             ))}

//             {loading && (
//               <div style={{ display: "flex", justifyContent: "flex-start" }}>
//                 <div style={{
//                   background: "#ffffff", border: "1px solid #CEDFE7",
//                   borderRadius: "18px 18px 18px 4px", padding: "12px 16px",
//                   display: "flex", gap: "4px", alignItems: "center",
//                   boxShadow: "0 1px 4px rgba(29,44,52,0.08)",
//                 }}>
//                   <div className="typing-dot" />
//                   <div className="typing-dot" />
//                   <div className="typing-dot" />
//                 </div>
//               </div>
//             )}
//             <div ref={bottomRef} />
//           </div>

//           {/* Quick Suggestions */}
//           {messages.length === 1 && (
//             <div style={{
//               padding: "0 16px 10px", display: "flex",
//               gap: "6px", flexWrap: "wrap", background: "#EAF0F4",
//             }}>
//               {suggestions.map((s) => (
//                 <button
//                   key={s}
//                   className="suggestion-chip"
//                   onClick={() => sendMessage(s)}
//                   style={{
//                     background: "#ffffff", border: "1px solid #CEDFE7",
//                     color: "#1D2C34", borderRadius: "99px",
//                     padding: "5px 12px", fontSize: "12px",
//                     fontWeight: 500, cursor: "pointer",
//                     fontFamily: "Satoshi, sans-serif",
//                   }}
//                 >{s}</button>
//               ))}
//             </div>
//           )}

//           {/* Input */}
//           <div style={{
//             padding: "12px 14px", borderTop: "1px solid #CEDFE7",
//             background: "#ffffff", display: "flex",
//             gap: "8px", alignItems: "center", flexShrink: 0,
//             borderRadius: "0 0 20px 20px",
//           }}>
//             <input
//               style={{
//                 flex: 1, border: "1.5px solid #CEDFE7",
//                 borderRadius: "99px", padding: "9px 16px",
//                 fontSize: "13.5px", outline: "none",
//                 color: "#1D2C34", background: "#EAF0F4",
//                 fontFamily: "Satoshi, sans-serif", transition: "border-color 0.2s",
//               }}
//               placeholder="Ask or enter order # e.g. 1053..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               onFocus={e => (e.currentTarget.style.borderColor = "#1D2C34")}
//               onBlur={e => (e.currentTarget.style.borderColor = "#CEDFE7")}
//               disabled={loading}
//             />
//             <button
//               className="send-btn"
//               onClick={() => sendMessage()}
//               disabled={loading}
//               style={{
//                 background: "#1D2C34", border: "none",
//                 color: "#EAF0F4", width: "38px", height: "38px",
//                 borderRadius: "50%", cursor: loading ? "not-allowed" : "pointer",
//                 fontSize: "15px", display: "flex",
//                 alignItems: "center", justifyContent: "center",
//                 flexShrink: 0, opacity: loading ? 0.5 : 1,
//               }}
//             >➤</button>
//           </div>
//         </div>

//         {/* 🔔 Notification Bubble */}
//         {showNotif && !open && (
//           <div
//             className="notif-bubble"
//             style={{
//               position: "absolute",
//               bottom: "72px",
//               right: "0",
//               background: "#1D2C34",
//               color: "#EAF0F4",
//               borderRadius: "16px 16px 4px 16px",
//               padding: "10px 14px",
//               fontSize: "13px",
//               fontWeight: 500,
//               maxWidth: "220px",
//               minWidth: "180px",
//               whiteSpace: "normal",
//               wordBreak: "keep-all",
//               lineHeight: "1.4",
//               boxShadow: "0 8px 24px rgba(29,44,52,0.2)",
//               cursor: "pointer",
//               display: "flex",
//               alignItems: "flex-start",
//               gap: "8px",
//             }}
//             onClick={() => { setOpen(true); setShowNotif(false); }}
//           >
//             <span style={{ flex: 1 }}>👋 How can I help you today?</span>
//             <button
//               onClick={dismissNotif}
//               style={{
//                 background: "none", border: "none",
//                 color: "#CEDFE7", cursor: "pointer",
//                 fontSize: "12px", padding: "0",
//                 lineHeight: 1, flexShrink: 0, marginTop: "1px",
//               }}
//             >✕</button>
//           </div>
//         )}

//         {/* Toggle Button */}
//         <div style={{ position: "relative" }}>
//           {showNotif && !open && (
//             <div
//               className="notif-badge"
//               style={{
//                 position: "absolute", top: "-4px", right: "-4px",
//                 width: "16px", height: "16px",
//                 background: "#ef4444", borderRadius: "50%",
//                 border: "2px solid white", zIndex: 1,
//               }}
//             />
//           )}
//           <button
//             className="toggle-btn"
//            onClick={() => {
//             const nextState = !open;
//             setOpen(nextState);
//             localStorage.setItem("purcurie_chat_open", nextState.toString());
//             }}
//             style={{
//               background: "#1D2C34", border: "none",
//               color: "#EAF0F4", width: "56px", height: "56px",
//               borderRadius: "50%", cursor: "pointer",
//               fontSize: "22px", display: "flex",
//               alignItems: "center", justifyContent: "center",
//               boxShadow: "0 4px 20px rgba(29,44,52,0.2)",
//             }}
//           >
//             {open ? "✕" : "💬"}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";
import { useState, useRef, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { supabase, ChatMessage } from "@/lib/supabase";

type Message = { role: "user" | "assistant"; content: string };
type ChatMode = "bot" | "waiting" | "live" | "closed";

const WAIT_SECONDS = 120; // 2 minutes

export default function PurcurieChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
      {
      role: "assistant",
      content:
        "Hi there! 👋\nI'm Purcurie's support.\nHow can I help you today?",
    },
  ]);
  const [history, setHistory] = useState<Message[][]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [notifDismissed, setNotifDismissed] = useState(false);

  // Live chat state
  const [chatMode, setChatMode] = useState<ChatMode>("bot");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [liveMessages, setLiveMessages] = useState<ChatMessage[]>([]);
  const [liveInput, setLiveInput] = useState("");
  const [waitSeconds, setWaitSeconds] = useState(WAIT_SECONDS);
  const [customerName, setCustomerName] = useState("");
  const [customerQuery, setCustomerQuery] = useState("");
  const [showNameForm, setShowNameForm] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const waitTimerRef = useRef<NodeJS.Timeout | null>(null);
  const liveFileInputRef = useRef<HTMLInputElement>(null);
  const [liveUploading, setLiveUploading] = useState(false);
  const { items: cartItems } = useCart();

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, liveMessages]);

  useEffect(() => {
    if (open) { setTimeout(() => setVisible(true), 10); setShowNotif(false); }
    else { setVisible(false); }
  }, [open]);

  useEffect(() => {
    if (notifDismissed) return;
    const timer = setTimeout(() => { if (!open) setShowNotif(true); }, 15000);
    return () => clearTimeout(timer);
  }, [notifDismissed, open]);

  useEffect(() => {
    const savedMessages = localStorage.getItem("purcurie_history");
    const savedOpenStatus = localStorage.getItem("purcurie_chat_open");
    const savedAllHistory = localStorage.getItem("purcurie_history_all");
    const savedSession = localStorage.getItem("purcurie_live_session");
    const savedMode = localStorage.getItem("purcurie_chat_mode") as ChatMode | null;

    if (savedMessages) setMessages(JSON.parse(savedMessages));
    if (savedAllHistory) setHistory(JSON.parse(savedAllHistory));
    // if (savedOpenStatus === "true") setOpen(true);
    if (savedSession) setSessionId(savedSession);
    if (savedMode && savedMode !== "waiting") setChatMode(savedMode);
  }, []);

  useEffect(() => {
    if (messages.length > 1) localStorage.setItem("purcurie_history", JSON.stringify(messages));
    localStorage.setItem("purcurie_chat_open", open.toString());
  }, [messages, open]);

  // ✅ Subscribe to realtime messages when session is active
  useEffect(() => {
    if (!sessionId || chatMode === "bot") return;

    // Load existing messages
    supabase
      .from("chat_messages")
      .select("*")
      .eq("session_id", sessionId)
      .order("created_at", { ascending: true })
      .then(({ data }) => { if (data) setLiveMessages(data as ChatMessage[]); });

    // Subscribe to new messages
    const channel = supabase
      .channel(`session-${sessionId}`)
      .on("postgres_changes", {
        event: "INSERT",
        schema: "public",
        table: "chat_messages",
        filter: `session_id=eq.${sessionId}`,
      }, (payload) => {
        setLiveMessages((prev) => [...prev, payload.new as ChatMessage]);
      })
      .on("postgres_changes", {
        event: "UPDATE",
        schema: "public",
        table: "chat_sessions",
        filter: `id=eq.${sessionId}`,
      }, (payload) => {
        const newStatus = payload.new.status;
        if (newStatus === "active") {
          setChatMode("active" as ChatMode);
          localStorage.setItem("purcurie_chat_mode", "active");
          if (waitTimerRef.current) clearInterval(waitTimerRef.current);
        }
        if (newStatus === "closed") {
          setChatMode("closed");
          localStorage.setItem("purcurie_chat_mode", "closed");
        }
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [sessionId, chatMode]);

  // ✅ Wait timer countdown
  useEffect(() => {
    if (chatMode !== "waiting") return;
    setWaitSeconds(WAIT_SECONDS);
    waitTimerRef.current = setInterval(() => {
      setWaitSeconds((s) => {
        if (s <= 1) {
          clearInterval(waitTimerRef.current!);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => { if (waitTimerRef.current) clearInterval(waitTimerRef.current); };
  }, [chatMode]);

  const formatWait = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const startLiveChat = async () => {
    if (!customerQuery.trim()) return;
    setShowNameForm(false);

    const res = await fetch("/api/live-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        initial_query: customerQuery,
        customer_name: customerName || "Customer",
      }),
    });
    const data = await res.json();
    if (data.session) {
      setSessionId(data.session.id);
      localStorage.setItem("purcurie_live_session", data.session.id);
      localStorage.setItem("purcurie_chat_mode", "waiting");
      setChatMode("waiting");
    }
  };

  const handleLiveFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !sessionId) return;
    setLiveUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${sessionId}/${Date.now()}.${ext}`;
    const { data, error } = await supabase.storage.from("chat-media").upload(path, file);
    if (error) { console.error(error); setLiveUploading(false); return; }
    const { data: { publicUrl } } = supabase.storage.from("chat-media").getPublicUrl(data.path);
    const mediaType = file.type.startsWith("video") ? "video" : "image";
    await supabase.from("chat_messages").insert({
      session_id: sessionId,
      role: "customer",
      content: "",
      media_url: publicUrl,
      media_type: mediaType,
    });
    setLiveUploading(false);
    if (liveFileInputRef.current) liveFileInputRef.current.value = "";
  };

  const sendLiveMessage = async () => {
    if (!liveInput.trim() || !sessionId) return;
    const content = liveInput.trim();
    setLiveInput("");
    await supabase.from("chat_messages").insert({
      session_id: sessionId,
      role: "customer",
      content,
    });
  };

  const endLiveChat = async () => {
    if (sessionId) {
      await fetch("/api/live-chat", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, status: "closed" }),
      });
    }
    setChatMode("bot");
    setSessionId(null);
    setLiveMessages([]);
    localStorage.removeItem("purcurie_live_session");
    localStorage.removeItem("purcurie_chat_mode");
  };

  const dismissNotif = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowNotif(false);
    setNotifDismissed(true);
  };

  const renderMessageContent = (content: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return content.split(urlRegex).map((part, i) => {
      if (part.match(urlRegex)) {
        return <a key={i} href={part} target="_blank" rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "underline", wordBreak: "break-all" }}>{part}</a>;
      }
      return part;
    });
  };

  const sendMessage = async (overrideInput?: string) => {
    const text = overrideInput ?? input;

    if (text.includes("Talk to Human") || text === "talk_to_human") {
      setShowNameForm(true);
      setCustomerQuery(text === "talk_to_human" ? "" : "");
      return;
    }

    if (text.includes("WhatsApp")) {
      window.open("https://wa.me/919769777006", "_blank");
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
        body: JSON.stringify({ messages: updated, cartItems: cartItems || [] }),
      });
      const data = await res.json();
      setMessages([...updated, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...updated, { role: "assistant", content: "Sorry, something went wrong. Please try again!" }]);
    } finally {
      setLoading(false);
    }
  };

  const startNewChat = () => {
    if (messages.length > 1) {
      const updatedHistory = [...history, messages];
      setHistory(updatedHistory);
      localStorage.setItem("purcurie_history_all", JSON.stringify(updatedHistory));
    }
    const initialMsg = [{ role: "assistant" as const, content: "Hi there! 👋\nI'm Purcurie's support.\nHow can I help you today?" }];
    setMessages(initialMsg);
    localStorage.setItem("purcurie_history", JSON.stringify(initialMsg));
  };

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
    localStorage.removeItem("purcurie_live_session");
    localStorage.removeItem("purcurie_chat_mode");
    setMessages([{ role: "assistant", content: "Hi there! 👋\nI'm Purcurie's support.\nHow can I help you today?" }]);
    setHistory([]);
    setInput("");
    setLoading(false);
    setChatMode("bot");
    setSessionId(null);
    setLiveMessages([]);
  };

  const suggestions = ["Track Order 📦", "Return/Refund ↩️", "Talk to Human 👤", "WhatsApp Us 💬"];

  // ── Render: Name/Query form ──
  const renderNameForm = () => (
    <div style={{ flex: 1, padding: "20px 16px", display: "flex", flexDirection: "column", gap: "12px", background: "#EAF0F4", overflowY: "auto" }}>
      <div style={{ textAlign: "center", marginBottom: "4px" }}>
        <div style={{ fontSize: "28px", marginBottom: "6px" }}>👤</div>
        <div style={{ fontSize: "14px", fontWeight: 700, color: "#1D2C34" }}>Connect with a Human</div>
        <div style={{ fontSize: "12px", color: "#7a9bab", marginTop: "4px" }}>Typical wait: ~2 minutes</div>
      </div>
      <input
        placeholder="Your name (optional)"
        value={customerName}
        onChange={e => setCustomerName(e.target.value)}
        style={{ border: "1.5px solid #CEDFE7", borderRadius: "10px", padding: "10px 14px", fontSize: "13px", outline: "none", background: "#fff", color: "#1D2C34", fontFamily: "Satoshi, sans-serif" }}
      />
      <textarea
        placeholder="Describe your issue... *"
        value={customerQuery}
        onChange={e => setCustomerQuery(e.target.value)}
        rows={3}
        style={{ border: "1.5px solid #CEDFE7", borderRadius: "10px", padding: "10px 14px", fontSize: "13px", outline: "none", resize: "none", background: "#fff", color: "#1D2C34", fontFamily: "Satoshi, sans-serif" }}
      />
      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={() => setShowNameForm(false)}
          style={{ flex: 1, background: "#EAF0F4", border: "1.5px solid #CEDFE7", borderRadius: "10px", padding: "10px", fontSize: "13px", fontWeight: 600, cursor: "pointer", color: "#1D2C34", fontFamily: "Satoshi, sans-serif" }}>
          Cancel
        </button>
        <button onClick={startLiveChat} disabled={!customerQuery.trim()}
          style={{ flex: 2, background: customerQuery.trim() ? "#1D2C34" : "#CEDFE7", border: "none", borderRadius: "10px", padding: "10px", fontSize: "13px", fontWeight: 600, cursor: customerQuery.trim() ? "pointer" : "not-allowed", color: customerQuery.trim() ? "#EAF0F4" : "#7a9bab", fontFamily: "Satoshi, sans-serif", transition: "background 0.2s" }}>
          Connect Me →
        </button>
      </div>
    </div>
  );

  // ── Render: Waiting screen ──
  const renderWaiting = () => (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px", padding: "24px", background: "#EAF0F4", textAlign: "center" }}>
      {/* Animated dots */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "4px" }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: "10px", height: "10px", borderRadius: "50%", background: "#1D2C34",
            animation: `typingBounce 1.2s infinite ease-in-out`,
            animationDelay: `${i * 0.2}s`, opacity: 0.5,
          }} />
        ))}
      </div>
      <div>
        <div style={{ fontSize: "15px", fontWeight: 700, color: "#1D2C34", marginBottom: "6px" }}>
          Connecting you to our team...
        </div>
        <div style={{ fontSize: "12px", color: "#7a9bab" }}>Please hold on, someone will be with you shortly</div>
      </div>
      {/* Timer */}
      <div style={{
        background: "#1D2C34", color: "#EAF0F4", borderRadius: "14px",
        padding: "10px 24px", fontSize: "22px", fontWeight: 700, letterSpacing: "0.05em",
        fontVariantNumeric: "tabular-nums",
      }}>
        {formatWait(waitSeconds)}
      </div>
      <div style={{ fontSize: "11px", color: "#7a9bab" }}>
        {waitSeconds === 0 ? "Still working on it, thank you for your patience!" : "Estimated wait time"}
      </div>
      <div style={{ background: "#fff", border: "1px solid #CEDFE7", borderRadius: "12px", padding: "12px 16px", fontSize: "12px", color: "#1D2C34", width: "100%", textAlign: "left" }}>
        <span style={{ fontWeight: 600 }}>Your query: </span>{customerQuery}
      </div>
      <button onClick={() => { endLiveChat(); }}
        style={{ background: "none", border: "1.5px solid #CEDFE7", borderRadius: "99px", padding: "7px 20px", fontSize: "12px", cursor: "pointer", color: "#7a9bab", fontFamily: "Satoshi, sans-serif" }}>
        Cancel & go back
      </button>
    </div>
  );

  // ── Render: Live chat ──
  const renderLiveChat = () => (
    <>
      <div className="purcurie-scrollbar" style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "10px", background: "#EAF0F4" }}>
        <div style={{ textAlign: "center", marginBottom: "4px" }}>
          <span style={{ fontSize: "11px", background: "#4ade8022", color: "#16a34a", borderRadius: "99px", padding: "3px 12px", fontWeight: 600 }}>
            ● Live — connected to support
          </span>
        </div>
        {liveMessages.map((m) => (
          <div key={m.id} className="msg-bubble" style={{ display: "flex", justifyContent: m.role === "customer" ? "flex-end" : "flex-start" }}>
            <div style={{
              maxWidth: "85%", padding: "10px 14px",
              borderRadius: m.role === "customer" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
              fontSize: "13.5px", lineHeight: "1.5",
              color: m.role === "customer" ? "#EAF0F4" : "#1D2C34",
              background: m.role === "customer" ? "#1D2C34" : "#ffffff",
              border: m.role === "customer" ? "none" : "1px solid #CEDFE7",
              boxShadow: m.role === "customer" ? "none" : "0 1px 4px rgba(29,44,52,0.08)",
              whiteSpace: "pre-wrap", wordBreak: "break-word",
            }}>
              {m.role === "admin" && (
                <div style={{ fontSize: "10px", color: "#7a9bab", marginBottom: "4px", fontWeight: 600 }}>SUPPORT AGENT</div>
              )}
              {m.content}
              {m.media_url && m.media_type === "video" && (
                <video src={m.media_url} controls style={{ maxWidth: "100%", borderRadius: "8px", marginTop: m.content ? "8px" : "0", display: "block" }} />
              )}
              {m.media_url && m.media_type === "image" && (
                <img src={m.media_url} alt="media" style={{ maxWidth: "100%", borderRadius: "8px", marginTop: m.content ? "8px" : "0", display: "block", cursor: "pointer" }} onClick={() => window.open(m.media_url!, "_blank")} />
                )}
            </div>
          </div>
        ))}
        {liveMessages.length === 0 && (
          <div style={{ textAlign: "center", color: "#7a9bab", fontSize: "12px", marginTop: "20px" }}>
            Agent joined! Say hello 👋
          </div>
        )}
        <div ref={bottomRef} />
      </div>
     <div style={{ padding: "12px 14px", borderTop: "1px solid #CEDFE7", background: "#ffffff", display: "flex", gap: "8px", alignItems: "center", flexShrink: 0, borderRadius: "0 0 20px 20px" }}>
        <input ref={liveFileInputRef} type="file" accept="image/*,video/*" onChange={handleLiveFileUpload} style={{ display: "none" }} />
        <button onClick={() => liveFileInputRef.current?.click()} disabled={liveUploading}
          style={{ background: "none", border: "1.5px solid #CEDFE7", color: liveUploading ? "#CEDFE7" : "#1D2C34", borderRadius: "50%", width: "36px", height: "36px", cursor: liveUploading ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0 }}>
          {liveUploading ? "⏳" : "📎"}
        </button>
        <input
          style={{ flex: 1, border: "1.5px solid #CEDFE7", borderRadius: "99px", padding: "9px 16px", fontSize: "13.5px", outline: "none", color: "#1D2C34", background: "#EAF0F4", fontFamily: "Satoshi, sans-serif", transition: "border-color 0.2s" }}
          placeholder="Type your message..."
          value={liveInput}
          onChange={e => setLiveInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendLiveMessage()}
          onFocus={e => (e.currentTarget.style.borderColor = "#1D2C34")}
          onBlur={e => (e.currentTarget.style.borderColor = "#CEDFE7")}
        />
        <button className="send-btn" onClick={sendLiveMessage}
          style={{ background: "#1D2C34", border: "none", color: "#EAF0F4", width: "38px", height: "38px", borderRadius: "50%", cursor: "pointer", fontSize: "15px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>➤</button>
      </div>
    </>
  );

  // ── Render: Closed ──
  const renderClosed = () => (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", padding: "24px", background: "#EAF0F4", textAlign: "center" }}>
      <div style={{ fontSize: "32px" }}>✅</div>
      <div style={{ fontSize: "15px", fontWeight: 700, color: "#1D2C34" }}>Chat ended</div>
      <div style={{ fontSize: "12px", color: "#7a9bab" }}>Thanks for reaching out. Hope we helped!</div>
      <button onClick={resetAll}
        style={{ background: "#1D2C34", border: "none", color: "#EAF0F4", borderRadius: "99px", padding: "10px 24px", fontSize: "13px", fontWeight: 600, cursor: "pointer", fontFamily: "Satoshi, sans-serif", marginTop: "8px" }}>
        Back to Assistant
      </button>
    </div>
  );

  const isLiveMode = chatMode !== "bot";
  const liveHeaderLabel = chatMode === "waiting" ? "Waiting..." : chatMode === "active" ? "Live Support" : "Chat Ended";
  const liveHeaderColor = chatMode === "active" ? "#4ade80" : chatMode === "waiting" ? "#facc15" : "#CEDFE7";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=support_agent');
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap');

        .purcurie-chat * { font-family: 'Satoshi', sans-serif; box-sizing: border-box; }

        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined'; font-weight: normal; font-style: normal;
          font-size: 28px; line-height: 1; letter-spacing: normal; text-transform: none;
          display: inline-block; white-space: nowrap; direction: ltr;
          -webkit-font-smoothing: antialiased;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        .chat-window {
          transition: opacity 0.25s ease, transform 0.25s ease;
          opacity: 0; transform: translateY(12px) scale(0.97);
          pointer-events: none; position: absolute;
          bottom: 68px; right: 0; width: 360px; height: 520px;
        }
        .chat-window.visible { opacity: 1; transform: translateY(0) scale(1); pointer-events: all; }

        @media (max-width: 480px) {
          .chat-window { width: calc(100vw - 24px); height: calc(100dvh - 110px); right: 0; left: auto; bottom: 68px; }
          .purcurie-chat-root { right: 12px !important; bottom: 16px !important; }
        }

        .purcurie-scrollbar::-webkit-scrollbar { width: 4px; }
        .purcurie-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .purcurie-scrollbar::-webkit-scrollbar-thumb { background: #CEDFE7; border-radius: 99px; }

        .typing-dot { width: 6px; height: 6px; background: #1D2C34; border-radius: 50%; animation: typingBounce 1.2s infinite ease-in-out; opacity: 0.5; }
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
        @keyframes msgFadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

        .notif-bubble { animation: notifPop 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        @keyframes notifPop { from { opacity: 0; transform: translateY(8px) scale(0.9); } to { opacity: 1; transform: translateY(0) scale(1); } }

        .notif-badge { animation: badgePulse 2s infinite; }
        @keyframes badgePulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }

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

      <div className="purcurie-chat purcurie-chat-root"
        style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>

        {/* Chat Window */}
        <div className={`chat-window flex flex-col overflow-hidden ${visible ? "visible" : ""}`}
          style={{ background: "#EAF0F4", borderRadius: "20px", boxShadow: "0 16px 48px rgba(29,44,52,0.15), 0 2px 8px rgba(29,44,52,0.08)", border: "1px solid #CEDFE7" }}>

          {/* Header */}
          <div style={{ background: "#1D2C34", padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0, borderRadius: "20px 20px 0 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ 
                width: "34px", 
                height: "34px", 
                borderRadius: "50%", 
                overflow: "hidden", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                flexShrink: 0 
                }}>
                <img 
                    src="https://cdn.shopify.com/s/files/1/0984/6843/0146/files/PUR_CURIE_1_9f44e2e8-b95a-4b61-a256-70fabf2012f6.jpg?v=1773774612" 
                    alt="Logo" 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
</div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ 
                    color: "#EAF0F4", 
                    fontWeight: 700, 
                    fontSize: "14px", 
                    letterSpacing: "0.02em", 
                    lineHeight: "1.2" 
                }}>
                    {isLiveMode ? liveHeaderLabel : "Purcurie Support"}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "-2px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: liveHeaderColor, boxShadow: `0 0 6px ${liveHeaderColor}` }} />
                  <span style={{ color: "#CEDFE7", fontSize: "11px", fontWeight: 500 }}>
                    {isLiveMode ? (chatMode === "waiting" ? "In queue" : chatMode === "active" ? "Connected" : "Ended") : "Online now"}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {!isLiveMode && history.length > 0 && (
                <button className="hdr-btn" onClick={goBackToPrevious} title="Go to last chat"
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", height: "auto", padding: "4px 6px" }}>
                  <span style={{ fontSize: "15px" }}>↩️</span>
                  <span style={{ fontSize: "12px", color: "#CEDFE7", lineHeight: 1 }}>Last</span>
                </button>
              )}
              {!isLiveMode && (
                <button className="hdr-btn" onClick={startNewChat} title="Start new chat"
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", height: "auto", padding: "4px 6px" }}>
                  <span style={{ fontSize: "15px" }}>➕</span>
                  <span style={{ fontSize: "12px", color: "#CEDFE7", lineHeight: 1 }}>New</span>
                </button>
              )}
              {isLiveMode && chatMode !== "closed" && (
                <button className="hdr-btn" onClick={endLiveChat} title="End live chat"
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", height: "auto", padding: "4px 6px" }}>
                  <span style={{ fontSize: "15px" }}>🚫</span>
                  <span style={{ fontSize: "12px", color: "#CEDFE7", lineHeight: 1 }}>End</span>
                </button>
              )}
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

          {/* Body — switch by mode */}
          {showNameForm ? renderNameForm() :
            chatMode === "waiting" ? renderWaiting() :
            chatMode === "active" ? renderLiveChat() :
            chatMode === "closed" ? renderClosed() : (
            <>
              {/* Bot messages */}
              <div className="purcurie-scrollbar"
                style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "10px", background: "#EAF0F4" }}>
                {messages.map((m, i) => (
                  <div key={i} className="msg-bubble" style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                    <div style={{
                      maxWidth: "85%", padding: "10px 14px",
                      borderRadius: m.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                      fontSize: "13.5px", lineHeight: "1.5", fontWeight: 400,
                      color: m.role === "user" ? "#EAF0F4" : "#1D2C34",
                      background: m.role === "user" ? "#1D2C34" : "#ffffff",
                      boxShadow: m.role === "user" ? "none" : "0 1px 4px rgba(29,44,52,0.08)",
                      border: m.role === "user" ? "none" : "1px solid #CEDFE7",
                      whiteSpace: "pre-wrap", wordBreak: "break-word", overflowWrap: "anywhere",
                    }}>
                      <>
                        {m.content.includes("Verified Customer Account") && (
                          <div style={{ fontSize: '10px', background: '#4ade80', color: '#1D2C34', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold', marginBottom: '6px', display: 'inline-block', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
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
                    <div style={{ background: "#ffffff", border: "1px solid #CEDFE7", borderRadius: "18px 18px 18px 4px", padding: "12px 16px", display: "flex", gap: "4px", alignItems: "center", boxShadow: "0 1px 4px rgba(29,44,52,0.08)" }}>
                      <div className="typing-dot" /><div className="typing-dot" /><div className="typing-dot" />
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {messages.length === 1 && (
                <div style={{ padding: "0 16px 10px", display: "flex", gap: "6px", flexWrap: "wrap", background: "#EAF0F4" }}>
                  {suggestions.map((s) => (
                    <button key={s} className="suggestion-chip" onClick={() => sendMessage(s)}
                      style={{ background: "#ffffff", border: "1px solid #CEDFE7", color: "#1D2C34", borderRadius: "99px", padding: "5px 12px", fontSize: "12px", fontWeight: 500, cursor: "pointer", fontFamily: "Satoshi, sans-serif" }}>
                      {s}
                    </button>
                  ))}
                </div>
              )}

              <div style={{ padding: "12px 14px", borderTop: "1px solid #CEDFE7", background: "#ffffff", display: "flex", gap: "8px", alignItems: "center", flexShrink: 0, borderRadius: "0 0 20px 20px" }}>
                <input
                  style={{ flex: 1, border: "1.5px solid #CEDFE7", borderRadius: "99px", padding: "9px 16px", fontSize: "13.5px", outline: "none", color: "#1D2C34", background: "#EAF0F4", fontFamily: "Satoshi, sans-serif", transition: "border-color 0.2s" }}
                  placeholder="Ask or enter order # e.g. 1053..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && sendMessage()}
                  onFocus={e => (e.currentTarget.style.borderColor = "#1D2C34")}
                  onBlur={e => (e.currentTarget.style.borderColor = "#CEDFE7")}
                  disabled={loading}
                />
                <button className="send-btn" onClick={() => sendMessage()} disabled={loading}
                  style={{ background: "#1D2C34", border: "none", color: "#EAF0F4", width: "38px", height: "38px", borderRadius: "50%", cursor: loading ? "not-allowed" : "pointer", fontSize: "15px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, opacity: loading ? 0.5 : 1 }}>
                  ➤
                </button>
              </div>
            </>
          )}
        </div>

        {/* Notification Bubble */}
        {showNotif && !open && (
          <div className="notif-bubble"
            style={{ position: "absolute", bottom: "72px", right: "0", background: "#1D2C34", color: "#EAF0F4", borderRadius: "16px 16px 4px 16px", padding: "10px 14px", fontSize: "13px", fontWeight: 500, maxWidth: "220px", minWidth: "180px", lineHeight: "1.4", boxShadow: "0 8px 24px rgba(29,44,52,0.2)", cursor: "pointer", display: "flex", alignItems: "flex-start", gap: "8px" }}
            onClick={() => { setOpen(true); setShowNotif(false); }}>
            <span style={{ flex: 1 }}>👋 How can I help you today?</span>
            <button onClick={dismissNotif} style={{ background: "none", border: "none", color: "#CEDFE7", cursor: "pointer", fontSize: "12px", padding: "0", lineHeight: 1, flexShrink: 0, marginTop: "1px" }}>✕</button>
          </div>
        )}

        {/* Toggle Button */}
        <div style={{ position: "relative" }}>
          {showNotif && !open && (
            <div className="notif-badge" style={{ position: "absolute", top: "-4px", right: "-4px", width: "16px", height: "16px", background: "#ef4444", borderRadius: "50%", border: "2px solid white", zIndex: 1 }} />
          )}
          <button className="toggle-btn"
            onClick={() => { const n = !open; setOpen(n); localStorage.setItem("purcurie_chat_open", n.toString()); }}
            style={{ background: "#1D2C34", border: "none", color: "#EAF0F4", width: "56px", height: "56px", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(29,44,52,0.2)" }}>
            {open
              ? <span style={{ fontSize: "20px", fontWeight: 600, lineHeight: 1 }}>✕</span>
              : <span className="material-symbols-outlined" style={{ color: "#EAF0F4", fontSize: "28px" }}>support_agent</span>
            }
          </button>
        </div>
      </div>
    </>
  );
}