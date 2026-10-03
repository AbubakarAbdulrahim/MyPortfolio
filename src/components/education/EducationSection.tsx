import { SectionHeading } from "@/components/ui/SectionHeading";
import { EDUCATION_AND_CERTS, LEADERSHIP_AND_COMMUNITY } from "@/data/portfolioData";
import { CheckCircle2 } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        tag="Academic & Industry Honors"
        title="Education & Certifications"
        subtitle="Foundational degree in Information Technology from Bayero University Kano alongside verified industry credentials."
      />

      <div className="space-y-6">
        {EDUCATION_AND_CERTS.map((item) => (
          <div
            key={item.title}
            className="card p-6 sm:p-8 transition-all duration-300 hover:border-surface-border-hover group"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Left Column: Timeline, Institution & Type (4 cols) */}
              <div className="md:col-span-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-muted">
                  <span>{item.period}</span>
                  <span>•</span>
                  <span className="text-foreground">{item.badge}</span>
                </div>
                <div className="text-sm font-semibold text-foreground tracking-tight">
                  {item.institution}
                </div>
              </div>

              {/* Right Column: Title, Grade/Standing, Details (8 cols) */}
              <div className="md:col-span-8 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  {item.gradeOrScore && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                      <span>{item.gradeOrScore}</span>
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
                  {item.details}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* University Leadership & Community Involvement from CV */}
      <div className="mt-14 pt-8 border-t border-surface-border">
        <span className="text-xs font-semibold tracking-wider text-muted uppercase block mb-4">
          Leadership & Community Involvement
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {LEADERSHIP_AND_COMMUNITY.map((item) => (
            <div key={item.organization} className="p-4 rounded-xl border border-surface-border bg-surface/50 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-foreground truncate">{item.organization}</span>
              </div>
              <span className="text-[11px] text-accent block">{item.period}</span>
              <p className="text-xs text-muted leading-relaxed pt-1">
                <strong>{item.role}:</strong> {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
