"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, Mail, ArrowDown } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ResumeModal } from "@/components/ui/ResumeModal";

export function HeroSection() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section className="pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10 sm:gap-14">
        {/* Left Column: Narrative & Clear Identity */}
        <div className="max-w-2xl">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-surface border border-surface-border mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
            </span>
            <span className="text-xs font-medium text-foreground">
              {PERSONAL_INFO.location}
            </span>
            <span className="text-xs text-muted">•</span>
            <span className="text-xs text-muted truncate">
              {PERSONAL_INFO.status}
            </span>
          </div>

          {/* Main Title Hierarchy */}
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-foreground leading-[1.08]">
            {PERSONAL_INFO.name}
          </h1>

          <p className="mt-3 text-xl sm:text-2xl font-medium text-foreground/90 tracking-tight">
            {PERSONAL_INFO.heroSubtitle}
          </p>

          <p className="mt-5 text-base sm:text-lg text-foreground/80 leading-relaxed font-normal">
            Building and improving production Flutter mobile applications, currently working on a fintech product at Tubali Digital. Experienced across Dart, Firebase, REST APIs, authentication security, and on-device AI model compression.
          </p>

          <p className="mt-2 text-sm text-muted leading-relaxed font-normal">
            Undergraduate thesis creator of Safetify (tested with sub-2.1s alert delivery, 4.44 / 5.00 CGPA at Bayero University Kano), and founder of Hausasoft Technologies (mentoring 200+ early-career learners in Kano).
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-hover active:scale-[0.98] transition-all focus:outline-none shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface border border-surface-border text-foreground text-sm font-medium hover:border-surface-border-hover hover:bg-surface-hover transition-all focus:outline-none"
            >
              <Mail className="w-4 h-4 text-muted" />
              <span>Get in Touch</span>
            </a>

            {/* <a
              href="#projects"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs text-muted hover:text-foreground transition-colors ml-1"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-3.5 h-3.5 opacity-60" />
            </a> */}
          </div>
        </div>

        {/* Right Column: Confident, Anchored Portrait */}
        <div className="shrink-0 self-start md:self-auto">
          <div className="relative w-40 sm:w-48 md:w-60 lg:w-64 aspect-[4/5] rounded-3xl overflow-hidden border border-surface-border bg-surface shadow-card">
            <Image
              src="/profile.jpg"
              alt="Abubakar Abdulrahim"
              fill
              sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 240px, 256px"
              className="object-cover object-top filter contrast-[1.02]"
              priority
            />
            {/* Subtle inner hairline vignette to blend smoothly into the border */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-inset ring-white/10 dark:ring-white/10" />
          </div>
        </div>
      </div>

      {/* Human Proof Pillars - CV-Aligned Milestones */}
      <div className="mt-16 sm:mt-20 pt-10 border-t border-surface-border grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
        <div className="space-y-1.5">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase block">
            Production Engineering
          </span>
          <h3 className="text-base font-semibold text-foreground tracking-tight">
            Tubali Digital Fintech
          </h3>
          <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
            Developing Flutter fintech mobile features, redesigning account activation, and migrating verification flows to OTP security.
          </p>
        </div>

        <div className="space-y-1.5">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase block">
            Academic Rigor
          </span>
          <h3 className="text-base font-semibold text-foreground tracking-tight">
            B.Sc. Information Technology
          </h3>
          <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
            Graduated with 4.44 / 5.00 CGPA (Second Class Honours Upper Division) from Bayero University Kano.
          </p>
        </div>

        <div className="space-y-1.5">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase block">
            Community Leadership
          </span>
          <h3 className="text-base font-semibold text-foreground tracking-tight">
            Founder, Hausasoft Technologies
          </h3>
          <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
            Founded in Dec 2022; trained over 200+ early-career developers in cross-platform mobile and web engineering in northern Nigeria.
          </p>
        </div>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
