"use client";

import Image from "next/image";
import { X, Download } from "lucide-react";
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
              Mobile Developer and IT Professional specializing in Flutter, Firebase, and web technologies. Experienced in building real-time mobile applications, authentication workflows, and practical digital products.
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
                  <span>B.Sc. Information Technology</span>
                  <span className="text-xs font-mono text-accent">CGPA 4.44 / 5.00</span>
                </div>
                <span className="text-xs text-muted block">Bayero University Kano (BUK) — Second Class Honours</span>
              </div>
              <div>
                <div className="flex justify-between items-baseline text-foreground font-medium">
                  <span>Certified Cybersecurity Analyst</span>
                  <span className="text-xs font-mono text-accent">Verified</span>
                </div>
                <span className="text-xs text-muted block">Cisco Networking Academy (Dec 2023)</span>
              </div>
              <div>
                <div className="flex justify-between items-baseline text-foreground font-medium">
                  <span>Certified Data Scientist</span>
                  <span className="text-xs font-mono text-accent">Verified</span>
                </div>
                <span className="text-xs text-muted block">Cisco Networking Academy (Jan 2024)</span>
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
                  <span>Mobile Application Developer • Tubali Digital</span>
                  <span className="text-xs font-mono text-muted">Sep 2026 – Present</span>
                </div>
                <p className="text-xs text-muted mt-0.5">
                  Developing Flutter fintech applications, authentication workflows, and API integrations.
                </p>
              </div>
              <div>
                <div className="flex justify-between text-foreground font-medium">
                  <span>Founder & Mobile Developer • Hausasoft Technologies</span>
                  <span className="text-xs font-mono text-muted">Dec 2025 – Present</span>
                </div>
                <p className="text-xs text-muted mt-0.5">
                  Built Safetify incident reporting mobile app, Hausasoft E-Learn, and instructed developer bootcamps.
                </p>
              </div>
            </div>
          </div>

          {/* Location & Status */}
          <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs font-mono">
            <span>LOCATION: Kano, Nigeria</span>
            <span className="text-accent">Available for Opportunities</span>
          </div>
        </div>
      </div>
    </div>
  );
}
