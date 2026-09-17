import { SectionHeading } from "@/components/ui/SectionHeading";
import { EDUCATION_AND_CERTS, PERSONAL_INFO } from "@/data/portfolioData";
import { GraduationCap, Award, ShieldCheck, Users } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        index="07"
        tag="Credentials"
        title="Certifications & Education"
        subtitle="Formal computational degree programs and accredited Cisco Networking Academy certifications."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION_AND_CERTS.map((item) => (
          <div key={item.title} className="card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-background border border-surface-border text-accent font-medium">
                  {item.badge}
                </span>
                <span className="text-xs font-mono text-muted">{item.period}</span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-foreground tracking-tight">
                {item.title}
              </h3>

              <div className="text-xs sm:text-sm font-medium text-foreground mt-0.5">
                {item.institution}
              </div>

              <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed">
                {item.details}
              </p>
            </div>

            {item.gradeOrScore && (
              <div className="mt-4 pt-3 border-t border-surface-border flex items-center justify-between text-xs font-mono">
                <span className="text-muted">Standing:</span>
                <span className="text-accent font-medium">{item.gradeOrScore}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Volunteering Strip */}
      <div className="mt-8 card p-6 sm:p-8">
        <h3 className="text-sm font-semibold text-foreground tracking-tight pb-3 mb-4 border-b border-surface-border flex items-center gap-2">
          <Users className="w-4 h-4 text-accent" />
          <span>Institutional & Community Volunteering</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PERSONAL_INFO.volunteering.map((vol) => (
            <div key={vol.organization} className="space-y-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-xs font-semibold text-foreground">{vol.organization}</span>
                <span className="text-[10px] font-mono text-muted">{vol.period}</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                {vol.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
