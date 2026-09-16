import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsMatrix } from "@/components/skills/SkillsMatrix";
import { Timeline } from "@/components/experience/Timeline";
import { CaseStudies } from "@/components/case-studies/CaseStudies";
import { OtherProjects } from "@/components/projects/OtherProjects";
import { EducationCerts } from "@/components/education/EducationCerts";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { WritingSection } from "@/components/blog/WritingSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      {/* 1. Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Skills Section */}
        <SkillsMatrix />

        {/* 5. Experience / Timeline Section */}
        <Timeline />

        {/* 6. Flagship Case Studies (3 Deep Dives with Custom Device Bezels) */}
        <CaseStudies />

        {/* 7. Other Projects Grid */}
        <OtherProjects />

        {/* 8. Education & Certifications */}
        <EducationCerts />

        {/* 9. Testimonials Section */}
        <Testimonials />

        {/* 10. Blog / Technical Writing */}
        <WritingSection />

        {/* 11. Contact Section & Dual CTA */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
