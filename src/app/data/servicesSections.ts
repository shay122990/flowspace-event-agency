import { ServiceSection } from "../types/service";

export const servicesSections: ServiceSection[] = [
  {
    id: "strategy",
    kicker: "01",
    title: "Event Strategy",
    desc: "Translate business goals into measurable outcomes with KPI frameworks, audience journeys, and budget architecture that keep creativity grounded in reality.",
    bullets: [
      "Goal → KPI mapping",
      "Audience segmentation & journeys",
      "Budget architecture & ROI model",
      "Program design & content arcs",
    ],
    stats: [
      { label: "Avg. ROI lift", value: "+23%" },
      { label: "On-time briefs", value: "96%" },
    ],
    img: "/images/services/strategy.jpg",
    accentFrom: "from-pink-500",
    accentTo: "to-emerald-500",
  },
  {
    id: "production",
    kicker: "02",
    title: "Production",
    desc: "Vendor orchestration, stagecraft, and technical direction. We make showtime bulletproof with tight run-of-show and onsite control room discipline.",
    bullets: [
      "Vendor sourcing & bids",
      "Stage & AV direction",
      "Run-of-show & cueing",
      "Permits, H&S, logistics",
    ],
    stats: [
      { label: "Vendor SLA hit", value: "99%" },
      { label: "Change orders", value: "−34%" },
    ],
    img: "/images/services/production.jpg",
    accentFrom: "from-cyan-500",
    accentTo: "to-fuchsia-500",
  },
  {
    id: "ops",
    kicker: "03",
    title: "Project Ops",
    desc: "Dependencies, staffing, and risk management. We keep the machine humming with clear comms, transparent timelines, and contingency planning.",
    bullets: [
      "Critical path + Gantt",
      "Risk register & contingencies",
      "Crew planning & comms",
      "Budget tracking & approvals",
    ],
    stats: [
      { label: "Timeline variance", value: "<2d" },
      { label: "Risk mitigated", value: "87%" },
    ],
    img: "/images/services/ops.jpg",
    accentFrom: "from-emerald-500",
    accentTo: "to-pink-500",
  },
];
