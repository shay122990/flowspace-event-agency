export type CaseStudy = {
  hero?: {
    kicker?: string;
    cover?: string; // /public/... optional
  };
  overview: string;
  services: string[];
  highlights: string[];
  stats?: { label: string; value: string }[];
  gallery?: string[]; // optional images under will be included later
};

export const projectContent: Record<string, CaseStudy> = {
  "wedding-gala-2025": {
    hero: {
      kicker: "Luxury Wedding • Dubai",
      cover: "/images/wedding/hero.jpg",
    },
    overview:
      "Two-day destination wedding with ceremony, reception, and after-party. We handled vendor management, timelines, guest logistics, and live entertainment.",
    services: [
      "Full planning",
      "Stage & decor",
      "Catering",
      "Entertainment",
      "Logistics",
    ],
    highlights: [
      "300 guests",
      "Live band + DJ",
      "Custom floral arch",
      "Same-day edit video",
    ],
    stats: [
      { label: "Guests", value: "300" },
      { label: "Vendors", value: "18" },
      { label: "Setup Time", value: "36h" },
    ],
    gallery: [
      "/images/wedding/1.jpg",
      "/images/wedding/2.jpg",
      "/images/wedding/3.jpg",
    ],
  },

  "tech-exhibition-dubai": {
    hero: { kicker: "Exhibition • Trade Show" },
    overview:
      "Modular booth design and on-site operations for a large-scale technology expo. Implemented check-in kiosks and wayfinding for 50+ exhibitors.",
    services: ["Booth design", "Registration", "AV & lighting", "On-site ops"],
    highlights: ["6,000 visitors", "3 halls", "Live keynotes"],
    stats: [
      { label: "Exhibitors", value: "50+" },
      { label: "Visitors", value: "6,000" },
      { label: "Halls", value: "3" },
    ],
    gallery: ["/images/exhibition/1.jpg", "/images/exhibition/2.jpg"],
  },

  "summer-music-festival": {
    hero: { kicker: "Concert • Open-Air" },
    overview:
      "Outdoor festival with two stages, synchronized lighting, and VIP lounge. Artist liaison, security, and backstage flow handled end-to-end.",
    services: ["Stage mgmt", "Artist liaison", "Lighting design", "Security"],
    highlights: ["10k attendees", "12 artists", "Drone footage"],
    stats: [
      { label: "Stages", value: "2" },
      { label: "Artists", value: "12" },
      { label: "Attendees", value: "10k" },
    ],
  },

  "corporate-annual-meet": {
    hero: { kicker: "Corporate • Hybrid" },
    overview:
      "Annual leadership summit with live stream to regional offices. Awards, keynote, and networking with zero downtime stream.",
    services: ["Run of show", "Streaming", "Stage design", "Catering"],
    highlights: ["500 in-person", "8 remote hubs", "Zero downtime stream"],
    stats: [
      { label: "In-Person", value: "500" },
      { label: "Remote Hubs", value: "8" },
      { label: "Latency", value: "< 1s" },
    ],
  },

  "product-launch-event": {
    hero: { kicker: "Brand • Launch" },
    overview:
      "Immersive reveal with AR demo pods and press corner. Managed media invites, shots list, and post-event content delivery.",
    services: ["Experience design", "Press mgmt", "Interactive demos"],
    highlights: ["40 media outlets", "AR demo booth"],
    stats: [
      { label: "Press", value: "40+" },
      { label: "Engagement", value: "↑ 3.2x" },
    ],
  },

  "charity-gala-night": {
    hero: { kicker: "Fundraiser • Gala" },
    overview:
      "Black-tie dinner with silent auction and live performance. Smooth check-in and donor experience were key focus areas.",
    services: ["Gala planning", "Auction ops", "Talent booking"],
    highlights: ["AED 1.2M raised", "450 guests"],
    stats: [
      { label: "Raised", value: "AED 1.2M" },
      { label: "Guests", value: "450" },
    ],
  },
};
