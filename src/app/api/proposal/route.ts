import { NextRequest, NextResponse } from "next/server";
import { z, ZodError } from "zod";

const Schema = z.object({
  eventType: z.string().min(2),
  audienceSize: z.number().min(1),
  budget: z.number().min(1000),
  date: z.string().min(4),
  location: z.string().min(2),
  notes: z.string().optional(),
});

type ProposalInput = z.infer<typeof Schema>;

type Bucket = { k: string; pct: number };
type Phase = { name: string; weeks: number; tasks: string[] };

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as unknown;
    const p: ProposalInput = Schema.parse(body);

    const buckets: Bucket[] = [
      {
        k: "Venue & AV",
        pct: p.eventType.toLowerCase().includes("conference") ? 0.35 : 0.25,
      },
      { k: "Production & Staffing", pct: 0.25 },
      { k: "Catering", pct: 0.18 },
      { k: "Marketing & Creative", pct: 0.12 },
      { k: "Contingency", pct: 0.1 },
    ];

    const sum = buckets.reduce<number>((s, b) => s + b.pct, 0);
    const normalized: Bucket[] = buckets.map((b) => ({
      ...b,
      pct: Number((b.pct / sum).toFixed(2)),
    }));

    const phases: Phase[] = [
      {
        name: "Planning",
        weeks: 2,
        tasks: [
          "Scope & KPIs",
          "Supplier shortlist",
          "High-level budget",
          "Run-of-show draft",
        ],
      },
      {
        name: "Production",
        weeks: 3,
        tasks: [
          "Contracts & POs",
          "Venue & AV lock",
          "Creative approvals",
          "Staffing schedule",
        ],
      },
      {
        name: "Event Week",
        weeks: 1,
        tasks: ["Load-in", "Rehearsals", "Live execution", "Guest services"],
      },
      {
        name: "Wrap-up",
        weeks: 1,
        tasks: ["Tear-down", "Post-mortem", "KPI report", "Invoices & closeout"],
      },
    ];

    const plan = [
      `OBJECTIVES
- Deliver a ${p.eventType} in ${p.location} for ~${p.audienceSize} attendees on ${p.date}.
- Optimize guest flow, on-time starts, and brand consistency.
- Keep spend within $${p.budget.toLocaleString()} (±10%).`,
      "PHASES & TIMELINE",
      ...phases.map(
        (ph) => `- ${ph.name} (${ph.weeks} wk): ${ph.tasks.join("; ")}`
      ),
      "STAFFING & VENDORS",
      "- Producer, Stage Manager, AV Lead, Registration Lead, Volunteers.",
      "- Venue/AV, Catering, Fabrication, Design, Security.",
      "RISKS & CONTINGENCIES",
      "- Supplier slippage → secondary vendors; Power/AV issues → backup lines; Weather → covered access.",
      "BUDGET ALLOCATION",
      ...normalized.map(
        (b) =>
          `- ${b.k}: ${(b.pct * 100).toFixed(0)}% (~$${Math.round(
            b.pct * p.budget
          ).toLocaleString()})`
      ),
      p.notes ? `NOTES\n- ${p.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n\n");

    return NextResponse.json({ plan });
  } catch (err: unknown) {
    const message =
      err instanceof ZodError
        ? err.issues.map((i) => i.message).join("; ")
        : err instanceof Error
        ? err.message
        : "Invalid input";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
