import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHAT_I_DO } from "@/data/portfolioData";
import { Smartphone, Globe, Cpu, Sparkles, Users, LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Smartphone,
  Globe,
  Cpu,
  Sparkles,
  Users,
};

export function WhatIDoSection() {
  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        tag="Capabilities"
        title="What I Do"
        subtitle="Core areas of development and technical execution I work across day-to-day."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHAT_I_DO.map((item, idx) => {
          const Icon = ICON_MAP[item.iconName] || Smartphone;
          return (
            <div
              key={item.title}
              className={`card p-6 flex flex-col justify-between ${
                idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-surface border border-surface-border flex items-center justify-center text-accent mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-foreground tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
