"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Layers, ShieldCheck, Terminal, MapPin, Sparkles } from "lucide-react";
import { AmbientGlow } from "./AmbientGlow";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ResumeModal } from "@/components/ui/ResumeModal";

export function HeroSection() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <AmbientGlow />

      <div className="max-w-7xl mx-auto w-full">
        {/* Telemetry Status Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-mono font-semibold tracking-wide shadow-glow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span>AVAILABLE FOR SELECT ROLES & CONTRACTS</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-foreground/60 px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/[0.03]">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>Kano, NG • {PERSONAL_INFO.coordinates}</span>
          </div>
        </motion.div>

        {/* Main Display Headline */}
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-foreground leading-[1.04]"
          >
            Abubakar <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-electric-400 to-cyan-400">Abdulrahim</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 sm:mt-6 inline-block"
          >
            <p className="text-lg sm:text-2xl md:text-3xl font-medium text-foreground/90 font-display tracking-tight">
              Software Engineer <span className="text-accent font-semibold">|</span> Mobile App Architect
            </p>
            <p className="mt-1 text-sm sm:text-base font-mono text-accent/90">
              Flutter • Firebase • React.js • Django REST Framework
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-xl text-foreground/75 font-sans leading-relaxed max-w-3xl"
          >
            {PERSONAL_INFO.heroSubtext}
          </motion.p>
        </div>

        {/* Action Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
        >
          {/* Primary CTA: Resume */}
          <button
            onClick={() => setResumeOpen(true)}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-hover active:scale-95 transition-all duration-200 shadow-glow focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <Download className="w-4 h-4" />
            <span>Download Curriculum Vitae</span>
          </button>

          {/* Secondary CTA: Projects */}
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-foreground text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <Layers className="w-4 h-4 text-accent" />
            <span>Explore Flagship Work</span>
            <ArrowDown className="w-3.5 h-3.5 opacity-60" />
          </a>

          {/* Recruiter fast-dial pill */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs font-mono text-foreground/70 hover:text-foreground transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-accent" />
            <span>Book an Interview / Project Call</span>
          </a>
        </motion.div>

        {/* Confident Metrics Bar (Apple/Fluent Key Performance Indicators) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-8 border-t border-black/10 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-foreground tracking-tight flex items-baseline gap-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-accent font-display mt-0.5">
                {stat.label}
              </span>
              <span className="text-[11px] font-mono text-foreground/55 mt-0.5">
                {stat.subtext}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
