"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-[#0b0b12] text-white">
      <motion.div
        aria-hidden
        initial={{ x: "-10%" }}
        animate={{ x: "10%" }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 25 }}
        className="pointer-events-none absolute top-0 left-1/2 h-[2px] w-[120vw] -translate-x-1/2 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400"
      />

      <div className="container relative mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold tracking-tight">FlowSpace</h3>
            <p className="mt-2 text-sm text-white/60">
              Turning ideas into seamless experiences.
            </p>
          </div>

          <div className="flex flex-col space-y-2 text-sm">
            <Link
              href="/"
              className="hover:text-fuchsia-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-fuchsia-400 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="hover:text-fuchsia-400 transition-colors duration-200"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="hover:text-fuchsia-400 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4 md:justify-end">
            <Link
              href="https://twitter.com"
              target="_blank"
              className="group relative"
            >
              <span className="absolute inset-0 -z-10 rounded-full bg-fuchsia-500/20 opacity-0 blur-md transition group-hover:opacity-100" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-white/80 group-hover:text-fuchsia-400"
              >
                <path d="M19.633 7.997c.013.176.013.352.013.528 0 5.385-4.098 11.59-11.59 11.59-2.306 0-4.452-.676-6.258-1.844.321.038.63.051.964.051 1.919 0 3.68-.655 5.086-1.767a4.084 4.084 0 01-3.814-2.836c.25.038.5.064.763.064.368 0 .737-.051 1.08-.14a4.077 4.077 0 01-3.27-3.996v-.051c.55.306 1.187.49 1.869.516a4.07 4.07 0 01-1.812-3.397c0-.75.202-1.437.553-2.036a11.6 11.6 0 008.423 4.272 4.596 4.596 0 01-.102-.935 4.076 4.076 0 017.049-2.784 8.056 8.056 0 002.587-.987 4.087 4.087 0 01-1.792 2.257 8.162 8.162 0 002.348-.64 8.782 8.782 0 01-2.04 2.112z" />
              </svg>
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="group relative"
            >
              <span className="absolute inset-0 -z-10 rounded-full bg-cyan-400/20 opacity-0 blur-md transition group-hover:opacity-100" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-white/80 group-hover:text-cyan-400"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.478 2 2 6.478 2 12c0 4.418 2.865 8.167 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.944 0-1.091.39-1.984 1.029-2.682-.104-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.502.338 1.91-1.294 2.75-1.025 2.75-1.025.545 1.378.202 2.397.099 2.65.64.698 1.029 1.591 1.029 2.682 0 3.842-2.338 4.688-4.566 4.938.36.308.68.919.68 1.852 0 1.337-.012 2.417-.012 2.745 0 .268.18.58.687.481C19.138 20.163 22 16.416 22 12c0-5.522-4.478-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} FlowSpace. All rights reserved.</p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-fuchsia-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-fuchsia-400">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
