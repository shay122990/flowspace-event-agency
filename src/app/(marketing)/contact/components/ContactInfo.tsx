"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

type Social = { name: string; href: string; Icon?: React.ElementType };

const cubic = [0.22, 1, 0.36, 1] as const;
const fadeUp: Variants = {
  hidden: { y: 12, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: cubic } },
};

export type Props = {
  companyName?: string;
  email?: string;
  phone?: string;
  address?: string;
  socials?: Social[];
  mapSrc?: string;
  className?: string;
};

export default function ContactInfo({
  companyName = "FlowSpace",
  email = "hello@pulseevents.com",
  phone = "+971 50 000 0000",
  address = "Dubai, UAE",
  socials = [],
  mapSrc = "https://www.openstreetmap.org/export/embed.html?bbox=55.112%2C24.717%2C55.602%2C25.417&layer=mapnik",
  className = "",
}: Props) {
  const faqs = [
    {
      q: "What services do you offer?",
      a: "Full event production, artist booking, venue sourcing, technical production and on-site event management.",
    },
    {
      q: "How do I request a quote?",
      a: "Send a brief (date, expected guests, venue type, rough budget) to the Bookings contact and we’ll follow up within 24 business hours.",
    },
    {
      q: "Do you work internationally?",
      a: "Yes — we run events across the UAE and the broader MENA region; travel fees apply for out-of-region events.",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className={`text-white md:text-gray-600 grid gap-6 ${className}`}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white md:text-gray-800">
              {companyName}
            </h3>
            <p className="mt-1 text-sm text-white/70 md:text-gray-500">
              Events production • Talent • Venues
            </p>
          </div>

          <div className="grid gap-3">
            <a
              href={`mailto:${email}`}
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-inherit transition hover:border-white/20"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                <Mail className="h-4 w-4" />
              </span>
              <div className="text-sm">
                <div className="font-medium text-inherit">{email}</div>
                <div className="text-xs text-white/60 md:text-gray-500">
                  General inquiries
                </div>
              </div>
            </a>

            <a
              href={`tel:${phone}`}
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-inherit transition hover:border-white/20"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                <Phone className="h-4 w-4" />
              </span>
              <div className="text-sm">
                <div className="font-medium text-inherit">{phone}</div>
                <div className="text-xs text-white/60 md:text-gray-500">
                  Bookings
                </div>
              </div>
            </a>

            <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-inherit">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                <MapPin className="h-4 w-4" />
              </span>
              <div className="text-sm">
                <div className="font-medium text-inherit">{address}</div>
                <div className="text-xs text-white/60 md:text-gray-500">
                  Location
                </div>
              </div>
            </div>
          </div>

          {socials.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-inherit transition hover:border-white/20"
                >
                  {s.Icon ? <s.Icon className="h-4 w-4" /> : null}
                  {s.name}
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h4 className="text-md mb-3 font-semibold text-white md:text-gray-800">
            FAQ
          </h4>
          <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
            {faqs.map((f, i) => (
              <details key={i} className="group">
                <summary className="list-none cursor-pointer select-none p-4 text-left text-white/90 md:text-gray-700">
                  <span className="mr-2 text-sm opacity-60">Q{i + 1}.</span>
                  {f.q}
                </summary>
                <div className="px-4 pb-4 text-white/70 md:text-gray-600">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-md font-semibold text-white md:text-gray-800">
          Location
        </h4>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 mt-3">
          <div className="flex items-center gap-2 p-3 text-white/80 md:text-gray-600">
            <MapPin className="h-4 w-4" />
            <p className="text-sm">{address} — Remote & on-site</p>
          </div>
          <div className="h-56 w-full bg-white/5">
            <iframe
              title="Map"
              className="h-full w-full opacity-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={mapSrc}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
