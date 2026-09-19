"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ResumeModal } from "@/components/ui/ResumeModal";

export function HeroSection() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 sm:gap-12">
        <div className="max-w-2xl">
          {/* Subtle Location & Availability Meta */}
          <div className="flex items-center gap-2 text-xs font-mono text-muted mb-4">
            <span>Kano, Nigeria</span>
            <span>•</span>
            <span className="text-foreground">{PERSONAL_INFO.status}</span>
          </div>

          {/* Display Headline - Apple Style Restrained Typography */}
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-foreground leading-[1.08]">
            {PERSONAL_INFO.name}
          </h1>

          <p className="mt-3 text-lg sm:text-xl font-medium text-foreground/90">
            {PERSONAL_INFO.heroSubtitle}
          </p>

          <p className="mt-4 text-base sm:text-lg text-foreground/90 leading-relaxed max-w-2xl font-normal">
            I engineer production mobile applications and cloud-connected platforms with Flutter, Firebase, and modern web tools.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed max-w-2xl font-normal">
            Based in Kano, Nigeria. Focused on offline resilience, responsive state architecture, and building software that performs reliably in the real world.
          </p>

          {/* Action Group */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-xs font-semibold hover:bg-accent-hover active:scale-[0.99] transition-colors focus:outline-none shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-surface-border text-foreground text-xs font-medium hover:border-foreground/40 hover:bg-surface/50 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-muted" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

        {/* Confident Portrait Frame */}
        <div className="shrink-0 self-start md:self-auto">
          <div className="relative w-36 sm:w-44 md:w-60 lg:w-64 aspect-[4/5] rounded-2xl overflow-hidden border border-surface-border dark:border-none bg-surface shadow-sm">
            <Image
              src="/profile.jpg"
              alt="Abubakar Abdulrahim"
              fill
              sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1024px) 240px, 256px"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>

      {/* Human Proof Pillars */}
      <div className="mt-14 sm:mt-16 pt-8 border-t border-surface-border grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold block">
            Craft
          </span>
          <span className="text-sm font-semibold text-foreground tracking-tight block">
            Production Mobile Apps
          </span>
          <span className="block text-xs text-muted leading-relaxed">
            Offline-first Flutter architectures, real-time Firebase sync, and clean REST APIs.
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold block">
            Rigor
          </span>
          <span className="text-sm font-semibold text-foreground tracking-tight block">
            B.Sc. Information Technology
          </span>
          <span className="block text-xs text-muted leading-relaxed">
            Graduated with 4.44 / 5.00 CGPA (Second Class Upper) from Bayero University Kano.
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold block">
            Community
          </span>
          <span className="text-sm font-semibold text-foreground tracking-tight block">
            Founder, Hausasoft
          </span>
          <span className="block text-xs text-muted leading-relaxed">
            Building civic software and organizing developer bootcamps in northern Nigeria.
          </span>
        </div>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
