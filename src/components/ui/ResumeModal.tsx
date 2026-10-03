"use client";

import Image from "next/image";
import { X, Download, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
    >
      <div className="card w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 bg-background border border-surface-border text-foreground shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-surface-border">
          <div className="flex items-center gap-3.5">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-surface-border bg-surface shrink-0">
              <Image
                src="/profile.jpg"
                alt={PERSONAL_INFO.name}
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground tracking-tight">
                {PERSONAL_INFO.fullName}
              </h3>
              <p className="text-xs text-muted">
                {PERSONAL_INFO.roleTitle} • Kano, Nigeria
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Abubakar_Abdulrahim_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent text-white text-xs font-medium hover:bg-accent-hover transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-surface-border flex items-center justify-center text-muted hover:text-foreground hover:bg-surface transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-6 text-xs sm:text-sm text-muted">
          {/* Executive Summary from CV */}
          <div>
            <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-1.5">
              Professional Summary
            </span>
            <p className="text-foreground/90 leading-relaxed font-normal">
              Mobile Application Developer with professional experience building and improving Flutter applications, currently working on a fintech product at Tubali Digital. Experienced in Flutter, Dart, Firebase, REST APIs, authentication, databases, and application architecture, with hands-on experience redesigning security-critical flows such as account activation and PIN resets and migrating verification from email links to OTP-based flows. Developed Safetify as undergraduate thesis, now extending into research on on-device AI and model compression. Founder of Hausasoft Technologies, having taught web and mobile development to over 200+ early-career learners.
            </p>
          </div>

          {/* Education & Verified Certifications */}
          <div className="pt-4 border-t border-surface-border">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-3">
              Education & Academic Rigor
            </span>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline text-foreground font-medium">
                  <span>B.Sc. in Information Technology</span>
                  <span className="text-xs font-semibold text-accent">CGPA 4.44 / 5.00</span>
                </div>
                <span className="text-xs text-muted block">
                  Bayero University, Kano (BUK) — Dec 2021 – Mar 2026 (Second Class Honours, Upper Division)
                </span>
                <span className="text-[11px] text-muted/80 block mt-0.5">
                  Thesis: “Safetify: A Real-Time Crowdsourced Incident Reporting and Safety Alert Mobile Application” (Supervised by Murja Sani Gadanya & Faruk Umar Ambursa, HOD)
                </span>
              </div>
            </div>
          </div>

          {/* Experience Highlights from CV */}
          <div className="pt-4 border-t border-surface-border">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-3">
              Professional Experience
            </span>
            <div className="space-y-3.5">
              <div>
                <div className="flex justify-between text-foreground font-medium">
                  <span>Mobile Application Developer • Tubali Digital</span>
                  <span className="text-xs text-muted">Sep 2026 – Present (Remote)</span>
                </div>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  Redesigned critical security flows in Tubali's mobile fintech app (account activation, login/transaction PIN resets), migrating to OTP-based verification to reduce verification delays.
                </p>
              </div>
              <div>
                <div className="flex justify-between text-foreground font-medium">
                  <span>Founder & Technical Lead • Hausasoft Technologies</span>
                  <span className="text-xs text-muted">Dec 2022 – Present</span>
                </div>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  Founded startup building mobile apps and delivered bootcamps teaching web and cross-platform mobile development to over 200+ early-career learners.
                </p>
              </div>
              <div>
                <div className="flex justify-between text-foreground font-medium">
                  <span>Web Development Trainee (SIWES) • CITAD</span>
                  <span className="text-xs text-muted">Nov 2024 – Jul 2025</span>
                </div>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  Industrial placement at CITAD Kano collaborating on EventMaster web portal using Python, Django, PostgreSQL, and JavaScript.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills from CV */}
          <div className="pt-4 border-t border-surface-border">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
              Technical Skills Matrix
            </span>
            <div className="space-y-1 text-xs">
              <p><strong className="text-foreground">Mobile & Frontend:</strong> Flutter, Dart, Android SDK, React.js, HTML, CSS, JavaScript, Mobile UI/UX optimization</p>
              <p><strong className="text-foreground">Backend & APIs:</strong> Python (Django, Django REST Framework), Node.js, RESTful API design & integration</p>
              <p><strong className="text-foreground">Data & Cloud:</strong> PostgreSQL, Supabase, Firestore, Firebase (Auth, FCM, Functions, Hosting), real-time pipelines</p>
              <p><strong className="text-foreground">Tools & Practices:</strong> Git/GitHub, Agile/Scrum, CI/CD, Google Maps API, Cloudinary</p>
            </div>
          </div>

          {/* Research Interests from CV */}
          <div className="pt-4 border-t border-surface-border">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-1.5">
              Research Interests
            </span>
            <p className="text-xs text-foreground/85 leading-relaxed">
              Mobile Computing, Mobile Crowdsensing, Edge/On-Device Artificial Intelligence, Model Compression for Resource-Constrained Devices (Quantization & Pruning), and Applied Software Systems for Public Safety.
            </p>
          </div>

          {/* Status Bar */}
          <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs">
            <span className="text-muted">Contact: {PERSONAL_INFO.email} | {PERSONAL_INFO.phone}</span>
            <span className="font-medium text-accent">Available for Opportunities</span>
          </div>
        </div>
      </div>
    </div>
  );
}
