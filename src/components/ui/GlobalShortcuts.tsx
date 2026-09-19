"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useToast } from "@/components/ui/Toast";

interface GlobalShortcutsProps {
  onOpenCommandPalette: () => void;
  onOpenResumeModal: () => void;
}

export function GlobalShortcuts({
  onOpenCommandPalette,
  onOpenResumeModal,
}: GlobalShortcutsProps) {
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if inside an editable field
      const activeEl = document.activeElement;
      const isInput =
        activeEl?.tagName === "INPUT" ||
        activeEl?.tagName === "TEXTAREA" ||
        (activeEl as HTMLElement)?.isContentEditable;

      if (isInput) return;

      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenCommandPalette();
        return;
      }

      // Single-key shortcuts
      if (!e.metaKey && !e.ctrlKey && !e.altKey) {
        if (e.key === "c" || e.key === "C") {
          e.preventDefault();
          navigator.clipboard.writeText(PERSONAL_INFO.email);
          toast("Email copied to clipboard (Shortcut: C)");
        } else if (e.key === "r" || e.key === "R") {
          e.preventDefault();
          onOpenResumeModal();
          toast("Opened Curriculum Vitae (Shortcut: R)");
        } else if (e.key === "t" || e.key === "T") {
          e.preventDefault();
          const next = theme === "dark" ? "light" : "dark";
          setTheme(next);
          toast(`Switched to ${next} theme (Shortcut: T)`);
        } else if (e.key === "?") {
          e.preventDefault();
          onOpenCommandPalette();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpenCommandPalette, onOpenResumeModal, theme, setTheme, toast]);

  return null;
}
