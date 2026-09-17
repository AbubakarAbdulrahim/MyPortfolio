import { SectionHeading } from "@/components/ui/SectionHeading";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GraduationCap, Languages, Compass, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        index="02"
        tag="Profile & Background"
        title="About Abubakar"
        subtitle="Software engineer and mobile architect specializing in high-concurrency client applications and scalable backend systems."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Bio narrative (8 cols) */}
        <div className="md:col-span-8 card p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-semibold text-foreground tracking-tight">
            Engineering Background & Education
          </h3>

          <p className="text-xs sm:text-sm text-muted leading-relaxed">
            Based in Kano State, Nigeria, I engineer production mobile applications and distributed backend services. My focus centers on building zero-latency Flutter client architectures, real-time Firebase backends, and full-stack React/Django ecosystems that stand up to real-world network and concurrency constraints.
          </p>

          <p className="text-xs sm:text-sm text-muted leading-relaxed">
            I completed my <strong className="text-foreground font-medium">B.Sc. in Information Technology</strong> at <strong className="text-foreground font-medium">Bayero University Kano (BUK)</strong> (Jan 2021 – Feb 2026), graduating with a <strong className="text-accent font-medium">4.44 / 5.00 CGPA</strong> (Second Class Honours). During my undergraduate studies, I was an active member of the <strong className="text-foreground font-medium">Google Developer Student Clubs (GDSC BUK)</strong> and the <strong className="text-foreground font-medium">MSSN Faculty of Computing</strong>. Concurrently, I am pursuing a dual-degree <strong className="text-foreground font-medium">B.Sc. in Computer Science</strong> at the <strong className="text-foreground font-medium">National Open University of Nigeria (NOUN)</strong> (started Mar 2023) to deepen my theoretical foundations in advanced algorithms and operating systems.
          </p>

          <div className="pt-3 border-t border-surface-border">
            <h4 className="text-xs font-mono text-muted uppercase tracking-wider mb-2">
              Research Interests
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {PERSONAL_INFO.researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-background text-muted border border-surface-border"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* At a glance metadata (4 cols) */}
        <div className="md:col-span-4 space-y-4">
          <div className="card p-6 space-y-4 text-xs font-mono">
            <div>
              <span className="text-muted block mb-1">LOCATION</span>
              <div className="flex items-center gap-1.5 text-foreground font-medium">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-surface-border">
              <span className="text-muted block mb-1.5">LANGUAGES</span>
              <ul className="space-y-1 text-foreground font-sans">
                {PERSONAL_INFO.languages.map((lang) => (
                  <li key={lang.name} className="flex justify-between text-xs">
                    <span>{lang.name}</span>
                    <span className="font-mono text-muted">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-surface-border">
              <span className="text-muted block mb-1.5">CAMPUS LEADERSHIP</span>
              <ul className="space-y-1.5 text-foreground font-sans text-xs">
                {PERSONAL_INFO.volunteering.map((v) => (
                  <li key={v.organization}>
                    <span className="font-medium block text-foreground">{v.organization}</span>
                    <span className="font-mono text-[11px] text-muted">{v.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
