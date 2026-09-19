import { SectionHeading } from "@/components/ui/SectionHeading";

const CREDENTIALS = [
  {
    period: "2021 – 2026",
    type: "Academic Degree",
    title: "B.Sc. in Information Technology",
    institution: "Bayero University Kano (BUK)",
    standing: "4.44 / 5.00 CGPA • Second Class Upper",
    details:
      "Four-year honors curriculum in computer science and IT principles, distributed systems, mobile development, and relational database architecture. Final-year Capstone: Safetify (Real-Time Emergency Dispatch System).",
    tags: ["Mobile Systems", "Database Design", "Distributed Systems", "Software Engineering"],
  },
  {
    period: "Issued Dec 2023",
    type: "Certification",
    title: "Certified Cybersecurity Analyst",
    institution: "Cisco Networking Academy",
    standing: "Verified Industry Credential",
    details:
      "Comprehensive certification covering network defense architectures, threat analysis, access control, and endpoint security protocols.",
    tags: ["Network Defense", "Threat Analysis", "Access Control", "Security Protocols"],
  },
  {
    period: "Issued Jan 2024",
    type: "Certification",
    title: "Certified Data Scientist",
    institution: "Cisco Networking Academy",
    standing: "Verified Industry Credential",
    details:
      "Professional credential covering data analytics pipelines, statistical modeling, and data-driven decision frameworks for software systems.",
    tags: ["Data Pipelines", "Statistical Modeling", "Data Analysis", "Decision Frameworks"],
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        tag="Credentials"
        title="Education & Certifications"
        subtitle="Academic degree from Bayero University Kano and verified industry credentials."
      />

      <div className="space-y-6">
        {CREDENTIALS.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-surface-border bg-surface/50 hover:bg-surface/80 p-6 sm:p-8 transition-all duration-300 hover:border-accent/40 group shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Left Rail: Timeline & Credential Type (4 cols) */}
              <div className="md:col-span-4 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono text-muted">
                  <span>{item.period}</span>
                  <span>•</span>
                  <span className="text-foreground font-medium">{item.type}</span>
                </div>
                <div className="text-sm font-semibold text-foreground tracking-tight">
                  {item.institution}
                </div>
              </div>

              {/* Right Column: Title, Standing, Details & Tech Button Pills (8 cols) */}
              <div className="md:col-span-8 space-y-3.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  {item.standing && (
                    <span className="text-xs font-mono text-accent font-medium shrink-0">
                      {item.standing}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
                  {item.details}
                </p>

                {/* Button-like Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-surface-border/60">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-background text-muted border border-surface-border hover:border-surface-border/80 hover:text-foreground transition-colors inline-flex items-center cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

