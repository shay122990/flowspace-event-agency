"use client";

import { useState } from "react";
import ProposalForm, { type ProposalResponse } from "./components/ProposalForm";
import ProposalResult from "./components/ProposalResult";

export default function ProposalPage() {
  const [result, setResult] = useState<ProposalResponse | null>(null);

  return (
    <div className="grid gap-8">
      <header>
        <h1 className="text-3xl font-semibold">AI-Free Proposal Generator</h1>
        <p className="text-black/70 mt-2">
          Turn a client brief into a structured draft plan: phases, staffing,
          and budget allocation.
        </p>
      </header>

      <ProposalForm onResult={setResult} />

      <ProposalResult data={result} />
    </div>
  );
}
