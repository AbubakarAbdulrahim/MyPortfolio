"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILL_PROGRESS_LIST } from "@/data/portfolioData";

export function SkillsMatrix() {
  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        index="04"
        tag="Competency Matrix"
        title="Skills & Technical Proficiency"
        subtitle="Evaluated competencies across client architectures, production backends, and deployment pipelines."
      />

      <div className="card p-6 sm:p-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {SKILL_PROGRESS_LIST.map((item) => (
            <div key={item.skill} className="space-y-2">
              <div className="flex items-baseline justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground tracking-tight">
                    {item.skill}
                  </span>
                  <span className="text-[10px] font-mono text-muted px-2 py-0.5 rounded bg-background border border-surface-border">
                    {item.category}
                  </span>
                </div>
                <span className="text-xs font-mono text-accent font-semibold">
                  {item.percentage}%
                </span>
              </div>

              {/* Animated Progress Bar Track */}
              <div className="h-1.5 w-full rounded-full bg-background border border-surface-border overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percentage}%` }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-accent"
                />
              </div>

              {item.context && (
                <p className="text-[11px] text-muted font-normal leading-relaxed">
                  {item.context}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-surface-border flex items-center justify-between text-[11px] font-mono text-muted">
          <span>Percentages reflect relative production experience and self-assessed confidence depth.</span>
          <span>Verified Tooling</span>
        </div>
      </div>
    </section>
  );
}
