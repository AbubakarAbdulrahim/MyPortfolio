"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Phone, Send, CheckCircle2, Copy, Check, Sparkles, MapPin, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    intent: "Full-Time Role",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger high-delight celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#2F7DFF", "#38BDF8", "#FFFFFF", "#175CE6"],
        });
      } catch (err) {
        // Fallback gracefully if canvas context is restricted
      }
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        index="09"
        tag="Engagement & Hiring Inquiries"
        title="Let's Build Something High-Impact"
        subtitle="Currently prioritizing full-time software engineering roles and select contract architectures."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Direct Links & Primary Resume Card (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Primary Resume Download Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-7 rounded-3xl bg-gradient-to-br from-[#0E1428] via-[#090C16] to-[#07080F] border border-accent/30 text-white shadow-glow relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PRIMARY RECRUITER CTA</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white">
                Official Curriculum Vitae
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/75 leading-relaxed font-sans">
                Full engineering history, quantified production metrics (Safetify, Tubali, Hausasoft), academic credentials (BUK 4.44 CGPA), and verified cybersecurity certification.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="/resume.pdf"
                  download="Abubakar_Abdulrahim_Resume.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent text-white text-xs font-bold hover:bg-accent-hover active:scale-95 transition-all shadow-glow"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF CV</span>
                </a>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          </motion.div>

          {/* Direct Contact Channels Card */}
          <div className="p-7 rounded-3xl acrylic-card space-y-4">
            <h4 className="text-base font-bold font-display text-foreground">
              Direct Communication Channels
            </h4>

            {/* Email with copy button */}
            <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="block text-[10px] font-mono text-foreground/50">DIRECT EMAIL</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-mono text-foreground hover:text-accent font-semibold truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="ml-2 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 text-xs font-mono flex items-center gap-1.5 hover:bg-black/5 dark:hover:bg-white/10 transition-colors shrink-0"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 opacity-60" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex items-center justify-between group hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-foreground shrink-0 group-hover:text-accent transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-foreground/50">OPEN SOURCE & CODE</span>
                  <span className="text-xs sm:text-sm font-mono text-foreground font-semibold">
                    github.com/{PERSONAL_INFO.githubHandle}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Location & Timezone card */}
            <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex items-center gap-3 text-xs font-mono text-foreground/75">
              <div className="w-9 h-9 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-accent shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] font-mono text-foreground/50">PRIMARY BASE</span>
                <span>Kano, Nigeria (WAT / UTC+1) • Global Remote</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Secondary Interactive Contact Form (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-7 p-7 sm:p-9 rounded-3xl acrylic-card relative"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold font-display text-foreground">
              Send an Inbound Dispatch
            </h3>
            <p className="mt-1 text-sm text-foreground/70 font-sans">
              Have a full-time role opening, a mobile project needing architecture, or a contract inquiry? Fill out the brief below:
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 my-8"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-foreground font-display">
                Dispatch Transmitted
              </h4>
              <p className="text-sm text-foreground/75 max-w-md mx-auto">
                Thank you, {formData.name}. Your message has been logged. I will review your requirements and respond promptly within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", intent: "Full-Time Role", message: "" });
                }}
                className="mt-4 px-5 py-2 rounded-full border border-emerald-500/40 text-xs font-mono text-emerald-400 hover:bg-emerald-500/10 transition-colors"
              >
                Send Another Note
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Engagement Intent Pills */}
              <div>
                <label className="block text-xs font-mono text-foreground/70 uppercase tracking-wider mb-2">
                  Engagement Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    "Full-Time Role",
                    "Mobile App Contract",
                    "Technical Advisory",
                  ].map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setFormData({ ...formData, intent: cat })}
                      className={`py-2 px-3 rounded-xl text-xs font-mono transition-all text-center ${
                        formData.intent === cat
                          ? "bg-accent text-white font-semibold shadow-glow-sm"
                          : "bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-foreground/75 hover:text-foreground"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-foreground/70 uppercase tracking-wider mb-1.5">
                    Your Name / Company *
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins (Fintech Lead)"
                    className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-foreground/70 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-foreground/70 uppercase tracking-wider mb-1.5">
                  Project Scope or Role Overview *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your tech stack, goals, timelines, or role level..."
                  className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-hover active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-glow disabled:opacity-50"
              >
                {loading ? (
                  <span>Dispatching...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Project Inquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
