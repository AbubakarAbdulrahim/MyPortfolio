"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TIMELINE_EXPERIENCE } from "@/data/portfolioData";

export function Timeline() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        index="03"
        tag="Employment & Leadership Record"
        title="Production Engineering Timeline"
        subtitle="Track record of solving mission-critical auth, real-time dispatch, and developer enablement problems."
      />

      {/* Vertical Animated Timeline Container */}
      <div className="relative pl-6 sm:pl-10 ml-2 sm:ml-4 border-l-2 border-accent/25 space-y-12 sm:space-y-16">
        {TIMELINE_EXPERIENCE.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Electric Blue Timeline Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-6 h-6 rounded-full bg-surface dark:bg-[#07070A] border-2 border-accent flex items-center justify-center shadow-glow-sm">
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  entry.isCurrent ? "bg-accent animate-pulse" : "bg-accent/60"
                }`}
              />
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-3xl acrylic-card relative overflow-hidden transition-all duration-300 group-hover:border-accent/40">
              {/* Header Details */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-5 border-b border-black/10 dark:border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground">
                      {entry.role}
                    </h3>
                    <span className="text-sm font-semibold text-accent font-display">
                      @ {entry.company}
                    </span>
                    {entry.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        CURRENT ROLE
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-foreground/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-accent" /> {entry.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-accent" /> {entry.location}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                      {entry.type}
                    </span>
                  </div>
                </div>

                {/* Metric Callout Highlight Badge */}
                {entry.metricHighlight && (
                  <div className="lg:self-center flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-accent/10 border border-accent/25 self-start">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <div>
                      <div className="text-lg font-bold font-display text-accent leading-none">
                        {entry.metricHighlight.value}
                      </div>
                      <div className="text-[11px] font-mono text-foreground/70">
                        {entry.metricHighlight.label}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Summary */}
              <p className="mt-5 text-sm sm:text-base text-foreground/85 leading-relaxed font-sans">
                {entry.summary}
              </p>

              {/* Detailed Technical Bullet Highlights */}
              <div className="mt-5 space-y-2.5">
                {entry.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/75 leading-normal">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Applied */}
              <div className="mt-6 pt-5 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-foreground/50 mr-1">STACK:</span>
                {entry.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-black/5 dark:bg-white/[0.04] border border-black/5 dark:border-white/10 text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
