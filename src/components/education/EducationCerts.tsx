"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ShieldCheck, CheckCircle2, BookmarkCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EDUCATION_AND_CERTS } from "@/data/portfolioData";

export function EducationCerts() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        index="06"
        tag="Academic Foundations & Credentials"
        title="Education & Cybersecurity Certifications"
        subtitle="Formal computational training paired with industry-standard cybersecurity defense accreditation."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {EDUCATION_AND_CERTS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="p-6 sm:p-7 rounded-3xl acrylic-card flex flex-col justify-between group hover:border-accent/40 transition-all duration-300 relative overflow-hidden"
          >
            {/* Top Accent Strip */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 ${
                item.type === "certification"
                  ? "bg-gradient-to-r from-accent to-electric-600"
                  : "bg-gradient-to-r from-emerald-500 to-cyan-400"
              }`}
            />

            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span
                  className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-semibold border ${
                    item.type === "certification"
                      ? "bg-accent/15 text-accent border-accent/30"
                      : "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                  }`}
                >
                  {item.badge}
                </span>

                <div className="w-9 h-9 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-accent">
                  {item.type === "certification" ? (
                    <ShieldCheck className="w-5 h-5" />
                  ) : (
                    <GraduationCap className="w-5 h-5" />
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-display text-foreground group-hover:text-accent transition-colors">
                {item.title}
              </h3>

              {/* Institution */}
              <p className="mt-1 text-sm font-medium text-foreground/80 font-display">
                {item.institution}
              </p>

              {/* Period & Grade */}
              <div className="mt-2 flex items-center justify-between text-xs font-mono text-foreground/60">
                <span>{item.period}</span>
                {item.gradeOrScore && (
                  <span className="text-emerald-400 font-semibold">
                    {item.gradeOrScore}
                  </span>
                )}
              </div>

              {/* Details */}
              <p className="mt-4 text-xs sm:text-sm text-foreground/75 leading-relaxed font-sans">
                {item.details}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-foreground/60">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span>Verified Academic Record</span>
              </span>
              <span>2023 – 2026</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
