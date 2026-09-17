"use client";

import { useEffect, useState } from "react";
import { Github, ArrowUpRight, FolderGit2, Star, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VERIFIED_GITHUB_REPOS } from "@/data/portfolioData";
import { GitHubRepo } from "@/types";

export function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>(VERIFIED_GITHUB_REPOS);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://api.github.com/users/AbubakarAbdulrahim/repos?per_page=100&sort=updated"
        );
        if (!res.ok) return; // Keep verified fallback
        const data = await res.json();
        if (Array.isArray(data)) {
          const filtered: GitHubRepo[] = data
            .filter((r: any) => !r.fork && r.name && r.description && r.name !== "Portfolio")
            .map((r: any) => ({
              name: r.name,
              language: r.language || "Dart / TypeScript",
              description: r.description,
              stars: r.stargazers_count || 0,
              url: r.html_url,
              homepage: r.homepage && r.homepage.trim() !== "" ? r.homepage : null,
            }));

          if (filtered.length > 0) {
            setRepos(filtered);
          }
        }
      } catch (err) {
        // Fallback already pre-set to verified repos
      } finally {
        setIsLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        index="06"
        tag="Repository Ledger"
        title="All Projects"
        subtitle="Public non-fork repositories pulled from GitHub, encompassing mobile applications, web platforms, and backend services."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div
            key={repo.name}
            className="card p-6 flex flex-col justify-between group hover:border-accent/40 transition-colors"
          >
            <div>
              {/* Header: Language & Stars */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-background border border-surface-border text-accent font-medium">
                  {repo.language || "Dart"}
                </span>

                <div className="flex items-center gap-2 text-xs font-mono text-muted">
                  {repo.stars > 0 && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-accent fill-accent" />
                      <span>{repo.stars}</span>
                    </span>
                  )}
                  <FolderGit2 className="w-4 h-4 text-muted" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors">
                {repo.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs text-muted leading-relaxed line-clamp-3">
                {repo.description || "Public software repository by Abubakar Abdulrahim."}
              </p>
            </div>

            {/* Links Bar */}
            <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between text-xs font-mono">
              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted hover:text-foreground transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              {repo.homepage && (
                <a
                  href={repo.homepage.startsWith("http") ? repo.homepage : `https://${repo.homepage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-accent font-medium hover:underline"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://github.com/AbubakarAbdulrahim?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border text-xs font-mono text-muted hover:text-foreground hover:border-foreground/40 transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          <span>View complete commit activity on GitHub</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
}
