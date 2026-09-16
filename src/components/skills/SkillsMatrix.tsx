"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Globe, Server, Database, Cpu, GitBranch, CheckCircle2, Sparkles, Terminal } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="w-4 h-4" />;
      case "Globe":
        return <Globe className="w-4 h-4" />;
      case "Server":
        return <Server className="w-4 h-4" />;
      case "Database":
        return <Database className="w-4 h-4" />;
      case "Cpu":
        return <Cpu className="w-4 h-4" />;
      case "GitBranch":
      default:
        return <GitBranch className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        index="02"
        tag="Full-Stack & Mobile Stack"
        title="Technical Stack & Architectural Matrix"
        subtitle="Organized by specialization with concrete production context. Every technology listed has been deployed to end users."
      />

      {/* Category Tab Selector (Fluent / Material 3 Pill System) */}
      <div className="flex flex-wrap gap-2 pb-6 border-b border-black/10 dark:border-white/10 mb-10">
        {SKILL_CATEGORIES.map((category, idx) => {
          const isActive = activeCategory === idx;
          return (
            <button
              key={category.title}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent ${
                isActive
                  ? "bg-accent text-white font-semibold shadow-glow"
                  : "bg-black/5 dark:bg-white/[0.04] text-foreground/75 hover:text-foreground hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/10"
              }`}
            >
              {getCategoryIcon(category.iconName)}
              <span>{category.title.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Display */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h3 className="text-2xl font-bold font-display text-foreground flex items-center gap-2.5">
              <span className="text-accent">{getCategoryIcon(SKILL_CATEGORIES[activeCategory].iconName)}</span>
              <span>{SKILL_CATEGORIES[activeCategory].title}</span>
            </h3>
            <p className="text-sm font-sans text-foreground/70 mt-1">
              {SKILL_CATEGORIES[activeCategory].subtitle}
            </p>
          </div>
          <span className="text-xs font-mono text-accent font-semibold px-3 py-1 rounded-full bg-accent/10 border border-accent/25 self-start">
            {SKILL_CATEGORIES[activeCategory].skills.length} TECHNOLOGIES
          </span>
        </div>

        {/* Skill Cards Grid (NO boring progress bars - rich cards with context) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="wait">
            {SKILL_CATEGORIES[activeCategory].skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className={`p-5 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                  skill.highlight
                    ? "bg-surface dark:bg-[#0E0F1A] border-accent/30 dark:border-accent/30 shadow-glow-sm hover:border-accent"
                    : "bg-surface dark:bg-[#0A0B12] border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/20"
                }`}
              >
                {/* Subtle top highlight bar on featured items */}
                {skill.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-cyan-400" />
                )}

                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold font-display text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                    <span>{skill.name}</span>
                    {skill.highlight && (
                      <Sparkles className="w-3.5 h-3.5 text-accent" />
                    )}
                  </h4>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      skill.level === "Production Expert"
                        ? "bg-accent/15 text-accent border-accent/30 font-semibold"
                        : "bg-black/5 dark:bg-white/5 text-foreground/60 border-black/10 dark:border-white/10"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs font-sans text-foreground/75 leading-relaxed">
                  {skill.context}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
