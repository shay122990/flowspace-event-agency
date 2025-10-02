"use client";

import { useState } from "react";

export type ProposalInput = {
  eventType: string;
  audienceSize: number;
  budget: number;
  date: string;
  location: string;
  notes?: string;
};

export type ProposalSuccess = { plan: string };
export type ProposalError = { error: string };
export type ProposalResponse = ProposalSuccess | ProposalError;

type Props = {
  onResult: (result: ProposalResponse) => void;
};

export default function ProposalForm({ onResult }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<ProposalInput>({
    eventType: "Conference",
    audienceSize: 300,
    budget: 50000,
    date: "",
    location: "",
    notes: "",
  });

  function update<K extends keyof ProposalInput>(
    key: K,
    value: ProposalInput[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as ProposalResponse;
      onResult(data);
    } catch (error) {
      if (error instanceof Error) {
        onResult({
          error: `Something went wrong with submitting form. Error: ${error.message}`,
        });
      } else {
        onResult({
          error: `Something went wrong with submitting form. Error: ${String(
            error
          )}`,
        });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-xl border border-white/10 p-6"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <label className="grid gap-2 border border-black rounded p-2">
          <span className="text-sm text-gray-900">Event Type</span>
          <input
            className="bg-black/15 border border-white/10 rounded px-3 py-2"
            value={form.eventType}
            onChange={(e) => update("eventType", e.target.value)}
            placeholder="Conference, Launch, Expo…"
            required
          />
        </label>

        <label className="grid gap-2 border border-black rounded p-2">
          <span className="text-sm text-black/70">Audience Size</span>
          <input
            type="number"
            min={1}
            className="bg-black/15 border border-white/10 rounded px-3 py-2"
            value={form.audienceSize}
            onChange={(e) => update("audienceSize", Number(e.target.value))}
            required
          />
        </label>

        <label className="grid gap-2 border border-black rounded p-2">
          <span className="text-sm text-black/70">Budget (USD)</span>
          <input
            type="number"
            min={1000}
            step={500}
            className="bg-black/15 border border-white/10 rounded px-3 py-2"
            value={form.budget}
            onChange={(e) => update("budget", Number(e.target.value))}
            required
          />
        </label>

        <label className="grid gap-2 border border-black rounded p-2">
          <span className="text-sm text-black/70">Target Date</span>
          <input
            type="date"
            className="bg-black/15 border border-white/10 rounded px-3 py-2"
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            required
          />
        </label>

        <label className="md:col-span-2 grid gap-2 border border-black rounded p-2">
          <span className="text-sm text-black/70">Location</span>
          <input
            className="bg-black/15 border text-white border-white/10 rounded px-3 py-2"
            value={form.location}
            onChange={(e) => update("location", e.target.value)}
            placeholder="City / venue"
            required
          />
        </label>

        <label className="md:col-span-2 grid gap-2 border border-black rounded p-2">
          <span className="text-sm text-black/70">Notes (optional)</span>
          <textarea
            className="bg-white/5 border border-white/10 rounded px-3 py-2 min-h-[100px]"
            value={form.notes ?? ""}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Goals, constraints, themes…"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="justify-self-start rounded-lg bg-brand-500 hover:bg-brand-600 px-6 py-3 font-medium disabled:opacity-60 border border-black p-2"
      >
        {loading ? "Generating…" : "Generate Proposal"}
      </button>
    </form>
  );
}
