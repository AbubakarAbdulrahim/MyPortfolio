"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock, Calendar, ArrowRight, X, Sparkles, Terminal } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BLOG_POSTS } from "@/data/blogPosts";
import { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";

export function WritingSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="writing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        index="08"
        tag="Engineering Essays & Notes"
        title="Technical Writing & Architecture Notes"
        subtitle="In-depth explorations of mobile systems, on-device intelligence, and high-concurrency fintech infrastructure."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {BLOG_POSTS.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 sm:p-8 rounded-3xl acrylic-card flex flex-col justify-between group hover:border-accent/50 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedPost(post)}
          >
            <div>
              {/* Category & Read Time */}
              <div className="flex items-center justify-between gap-2 mb-4 text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 font-semibold">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-foreground/60">
                  <Clock className="w-3.5 h-3.5 text-accent" /> {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground group-hover:text-accent transition-colors leading-snug">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="mt-3 text-xs sm:text-sm text-foreground/75 leading-relaxed font-sans line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-foreground/50">
                {formatDate(post.publishedAt)}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPost(post);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-accent font-semibold group-hover:translate-x-1 transition-transform"
              >
                <span>Read Deep-Dive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Reader Modal for Instant Technical Reading */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-surface dark:bg-[#0B0C14] border border-black/10 dark:border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 text-foreground"
            >
              <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10">
                <div className="flex items-center gap-3 text-xs font-mono text-foreground/60">
                  <span className="text-accent font-semibold">{selectedPost.category}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                  <span>•</span>
                  <span>{formatDate(selectedPost.publishedAt)}</span>
                </div>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 flex items-center justify-center transition-colors text-foreground"
                  aria-label="Close article"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-foreground leading-tight">
                  {selectedPost.title}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-accent font-medium font-sans">
                  {selectedPost.tagline}
                </p>

                {/* Article Body Content */}
                <div className="mt-8 space-y-4 text-sm sm:text-base text-foreground/80 leading-relaxed font-sans whitespace-pre-line">
                  {selectedPost.content}
                </div>

                <div className="mt-10 pt-6 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPost.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded text-xs font-mono bg-black/5 dark:bg-white/5 text-foreground/70">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-5 py-2 rounded-full bg-accent text-white text-xs font-semibold hover:bg-accent-hover transition-colors"
                  >
                    Done Reading
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
