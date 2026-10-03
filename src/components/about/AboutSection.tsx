"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { CAPABILITY_DOMAINS, SKILLS_WITH_PROGRESS, RESEARCH_INTERESTS, LANGUAGES } from "@/data/portfolioData";
import { Smartphone, Server, Sparkles, Shield, Users, LucideIcon, Microchip, BookOpen } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Smartphone,
  Server,
  Sparkles,
  Shield,
  Users,
};

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        tag="Engineering Profile"
        title="Background & Technical Capabilities"
        subtitle="Professional mobile application developer at Tubali Digital, founder of Hausasoft Technologies, and researcher in on-device AI."
      />

      {/* Editorial Narrative & Skills Progress Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-16 sm:pb-20 border-b border-surface-border">
        {/* Left Column: Human Editorial Bio from CV (6 cols) */}
        <div className="lg:col-span-6 space-y-4 text-sm sm:text-base text-foreground/85 leading-relaxed font-normal">
          <p className="text-lg font-medium text-foreground leading-snug">
            Mobile Application Developer building and improving production Flutter applications, currently engineering mobile fintech workflows at Tubali Digital.
          </p>

          <p className="text-muted text-sm sm:text-base">
            Experienced across Flutter, Dart, Firebase, REST APIs, authentication security, and application architecture. At Tubali Digital, I redesigned security-critical flows including account activation, login PIN resets, and transaction PIN resets—migrating from email-link verification to robust OTP-based verification to eliminate failed and delayed verifications.
          </p>

          <p className="text-muted text-sm sm:text-base">
            For my undergraduate thesis at Bayero University Kano (graduating with a 4.44 / 5.00 CGPA), I developed <strong className="text-foreground font-medium">Safetify</strong>, a real-time crowdsourced incident reporting mobile app tested across Kano State that delivers emergency alerts in 2.1 seconds on average. I am currently extending this work into research on on-device AI and model compression (quantization and pruning) to run anomaly detection directly on resource-constrained smartphones.
          </p>

          <p className="text-muted text-sm sm:text-base">
            In December 2022, I founded <strong className="text-foreground font-medium">Hausasoft Technologies</strong>, leading a small technical team and designing practical bootcamps that have mentored over 200+ early-career learners in web and mobile development with bilingual English and Hausa materials.
          </p>

          {/* Research Interests Pill Bar */}
          <div className="pt-4 border-t border-surface-border space-y-2">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider block">
              Active Research Interests
            </span>
            <div className="flex flex-wrap gap-2">
              {RESEARCH_INTERESTS.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 rounded-full text-xs bg-surface border border-surface-border text-foreground/90 font-normal"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Skills with Progress Bar Percentages (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="card p-6 sm:p-8 space-y-5 shadow-card">
            <div className="flex items-center justify-between pb-3 border-b border-surface-border">
              <div>
                <h3 className="text-base font-semibold text-foreground tracking-tight">
                  Skills & Proficiency
                </h3>
                <p className="text-xs text-muted mt-0.5">
                  Capability ratings based on production experience and technical execution
                </p>
              </div>
              <span className="text-xs font-semibold text-accent px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
                Verified
              </span>
            </div>

            {/* List of Skills with Clean Progress Bars */}
            <div className="space-y-4">
              {SKILLS_WITH_PROGRESS.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-foreground tracking-tight">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs font-semibold text-accent">
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Sleek Progress Bar Track */}
                  <div className="w-full h-2 rounded-full bg-surface-border overflow-hidden p-[1px]">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-700 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-muted leading-tight font-normal">
                    {skill.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Dialects from CV */}
          <div className="p-4 sm:p-5 rounded-2xl border border-surface-border bg-surface/50 flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="font-semibold text-foreground uppercase tracking-wider text-[11px]">
              Languages
            </span>
            <div className="flex items-center gap-4">
              {LANGUAGES.map((lang) => (
                <span key={lang.language} className="text-muted">
                  <strong className="text-foreground font-medium">{lang.language}:</strong> {lang.proficiency}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Structured Capability Domains (CV-Aligned Taxonomy) */}
      <div className="mt-16 sm:mt-20">
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
            Technical Capabilities
          </h3>
          <p className="text-xs sm:text-sm text-muted mt-1">
            End-to-end technical execution across mobile development, backend APIs, edge AI, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITY_DOMAINS.map((domain, idx) => {
            const Icon = ICON_MAP[domain.iconName] || Smartphone;
            return (
              <div
                key={domain.id}
                className={`card p-6 flex flex-col justify-between transition-all duration-300 hover:border-surface-border-hover group ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-surface border border-surface-border flex items-center justify-center text-accent group-hover:border-accent/40 group-hover:bg-accent/5 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-foreground tracking-tight">
                      {domain.title}
                    </h4>
                    <p className="text-xs text-accent font-medium mt-0.5">
                      {domain.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
                    {domain.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-surface-border text-xs text-muted">
                  <span className="font-medium text-foreground">Technologies: </span>
                  <span>{domain.skills.join(" • ")}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
