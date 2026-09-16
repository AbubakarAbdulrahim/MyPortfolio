"use client";

import Image from "next/image";
import { X, Download, FileText, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="card w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 bg-background border border-surface-border text-foreground">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-surface-border">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-surface-border bg-surface shrink-0">
              <Image
                src="/profile.jpg"
                alt={PERSONAL_INFO.name}
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Curriculum Vitae</h3>
              <p className="text-xs font-mono text-muted">{PERSONAL_INFO.name} • Updated 2026</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Abubakar_Abdulrahim_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-white text-xs font-medium hover:bg-accent-hover transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full border border-surface-border flex items-center justify-center text-muted hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-6 text-xs sm:text-sm text-muted">
          {/* Summary */}
          <div>
            <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-1">
              SUMMARY
            </span>
            <p className="text-foreground leading-relaxed">
              Software Engineer specializing in high-concurrency mobile applications with Flutter and scalable backend architectures with Django, Firebase, and PostgreSQL. Proven production impact in fintech and real-time emergency dispatch.
            </p>
          </div>

          {/* Education */}
          <div className="pt-4 border-t border-surface-border">
            <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-2">
              EDUCATION & CERTIFICATIONS
            </span>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline text-foreground font-medium">
                  <span>B.Sc. Information Technology (First Class Equiv)</span>
                  <span className="text-xs font-mono text-accent">CGPA 4.44 / 5.00</span>
                </div>
                <span className="text-xs text-muted block">Bayero University Kano (BUK)</span>
              </div>
              <div>
                <div className="flex justify-between items-baseline text-foreground font-medium">
                  <span>B.Sc. Computer Science (Dual-Enrollment)</span>
                  <span className="text-xs font-mono text-muted">Ongoing</span>
                </div>
                <span className="text-xs text-muted block">National Open University of Nigeria</span>
              </div>
              <div>
                <div className="flex justify-between items-baseline text-foreground font-medium">
                  <span>Certified Cybersecurity Professional</span>
                  <span className="text-xs font-mono text-accent">Verified</span>
                </div>
                <span className="text-xs text-muted block">Cisco Networking Academy (2023)</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="pt-4 border-t border-surface-border">
            <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-2">
              EXPERIENCE HIGHLIGHTS
            </span>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-foreground font-medium">
                  <span>Flutter Developer • Tubali Fintech</span>
                  <span className="text-xs font-mono text-muted">Feb 2026 – Present</span>
                </div>
                <p className="text-xs text-muted mt-0.5">
                  Migrated auth flows to OTP resulting in +38% onboarding conversion with zero downtime.
                </p>
              </div>
              <div>
                <div className="flex justify-between text-foreground font-medium">
                  <span>Mobile Developer • Hausasoft Technologies</span>
                  <span className="text-xs font-mono text-muted">Dec 2025 – Present</span>
                </div>
                <p className="text-xs text-muted mt-0.5">
                  Built geofenced real-time incident reporting app with live alerts (~30% faster response).
                </p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs font-mono">
            <span>LANGUAGES: English (Fluent), Arabic (Professional), Hausa (Native)</span>
            <span>Kano, Nigeria</span>
          </div>
        </div>
      </div>
    </div>
  );
}
