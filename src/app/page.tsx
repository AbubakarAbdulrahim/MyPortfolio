"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { AboutSection } from "@/components/about/AboutSection";
import { Timeline } from "@/components/experience/Timeline";
import { EducationSection } from "@/components/education/EducationSection";
import { WritingSection } from "@/components/blog/WritingSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { GlobalShortcuts } from "@/components/ui/GlobalShortcuts";
import { ResumeModal } from "@/components/ui/ResumeModal";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased selection:bg-accent selection:text-white">
      {/* Global Keyboard Navigation (Cmd+K, C for Copy, R for Resume, T for Theme) */}
      <GlobalShortcuts
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Primary Frosted Navigation */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      <main className="flex-1">
        {/* 1. Hero: Confident Identity, Philosophy & Human Proof */}
        <HeroSection />

        {/* 2. Flagship Systems & Featured Projects Showcase */}
        <ProjectsSection />

        {/* 3. Technical Capabilities & Engineering Philosophy */}
        <AboutSection />

        {/* 4. Production Career History & Engineering Ledger */}
        <Timeline />

        {/* 5. Academic Degree (4.44 CGPA) & Verified Cisco Credentials */}
        <EducationSection />

        {/* 6. Technical Writing & Architecture Notes */}
        <WritingSection />

        {/* 7. Direct Contact & Communication Portal */}
        <ContactSection />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Global Interactive Modals */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
