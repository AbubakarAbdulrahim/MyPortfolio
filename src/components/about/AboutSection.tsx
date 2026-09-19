import { SectionHeading } from "@/components/ui/SectionHeading";

const TECH_SPEC = [
  {
    category: "Languages",
    items: ["Dart", "TypeScript", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Mobile Core",
    items: ["Flutter", "Provider", "GoRouter", "SQLite", "Hive"],
  },
  {
    category: "Cloud & Backend",
    items: ["Firebase", "Firestore", "Django", "REST APIs", "PostgreSQL", "Supabase"],
  },
  {
    category: "Engineering",
    items: ["Git / GitHub", "Postman", "Clean Architecture", "Responsive UI"],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        tag="About"
        title="Background & Technical Focus"
        subtitle="A closer look at my engineering background, civic initiatives, and technical toolkit."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Human Editorial Bio (6 cols) */}
        <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-muted leading-relaxed font-normal">
          <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
            I engineer production mobile applications and cloud platforms with Flutter, Firebase, and modern web tools.
          </p>

          <p>
            Based in Kano, Nigeria, my engineering focus centers on offline-first architectures, low-latency sync, and building reliable mobile systems that hold up under real-world network and device constraints.
          </p>

          <p>
            Outside of contract and production codebases, I founded <strong className="text-foreground font-medium">Hausasoft Technologies</strong> in Kano, building community digital tools and organizing practical developer bootcamps to mentor emerging software engineers across northern Nigeria.
          </p>

          <div className="pt-4 border-t border-surface-border">
            <p className="text-foreground text-xs sm:text-sm leading-relaxed">
              <span className="font-semibold text-foreground">Engineering Standard:</span>{" "}
              <span className="text-muted">
                Design for intermittent connectivity from day one, prioritize deterministic state management, and write code that lasts.
              </span>
            </p>
          </div>
        </div>

        {/* Right Column: Apple Technical Specification Ledger (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="border-t border-surface-border">
            {TECH_SPEC.map((spec) => (
              <div key={spec.category} className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline border-b border-surface-border">
                <span className="sm:col-span-4 text-xs font-mono text-muted uppercase tracking-wider font-medium">
                  {spec.category}
                </span>
                <div className="sm:col-span-8 flex flex-wrap gap-1.5">
                  {spec.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-background text-muted border border-surface-border hover:border-surface-border/80 hover:text-foreground transition-colors inline-flex items-center cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 text-xs font-mono text-muted/80">
            <span>Primary Focus: </span>
            <span className="text-foreground font-medium">Cross-Platform Flutter & Firebase Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
}

