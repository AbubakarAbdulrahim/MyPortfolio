import { SectionHeading } from "@/components/ui/SectionHeading";
import { CAPABILITY_DOMAINS, CapabilityDomain } from "@/data/portfolioData";
import { Smartphone, Server, Sparkles, Shield, Users, LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Smartphone,
  Server,
  Sparkles,
  Shield,
  Users,
};

export function WhatIDoSection() {
  return (
    <section id="capabilities" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        tag="Capabilities"
        title="Technical Domains"
        subtitle="Core areas of development and technical execution I work across day-to-day."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CAPABILITY_DOMAINS.map((domain: CapabilityDomain, idx: number) => {
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
                  <h3 className="text-base font-semibold text-foreground tracking-tight">
                    {domain.title}
                  </h3>
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
    </section>
  );
}
