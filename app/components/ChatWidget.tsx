"use client";

import { useState, useRef, useEffect } from "react";

type Message = { role: "user" | "assistant"; content: string };

const WELCOME = "Hey! 👋 I'm purLEAD's AI assistant. I can tell you how our outbound system works, what results to expect, and whether it's a fit for your business. What's on your mind?";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [stickyBar, setStickyBar] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 120);
  }, [open]);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const onScroll = () => setStickyBar(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    const assistantMsg: Message = { role: "assistant", content: "" };
    setMessages([...next, assistantMsg]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let full = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        full += decoder.decode(value, { stream: true });
        setMessages([...next, { role: "assistant", content: full }]);
      }
    } catch {
      setMessages([
        ...next,
        { role: "assistant", content: "Sorry, something went wrong. Try again in a moment." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        style={{
          position: "fixed",
          bottom: stickyBar ? "5rem" : "1.75rem",
          right: "1.75rem",
          zIndex: 9999,
          transition: "bottom 0.3s",
          width: "3.25rem",
          height: "3.25rem",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00D1FF 0%, #0099CC 100%)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 0 0 rgba(0,209,255,0.4)",
          animation: open ? "none" : "pulse-ring 2.4s ease-out infinite",
          transition: "transform 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2l14 14M16 2L2 16" stroke="#0A1C35" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M18 12.5c0 .83-.67 1.5-1.5 1.5H5l-3 3V3.5C2 2.67 2.67 2 3.5 2h13c.83 0 1.5.67 1.5 1.5v9z" fill="#0A1C35" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: stickyBar ? "8.5rem" : "5.25rem",
            right: "1.75rem",
            zIndex: 9998,
            transition: "bottom 0.3s",
            width: "min(22rem, calc(100vw - 2rem))",
            maxHeight: "min(520px, calc(100vh - 7rem))",
            display: "flex",
            flexDirection: "column",
            background: "#0D2444",
            border: "1px solid rgba(0,209,255,0.18)",
            borderRadius: "1rem",
            boxShadow: "0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,209,255,0.06)",
            overflow: "hidden",
            animation: "slide-up 0.2s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "0.875rem 1rem",
              background: "rgba(0,209,255,0.07)",
              borderBottom: "1px solid rgba(0,209,255,0.12)",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "0.55rem",
                height: "0.55rem",
                borderRadius: "50%",
                background: "#00D1FF",
                boxShadow: "0 0 6px #00D1FF",
              }}
            />
            <span style={{ color: "#FFFFFF", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.04em" }}>
              purLEAD AI
            </span>
            <span style={{ color: "#94A3B8", fontSize: "0.68rem", marginLeft: "auto" }}>
              Usually replies instantly
            </span>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "0.875rem 1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(0,209,255,0.2) transparent",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "82%",
                    padding: "0.55rem 0.8rem",
                    borderRadius: m.role === "user" ? "1rem 1rem 0.2rem 1rem" : "1rem 1rem 1rem 0.2rem",
                    background: m.role === "user"
                      ? "linear-gradient(135deg, #00D1FF 0%, #0099CC 100%)"
                      : "rgba(255,255,255,0.06)",
                    color: m.role === "user" ? "#0A1C35" : "#E2E8F0",
                    fontSize: "0.8rem",
                    lineHeight: 1.5,
                    fontWeight: m.role === "user" ? 600 : 400,
                    wordBreak: "break-word",
                  }}
                >
                  {m.content || (
                    <span style={{ opacity: 0.5 }}>
                      <Dots />
                    </span>
                  )}
                </div>
              </div>
            ))}
            {loading && messages[messages.length - 1]?.content === "" && null}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: "0.75rem 1rem",
              borderTop: "1px solid rgba(0,209,255,0.1)",
              display: "flex",
              gap: "0.5rem",
              flexShrink: 0,
              background: "rgba(0,0,0,0.15)",
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
              placeholder="Ask me anything…"
              disabled={loading}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(0,209,255,0.18)",
                borderRadius: "0.5rem",
                padding: "0.5rem 0.75rem",
                color: "#FFFFFF",
                fontSize: "0.8rem",
                outline: "none",
                transition: "border-color 0.15s",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(0,209,255,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,209,255,0.18)")}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              style={{
                background: input.trim() && !loading ? "#00D1FF" : "rgba(0,209,255,0.2)",
                border: "none",
                borderRadius: "0.5rem",
                width: "2.25rem",
                height: "2.25rem",
                cursor: input.trim() && !loading ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "background 0.15s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M13 7L1 1l3 6-3 6 12-6z" fill={input.trim() && !loading ? "#0A1C35" : "#94A3B8"} />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(0,209,255,0.45); }
          70%  { box-shadow: 0 0 0 10px rgba(0,209,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(0,209,255,0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 80%, 100% { opacity: 0; }
          40%            { opacity: 1; }
        }
      `}</style>
    </>
  );
}

function Dots() {
  return (
    <span style={{ display: "inline-flex", gap: "3px", alignItems: "center" }}>
      {[0, 160, 320].map((delay) => (
        <span
          key={delay}
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#94A3B8",
            display: "inline-block",
            animation: `blink 1s ${delay}ms ease-in-out infinite`,
          }}
        />
      ))}
    </span>
  );
}
