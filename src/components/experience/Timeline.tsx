import { SectionHeading } from "@/components/ui/SectionHeading";
import { TIMELINE_EXPERIENCE } from "@/data/portfolioData";

export function Timeline() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        tag="Experience"
        title="Work History"
        subtitle="Recent roles across production mobile engineering, community initiatives, and technical internships."
      />

      {/* Apple-Style Career Ledger (Hairline Dividers, Sleek Darkmode Contrast) */}
      <div className="border-t border-surface-border">
        {TIMELINE_EXPERIENCE.map((item) => (
          <div
            key={item.id}
            className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start border-b border-surface-border group"
          >
            {/* Left Rail: Company, Period & Context (4 cols) */}
            <div className="md:col-span-4 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-muted">
                <span>{item.period}</span>
                {item.isCurrent && (
                  <>
                    <span>•</span>
                    <span className="text-foreground font-medium">Present</span>
                  </>
                )}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground tracking-tight">
                  {item.company}
                </h3>
                <div className="text-xs font-mono text-muted mt-0.5">
                  {item.location} • {item.type}
                </div>
              </div>
            </div>

            {/* Right Column: Role, Narrative, Highlights & Technologies (8 cols) */}
            <div className="md:col-span-8 space-y-3.5">
              <div>
                <h4 className="text-base font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors">
                  {item.role}
                </h4>
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal mt-1">
                  {item.summary}
                </p>
              </div>

              <ul className="space-y-1.5 pt-1">
                {item.highlights.map((highlight, hIdx) => (
                  <li
                    key={hIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed font-normal"
                  >
                    <span className="text-muted text-sm leading-none mt-1 shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-[11px] font-mono bg-background text-muted border border-surface-border hover:border-surface-border/80 hover:text-foreground transition-colors inline-flex items-center cursor-default"
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
