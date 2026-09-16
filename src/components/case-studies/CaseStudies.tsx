"use client";

import { useState } from "react";
import { Github, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DeviceFrame } from "./DeviceFrame";
import { FLAGSHIP_CASE_STUDIES } from "@/data/portfolioData";

export function CaseStudies() {
  const [activeScreens, setActiveScreens] = useState<Record<string, number>>({
    safetify: 0,
    "buk-student-app": 0,
    "tubali-otp-migration": 0,
  });

  const handleSelectScreen = (studyId: string, screenIndex: number) => {
    setActiveScreens((prev) => ({
      ...prev,
      [studyId]: screenIndex,
    }));
  };

  return (
    <section id="work" className="py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        index="01"
        tag="Selected Work"
        title="Production Mobile Architectures"
        subtitle="Three flagship systems focused on low-latency dispatch, on-device streaming, and fintech authentication."
      />

      <div className="space-y-20 sm:space-y-28">
        {FLAGSHIP_CASE_STUDIES.map((study, index) => {
          const isReversed = index % 2 !== 0;
          const activeScreenIndex = activeScreens[study.id] || 0;

          return (
            <article
              key={study.id}
              className="card p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                {/* Information Column (7 cols) */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Context & Year */}
                  <div className="flex items-center gap-2 text-xs font-mono text-muted">
                    <span className="text-accent font-semibold">{study.index}</span>
                    <span>/</span>
                    <span>{study.clientOrContext}</span>
                    <span>•</span>
                    <span>{study.period}</span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                      {study.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-foreground font-normal">
                      {study.subtitle}
                    </p>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {study.tagline}
                    </p>
                  </div>

                  {/* Core Metrics Strip - 2 key numbers */}
                  <div className="grid grid-cols-2 gap-4 py-1">
                    {study.metrics.slice(0, 2).map((metric, mIdx) => (
                      <div key={mIdx} className="border-l-2 border-surface-border pl-3">
                        <span className="text-xl sm:text-2xl font-semibold text-accent tracking-tight block">
                          {metric.value}
                        </span>
                        <span className="text-xs font-mono text-muted block mt-0.5">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Concise Problem & Solution Notes */}
                  <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                    <p>
                      <strong className="text-foreground font-medium">Problem: </strong>
                      {study.problem}
                    </p>
                    <p>
                      <strong className="text-foreground font-medium">Architecture: </strong>
                      {study.approach[0]} {study.approach[1]}
                    </p>
                  </div>

                  {/* Tech Stack Chips & Code Link */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-surface-border">
                    <div className="flex flex-wrap gap-1.5">
                      {study.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded text-xs font-mono bg-background text-muted border border-surface-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {study.githubUrl && (
                      <a
                        href={study.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-accent hover:underline"
                      >
                        <span>Inspect Repo</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Device Mockup Column (5 cols) */}
                <div
                  className={`lg:col-span-5 flex justify-center ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <DeviceFrame
                    caseStudy={study}
                    activeScreenIndex={activeScreenIndex}
                    onSelectScreen={(idx) => handleSelectScreen(study.id, idx)}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
