"use client";

import { useState } from "react";
import ProposalForm, { type ProposalResponse } from "./components/ProposalForm";
import ProposalResult from "./components/ProposalResult";
import AmbientBackdrop from "@/app/components/AmbientBackdrop";

export default function ProposalPage() {
  const [result, setResult] = useState<ProposalResponse | null>(null);

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#0b0b12] text-white">
      <AmbientBackdrop />

      <section className="relative z-10 mx-auto max-w-4xl px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-5xl font-black tracking-tight text-transparent md:text-6xl">
            AI-Free Proposal Generator
          </h1>
          <p className="mt-4 text-lg text-white/70 md:text-xl">
            Turn a client brief into a structured draft plan: phases, staffing,
            and budget allocation.
          </p>
        </header>

        <div className="grid gap-10">
          <ProposalForm onResult={setResult} />
          <ProposalResult data={result} />
        </div>
      </section>
    </main>
  );
}
