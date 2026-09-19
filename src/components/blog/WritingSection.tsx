"use client";

import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BLOG_POSTS } from "@/data/blogPosts";
import { BlogPost } from "@/types";

export function WritingSection() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="writing" className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        tag="Writing"
        title="Articles & Notes"
        subtitle="Practical notes on mobile engineering, architecture trade-offs, and lessons learned."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            onClick={() => setActivePost(post)}
            className="card p-6 sm:p-8 flex flex-col justify-between cursor-pointer group hover:border-accent/40 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-muted mb-3">
                <span className="text-accent">{post.category}</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between text-xs font-mono text-muted">
              <span>{post.publishedAt}</span>
              <span className="inline-flex items-center gap-1 text-accent font-medium">
                <span>Read Note</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="card w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 bg-background border border-surface-border">
            <div className="flex items-center justify-between pb-4 border-b border-surface-border">
              <span className="text-xs font-mono text-accent">
                {activePost.category} • {activePost.readTime}
              </span>
              <button
                onClick={() => setActivePost(null)}
                className="w-8 h-8 rounded-full border border-surface-border flex items-center justify-center text-muted hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                {activePost.title}
              </h2>
              <div className="text-xs sm:text-sm text-muted leading-relaxed whitespace-pre-line font-sans">
                {activePost.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
