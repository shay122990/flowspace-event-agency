"use client";

import React, { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Send } from "lucide-react";

export type ContactFormValues = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

export type ContactFormProps = {
  onSubmit?: (values: ContactFormValues) => Promise<void> | void;
  className?: string;
  /** Email to use for the mailto fallback */
  to?: string; // default: hello@flowspace.app
};

const fadeUp: Variants = {
  hidden: { y: 12, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ContactForm({
  onSubmit,
  className = "",
  to = "hello@flowspace.app",
}: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const isValid = useMemo(() => {
    const okName = name.trim().length > 1;
    const okEmail = /.+@.+\..+/.test(email);
    const okMsg = message.trim().length > 5;
    return okName && okEmail && okMsg;
  }, [name, email, message]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid || status === "sending") return;
    setStatus("sending");

    try {
      if (onSubmit) {
        await onSubmit({ name, email, subject, message });
        setStatus("sent");
      } else {
        const body = encodeURIComponent(
          `From: ${name} <${email}>\n\n${message}`
        );
        const subj = encodeURIComponent(
          subject || "New message from contact form"
        );
        const href = `mailto:${to}?subject=${subj}&body=${body}`;
        window.location.href = href;
        setStatus("sent");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      onSubmit={handleSubmit}
      className={
        "grid gap-4 rounded-2xl border border-white/50 bg-white/50 p-5 text-gray-600 " +
        className
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm text-gray-600">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
            className="rounded-xl border border-white bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:border-fuchsia-400 focus:outline-none md:text-gray-800"
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-gray-600">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            className="rounded-xl border border-white bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:border-fuchsia-400 focus:outline-none md:text-gray-800"
            required
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm text-gray-600 md:text-gray-500">
          Subject (optional)
        </span>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="What's this about?"
          className="rounded-xl border border-white bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:border-fuchsia-400 focus:outline-none md:text-gray-800"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm text-gray-600 md:text-gray-500">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project, timeline, and goals…"
          rows={6}
          className="rounded-2xl border border-white bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:border-fuchsia-400 focus:outline-none md:text-gray-800"
          required
        />
      </label>

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-gray/60 md:text-gray-500">
          By sending, you consent to be contacted about your inquiry.
        </p>
        <button
          type="submit"
          disabled={!isValid || status === "sending"}
          className="inline-flex items-center gap-2 rounded-xl bg-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Send className="h-4 w-4" aria-hidden />
          {status === "sending"
            ? "Sending…"
            : status === "sent"
            ? "Sent"
            : "Send"}
        </button>
      </div>

      <div aria-live="polite" className="sr-only">
        {status === "sent" && "Message sent."}
        {status === "error" && "Something went wrong."}
      </div>
    </motion.form>
  );
}
