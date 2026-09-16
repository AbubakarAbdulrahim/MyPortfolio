import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { CaseStudies } from "@/components/case-studies/CaseStudies";
import { Timeline } from "@/components/experience/Timeline";
import { SkillsMatrix } from "@/components/skills/SkillsMatrix";
import { WritingSection } from "@/components/blog/WritingSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <HeroSection />

        {/* 01 / Work */}
        <CaseStudies />

        {/* 02 / Experience & Education */}
        <Timeline />

        {/* 03 / Stack */}
        <SkillsMatrix />

        {/* 04 / Notes */}
        <WritingSection />

        {/* 05 / Contact */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
