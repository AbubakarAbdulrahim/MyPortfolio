"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  Copy,
  Download,
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  FileCode,
  FolderGit2,
  BookOpen,
  Briefcase,
  GraduationCap,
  Sparkles,
  X,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useToast } from "@/components/ui/Toast";

interface CommandItem {
  id: string;
  category: "Navigation" | "Projects" | "Actions" | "Social";
  title: string;
  subtitle?: string;
  icon: any;
  action: () => void;
  shortcut?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export function CommandPalette({ isOpen, onClose, onOpenResume }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    toast("Email copied to clipboard");
    onClose();
  };

  const handleToggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    toast(`Switched to ${nextTheme} mode`);
    onClose();
  };

  const handleNavigate = (hash: string) => {
    onClose();
    if (hash === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const items: CommandItem[] = useMemo(
    () => [
      // Actions
      {
        id: "copy-email",
        category: "Actions",
        title: "Copy Email Address",
        subtitle: PERSONAL_INFO.email,
        icon: Copy,
        action: handleCopyEmail,
        shortcut: "C",
      },
      {
        id: "download-resume",
        category: "Actions",
        title: "Download Resume / Curriculum Vitae",
        subtitle: "PDF Document (Abubakar Abdulrahim)",
        icon: Download,
        action: () => {
          onOpenResume();
          onClose();
        },
        shortcut: "R",
      },
      {
        id: "toggle-theme",
        category: "Actions",
        title: `Toggle Theme (${theme === "dark" ? "Light" : "Dark"} Mode)`,
        subtitle: "Switch appearance theme",
        icon: theme === "dark" ? Sun : Moon,
        action: handleToggleTheme,
        shortcut: "T",
      },

      // Navigation
      {
        id: "nav-home",
        category: "Navigation",
        title: "Go to Home",
        subtitle: "Top of page",
        icon: ArrowRight,
        action: () => handleNavigate("#"),
      },
      {
        id: "nav-projects",
        category: "Navigation",
        title: "Go to Featured Projects",
        subtitle: "Safetify, SmartBUK, SmartRoute, and Hausasoft",
        icon: FolderGit2,
        action: () => handleNavigate("#projects"),
      },
      {
        id: "nav-experience",
        category: "Navigation",
        title: "Go to Experience",
        subtitle: "Work history and career timeline",
        icon: Briefcase,
        action: () => handleNavigate("#experience"),
      },
      {
        id: "nav-about",
        category: "Navigation",
        title: "Go to About & Skills",
        subtitle: "Background, engineering principles, and core competencies",
        icon: ArrowRight,
        action: () => handleNavigate("#about"),
      },
      {
        id: "nav-education",
        category: "Navigation",
        title: "Go to Education & Certifications",
        subtitle: "Bayero University Kano & Cisco Certifications",
        icon: GraduationCap,
        action: () => handleNavigate("#education"),
      },
      {
        id: "nav-contact",
        category: "Navigation",
        title: "Go to Contact",
        subtitle: "Direct channels and message form",
        icon: Mail,
        action: () => handleNavigate("#contact"),
      },

      // Projects
      {
        id: "proj-safetify",
        category: "Projects",
        title: "Safetify",
        subtitle: "Real-time incident reporting & safety alerts in Flutter",
        icon: FileCode,
        action: () => handleNavigate("#projects"),
      },
      {
        id: "proj-smartbuk",
        category: "Projects",
        title: "SmartBUK",
        subtitle: "Campus mobile application for Bayero University Kano",
        icon: FileCode,
        action: () => handleNavigate("#projects"),
      },
      {
        id: "proj-smartroute",
        category: "Projects",
        title: "SmartRoute",
        subtitle: "Logistics route optimization interface",
        icon: FileCode,
        action: () => handleNavigate("#projects"),
      },
      {
        id: "proj-hausasoft",
        category: "Projects",
        title: "Hausasoft E-Learn",
        subtitle: "Accessible digital skills education platform",
        icon: FileCode,
        action: () => handleNavigate("#projects"),
      },

      // Social
      {
        id: "social-github",
        category: "Social",
        title: "Open GitHub Profile",
        subtitle: `github.com/${PERSONAL_INFO.githubHandle}`,
        icon: Github,
        action: () => {
          window.open(PERSONAL_INFO.github, "_blank");
          onClose();
        },
      },
      {
        id: "social-linkedin",
        category: "Social",
        title: "Open LinkedIn Profile",
        subtitle: "Connect on LinkedIn",
        icon: Linkedin,
        action: () => {
          window.open(PERSONAL_INFO.linkedin, "_blank");
          onClose();
        },
      },
    ],
    [theme, onOpenResume]
  );

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const lower = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(lower) ||
        item.subtitle?.toLowerCase().includes(lower) ||
        item.category.toLowerCase().includes(lower)
    );
  }, [items, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const selected = filteredItems[selectedIndex];
        if (selected) {
          selected.action();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl rounded-2xl bg-surface border border-surface-border text-foreground shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-surface-border">
              <Search className="w-4 h-4 text-muted shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command, project, or section..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted/60 focus:outline-none"
              />
              <button
                onClick={onClose}
                className="p-1 rounded text-muted hover:text-foreground transition-colors"
                aria-label="Close command palette"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="overflow-y-auto p-2 divide-y divide-surface-border/50">
              {filteredItems.length === 0 ? (
                <div className="py-10 text-center text-xs font-mono text-muted">
                  No matching commands found.
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = selectedIndex === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => item.action()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                        isSelected ? "bg-accent text-white" : "hover:bg-background/60 text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-background border border-surface-border text-muted"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs font-medium block truncate">{item.title}</span>
                          {item.subtitle && (
                            <span
                              className={`text-[11px] block truncate ${
                                isSelected ? "text-white/80 font-sans" : "text-muted font-mono"
                              }`}
                            >
                              {item.subtitle}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {item.shortcut && (
                          <kbd
                            className={`px-1.5 py-0.5 rounded text-[10px] font-mono border ${
                              isSelected
                                ? "border-white/30 text-white bg-white/10"
                                : "border-surface-border text-muted bg-background"
                            }`}
                          >
                            {item.shortcut}
                          </kbd>
                        )}
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-background border border-surface-border text-muted"
                          }`}
                        >
                          {item.category}
                        </span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Shortcut Hints */}
            <div className="px-4 py-2.5 border-t border-surface-border bg-background/50 flex items-center justify-between text-[11px] font-mono text-muted">
              <div className="flex items-center gap-3">
                <span>
                  <kbd className="px-1 rounded bg-surface border border-surface-border">↑</kbd>{" "}
                  <kbd className="px-1 rounded bg-surface border border-surface-border">↓</kbd> Navigate
                </span>
                <span>
                  <kbd className="px-1 rounded bg-surface border border-surface-border">↵</kbd> Select
                </span>
                <span>
                  <kbd className="px-1 rounded bg-surface border border-surface-border">ESC</kbd> Close
                </span>
              </div>
              <span className="hidden sm:inline">Abubakar's Portfolio Command Palette</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
