"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ResumeModal } from "@/components/ui/ResumeModal";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

const NAV_LINKS = [
  { name: "Projects", href: "#projects" },
  { name: "Capabilities", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Credentials", href: "#education" },
  { name: "Notes", href: "#writing" },
  { name: "Contact", href: "#contact" },
];

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
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
          isScrolled ? "nav-blur py-3 shadow-subtle" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <span className="font-semibold text-sm sm:text-base tracking-tight text-foreground group-hover:text-accent transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Primary Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-muted hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-2.5">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-surface-border text-xs text-muted hover:text-foreground hover:bg-surface transition-all focus:outline-none"
                aria-label="Open Command Palette"
                title="Search commands (Cmd+K / Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-muted" />
                <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-background border border-surface-border text-muted">
                  ⌘K
                </kbd>
              </button>
            )}

            <ThemeToggle />

            <button
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-foreground bg-surface border border-surface-border hover:border-surface-border-hover hover:bg-surface-hover transition-all focus:outline-none"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center text-foreground hover:bg-surface transition-colors focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-surface-border bg-background/95 backdrop-blur-xl px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-muted hover:text-foreground py-1.5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </>
  );
}
