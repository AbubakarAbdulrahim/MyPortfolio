"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Github, Linkedin, Mail, Heart, Terminal, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Footer() {
  const [kanoTime, setKanoTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      // West Africa Time is UTC+1
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setKanoTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-surface dark:bg-[#06070B] py-14 px-4 sm:px-6 lg:px-8 text-foreground/75 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-black/5 dark:border-white/5">
          <div>
            <span className="text-lg font-bold font-display text-foreground tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs font-mono text-foreground/60 mt-0.5">
              Software Engineer & Mobile App Architect • Kano, Nigeria
            </p>
          </div>

          {/* Kano Local Time Widget & Availability Pill */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <div className="px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>KANO, NG (WAT): {kanoTime || "12:00:00"}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-foreground flex items-center gap-1.5 transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Metadata & Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-foreground/60">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-accent">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>WCAG AA Accessible</span>
            </span>
            <span>•</span>
            <span>Built with Next.js 14, Tailwind CSS & Framer Motion</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
