"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bot, Loader2, Send, Sparkles, User } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { siteConfig } from "@/data/profile";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTED_QUESTIONS = [
  "What's your current role and focus?",
  "Tell me about your time at Continental.",
  "What AI experience do you have?",
  "What are your key skills and certifications?",
];

export function DigitalTwin() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hi — I'm Marcel's Digital Twin. Ask me anything about his career, skills, or experience. How can I help?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const hasUserMessaged = useRef(false);

  useEffect(() => {
    if (!hasUserMessaged.current) return;
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    hasUserMessaged.current = true;
    setError(null);
    setInput("");

    const userMessage: Message = { role: "user", content: trimmed };
    const history = [...messages, userMessage];
    setMessages(history);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history
            .slice(1)
            .slice(-10)
            .map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No response stream.");

      const decoder = new TextDecoder();
      let assistantContent = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });

        for (const line of chunk.split("\n")) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (!data || data === "[DONE]") continue;

          try {
            const parsed = JSON.parse(data);
            const delta = parsed.choices?.[0]?.delta?.content;
            if (delta) {
              assistantContent += delta;
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  role: "assistant",
                  content: assistantContent,
                };
                return updated;
              });
            }
          } catch {
            // skip malformed SSE chunks
          }
        }
      }

      if (!assistantContent) {
        setMessages((prev) => prev.slice(0, -1));
        throw new Error("No response received from the model.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <section id="twin" className="relative px-6 py-32">
      <div className="glow-orb -right-32 top-1/4 h-[500px] w-[500px] bg-violet-500/10" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <motion.p variants={fadeUp} custom={0} className="section-label mb-4">
            Digital Twin
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl"
          >
            Chat with my
            <br />
            <span className="text-gradient-accent">AI counterpart</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-4 max-w-xl text-[var(--color-muted)]"
          >
            Ask questions about {siteConfig.name.split(" ")[0]}&apos;s career,
            skills, and experience — powered by AI and grounded in his real
            profile.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass overflow-hidden rounded-3xl border border-[var(--color-border)]"
        >
          <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-6 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-glow)]">
              <Sparkles className="h-5 w-5 text-[var(--color-accent)]" />
            </div>
            <div>
              <p className="font-medium">Digital Twin</p>
              <p className="text-xs text-[var(--color-muted)]">
                {isLoading ? "Thinking..." : "Online · Career knowledge base"}
              </p>
            </div>
          </div>

          <div className="flex h-[420px] flex-col sm:h-[480px]">
            <div
              ref={chatContainerRef}
              className="flex-1 space-y-4 overflow-y-auto px-6 py-6"
            >
              {messages.map((message, i) => (
                <div
                  key={`${message.role}-${i}`}
                  className={`flex gap-3 ${
                    message.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      message.role === "user"
                        ? "bg-[var(--color-foreground)]"
                        : "bg-[var(--color-accent-glow)]"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="h-4 w-4 text-[var(--color-background)]" />
                    ) : (
                      <Bot className="h-4 w-4 text-[var(--color-accent)]" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-[var(--color-foreground)] text-[var(--color-background)]"
                        : "bg-[var(--color-surface-elevated)] text-[var(--color-foreground)]/90"
                    }`}
                  >
                    {message.content || (
                      <Loader2 className="h-4 w-4 animate-spin text-[var(--color-muted)]" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 border-t border-[var(--color-border)] px-6 py-4">
                {SUGGESTED_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendMessage(question)}
                    disabled={isLoading}
                    className="rounded-full border border-[var(--color-border)] px-4 py-2 text-xs text-[var(--color-muted)] transition-all hover:border-[var(--color-border-accent)] hover:text-[var(--color-accent)] disabled:opacity-50"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {error && (
              <div className="border-t border-red-500/20 bg-red-500/5 px-6 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex items-end gap-3 border-t border-[var(--color-border)] px-6 py-4"
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about my career..."
                rows={1}
                disabled={isLoading}
                className="max-h-32 flex-1 resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] outline-none transition-colors focus:border-[var(--color-border-accent)] disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)] text-[var(--color-background)] transition-all hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
                aria-label="Send message"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
