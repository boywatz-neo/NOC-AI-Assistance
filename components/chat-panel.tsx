"use client";

import { FormEvent, useState } from "react";
import { initialMessages } from "@/lib/mock-data";
import { ChatMessage } from "@/lib/types";

export function ChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!input.trim()) return;

    const nextUserMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: input.trim()
    };

    setMessages((current) => [...current, nextUserMessage]);
    setLoading(true);
    setInput("");

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: nextUserMessage.content })
    });

    const data = (await response.json()) as { message: ChatMessage };
    setMessages((current) => [...current, data.message]);
    setLoading(false);
  }

  return (
    <section className="panel flex min-h-[640px] flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <h2 className="text-lg font-semibold text-ink">Chat Workspace</h2>
          <p className="text-sm text-slate-500">
            Thai / English mixed queries with citations and confidence.
          </p>
        </div>
        <button className="rounded-full bg-reef px-4 py-2 text-sm font-medium text-white transition hover:bg-ink">
          Create Checklist
        </button>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
        {messages.map((message) => (
          <article
            key={message.id}
            className={`max-w-3xl rounded-3xl px-5 py-4 ${
              message.role === "user"
                ? "ml-auto bg-ink text-white"
                : "bg-slate-50 text-ink"
            }`}
          >
            <p className="text-sm leading-7">{message.content}</p>
            {message.role === "assistant" && (
              <div className="mt-4 space-y-3 border-t border-slate-200 pt-4 text-xs text-slate-500">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-sand px-3 py-1 font-medium text-ink">
                    Confidence: {message.confidence}
                  </span>
                  <button className="rounded-full border border-slate-300 px-3 py-1">Copy</button>
                  <button className="rounded-full border border-slate-300 px-3 py-1">Thumbs Up</button>
                  <button className="rounded-full border border-slate-300 px-3 py-1">Thumbs Down</button>
                </div>
                <ul className="space-y-1">
                  {message.citations?.map((citation) => (
                    <li key={`${citation.documentName}-${citation.page}`}>
                      Source: {citation.documentName} | Page {citation.page} | {citation.version}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
        {loading ? (
          <div className="max-w-xs rounded-3xl bg-slate-50 px-5 py-4 text-sm text-slate-500">
            Generating grounded answer...
          </div>
        ) : null}
      </div>

      <form onSubmit={handleSubmit} className="border-t border-slate-200 px-6 py-5">
        <label className="sr-only" htmlFor="chat-input">
          Ask a question
        </label>
        <div className="flex flex-col gap-3 md:flex-row">
          <textarea
            id="chat-input"
            className="min-h-[96px] flex-1 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-reef"
            placeholder="ถามเรื่อง configuration, release version, หรือขอ checklist ได้เลย"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-3xl bg-coral px-6 py-4 text-sm font-semibold text-white transition hover:bg-reef disabled:cursor-not-allowed disabled:opacity-60"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
