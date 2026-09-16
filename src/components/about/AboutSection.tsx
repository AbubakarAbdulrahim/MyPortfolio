"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages, Users, MapPin, Award, CheckCircle, Code2, Sparkles, Terminal } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        index="01"
        tag="Engineering Philosophy & Background"
        title="Disciplined Architecture, Quantified Impact"
        subtitle="Bridging academic rigor with high-stakes production delivery across mobile and cloud platforms."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Narrative Bio (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-foreground/80 text-base sm:text-lg leading-relaxed font-sans">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-foreground font-medium text-lg sm:text-xl leading-relaxed"
          >
            I am a Software Engineer and Mobile App Architect based in Kano, Nigeria, focused on constructing zero-latency mobile applications and bulletproof backend integrations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My work is grounded in engineering metrics: replacing fragile authentication pipelines with high-conversion OTP architectures at <strong className="text-foreground">Tubali Fintech</strong>, reducing emergency dispatch latency by ~30% with geofenced mobile alerts at <strong className="text-foreground">Hausasoft Technologies</strong>, and authoring <strong className="text-foreground">Safetify</strong>, a capstone platform that clocked ~2.1s alert delivery across cellular networks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-5 rounded-2xl bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 space-y-3"
          >
            <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Dual-Degree Track</span>
            </div>
            <p className="text-sm sm:text-base text-foreground/85">
              Completed <strong className="text-foreground">B.Sc. Information Technology</strong> at <strong>Bayero University Kano (BUK)</strong> graduating with an exceptional <strong>4.44 / 5.00 CGPA</strong>. Concurrently advancing foundational computational theory through a dual-track <strong className="text-foreground">B.Sc. Computer Science</strong> at the <strong>National Open University of Nigeria (NOUN)</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
          >
            {/* Trilingual Capability Pill */}
            <div className="p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-surface dark:bg-[#0D0E16]">
              <div className="flex items-center gap-2 text-xs font-mono text-accent font-semibold mb-2">
                <Languages className="w-4 h-4" />
                <span>Trilingual Fluency</span>
              </div>
              <ul className="space-y-1.5 text-xs font-sans text-foreground/80">
                <li className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">English</span>
                  <span className="font-mono text-[10px] text-foreground/60">Fluent / Professional</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">Arabic</span>
                  <span className="font-mono text-[10px] text-foreground/60">Professional / Classical</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">Hausa</span>
                  <span className="font-mono text-[10px] text-foreground/60">Native Language</span>
                </li>
              </ul>
            </div>

            {/* Community & Mentorship */}
            <div className="p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-surface dark:bg-[#0D0E16]">
              <div className="flex items-center gap-2 text-xs font-mono text-accent font-semibold mb-2">
                <Users className="w-4 h-4" />
                <span>Community & Mentorship</span>
              </div>
              <p className="text-xs text-foreground/75 leading-relaxed">
                Bootcamp Organizer at Hausasoft Technologies Academy. Authored the Flutter Zero-to-Hero curriculum and guided <strong>50+ students</strong> through Dart, state management, and production deployments.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Art-Directed Profile Frame & Credentials Badge (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Acrylic Profile Identity Card */}
          <div className="relative rounded-3xl p-6 sm:p-8 acrylic-card overflow-hidden">
            {/* Ambient corner light */}
            <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

            {/* Professional Portrait Frame Representation */}
            <div className="relative w-full aspect-square max-w-[340px] mx-auto rounded-2xl bg-gradient-to-b from-[#141829] to-[#0A0C14] border border-white/15 p-2 shadow-2xl overflow-hidden group">
              {/* Visual Avatar / Engineer Monogram Frame */}
              <div className="w-full h-full rounded-xl bg-gradient-to-tr from-[#0F1528] via-[#16213F] to-[#0C101E] flex flex-col items-center justify-center relative overflow-hidden text-center p-6 border border-white/10">
                {/* Tech Geometry Blueprint */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #2F7DFF 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }}
                />

                <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-accent via-electric-600 to-electric-800 p-0.5 shadow-glow mb-4">
                  <div className="w-full h-full rounded-2xl bg-[#090A10] flex items-center justify-center text-3xl font-black font-display text-white">
                    AA
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold font-display text-foreground">
                    Abubakar Abdulrahim
                  </h3>
                  <p className="text-xs font-mono text-accent mt-1">
                    Software & Mobile Architect
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open to Global Remote Roles</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Credential Attributes */}
            <div className="mt-6 pt-5 border-t border-black/10 dark:border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-foreground/60">HUB LOCATION</span>
                <span className="text-foreground font-semibold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-accent" /> Kano, Nigeria (WAT / UTC+1)
                </span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-foreground/60">ACADEMIC HONORS</span>
                <span className="text-emerald-400 font-semibold">BUK First Class Equiv (4.44/5.00)</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-foreground/60">SECURITY CREDENTIAL</span>
                <span className="text-accent font-semibold">Cisco Certified Cyber Pro</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-foreground/60">RESEARCH INTERESTS</span>
                <span className="text-foreground font-medium">Edge AI • Mobile Crowdsensing</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
