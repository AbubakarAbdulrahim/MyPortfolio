import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { Timeline } from "@/components/experience/Timeline";
import { AboutSection } from "@/components/about/AboutSection";
import { EducationSection } from "@/components/education/EducationSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Featured Projects Showcase */}
        <ProjectsSection />

        {/* 3. Production Work History */}
        <Timeline />

        {/* 4. Background, Engineering Principles & Tech Stack */}
        <AboutSection />

        {/* 5. Academic Degree & Certifications */}
        <EducationSection />

        {/* 6. Direct Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
