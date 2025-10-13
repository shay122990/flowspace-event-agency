import type { ProposalResponse } from "./ProposalForm";

type Props = {
  data: ProposalResponse | null;
};

function isError(res: ProposalResponse): res is { error: string } {
  return "error" in res;
}

export default function ProposalResult({ data }: Props) {
  if (!data) return null;

  if (isError(data)) {
    return (
      <section className="rounded-xl border border-gray-950 p-6">
        <h2 className="text-2xl font-semibold mb-2">Draft Proposal</h2>
        <p className="text-red-400">Error: {data.error}</p>
      </section>
    );
  }

  return (
    <section className="rounded-xl  bg-white p-6 grid gap-4">
      <h2 className="text-gray-600 text-2xl font-semibold">Draft Proposal</h2>
      <article className="prose prose-invert max-w-none text-gray-950">
        <pre className="whitespace-pre-wrap text-sm">{data.plan}</pre>
      </article>
    </section>
  );
}
