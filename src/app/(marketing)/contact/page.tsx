"use client";

import { motion } from "framer-motion";
import AnimatedParticles from "@/app/components/AnimatedParticles";
import ContactCard from "./components/ContactCard";
import { Mail, Phone, MessageCircle } from "lucide-react";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  return (
    <main className="relative py-10 overflow-hidden bg-[#0b0b12] text-white rounded-xl">
      {/* big spinning conic */}
      <motion.div
        aria-hidden
        initial={{ rotate: 0, scale: 1 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        className="pointer-events-none absolute -top-40 -left-40 h-[60rem] w-[60rem] rounded-xl opacity-60 blur-3xl"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #7c3aed, #06b6d4, #22c55e, #f43f5e, #f59e0b, #7c3aed)",
        }}
      />

      {/* soft radial wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_35%,#000_30%,transparent_70%)]"
      >
        <div className="absolute inset-x-0 top-0 mx-auto h-[44rem] w-[44rem] rounded-full bg-gradient-to-br from-fuchsia-500/30 via-sky-400/20 to-emerald-400/30 blur-2xl" />
      </div>

      {/* grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />

      <AnimatedParticles />

      <section className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-br text-gray-600 bg-clip-text text-5xl font-black leading-tight tracking-tight  md:text-6xl lg:text-8xl"
        >
          Contact
        </motion.h1>

        <div className="mx-auto pt-10 grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ContactCard
            icon={Mail}
            label="Email"
            helper="hello@flowspace.app"
            href="mailto:hello@flowspace.app"
          />
          <ContactCard
            icon={Phone}
            label="Phone"
            helper="Tap to call"
            href="tel:+971000000000"
          />
          <ContactCard
            icon={MessageCircle}
            label="WhatsApp"
            helper="Say hi on WhatsApp"
            href="https://wa.me/0000000000"
            target="_blank"
          />
        </div>
      </section>
      <section className="relative z-10 px-4">
        <div className="mx-auto mt-10 grid w-full max-w-5xl gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm to="hello@flowspace.app" />
          </div>
        </div>
      </section>
      <motion.div
        aria-hidden
        initial={{ x: "-10%" }}
        animate={{ x: "10%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 18 }}
        className="pointer-events-none absolute bottom-[-6rem] left-1/2 h-[14rem] w-[120vw] -translate-x-1/2 rotate-2 bg-gradient-to-r from-fuchsia-500/40 via-cyan-400/40 to-emerald-400/40 blur-2xl"
      />
    </main>
  );
}
