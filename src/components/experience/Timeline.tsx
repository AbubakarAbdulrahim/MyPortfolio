import { SectionHeading } from "@/components/ui/SectionHeading";
import { TIMELINE_EXPERIENCE } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function Timeline() {
  return (
    <section id="experience" className="py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        index="03"
        tag="Work History"
        title="Experience"
        subtitle="Track record across production fintech systems, venture development, and cross-platform mobile engineering."
      />

      <div className="space-y-6">
        {TIMELINE_EXPERIENCE.map((item) => (
          <div
            key={item.id}
            className="card p-6 sm:p-8 flex flex-col md:flex-row md:items-baseline justify-between gap-6"
          >
            {/* Left Column: Role, Company & Meta (1/3 width) */}
            <div className="md:w-1/3 shrink-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono text-muted">{item.period}</span>
                {item.isCurrent && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent/10 text-accent border border-accent/20">
                    CURRENT
                  </span>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-foreground tracking-tight">
                {item.role}
              </h3>

              <div className="text-xs sm:text-sm font-medium text-foreground mt-0.5">
                {item.company}
              </div>

              <div className="text-xs font-mono text-muted mt-1 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{item.location}</span>
              </div>

              <div className="mt-2 text-[11px] font-mono text-muted">
                TYPE: {item.type.toUpperCase()}
              </div>

              {item.metricHighlight && (
                <div className="mt-3 inline-block px-2.5 py-1 rounded text-xs font-mono text-accent bg-accent/5 border border-accent/20">
                  {item.metricHighlight.value} {item.metricHighlight.label}
                </div>
              )}
            </div>

            {/* Right Column: Narrative Summary & Technical Deliverables (2/3 width) */}
            <div className="md:w-2/3 space-y-3">
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {item.summary}
              </p>

              <div className="space-y-1.5 pt-1">
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-muted leading-relaxed">
                    <span className="text-accent mt-0.5">•</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-surface-border">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-background text-muted border border-surface-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
