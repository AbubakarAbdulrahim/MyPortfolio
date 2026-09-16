"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github, ArrowUpRight, Sparkles, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECONDARY_PROJECTS } from "@/data/portfolioData";

export function OtherProjects() {
  return (
    <section id="other-projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        index="05"
        tag="Selected Secondary Systems"
        title="Other Notable Projects & Tooling"
        subtitle="Web applications, workflow automation engines, and open-source educational repositories."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {SECONDARY_PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 sm:p-7 rounded-3xl acrylic-card flex flex-col justify-between group hover:border-accent/40 transition-all duration-300"
          >
            <div>
              {/* Header category badge & Icon */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent font-semibold">
                  {project.category}
                </span>
                <div className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-foreground/70 group-hover:text-accent transition-colors">
                  <FolderGit2 className="w-4 h-4" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-display text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm text-foreground/75 leading-relaxed font-sans">
                {project.description}
              </p>

              {/* Metric Impact Pill */}
              {project.metrics && (
                <div className="mt-4 p-2.5 rounded-xl bg-black/5 dark:bg-white/[0.02] border border-black/10 dark:border-white/10 text-xs font-mono text-emerald-400">
                  {project.metrics}
                </div>
              )}
            </div>

            <div className="mt-6 pt-5 border-t border-black/5 dark:border-white/5">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/5 dark:bg-white/5 text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Inspect Source</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
