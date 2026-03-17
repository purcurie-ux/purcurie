"use client";
import { useState, useEffect, useRef } from "react";
import { supabase, ChatSession, ChatMessage } from "@/lib/supabase";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "";

export default function AdminLiveChat() {
  const [authed, setAuthed] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState(false);

  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSession, setActiveSession] = useState<ChatSession | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [replyInput, setReplyInput] = useState("");
  const [filter, setFilter] = useState<"all" | "waiting" | "active" | "closed">("waiting");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Search
  const [chatSearch, setChatSearch] = useState("");
  const [msgSearchOpen, setMsgSearchOpen] = useState(false);
  const [msgSearch, setMsgSearch] = useState("");
  const [globalSearch, setGlobalSearch] = useState("");
  const [globalResults, setGlobalResults] = useState<Array<{ message: ChatMessage; session: ChatSession }>>([]);
  const [globalSearchOpen, setGlobalSearchOpen] = useState(false);
  const [globalSearching, setGlobalSearching] = useState(false);

  // Media
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("purcurie_admin_auth");
    if (saved === "true") setAuthed(true);
  }, []);

  useEffect(() => {
    if (!authed) return;
    fetchSessions();
    const channel = supabase
      .channel("admin-sessions")
      .on("postgres_changes", { event: "*", schema: "public", table: "chat_sessions" }, () => fetchSessions())
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [authed]);

  useEffect(() => {
    if (!activeSession) return;
    fetchMessages(activeSession.id);
    const channel = supabase
      .channel(`admin-messages-${activeSession.id}`)
      .on("postgres_changes", {
        event: "INSERT", schema: "public", table: "chat_messages",
        filter: `session_id=eq.${activeSession.id}`,
      }, (payload) => {
        setMessages(prev => [...prev, payload.new as ChatMessage]);
      })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [activeSession]);

  useEffect(() => {
    if (bottomRef.current) {
      const container = bottomRef.current.parentElement;
      if (container) container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  // Global search across ALL messages
  useEffect(() => {
    if (!globalSearch.trim()) { setGlobalResults([]); return; }
    const timer = setTimeout(async () => {
      setGlobalSearching(true);
      const { data: msgs } = await supabase
        .from("chat_messages")
        .select("*")
        .ilike("content", `%${globalSearch}%`)
        .order("created_at", { ascending: false })
        .limit(30);

      if (msgs && msgs.length > 0) {
        const sessionIds = [...new Set(msgs.map((m: ChatMessage) => m.session_id))];
        const { data: sess } = await supabase
          .from("chat_sessions")
          .select("*")
          .in("id", sessionIds);

        const sessionMap = new Map((sess || []).map((s: ChatSession) => [s.id, s]));
        setGlobalResults(msgs.map((m: ChatMessage) => ({
          message: m,
          session: sessionMap.get(m.session_id) as ChatSession,
        })).filter(r => r.session));
      } else {
        setGlobalResults([]);
      }
      setGlobalSearching(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [globalSearch]);

  const fetchSessions = async () => {
    const { data } = await supabase.from("chat_sessions").select("*").order("created_at", { ascending: false });
    if (data) setSessions(data as ChatSession[]);
  };

  const fetchMessages = async (sessionId: string) => {
    const { data } = await supabase.from("chat_messages").select("*").eq("session_id", sessionId).order("created_at", { ascending: true });
    if (data) setMessages(data as ChatMessage[]);
  };

  const acceptSession = async (session: ChatSession) => {
    await fetch("/api/live-chat", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session_id: session.id, status: "active" }),
    });
    setActiveSession({ ...session, status: "active" });
    fetchSessions();
  };

  const closeSession = async (sessionId: string) => {
    await fetch("/api/live-chat", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session_id: sessionId, status: "closed" }),
    });
    if (activeSession?.id === sessionId) setActiveSession(null);
    fetchSessions();
  };

  const sendReply = async (mediaUrl?: string, mediaType?: string) => {
    if (!activeSession) return;
    if (!replyInput.trim() && !mediaUrl) return;
    const content = replyInput.trim();
    setReplyInput("");
    await supabase.from("chat_messages").insert({
      session_id: activeSession.id,
      role: "admin",
      content: content || "",
      media_url: mediaUrl || null,
      media_type: mediaType || null,
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !activeSession) return;
    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${activeSession.id}/${Date.now()}.${ext}`;
    const { data, error } = await supabase.storage.from("chat-media").upload(path, file);
    if (error) { console.error(error); setUploading(false); return; }
    const { data: { publicUrl } } = supabase.storage.from("chat-media").getPublicUrl(data.path);
    const mediaType = file.type.startsWith("video") ? "video" : "image";
    await sendReply(publicUrl, mediaType);
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleLogin = () => {
    if (pwInput === ADMIN_PASSWORD) {
      setAuthed(true);
      localStorage.setItem("purcurie_admin_auth", "true");
    } else {
      setPwError(true);
      setTimeout(() => setPwError(false), 1500);
    }
  };

  const filteredSessions = sessions
    .filter(s => filter === "all" ? true : s.status === filter)
    .filter(s => {
      if (!chatSearch.trim()) return true;
      const q = chatSearch.toLowerCase();
      return (s.customer_name || "").toLowerCase().includes(q) || (s.initial_query || "").toLowerCase().includes(q);
    });

  const waitingCount = sessions.filter(s => s.status === "waiting").length;
  const activeCount = sessions.filter(s => s.status === "active").length;

  const formatTime = (iso: string) => new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const formatDate = (iso: string) => {
    const d = new Date(iso);
    if (d.toDateString() === new Date().toDateString()) return `Today ${formatTime(iso)}`;
    return d.toLocaleDateString([], { day: "numeric", month: "short" }) + " " + formatTime(iso);
  };

  const highlight = (text: string, query: string) => {
    if (!query.trim()) return <>{text}</>;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return <>{parts.map((p, i) => p.toLowerCase() === query.toLowerCase()
      ? <mark key={i} style={{ background: "#facc15", color: "#1D2C34", borderRadius: "3px", padding: "0 2px" }}>{p}</mark>
      : p)}</>;
  };

  const renderMedia = (m: ChatMessage) => {
    if (!m.media_url) return null;
    if (m.media_type === "video") {
      return <video src={m.media_url} controls style={{ maxWidth: "100%", maxHeight: "280px", borderRadius: "8px", marginTop: m.content ? "8px" : "0", display: "block" }} />;
    }
  return <img src={m.media_url} alt="media" style={{ maxWidth: "100%", maxHeight: "280px", objectFit: "contain", borderRadius: "8px", marginTop: m.content ? "8px" : "0", display: "block", cursor: "pointer" }} onClick={() => window.open(m.media_url!, "_blank")} />;
  };

  // ── Login ──
  if (!authed) return (
    <div style={{ minHeight: "100vh", background: "#0f1a1f", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <style>{`@import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap'); * { box-sizing: border-box; font-family: 'Satoshi', sans-serif; }`}</style>
      <div style={{ background: "#1D2C34", borderRadius: "20px", padding: "36px 28px", width: "100%", maxWidth: "360px", boxShadow: "0 24px 64px rgba(0,0,0,0.4)", border: "1px solid #2a3f4a" }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ fontSize: "36px", marginBottom: "10px" }}>💄</div>
          <div style={{ color: "#EAF0F4", fontWeight: 700, fontSize: "18px" }}>Purcurie Admin</div>
          <div style={{ color: "#7a9bab", fontSize: "13px", marginTop: "4px" }}>Live Chat Dashboard</div>
        </div>
        <input type="password" placeholder="Enter admin password" value={pwInput}
          onChange={e => setPwInput(e.target.value)} onKeyDown={e => e.key === "Enter" && handleLogin()}
          style={{ width: "100%", border: `1.5px solid ${pwError ? "#ef4444" : "#2a3f4a"}`, borderRadius: "10px", padding: "12px 16px", fontSize: "14px", outline: "none", background: "#0f1a1f", color: "#EAF0F4", marginBottom: "12px", transition: "border-color 0.2s" }} />
        {pwError && <div style={{ color: "#ef4444", fontSize: "12px", marginBottom: "10px", textAlign: "center" }}>Incorrect password</div>}
        <button onClick={handleLogin} style={{ width: "100%", background: "#EAF0F4", border: "none", borderRadius: "10px", padding: "12px", fontSize: "14px", fontWeight: 700, cursor: "pointer", color: "#1D2C34" }}>
          Sign In →
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ height: "100dvh", background: "#0f1a1f", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap');
        * { box-sizing: border-box; font-family: 'Satoshi', sans-serif; }
        .session-card { transition: background 0.15s; border-left: 3px solid transparent; }
        .session-card:hover { background: #1a2e38 !important; }
        .session-card.selected { background: #1a2e38 !important; border-left: 3px solid #EAF0F4 !important; }
        .filter-tab { cursor: pointer; transition: color 0.15s; border: none; background: none; }
        .filter-tab:hover { color: #EAF0F4 !important; }
        .admin-scrollbar::-webkit-scrollbar { width: 4px; }
        .admin-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .admin-scrollbar::-webkit-scrollbar-thumb { background: #2a3f4a; border-radius: 99px; }
        .reply-input { outline: none; }
        .reply-input:focus { border-color: #EAF0F4 !important; }
        .send-btn:hover { background: #c8d8e0 !important; }
        .search-input { outline: none; background: none; border: none; color: #EAF0F4; font-family: 'Satoshi', sans-serif; }
        .icon-btn { background: none; border: 1px solid #2a3f4a; color: #7a9bab; border-radius: 8px; width: 32px; height: 32px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; transition: background 0.15s, color 0.15s; }
        .icon-btn:hover, .icon-btn.active { background: #2a3f4a; color: #EAF0F4; }
        .global-result:hover { background: #1a2e38 !important; }

        .drawer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.65); z-index: 40; backdrop-filter: blur(2px); opacity: 0; pointer-events: none; transition: opacity 0.25s; }
        .drawer-overlay.open { opacity: 1; pointer-events: all; }
        .sidebar { position: fixed; top: 0; left: 0; height: 100dvh; width: 280px; background: #141f25; border-right: 1px solid #2a3f4a; display: flex; flex-direction: column; z-index: 50; transform: translateX(-100%); transition: transform 0.28s cubic-bezier(0.4,0,0.2,1); }
        .sidebar.open { transform: translateX(0); }

        @media (min-width: 768px) {
          .sidebar { position: relative !important; transform: none !important; width: 280px; height: auto; flex-shrink: 0; }
          .drawer-overlay { display: none !important; }
          .mobile-only { display: none !important; }
        }
        @media (max-width: 767px) { .desktop-only { display: none !important; } }
      `}</style>

      {/* Top bar */}
      <div style={{ background: "#1D2C34", borderBottom: "1px solid #2a3f4a", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button className="mobile-only" onClick={() => setSidebarOpen(true)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 2px", display: "flex", flexDirection: "column", gap: "5px" }}>
            {[0,1,2].map(i => <div key={i} style={{ width: "20px", height: "2px", background: "#EAF0F4", borderRadius: "2px" }} />)}
          </button>
          <span style={{ fontSize: "18px" }}>💄</span>
          <span style={{ color: "#EAF0F4", fontWeight: 700, fontSize: "15px" }}>Purcurie</span>
          <span style={{ color: "#7a9bab", fontSize: "12px" }} className="desktop-only">/ Live Chat</span>
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {/* Global search toggle */}
          <button className={`icon-btn ${globalSearchOpen ? "active" : ""}`} onClick={() => { setGlobalSearchOpen(o => !o); setGlobalSearch(""); setGlobalResults([]); }}
            title="Search all messages">🔍</button>
          {waitingCount > 0 && <div style={{ background: "#ef4444", color: "#fff", borderRadius: "99px", padding: "3px 8px", fontSize: "11px", fontWeight: 600 }}>{waitingCount} waiting</div>}
          {activeCount > 0 && <div style={{ background: "#4ade8033", color: "#4ade80", borderRadius: "99px", padding: "3px 8px", fontSize: "11px", fontWeight: 600 }}>{activeCount} live</div>}
          <button onClick={() => { localStorage.removeItem("purcurie_admin_auth"); setAuthed(false); }}
            style={{ background: "none", border: "1px solid #2a3f4a", color: "#7a9bab", borderRadius: "8px", padding: "5px 10px", fontSize: "11px", cursor: "pointer" }}>
            Sign out
          </button>
        </div>
      </div>

      {/* Global search bar */}
      {globalSearchOpen && (
        <div style={{ background: "#1D2C34", borderBottom: "1px solid #2a3f4a", padding: "10px 16px", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#0f1a1f", borderRadius: "10px", padding: "10px 14px", border: "1.5px solid #2a3f4a" }}>
            <span style={{ color: "#7a9bab", fontSize: "14px", flexShrink: 0 }}>🔍</span>
            <input autoFocus className="search-input"
              placeholder="Search across all chats and messages..."
              value={globalSearch}
              onChange={e => setGlobalSearch(e.target.value)}
              style={{ flex: 1, fontSize: "13px" }} />
            {globalSearching && <span style={{ color: "#7a9bab", fontSize: "11px" }}>Searching...</span>}
            {globalSearch && !globalSearching && <span style={{ color: "#7a9bab", fontSize: "11px", whiteSpace: "nowrap" }}>{globalResults.length} results</span>}
            {globalSearch && <button onClick={() => { setGlobalSearch(""); setGlobalResults([]); }}
              style={{ background: "none", border: "none", color: "#7a9bab", cursor: "pointer", fontSize: "14px", padding: "0" }}>✕</button>}
          </div>
          {/* Global results dropdown */}
          {globalResults.length > 0 && (
            <div className="admin-scrollbar" style={{ maxHeight: "280px", overflowY: "auto", marginTop: "8px", background: "#141f25", borderRadius: "10px", border: "1px solid #2a3f4a" }}>
              {globalResults.map(r => (
                <div key={r.message.id} className="global-result"
                  onClick={() => {
                    setActiveSession(r.session);
                    fetchMessages(r.session.id);
                    setGlobalSearchOpen(false);
                    setGlobalSearch("");
                    setGlobalResults([]);
                    setSidebarOpen(false);
                  }}
                  style={{ padding: "10px 14px", borderBottom: "1px solid #1a2a32", cursor: "pointer", transition: "background 0.15s" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                    <span style={{ color: "#EAF0F4", fontSize: "12px", fontWeight: 600 }}>
                      {r.session.customer_name || "Customer"}
                    </span>
                    <span style={{ color: "#7a9bab", fontSize: "10px" }}>{formatDate(r.message.created_at)}</span>
                  </div>
                  <div style={{ color: "#7a9bab", fontSize: "12px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {highlight(r.message.content, globalSearch)}
                  </div>
                </div>
              ))}
            </div>
          )}
          {globalSearch && !globalSearching && globalResults.length === 0 && (
            <div style={{ padding: "12px", textAlign: "center", color: "#7a9bab", fontSize: "12px", marginTop: "4px" }}>No messages found</div>
          )}
        </div>
      )}

      <div style={{ display: "flex", flex: 1, overflow: "hidden", position: "relative" }}>
        <div className={`drawer-overlay ${sidebarOpen ? "open" : ""}`} onClick={() => setSidebarOpen(false)} />

        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderBottom: "1px solid #2a3f4a", flexShrink: 0 }}>
            <span style={{ color: "#EAF0F4", fontWeight: 700, fontSize: "14px" }}>All Chats</span>
            <button className="mobile-only" onClick={() => setSidebarOpen(false)}
              style={{ background: "none", border: "none", color: "#7a9bab", cursor: "pointer", fontSize: "20px", lineHeight: 1 }}>✕</button>
          </div>

          {/* Filter tabs */}
          <div style={{ display: "flex", borderBottom: "1px solid #2a3f4a", flexShrink: 0 }}>
            {(["waiting", "active", "all", "closed"] as const).map(f => (
              <button key={f} className="filter-tab" onClick={() => setFilter(f)}
                style={{ flex: 1, padding: "11px 2px", fontSize: "10px", fontWeight: 600, color: filter === f ? "#EAF0F4" : "#7a9bab", borderBottom: filter === f ? "2px solid #EAF0F4" : "2px solid transparent", textTransform: "capitalize" }}>
                {f}
                {f === "waiting" && waitingCount > 0 && <span style={{ marginLeft: "3px", background: "#ef4444", color: "#fff", borderRadius: "99px", padding: "1px 4px", fontSize: "9px" }}>{waitingCount}</span>}
              </button>
            ))}
          </div>

          {/* Chat search */}
          <div style={{ padding: "10px 12px", borderBottom: "1px solid #2a3f4a", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#0f1a1f", borderRadius: "8px", padding: "7px 12px", border: "1.5px solid #2a3f4a" }}>
              <span style={{ color: "#7a9bab", fontSize: "13px", flexShrink: 0 }}>🔍</span>
              <input className="search-input" placeholder="Search chats..." value={chatSearch}
                onChange={e => setChatSearch(e.target.value)} style={{ flex: 1, fontSize: "12px" }} />
              {chatSearch && <button onClick={() => setChatSearch("")} style={{ background: "none", border: "none", color: "#7a9bab", cursor: "pointer", fontSize: "13px", padding: "0" }}>✕</button>}
            </div>
          </div>

          {/* Session list */}
          <div className="admin-scrollbar" style={{ flex: 1, overflowY: "auto" }}>
            {filteredSessions.length === 0 ? (
              <div style={{ padding: "24px", textAlign: "center", color: "#7a9bab", fontSize: "13px" }}>
                {chatSearch ? "No chats match your search" : `No ${filter === "all" ? "" : filter} chats`}
              </div>
            ) : filteredSessions.map(s => (
              <div key={s.id} className={`session-card ${activeSession?.id === s.id ? "selected" : ""}`}
                onClick={() => { setActiveSession(s); fetchMessages(s.id); setSidebarOpen(false); }}
                style={{ padding: "14px 16px", borderBottom: "1px solid #1a2a32", cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                  <span style={{ color: "#EAF0F4", fontWeight: 600, fontSize: "13px" }}>{s.customer_name || "Customer"}</span>
                  <span style={{ fontSize: "10px", color: "#7a9bab", whiteSpace: "nowrap", marginLeft: "8px" }}>{formatDate(s.created_at)}</span>
                </div>
                <div style={{ color: "#7a9bab", fontSize: "12px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginBottom: "6px" }}>
                  {s.initial_query}
                </div>
                <span style={{ fontSize: "10px", fontWeight: 600, borderRadius: "99px", padding: "2px 8px", background: s.status === "waiting" ? "#ef444422" : s.status === "active" ? "#4ade8022" : "#ffffff11", color: s.status === "waiting" ? "#ef4444" : s.status === "active" ? "#4ade80" : "#7a9bab" }}>
                  {s.status === "waiting" ? "● Waiting" : s.status === "active" ? "● Live" : "Closed"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main panel */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0 }}>
          {!activeSession ? (
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "12px", padding: "24px", textAlign: "center" }}>
              <div style={{ fontSize: "40px" }}>💬</div>
              <div style={{ color: "#EAF0F4", fontWeight: 600, fontSize: "15px" }}>No chat selected</div>
              <div style={{ color: "#7a9bab", fontSize: "13px" }}>Open the menu to see incoming chats</div>
              <button className="mobile-only" onClick={() => setSidebarOpen(true)}
                style={{ marginTop: "8px", background: "#1D2C34", border: "1px solid #2a3f4a", color: "#EAF0F4", borderRadius: "10px", padding: "10px 20px", fontSize: "13px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                ☰ View Chats
                {waitingCount > 0 && <span style={{ background: "#ef4444", color: "#fff", borderRadius: "99px", padding: "1px 7px", fontSize: "11px" }}>{waitingCount}</span>}
              </button>
            </div>
          ) : (
            <>
              {/* Chat header */}
              <div style={{ background: "#1D2C34", padding: "12px 16px", borderBottom: "1px solid #2a3f4a", display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                <button className="mobile-only" onClick={() => { setActiveSession(null); setSidebarOpen(true); }}
                  style={{ background: "none", border: "none", color: "#7a9bab", cursor: "pointer", fontSize: "22px", padding: "0", lineHeight: 1, flexShrink: 0 }}>←</button>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: "#EAF0F4", fontWeight: 700, fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {activeSession.customer_name || "Customer"}
                  </div>
                  <div style={{ color: "#7a9bab", fontSize: "11px", marginTop: "1px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {activeSession.initial_query}
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", gap: "8px", alignItems: "center" }}>
                  <button className={`icon-btn ${msgSearchOpen ? "active" : ""}`}
                    onClick={() => { setMsgSearchOpen(o => !o); setMsgSearch(""); }}>🔍</button>
                  {activeSession.status === "waiting" && (
                    <button onClick={() => acceptSession(activeSession)}
                      style={{ background: "#4ade80", border: "none", color: "#1D2C34", borderRadius: "8px", padding: "8px 14px", fontSize: "12px", fontWeight: 700, cursor: "pointer" }}>
                      ✓ Accept
                    </button>
                  )}
                  {activeSession.status === "active" && (
                    <button onClick={() => closeSession(activeSession.id)}
                      style={{ background: "#ef444422", border: "1px solid #ef444444", color: "#ef4444", borderRadius: "8px", padding: "8px 14px", fontSize: "12px", fontWeight: 600, cursor: "pointer" }}>
                      End Chat
                    </button>
                  )}
                </div>
              </div>

              {/* In-chat message search bar */}
              {msgSearchOpen && (
                <div style={{ padding: "10px 16px", borderBottom: "1px solid #2a3f4a", background: "#141f25", flexShrink: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#0f1a1f", borderRadius: "8px", padding: "8px 12px", border: "1.5px solid #2a3f4a" }}>
                    <span style={{ color: "#7a9bab", fontSize: "13px", flexShrink: 0 }}>🔍</span>
                    <input autoFocus className="search-input" placeholder="Search in this chat..." value={msgSearch}
                      onChange={e => setMsgSearch(e.target.value)} style={{ flex: 1, fontSize: "13px" }} />
                    {msgSearch && <span style={{ color: "#7a9bab", fontSize: "11px", whiteSpace: "nowrap" }}>
                      {messages.filter(m => m.content.toLowerCase().includes(msgSearch.toLowerCase())).length} found
                    </span>}
                    {msgSearch && <button onClick={() => setMsgSearch("")} style={{ background: "none", border: "none", color: "#7a9bab", cursor: "pointer", fontSize: "13px", padding: "0" }}>✕</button>}
                  </div>
                </div>
              )}

              {/* Messages */}
              <div className="admin-scrollbar" style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "12px", background: "#0f1a1f" }}>
                {messages.length === 0 ? (
                  <div style={{ textAlign: "center", color: "#7a9bab", fontSize: "13px", marginTop: "20px" }}>
                    {activeSession.status === "waiting" ? "Accept the chat to start messaging" : "No messages yet"}
                  </div>
                ) : messages
                  .filter(m => !msgSearch.trim() || m.content.toLowerCase().includes(msgSearch.toLowerCase()) || !!m.media_url)
                  .map(m => (
                    <div key={m.id} style={{ display: "flex", justifyContent: m.role === "admin" ? "flex-end" : "flex-start" }}>
                      <div style={{ maxWidth: "min(80%, 420px)" }}>
                        <div style={{ fontSize: "10px", color: "#7a9bab", marginBottom: "3px", textAlign: m.role === "admin" ? "right" : "left", fontWeight: 600 }}>
                          {m.role === "admin" ? "YOU" : (activeSession.customer_name || "Customer").toUpperCase()} · {formatTime(m.created_at)}
                        </div>
                        <div style={{ padding: m.media_url && !m.content ? "4px" : "10px 14px", borderRadius: m.role === "admin" ? "18px 18px 4px 18px" : "18px 18px 18px 4px", fontSize: "13.5px", lineHeight: "1.5", background: m.role === "admin" ? "#EAF0F4" : "#1D2C34", color: m.role === "admin" ? "#1D2C34" : "#EAF0F4", whiteSpace: "pre-wrap", wordBreak: "break-word", overflow: "hidden" }}>
                          {m.content && highlight(m.content, msgSearch)}
                          {renderMedia(m)}
                        </div>
                      </div>
                    </div>
                  ))}
                <div ref={bottomRef} />
              </div>

              {/* Reply input */}
              {activeSession.status === "active" ? (
                <div style={{ padding: "12px 16px", borderTop: "1px solid #2a3f4a", background: "#141f25", display: "flex", gap: "8px", alignItems: "center" }}>
                  {/* Hidden file input */}
                  <input ref={fileInputRef} type="file" accept="image/*,video/*" onChange={handleFileUpload}
                    style={{ display: "none" }} />
                  {/* Attach button */}
                  <button onClick={() => fileInputRef.current?.click()} disabled={uploading}
                    style={{ background: "none", border: "1px solid #2a3f4a", color: uploading ? "#2a3f4a" : "#7a9bab", borderRadius: "8px", width: "36px", height: "36px", cursor: uploading ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0, transition: "all 0.15s" }}
                    title="Send photo or video">
                    {uploading ? "⏳" : "📎"}
                  </button>
                  <input className="reply-input"
                    style={{ flex: 1, border: "1.5px solid #2a3f4a", borderRadius: "10px", padding: "11px 14px", fontSize: "14px", color: "#EAF0F4", background: "#0f1a1f", transition: "border-color 0.2s" }}
                    placeholder="Type your reply..."
                    value={replyInput}
                    onChange={e => setReplyInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendReply()}
                  />
                  <button className="send-btn" onClick={() => sendReply()}
                    style={{ background: "#EAF0F4", border: "none", color: "#1D2C34", borderRadius: "10px", padding: "11px 16px", fontSize: "16px", fontWeight: 700, cursor: "pointer", transition: "background 0.15s", flexShrink: 0 }}>
                    ➤
                  </button>
                </div>
              ) : activeSession.status === "closed" ? (
                <div style={{ padding: "14px 16px", borderTop: "1px solid #2a3f4a", background: "#141f25", textAlign: "center", color: "#7a9bab", fontSize: "13px" }}>
                  This chat has ended
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
}