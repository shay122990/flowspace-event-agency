"use client";

import { useMemo, useState } from "react";
import FormField from "./FormField";

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
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ProposalInput>({
    eventType: "Conference",
    audienceSize: 300,
    budget: 50000,
    date: "",
    location: "",
    notes: "",
  });

  const update = <K extends keyof ProposalInput>(
    key: K,
    value: ProposalInput[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const commonFieldProps = useMemo(
    () => ({
      required: true,
      inputClassName: "w-full",
      containerClassName: "rounded border border-white/10 p-2",
    }),
    []
  );

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
      const message = error instanceof Error ? error.message : String(error);
      onResult({
        error: `Something went wrong with submitting form. Error: ${message}`,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-xl border border-gray-900 p-6"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          label="Event Type"
          placeholder="Conference, Launch, Expo…"
          value={form.eventType}
          onChange={(e) => update("eventType", e.currentTarget.value)}
          {...commonFieldProps}
        />

        <FormField
          label="Audience Size"
          type="number"
          value={form.audienceSize}
          onChange={(e) =>
            update("audienceSize", Number(e.currentTarget.value))
          }
          {...commonFieldProps}
        />

        <FormField
          label="Budget (USD)"
          type="number"
          value={form.budget}
          onChange={(e) => update("budget", Number(e.currentTarget.value))}
          {...commonFieldProps}
        />

        <FormField
          label="Target Date"
          type="date"
          value={form.date}
          onChange={(e) => update("date", e.currentTarget.value)}
          {...commonFieldProps}
        />

        <FormField
          label="Location"
          placeholder="City / venue"
          value={form.location}
          onChange={(e) => update("location", e.currentTarget.value)}
          required
        />
      </div>
      <div className="md:col-span-2">
        <FormField
          label="Notes (optional)"
          textarea
          placeholder="Goals, constraints, themes…"
          value={form.notes ?? ""}
          onChange={(e) =>
            update("notes", (e.target as HTMLTextAreaElement).value)
          }
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        aria-busy={loading}
        className="justify-self-start rounded-lg border border-gray-900 bg-white/10 px-6 py-3 font-medium text-gray-600 backdrop-blur transition hover:bg-white/20 disabled:opacity-60"
      >
        {loading ? "Generating…" : "Generate Proposal"}
      </button>
    </form>
  );
}
