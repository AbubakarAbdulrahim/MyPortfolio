"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ResumeModal } from "@/components/ui/ResumeModal";

export function HeroSection() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section className="pt-28 sm:pt-36 pb-20 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 sm:gap-12">
        <div className="max-w-2xl">
          {/* Subtle Location & Availability Meta */}
          <div className="flex items-center gap-2 text-xs font-mono text-muted mb-4">
            <span>Kano, Nigeria</span>
            <span>•</span>
            <span className="text-foreground">Available for Select Roles & Contracts</span>
          </div>

          {/* Display Headline - Solid, Confident Apple Typography */}
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-foreground leading-[1.08]">
            Abubakar Abdulrahim
          </h1>

          <p className="mt-3 text-lg sm:text-xl font-normal text-muted">
            Software Engineer & Mobile Architect
          </p>

          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-2xl font-normal">
            Building high-concurrency mobile applications with Flutter and resilient cloud backends with Django and Firebase. Specialized in real-time dispatch, auth migrations, and on-device systems.
          </p>

          {/* Action Group */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-xs font-semibold hover:bg-accent-hover active:scale-[0.99] transition-colors focus:outline-none"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Curriculum Vitae</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-surface-border text-foreground text-xs font-medium hover:border-foreground/40 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-muted" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

        {/* Confident Portrait Frame */}
        <div className="shrink-0 self-start md:self-auto">
          <div className="relative w-36 sm:w-44 md:w-52 aspect-[4/5] rounded-2xl overflow-hidden border border-surface-border bg-surface shadow-sm">
            <Image
              src="/profile.jpg"
              alt="Abubakar Abdulrahim"
              fill
              sizes="(max-width: 768px) 176px, 208px"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>

      {/* 3 Key Metrics - Calm, structured horizontal strip */}
      <div className="mt-16 sm:mt-20 pt-8 border-t border-surface-border grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <span className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
            ~2.1s
          </span>
          <span className="block text-xs font-mono text-muted mt-1">
            Emergency alert latency in Safetify
          </span>
        </div>

        <div>
          <span className="text-2xl sm:text-3xl font-semibold text-accent tracking-tight">
            +38%
          </span>
          <span className="block text-xs font-mono text-muted mt-1">
            Fintech auth onboarding conversion at Tubali
          </span>
        </div>

        <div>
          <span className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
            4.44 / 5.00
          </span>
          <span className="block text-xs font-mono text-muted mt-1">
            B.Sc. Information Technology, Bayero Univ. Kano
          </span>
        </div>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
