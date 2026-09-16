"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star, UserCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/data/portfolioData";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeQuote = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        index="07"
        tag="Peer & Leadership Endorsements"
        title="What Engineering Collaborators Say"
        subtitle="Feedback from direct supervisors, academic advisors, and developers who have shipped alongside me."
      />

      {/* Featured Testimonial Card with Carousel Controls */}
      <div className="relative max-w-4xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl acrylic-card relative overflow-hidden">
          {/* Subtle Ambient Quote Watermark */}
          <div className="absolute -top-6 -right-6 text-foreground/[0.04] pointer-events-none select-none">
            <Quote className="w-48 h-48" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 space-y-6"
            >
              {/* Endorsement Tag */}
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent/15 text-accent border border-accent/30 font-semibold">
                  {activeQuote.endorsementType} Endorsement
                </span>
                <span className="text-xs font-mono text-foreground/50">
                  {activeQuote.relationship}
                </span>
              </div>

              {/* Quote Body */}
              <p className="text-lg sm:text-2xl font-medium font-sans text-foreground leading-relaxed italic">
                &ldquo;{activeQuote.quote}&rdquo;
              </p>

              {/* Author Details */}
              <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-bold font-display text-foreground">
                    {activeQuote.author}
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/70">
                    {activeQuote.role} • <span className="text-accent font-semibold">{activeQuote.organization}</span>
                  </p>
                </div>

                <div className="flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Buttons */}
          <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-8 bg-accent" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center transition-colors text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center transition-colors text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
