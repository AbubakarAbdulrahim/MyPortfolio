"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2, ChevronRight, Layers, Smartphone, ShieldCheck, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DeviceFrame } from "./DeviceFrame";
import { FLAGSHIP_CASE_STUDIES } from "@/data/portfolioData";
import { CaseStudy } from "@/types";

export function CaseStudies() {
  // Track active screen flow per case study
  const [activeScreens, setActiveScreens] = useState<Record<string, number>>({
    safetify: 0,
    "buk-student-app": 0,
    "tubali-otp-migration": 0,
  });

  const handleSelectScreen = (studyId: string, screenIndex: number) => {
    setActiveScreens((prev) => ({
      ...prev,
      [studyId]: screenIndex,
    }));
  };

  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        index="04"
        tag="Deep Architectural Case Studies"
        title="Flagship Mobile & Systems Work"
        subtitle="End-to-end engineering breakdowns featuring quantified performance metrics, architectural decoupling, and interactive device prototypes."
      />

      <div className="space-y-28 md:space-y-36">
        {FLAGSHIP_CASE_STUDIES.map((study, index) => {
          const isReversed = index % 2 !== 0; // Asymmetrical alternation
          const activeScreenIndex = activeScreens[study.id] || 0;

          return (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Distinctive Index Watermark */}
              <div
                className="absolute -top-14 right-0 sm:right-6 text-7xl sm:text-9xl font-black font-display text-foreground/[0.04] pointer-events-none select-none tracking-tighter"
                aria-hidden="true"
              >
                {study.index}
              </div>

              {/* Main Grid: Info & Metrics vs Hardware Mockup */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Information Column (7 cols) */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Top Meta Pill */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-accent text-white font-bold">
                      {study.index} // CASE STUDY
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-foreground/75">
                      {study.clientOrContext}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-accent font-semibold">
                      {study.role}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-foreground">
                      {study.title}
                    </h3>
                    <p className="mt-2 text-lg sm:text-xl font-medium text-accent font-display">
                      {study.subtitle}
                    </p>
                    <p className="mt-2 text-sm sm:text-base text-foreground/75 font-sans leading-relaxed">
                      {study.tagline}
                    </p>
                  </div>

                  {/* 4 Metric Callout Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                    {study.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex flex-col justify-between"
                      >
                        <span className="text-xl sm:text-2xl font-black font-display text-accent tracking-tight">
                          {metric.value}
                        </span>
                        <div className="mt-1">
                          <span className="block text-[11px] font-bold text-foreground leading-tight">
                            {metric.label}
                          </span>
                          <span className="block text-[9px] font-mono text-foreground/60 leading-tight mt-0.5">
                            {metric.subtext}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Problem Statement Card */}
                  <div className="p-5 rounded-2xl bg-rose-500/[0.04] border border-rose-500/20 space-y-1.5">
                    <div className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      <span>The Core Engineering Problem</span>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  {/* Architectural Approach Bullets */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-accent font-bold uppercase tracking-wider">
                      Technical Approach & Systems Delivery:
                    </div>
                    {study.approach.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-mono bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-foreground/85"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links & CTA */}
                  <div className="pt-2 flex items-center gap-4">
                    {study.githubUrl && (
                      <a
                        href={study.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-foreground/80 hover:text-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Inspect Repository Architecture</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Device Mockup Column (5 cols) */}
                <div
                  className={`lg:col-span-5 flex justify-center ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <DeviceFrame
                    caseStudy={study}
                    activeScreenIndex={activeScreenIndex}
                    onSelectScreen={(idx) => handleSelectScreen(study.id, idx)}
                  />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
