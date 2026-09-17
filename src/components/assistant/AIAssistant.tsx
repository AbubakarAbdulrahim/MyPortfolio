"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from "lucide-react";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

const STARTER_PROMPTS = [
  "What's his strongest skill?",
  "Tell me about the Safetify project",
  "Is he available for freelance or full-time roles?",
  "What is his educational background?",
];

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Hello! I am an AI Assistant representing Abubakar Abdulrahim. How can I help you learn more about his mobile architecture experience or projects?",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || loading) return;

    const userMessage: ChatMessage = { sender: "user", text: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    if (!messageText) setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend }),
      });

      if (!res.ok) {
        throw new Error("Unable to connect to assistant service.");
      }

      const data = await res.json();
      const botReply: ChatMessage = {
        sender: "bot",
        text: data.answer || "Abubakar is a Software Engineer specializing in Flutter, Firebase, and React. You can contact him at abubakarabdulrahimibrahim@gmail.com.",
      };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "I am temporarily having trouble reaching the knowledge service. You can contact Abubakar directly at abubakarabdulrahimibrahim@gmail.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside aria-label="AI Portfolio Assistant" className="fixed bottom-6 right-6 z-50">
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-accent text-white text-xs font-semibold shadow-lg hover:bg-accent-hover transition-colors focus:outline-none"
          aria-label="Open AI Assistant"
        >
          <Bot className="w-4 h-4" />
          <span>Ask AI Assistant</span>
        </button>
      )}

      {/* Chat Drawer */}
      {isOpen && (
        <div className="card w-[320px] sm:w-[380px] h-[520px] flex flex-col justify-between shadow-2xl bg-background border border-surface-border overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="px-4 py-3 border-b border-surface-border flex items-center justify-between bg-surface shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground block">
                  AI Assistant
                </span>
                <span className="text-[10px] font-mono text-muted block">
                  Representing Abubakar Abdulrahim
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full border border-surface-border flex items-center justify-center text-muted hover:text-foreground transition-colors"
              aria-label="Close AI Assistant"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.sender === "bot" && (
                  <div className="w-5 h-5 rounded-full bg-surface border border-surface-border text-muted flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3 h-3" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[82%] ${
                    m.sender === "user"
                      ? "bg-accent text-white font-normal"
                      : "bg-surface text-foreground border border-surface-border font-normal"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-muted text-xs font-mono">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-accent" />
                <span>Assistant is formulating response...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Starter Prompts */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t border-surface-border flex flex-wrap gap-1 bg-surface/50 shrink-0">
              {STARTER_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  disabled={loading}
                  className="text-[10px] font-mono px-2 py-1 rounded bg-background border border-surface-border text-muted hover:text-foreground hover:border-foreground/30 transition-colors text-left"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-surface-border flex items-center gap-2 bg-surface shrink-0"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              placeholder="Ask about skills, projects, or background..."
              className="w-full px-3 py-1.5 rounded-lg bg-background border border-surface-border text-xs text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-1.5 rounded-lg bg-accent text-white hover:bg-accent-hover disabled:opacity-40 transition-colors shrink-0"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </aside>
  );
}
