"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";

interface UnifiedHistoryItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: "Industry" | "Academic" | "Credential";
  summary: string;
  metrics?: string;
  tags: string[];
}

const HISTORY_TRACK: UnifiedHistoryItem[] = [
  {
    period: "Feb 2026 – Present",
    role: "Flutter Developer",
    organization: "Tubali (Fintech)",
    location: "Kano / Remote",
    type: "Industry",
    summary:
      "Spearheaded production migration from fragile email magic-links to carrier-grade OTP verification across account activation, password reset, and transaction PIN reset. Architected Dio interceptors and hardware keystore encryption.",
    metrics: "+38% auth onboarding conversion • 0% downtime",
    tags: ["Flutter", "Dart", "Provider", "go_router", "Dio", "Fintech Security"],
  },
  {
    period: "Dec 2025 – Present",
    role: "Mobile Developer",
    organization: "Hausasoft Technologies",
    location: "Kano, Nigeria",
    type: "Industry",
    summary:
      "Engineered real-time emergency incident reporting app featuring geofenced live push alerts, background sync, and on-device WebP compression (-65% payload size).",
    metrics: "~30% faster emergency response",
    tags: ["Flutter", "Firebase", "Google Maps API", "SQLite", "Cloud Functions"],
  },
  {
    period: "2025 – 2026",
    role: "B.Sc. Information Technology (Distinction)",
    organization: "Bayero University Kano (BUK)",
    location: "Kano, Nigeria",
    type: "Academic",
    summary:
      "Graduated with First Class equivalent standing. Capstone: Safetify (~2.1s alert delivery latency, 4.4/5.0 SUS benchmark score).",
    metrics: "CGPA 4.44 / 5.00",
    tags: ["Distributed Systems", "Software Engineering", "Network Security"],
  },
  {
    period: "2025 – Present",
    role: "B.Sc. Computer Science (Dual-Enrollment)",
    organization: "National Open University of Nigeria",
    location: "Nigeria",
    type: "Academic",
    summary:
      "Deepening theoretical foundations in Advanced Algorithms, Computational Theory, and Operating Systems while working actively in industry.",
    tags: ["Algorithms", "Computational Theory", "Operating Systems"],
  },
  {
    period: "2023",
    role: "Certified Cybersecurity Professional",
    organization: "Cisco Networking Academy",
    location: "Accredited Credential",
    type: "Credential",
    summary:
      "Comprehensive certification spanning Threat Mitigation, Network Architecture Security, Cryptography, and Defensive Security Operations.",
    metrics: "Verified Industry Credential",
    tags: ["Network Security", "Cryptography", "Threat Mitigation"],
  },
];

export function Timeline() {
  return (
    <section id="experience" className="py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        index="02"
        tag="Track Record"
        title="Experience & Education"
        subtitle="Chronological track combining commercial mobile engineering and academic distinctions."
      />

      <div className="space-y-6">
        {HISTORY_TRACK.map((item, index) => (
          <div
            key={index}
            className="card p-6 sm:p-8 flex flex-col md:flex-row md:items-baseline justify-between gap-6"
          >
            {/* Left Column: Period & Organization */}
            <div className="md:w-1/3 shrink-0">
              <span className="text-xs font-mono text-muted block mb-1">
                {item.period}
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                {item.role}
              </h3>
              <p className="text-xs sm:text-sm text-foreground font-normal mt-0.5">
                {item.organization}
              </p>
              <span className="text-xs font-mono text-muted block mt-1">
                {item.location}
              </span>

              {item.metrics && (
                <div className="mt-3 inline-block px-2.5 py-1 rounded text-xs font-mono text-accent bg-accent/5 border border-accent/20">
                  {item.metrics}
                </div>
              )}
            </div>

            {/* Right Column: Summary & Tags */}
            <div className="md:w-2/3 space-y-4">
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {item.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-background text-muted border border-surface-border"
                  >
                    {tag}
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
