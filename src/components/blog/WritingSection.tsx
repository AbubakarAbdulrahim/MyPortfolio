"use client";

import { useState } from "react";
import { ArrowUpRight, X, BookOpen, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BLOG_POSTS } from "@/data/blogPosts";
import { BlogPost } from "@/types";

export function WritingSection() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="writing" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        tag="Engineering Notes"
        title="Technical Writing & Architecture Notes"
        subtitle="Practical observations on mobile systems, low-bandwidth optimizations, and designing for real-world constraints."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            onClick={() => setActivePost(post)}
            className="card p-6 sm:p-8 flex flex-col justify-between cursor-pointer group hover:border-surface-border-hover transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-muted">
                <span className="font-semibold text-accent uppercase tracking-wider text-[11px]">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-[11px]">
                  <Clock className="w-3 h-3 opacity-70" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors leading-snug tracking-tight">
                {post.title}
              </h3>

              <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between text-xs text-muted">
              <span>{post.publishedAt}</span>
              <span className="inline-flex items-center gap-1 text-accent font-medium group-hover:translate-x-0.5 transition-transform">
                <span>Read Note</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Editorial Reader Modal */}
      {activePost && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          <div className="card w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-10 bg-background border border-surface-border shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-surface-border">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-semibold text-accent uppercase tracking-wider text-[11px]">
                  {activePost.category}
                </span>
                <span className="text-muted">•</span>
                <span className="text-muted">{activePost.readTime}</span>
              </div>
              <button
                onClick={() => setActivePost(null)}
                className="w-8 h-8 rounded-full border border-surface-border flex items-center justify-center text-muted hover:text-foreground hover:bg-surface transition-colors"
                aria-label="Close article modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight leading-tight">
                {activePost.title}
              </h2>
              <p className="text-xs text-muted">Published on {activePost.publishedAt} by Abubakar Abdulrahim</p>
              <div className="text-sm text-foreground/85 leading-relaxed whitespace-pre-line font-sans pt-2">
                {activePost.content}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-surface-border flex items-center justify-between text-xs text-muted">
              <span>Abubakar Abdulrahim • Engineering Notes</span>
              <button
                onClick={() => setActivePost(null)}
                className="px-4 py-1.5 rounded-full bg-surface border border-surface-border text-foreground hover:bg-surface-hover text-xs font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
