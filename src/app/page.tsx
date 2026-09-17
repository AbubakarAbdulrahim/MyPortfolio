import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { Timeline } from "@/components/experience/Timeline";
import { SkillsMatrix } from "@/components/skills/SkillsMatrix";
import { CaseStudies } from "@/components/case-studies/CaseStudies";
import { GitHubProjects } from "@/components/projects/GitHubProjects";
import { EducationSection } from "@/components/education/EducationSection";
import { WritingSection } from "@/components/blog/WritingSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { AIAssistant } from "@/components/assistant/AIAssistant";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. About */}
        <AboutSection />

        {/* 3. Experience Timeline */}
        <Timeline />

        {/* 4. Skills (Animated Progress Bars) */}
        <SkillsMatrix />

        {/* 5. Featured Case Studies (Flat Cards, No Phone Mockups) */}
        <CaseStudies />

        {/* 6. All Projects (Live GitHub Grid) */}
        <GitHubProjects />

        {/* 7. Certifications & Education */}
        <EducationSection />

        {/* 8. Writing / Blog */}
        <WritingSection />

        {/* 10. Contact */}
        <ContactSection />
      </main>

      {/* 9. AI Assistant Chat Widget (Floating) */}
      <AIAssistant />

      {/* Footer */}
      <Footer />
    </div>
  );
}
