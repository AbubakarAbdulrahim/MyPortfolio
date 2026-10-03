"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Download, ArrowUpRight, Copy, Check, AlertCircle, Loader2, Mail, Github, Linkedin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useToast } from "@/components/ui/Toast";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "mzezbayq";
  const [state, handleSubmit, reset] = useForm(formId);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    toast("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        tag="Get in Touch"
        title="Start a Conversation"
        subtitle="I'm open to software engineering roles, mobile contract engagements, and technical collaborations."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Channels & Verified Handles (5 cols) */}
        <div className="md:col-span-5 space-y-6">
          <div className="card p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-1.5">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-background border border-surface-border">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs sm:text-sm font-medium text-foreground hover:text-accent transition-colors truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg border border-surface-border text-muted hover:text-foreground hover:bg-surface transition-colors shrink-0"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-brand-green" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-1.5">
                Telephone & WhatsApp
              </span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-background border border-surface-border">
                <a
                  href="tel:+2348169920252"
                  className="text-xs sm:text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
                <span className="text-[11px] text-muted">Kano (WAT)</span>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-border space-y-3">
              <span className="text-xs font-semibold text-muted uppercase tracking-wider block">
                Professional Profiles
              </span>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-xs sm:text-sm text-foreground/85 hover:text-foreground p-2.5 rounded-xl hover:bg-surface transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-accent" />
                  <span>GitHub ({PERSONAL_INFO.githubHandle})</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-xs sm:text-sm text-foreground/85 hover:text-foreground p-2.5 rounded-xl hover:bg-surface transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-accent" />
                  <span>LinkedIn Profile</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            <div className="pt-4 border-t border-surface-border">
              <a
                href="/resume.pdf"
                download="Abubakar_Abdulrahim_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-surface border border-surface-border text-foreground text-xs sm:text-sm font-medium hover:border-surface-border-hover hover:bg-surface-hover transition-all"
              >
                <Download className="w-4 h-4 text-muted" />
                <span>Download Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Formspree Contact Form (7 cols) */}
        <div className="md:col-span-7">
          <div className="card p-6 sm:p-8 lg:p-10">
            {state.succeeded ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mx-auto text-brand-green">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground tracking-tight">Message Received</h3>
                <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your message has been routed directly to Abubakar's inbox via Formspree.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      if (typeof reset === "function") reset();
                    }}
                    className="px-5 py-2 rounded-full border border-surface-border text-xs text-muted hover:text-foreground transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {state.errors && state.errors.getFormErrors && state.errors.getFormErrors().length > 0 && (
                  <div className="p-4 rounded-xl border border-surface-border bg-background text-xs text-foreground flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-medium">Message could not be delivered at this time.</p>
                      <p className="text-muted">
                        Please email directly:{" "}
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="text-accent underline"
                        >
                          {PERSONAL_INFO.email}
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      type="text"
                      disabled={state.submitting}
                      placeholder="Enter your full name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-surface-border text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-50 transition-all"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-400 mt-1" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      required
                      type="email"
                      disabled={state.submitting}
                      placeholder="Enter your email address"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-surface-border text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent disabled:opacity-50 transition-all"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-1" />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-muted mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    disabled={state.submitting}
                    placeholder="Tell me about your role, team, or project requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-surface-border text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none disabled:opacity-50 transition-all"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400 mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent-hover active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-60 shadow-subtle"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
