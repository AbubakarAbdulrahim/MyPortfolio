import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FlatPreviewCard } from "./FlatPreviewCard";
import { FLAGSHIP_CASE_STUDIES } from "@/data/portfolioData";

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        index="05"
        tag="Deep Dives"
        title="Featured Case Studies"
        subtitle="Three flagship systems broken down by problem constraints, technical approach, and measured production outcomes."
      />

      <div className="space-y-16 sm:space-y-20">
        {FLAGSHIP_CASE_STUDIES.map((study) => (
          <article
            key={study.id}
            className="card p-6 sm:p-10 space-y-8"
          >
            {/* Header / Meta */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-surface-border">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted mb-1">
                  <span className="text-accent font-semibold">{study.index}</span>
                  <span>/</span>
                  <span>{study.clientOrContext}</span>
                  <span>•</span>
                  <span>{study.period}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                  {study.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground font-normal mt-0.5">
                  {study.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {study.liveUrl && (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
                {study.githubUrl && (
                  <a
                    href={study.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono border border-surface-border text-foreground hover:border-foreground/40 transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {study.metrics.map((metric, mIdx) => (
                <div key={mIdx} className="border-l-2 border-surface-border pl-3">
                  <span className="text-xl sm:text-2xl font-semibold text-accent tracking-tight block">
                    {metric.value}
                  </span>
                  <span className="text-xs font-medium text-foreground block mt-0.5">
                    {metric.label}
                  </span>
                  <span className="text-[11px] font-mono text-muted block">
                    {metric.subtext}
                  </span>
                </div>
              ))}
            </div>

            {/* Deep Dive Grid: Problem & Approach vs Flat Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Problem → Approach → Result (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-muted uppercase tracking-wider block font-semibold">
                    1. Problem
                  </span>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {study.problem}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-surface-border">
                  <span className="text-xs font-mono text-muted uppercase tracking-wider block font-semibold">
                    2. Technical Approach & Architecture
                  </span>
                  <ul className="space-y-1.5">
                    {study.approach.map((step, sIdx) => (
                      <li key={sIdx} className="text-xs sm:text-sm text-muted leading-relaxed flex items-start gap-2">
                        <span className="text-accent mt-0.5">•</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-2 border-t border-surface-border">
                  <span className="text-xs font-mono text-muted uppercase tracking-wider block font-semibold">
                    3. Measured Production Outcomes
                  </span>
                  <ul className="space-y-1.5">
                    {study.results.map((res, rIdx) => (
                      <li key={rIdx} className="text-xs sm:text-sm text-muted leading-relaxed flex items-start gap-2">
                        <span className="text-accent mt-0.5">✓</span>
                        <span className="text-foreground">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-surface-border">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-background text-muted border border-surface-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Flat Preview Card (5 cols, No Mockup Phone Bezels) */}
              <div className="lg:col-span-5 h-full">
                <FlatPreviewCard caseStudy={study} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
