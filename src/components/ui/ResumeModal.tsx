"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, CheckCircle2, Award, Briefcase, GraduationCap, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface dark:bg-[#0E0F18] border border-black/10 dark:border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-foreground"
          >
            {/* Header with actions */}
            <div className="flex items-center justify-between pb-6 border-b border-black/10 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display">Curriculum Vitae</h3>
                  <p className="text-xs font-mono text-foreground/60">
                    {PERSONAL_INFO.name} • Updated 2026
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download="Abubakar_Abdulrahim_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-xs font-semibold hover:bg-accent-hover transition-colors shadow-glow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 flex items-center justify-center transition-colors text-foreground"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Resume Summary Content */}
            <div className="mt-6 space-y-6 text-sm text-foreground/80 leading-relaxed font-sans">
              {/* Profile Card Summary */}
              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{PERSONAL_INFO.name}</h4>
                    <p className="text-xs font-mono text-accent font-semibold">{PERSONAL_INFO.taglineTitle}</p>
                  </div>
                  <div className="text-xs font-mono text-foreground/60 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono text-foreground/70">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3 text-accent" /> {PERSONAL_INFO.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <ExternalLink className="w-3 h-3 text-accent" /> github.com/{PERSONAL_INFO.githubHandle}
                  </span>
                </div>
              </div>

              {/* Education Summary */}
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent font-bold mb-3">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education & Distinctions</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl border border-black/10 dark:border-white/10 bg-surface dark:bg-white/[0.02]">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-semibold text-foreground">B.Sc. Information Technology</h5>
                        <p className="text-xs text-foreground/70">Bayero University Kano (BUK)</p>
                      </div>
                      <span className="px-2 py-0.5 rounded text-xs font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        CGPA 4.44 / 5.00
                      </span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-black/10 dark:border-white/10 bg-surface dark:bg-white/[0.02]">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-semibold text-foreground">B.Sc. Computer Science</h5>
                        <p className="text-xs text-foreground/70">National Open University of Nigeria (NOUN)</p>
                      </div>
                      <span className="px-2 py-0.5 rounded text-xs font-mono bg-accent/15 text-accent border border-accent/30">
                        Ongoing Dual-Track
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Experience */}
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent font-bold mb-3">
                  <Briefcase className="w-4 h-4" />
                  <span>Core Work History</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl border border-black/10 dark:border-white/10 bg-surface dark:bg-white/[0.02]">
                    <div className="flex justify-between items-baseline mb-1">
                      <h5 className="font-semibold text-foreground">Flutter Developer • Tubali (Fintech)</h5>
                      <span className="text-xs font-mono text-foreground/60">Feb 2026 – Present</span>
                    </div>
                    <p className="text-xs text-foreground/70 mb-2">
                      Migrated critical authentication pipelines (activation, password reset, transaction PIN) from email magic-links to OTP, driving an immediate 38% increase in onboarding conversion.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Flutter", "Provider", "go_router", "Dio", "Fintech Security"].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/5 dark:bg-white/5 text-foreground/80">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-black/10 dark:border-white/10 bg-surface dark:bg-white/[0.02]">
                    <div className="flex justify-between items-baseline mb-1">
                      <h5 className="font-semibold text-foreground">Mobile Developer • Hausasoft Technologies</h5>
                      <span className="text-xs font-mono text-foreground/60">Dec 2025 – Present</span>
                    </div>
                    <p className="text-xs text-foreground/70 mb-2">
                      Architected real-time emergency incident reporting app with geofenced live push alerts, reducing emergency dispatch time by ~30% with offline-first synchronization.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Flutter", "Firebase", "Google Maps API", "Cloud Functions"].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/5 dark:bg-white/5 text-foreground/80">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications & Languages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent font-bold mb-2">
                    <Award className="w-4 h-4" />
                    <span>Certification</span>
                  </div>
                  <div className="p-3 rounded-xl border border-black/10 dark:border-white/10 bg-surface dark:bg-white/[0.02] text-xs">
                    <p className="font-semibold text-foreground">Certified Cybersecurity Professional</p>
                    <p className="text-foreground/60 mt-0.5">Cisco Networking Academy (2023)</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent font-bold mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Language Proficiency</span>
                  </div>
                  <div className="p-3 rounded-xl border border-black/10 dark:border-white/10 bg-surface dark:bg-white/[0.02] text-xs space-y-1">
                    <p><strong className="text-foreground">English:</strong> Fluent / Professional</p>
                    <p><strong className="text-foreground">Arabic:</strong> Professional / Classical</p>
                    <p><strong className="text-foreground">Hausa:</strong> Native</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-foreground/60 font-mono">
                Looking for verified references or code artifacts? Available on request.
              </span>
              <a
                href="/resume.pdf"
                download="Abubakar_Abdulrahim_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-xs font-semibold hover:bg-accent-hover transition-all shadow-glow"
              >
                <Download className="w-4 h-4" />
                <span>Download Official PDF</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
