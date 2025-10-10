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
  to?: string;
};

const fadeUp: Variants = {
  hidden: { y: 12, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

function InputField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm text-gray-600">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="rounded-xl border border-black/50 bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:border-fuchsia-400 focus:outline-none md:text-gray-800"
      />
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  required,
  rows = 6,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm text-gray-600 md:text-gray-500">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="rounded-2xl border border-black/50 bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:border-fuchsia-400 focus:outline-none md:text-gray-800"
      />
    </label>
  );
}

export default function ContactForm({
  onSubmit,
  className = "",
  to = "hello@flowspace.app",
}: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const isValid = useMemo(() => {
    const okName = form.name.trim().length > 1;
    const okEmail = /.+@.+\..+/.test(form.email);
    const okMsg = form.message.trim().length > 5;
    return okName && okEmail && okMsg;
  }, [form]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid || status === "sending") return;
    setStatus("sending");

    try {
      if (onSubmit) {
        await onSubmit(form);
        setStatus("sent");
      } else {
        const body = encodeURIComponent(
          `From: ${form.name} <${form.email}>\n\n${form.message}`
        );
        const subj = encodeURIComponent(
          form.subject || "New message from contact form"
        );
        window.location.href = `mailto:${to}?subject=${subj}&body=${body}`;
        setStatus("sent");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  const updateField = (key: keyof typeof form) => (val: string) =>
    setForm((p) => ({ ...p, [key]: val }));

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      onSubmit={handleSubmit}
      className={
        "grid gap-4 rounded-2xl border border-white/50 bg-white p-5 text-gray-600 " +
        className
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField
          label="Name"
          value={form.name}
          onChange={updateField("name")}
          placeholder="Your name"
          required
        />
        <InputField
          label="Email"
          type="email"
          value={form.email}
          onChange={updateField("email")}
          placeholder="you@example.com"
          required
        />
      </div>

      <InputField
        label="Subject (optional)"
        value={form.subject}
        onChange={updateField("subject")}
        placeholder="What's this about?"
      />

      <TextAreaField
        label="Message"
        value={form.message}
        onChange={updateField("message")}
        placeholder="Tell me about your project, timeline, and goals…"
        required
      />

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
