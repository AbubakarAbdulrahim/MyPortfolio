import { SectionHeading } from "@/components/ui/SectionHeading";
import { TIMELINE_EXPERIENCE } from "@/data/portfolioData";

export function Timeline() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        tag="Career History"
        title="Experience & Production Work"
        subtitle="Track record in production mobile engineering, institutional IT, and grassroots technology mentorship."
      />

      {/* Editorial Career Ledger */}
      <div className="border-t border-surface-border divide-y divide-surface-border">
        {TIMELINE_EXPERIENCE.map((item) => (
          <div
            key={item.id}
            className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start group"
          >
            {/* Left Column: Organization, Period & Scope (4 cols) */}
            <div className="md:col-span-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-muted">
                <span>{item.period}</span>
                {item.isCurrent && (
                  <>
                    <span>•</span>
                    <span className="text-foreground font-semibold px-2 py-0.5 rounded-full bg-surface border border-surface-border text-[11px]">
                      Present
                    </span>
                  </>
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground tracking-tight">
                  {item.company}
                </h3>
                <div className="text-xs text-muted mt-0.5">
                  {item.location} • <span className="text-foreground/80">{item.type}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Role, Engineering Narrative, Highlights (8 cols) */}
            <div className="md:col-span-8 space-y-4">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors">
                  {item.role}
                </h4>
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal mt-1.5">
                  {item.summary}
                </p>
              </div>

              <ul className="space-y-2 pt-1">
                {item.highlights.map((highlight, hIdx) => (
                  <li
                    key={hIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed font-normal"
                  >
                    <span className="text-accent text-sm leading-none mt-1 shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies as clean inline metadata */}
              <div className="pt-2 text-xs text-muted flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-medium text-foreground">Stack & Tools: </span>
                <span>{item.technologies.join(" • ")}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
