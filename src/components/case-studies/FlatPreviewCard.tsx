"use client";

import { useState } from "react";
import { CaseStudy } from "@/types";
import { Send, Lock, RefreshCw, KeyRound, Check, AlertCircle, Shield } from "lucide-react";

interface FlatPreviewCardProps {
  caseStudy: CaseStudy;
}

export function FlatPreviewCard({ caseStudy }: FlatPreviewCardProps) {
  const [activeTab, setActiveTab] = useState(0);
  const currentFlow = caseStudy.screenFlows[activeTab] || caseStudy.screenFlows[0];

  return (
    <div className="card p-5 sm:p-6 bg-background border border-surface-border flex flex-col justify-between h-full">
      <div>
        {/* Flat Preview Header Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-surface-border">
          <span className="text-xs font-mono text-muted uppercase tracking-wider">
            {caseStudy.title} System View
          </span>
          <div className="flex gap-1">
            {caseStudy.screenFlows.map((flow, idx) => (
              <button
                key={flow.name}
                onClick={() => setActiveTab(idx)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                  activeTab === idx
                    ? "bg-accent text-white font-medium"
                    : "text-muted hover:text-foreground bg-surface"
                }`}
              >
                {flow.name}
              </button>
            ))}
          </div>
        </div>

        {/* Flat Display Area (No Phone Bezel) */}
        <div className="p-4 rounded-xl bg-surface border border-surface-border space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-foreground tracking-tight">
              {currentFlow.title}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-background border border-surface-border text-accent">
              {currentFlow.badge}
            </span>
          </div>

          <p className="text-xs text-muted leading-relaxed">
            {currentFlow.description}
          </p>

          <div className="p-3 rounded-lg bg-background border border-surface-border space-y-1.5">
            <span className="text-[10px] font-mono text-muted uppercase tracking-wider block">
              Architectural Highlights
            </span>
            <ul className="space-y-1">
              {currentFlow.details.map((d, i) => (
                <li key={i} className="text-xs text-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="mt-4 pt-3 border-t border-surface-border flex items-center justify-between text-[11px] font-mono text-muted">
        <span>Verified Architecture</span>
        <span className="text-accent">{caseStudy.platform.toUpperCase()}</span>
      </div>
    </div>
  );
}
