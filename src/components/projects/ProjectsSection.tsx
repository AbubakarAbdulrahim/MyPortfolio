"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FEATURED_PROJECTS } from "@/data/portfolioData";
import { ArrowUpRight, Github, ExternalLink, ShieldCheck, CheckCircle2, Download } from "lucide-react";

export function ProjectsSection() {
  const flagshipProjects = FEATURED_PROJECTS.filter((p) => p.isFlagship);
  const secondaryProjects = FEATURED_PROJECTS.filter((p) => !p.isFlagship);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        tag="Engineering Work"
        title="Featured Projects & Research"
        subtitle="Production mobile systems, BUK capstone research, and civic applications designed for reliability in emerging markets."
      />

      {/* Flagship Showcases (Differentiated Scale & Depth) */}
      <div className="space-y-16 sm:space-y-24">
        {flagshipProjects.map((project) => (
          <article
            key={project.id}
            className="card p-6 sm:p-8 lg:p-12 transition-all duration-300 hover:border-surface-border-hover group shadow-card"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Product Visual Frame (6 cols on lg) */}
              <div className="lg:col-span-6 order-1">
                <div className="relative rounded-2xl border border-surface-border bg-surface overflow-hidden aspect-[16/10] shadow-card group-hover:border-surface-border-hover transition-colors">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} Interface`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 540px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                      <span className="text-lg font-semibold text-foreground">{project.title}</span>
                      <span className="text-xs text-muted mt-1">{project.tagline}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Editorial Architecture Narrative (6 cols on lg) */}
              <div className="lg:col-span-6 order-2 space-y-5">
                {/* Meta & Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold tracking-wider text-accent uppercase">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted">•</span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Flagship</span>
                    </span>
                  </div>

                  {/* External Links */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.appDownloadUrl && (
                      <a
                        href={project.appDownloadUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-brand-green/10 text-brand-green border border-brand-green/30 font-medium hover:bg-brand-green hover:text-white transition-all"
                        title="Download Mobile App APK (Google Drive)"
                      >
                        <Download className="w-3 h-3" />
                        <span>Get APK</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
                      >
                        <span>Live Console</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-surface border border-surface-border text-foreground hover:border-surface-border-hover hover:bg-surface-hover transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3 h-3 opacity-60" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-foreground/80 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Problem Statement */}
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <span className="font-semibold text-foreground uppercase tracking-wider text-[11px] block">
                    The Problem
                  </span>
                  <p className="text-muted leading-relaxed font-normal">
                    {project.problem}
                  </p>
                </div>

                {/* Solution & Architecture */}
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <span className="font-semibold text-foreground uppercase tracking-wider text-[11px] block">
                    Engineering Solution
                  </span>
                  <p className="text-muted leading-relaxed font-normal">
                    {project.solution}
                  </p>
                </div>

                {/* Key Technical Highlights (Including CV Thesis metrics) */}
                {project.architectureHighlights && project.architectureHighlights.length > 0 && (
                  <div className="pt-2">
                    <ul className="space-y-1.5">
                      {project.architectureHighlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-foreground/90 leading-relaxed font-normal"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contextual Technologies */}
                <div className="pt-3 border-t border-surface-border flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                  <span className="font-medium text-foreground">Core Stack:</span>
                  <span>{project.technology.join(" • ")}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Secondary Projects Grid (2 Columns, Clean Microsoft/Apple Structure) */}
      <div className="mt-16 sm:mt-24">
        <div className="mb-8">
          <span className="text-xs font-semibold tracking-wider text-muted uppercase block">
            Additional Platforms & Industrial Placement Work
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <article
              key={project.id}
              className="card p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-surface-border-hover group"
            >
              <div className="space-y-5">
                {/* Visual Preview */}
                <div className="relative rounded-xl border border-surface-border bg-surface overflow-hidden aspect-[16/10] shadow-sm">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Header & Category */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-accent">
                    {project.category}
                  </span>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted hover:text-foreground transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </a>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-foreground/80 mt-1 font-medium">
                    {project.subtitle}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed font-normal">
                    {project.problem}
                  </p>
                </div>

                {/* Architecture Highlights */}
                {project.architectureHighlights && (
                  <ul className="space-y-1.5 pt-1">
                    {project.architectureHighlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2 text-xs text-foreground/80 leading-relaxed font-normal"
                      >
                        <span className="text-accent text-xs leading-none mt-1 shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Technologies */}
              <div className="pt-4 mt-6 border-t border-surface-border text-xs text-muted">
                <span className="font-medium text-foreground">Stack: </span>
                <span>{project.technology.join(" • ")}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* GitHub Callout */}
      <div className="mt-14 text-center">
        <a
          href="https://github.com/AbubakarAbdulrahim?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-medium text-muted hover:text-foreground transition-colors py-2.5 px-5 rounded-full border border-surface-border hover:border-surface-border-hover bg-surface hover:bg-surface-hover shadow-subtle"
        >
          <Github className="w-3.5 h-3.5 text-accent" />
          <span>Explore all open-source repositories on GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
        </a>
      </div>
    </section>
  );
}
