"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Download, ArrowUpRight, Copy, Check, AlertCircle, Loader2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "mzezbayq";
  const [state, handleSubmit, reset] = useForm(formId);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading
        index="10"
        tag="Inquiries"
        title="Get in Touch"
        subtitle="Available for full-time engineering roles and high-value mobile contracts."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Channels (5 cols) */}
        <div className="md:col-span-5 space-y-4">
          <div className="card p-6 space-y-4">
            <div>
              <span className="text-xs font-mono text-muted block mb-1">DIRECT EMAIL</span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded text-xs font-mono border border-surface-border text-muted hover:text-foreground transition-colors shrink-0"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="pt-3 border-t border-surface-border space-y-2 text-xs font-mono">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-muted hover:text-foreground transition-colors py-1"
              >
                <span>GitHub (github.com/{PERSONAL_INFO.githubHandle})</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-muted hover:text-foreground transition-colors py-1"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-3 border-t border-surface-border">
              <a
                href="/resume.pdf"
                download="Abubakar_Abdulrahim_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg border border-surface-border text-foreground text-xs font-medium hover:border-foreground/40 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-muted" />
                <span>Download Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Wired Formspree Form (7 cols) */}
        <div className="md:col-span-7">
          <div className="card p-6 sm:p-8">
            {state.succeeded ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto text-accent">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Message Dispatched</h3>
                <p className="text-xs sm:text-sm text-muted max-w-md mx-auto leading-relaxed">
                  Thank you. Your message has been successfully routed to Abubakar via Formspree. You will receive a response within 24 hours.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => {
                      if (typeof reset === "function") reset();
                    }}
                    className="px-4 py-2 rounded-lg border border-surface-border text-xs font-mono text-muted hover:text-foreground transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {state.errors && state.errors.getFormErrors && state.errors.getFormErrors().length > 0 && (
                  <div className="p-3.5 rounded-lg border border-surface-border bg-background text-xs text-foreground flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p>Unable to deliver message right now. Please try again or email directly.</p>
                      <p className="text-muted">
                        Direct email:{" "}
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="text-accent underline font-mono"
                        >
                          {PERSONAL_INFO.email}
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-muted mb-1">
                      NAME
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      type="text"
                      disabled={state.submitting}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 rounded-lg bg-background border border-surface-border text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent disabled:opacity-50"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-400 mt-1 font-mono" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-muted mb-1">
                      EMAIL
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      required
                      type="email"
                      disabled={state.submitting}
                      placeholder="jane@company.com"
                      className="w-full px-3 py-2 rounded-lg bg-background border border-surface-border text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent disabled:opacity-50"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-1 font-mono" />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-muted mb-1">
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    disabled={state.submitting}
                    placeholder="Brief overview of role, team, or project scope..."
                    className="w-full px-3 py-2 rounded-lg bg-background border border-surface-border text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent resize-none disabled:opacity-50"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400 mt-1 font-mono" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-2.5 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-accent-hover active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Dispatching Message...</span>
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

