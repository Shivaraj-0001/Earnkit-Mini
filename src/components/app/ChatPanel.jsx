"use client";
import { useEffect, useRef, useState } from "react";

export default function ChatPanel() {
  const [messages, setMessages] = useState([
    { role: "minidev", text: "Describe what you want to build and I’ll generate it." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // If page opened with ?idea=..., seed the chat and show brief "building" state
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const idea = params.get("idea");
    if (idea) {
      setMessages((m) => [...m, { role: "user", text: idea }]);
      setLoading(true);
      const t = setTimeout(() => setLoading(false), 900);
      return () => clearTimeout(t);
    }
  }, []);

  function send() {
    if (!input.trim()) return;
    const text = input.trim();
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setLoading(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "minidev", text: "Generated a preview (stub). Try Publish to simulate." }]);
      setLoading(false);
    }, 800);
  }

  const listRef = useRef(null);
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex h-[70vh] flex-col rounded-2xl border bg-white">
      <div ref={listRef} className="flex-1 space-y-3 overflow-auto p-4">
        {messages.map((m, idx) => (
          <div key={idx} className={m.role === "user" ? "text-right" : "text-left"}>
            <div className={`inline-block rounded-2xl px-3 py-2 text-sm ${
              m.role === "user" ? "bg-neutral-900 text-white" : "bg-neutral-100"
            }`}>{m.text}</div>
          </div>
        ))}
        {loading && <div className="text-left text-sm text-neutral-500">Minidev is typing…</div>}
      </div>
      <form
        className="flex items-end gap-2 border-t p-3"
        onSubmit={(e) => { e.preventDefault(); send(); }}
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your prompt…"
          rows={2}
          className="min-h-[44px] flex-1 resize-none rounded-xl border px-3 py-2 text-sm focus:border-neutral-400"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
          }}
          aria-label="Chat input"
        />
        <button className="rounded-xl bg-[#FF7A00] px-4 py-2 text-sm text-white">Send</button>
      </form>
    </div>
  );
}
