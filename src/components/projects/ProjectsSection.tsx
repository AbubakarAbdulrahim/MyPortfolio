"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FEATURED_PROJECTS } from "@/data/portfolioData";
import { ArrowUpRight, Github, ExternalLink, Check } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        tag="Projects"
        title="Featured Work"
        subtitle="Production mobile apps, campus platforms, and developer tools built with practical engineering."
      />

      <div className="space-y-12 sm:space-y-16">
        {FEATURED_PROJECTS.map((project, idx) => (
          <article
            key={project.id}
            className="card p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-accent/40 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Visual Preview (5 cols on lg) */}
              <div className="lg:col-span-5 order-1">
                {project.image ? (
                  <div className="relative rounded-xl border border-surface-border bg-surface overflow-hidden aspect-[16/10] shadow-sm group-hover:border-accent/30 transition-colors">
                    <Image
                      src={project.image}
                      alt={`${project.title} Preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 460px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white/90">
                      <span className="font-semibold text-xs tracking-tight">{project.title}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 text-accent">
                        {project.category}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl border border-surface-border bg-surface/50 p-8 flex flex-col justify-center items-center text-center aspect-[16/10]">
                    <span className="text-base font-semibold text-foreground tracking-tight">
                      {project.title}
                    </span>
                    <span className="text-xs text-muted mt-1">{project.tagline}</span>
                  </div>
                )}
              </div>

              {/* Content & Details (7 cols on lg) */}
              <div className="lg:col-span-7 order-2 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted">
                    <span className="text-accent font-medium">{project.category}</span>
                    {project.isFlagship && (
                      <>
                        <span>•</span>
                        <span className="text-foreground font-mono text-[11px] px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent">
                          Flagship
                        </span>
                      </>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2.5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono border border-surface-border text-foreground hover:border-foreground/40 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                        <ArrowUpRight className="w-3 h-3 opacity-60" />
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted font-normal mt-1 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Problem & Built Narrative */}
                <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-muted leading-relaxed font-normal">
                  <p>
                    <strong className="text-foreground font-medium">The Problem: </strong>
                    {project.problem}
                  </p>
                  <p>
                    <strong className="text-foreground font-medium">What I Built: </strong>
                    {project.built}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-surface-border">
                  {project.tags.map((tag) => (
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
          </article>
        ))}
      </div>

      {/* GitHub Repository Footer Callout */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/AbubakarAbdulrahim?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-foreground transition-colors py-2 px-4 rounded-full border border-surface-border hover:border-foreground/30 bg-surface/50"
        >
          <Github className="w-3.5 h-3.5 text-accent" />
          <span>Explore all open-source repositories on GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
        </a>
      </div>
    </section>
  );
}
