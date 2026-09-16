"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, FileText, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ResumeModal } from "@/components/ui/ResumeModal";
import { PERSONAL_INFO } from "@/data/portfolioData";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Writing", href: "#writing" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "acrylic-nav py-3.5 shadow-acrylic"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Identity / Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-electric-700 flex items-center justify-center text-white font-bold font-mono text-base shadow-glow-sm group-hover:scale-105 transition-transform duration-300">
              <span className="relative z-10">AA</span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-foreground font-display group-hover:text-accent transition-colors">
                Abubakar Abdulrahim
              </span>
              <span className="text-[10px] font-mono text-foreground/60 tracking-wider uppercase hidden sm:inline-block">
                Software & Mobile Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/[0.04] border border-black/5 dark:border-white/10 backdrop-blur-md"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-foreground/75 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-2.5">
            {/* Status indicator badge (Desktop only) */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available</span>
            </div>

            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Resume Button */}
            <button
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-xs font-semibold hover:bg-accent-hover active:scale-95 transition-all duration-200 shadow-glow focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="View or download resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Resume</span>
              <Download className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 flex items-center justify-center text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden border-b border-black/10 dark:border-white/10 bg-surface/95 dark:bg-[#090A10]/95 backdrop-blur-2xl overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-6 space-y-3">
                <div className="flex items-center gap-2 pb-3 mb-2 border-b border-black/5 dark:border-white/5 text-xs font-mono text-foreground/60">
                  <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Kano, Nigeria • Available for Engagements</span>
                </div>

                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-base font-medium text-foreground hover:text-accent transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-foreground/40" />
                  </a>
                ))}

                <div className="pt-4 mt-2 border-t border-black/10 dark:border-white/10 flex flex-col gap-2.5">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setResumeModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-white text-sm font-semibold shadow-glow"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Resume & Credentials</span>
                  </button>
                  <a
                    href="/resume.pdf"
                    download="Abubakar_Abdulrahim_Resume.pdf"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-black/10 dark:border-white/15 text-foreground text-xs font-mono hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-accent" />
                    <span>Direct PDF Download</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Persistent Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </>
  );
}
