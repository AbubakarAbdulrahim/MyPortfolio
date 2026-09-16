"use client";

import { Wifi, Battery, Signal, Shield, MapPin, Send, Lock, RefreshCw, KeyRound, Check } from "lucide-react";
import { CaseStudy } from "@/types";

interface DeviceFrameProps {
  caseStudy: CaseStudy;
  activeScreenIndex: number;
  onSelectScreen: (index: number) => void;
}

export function DeviceFrame({ caseStudy, activeScreenIndex, onSelectScreen }: DeviceFrameProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Hardware Frame Shell */}
      <div className="relative w-[290px] sm:w-[310px] h-[580px] rounded-[44px] p-3 bg-[#151518] dark:bg-[#121215] border border-surface-border shadow-xl select-none">
        {/* Screen Bezel Interior */}
        <div className="w-full h-full rounded-[34px] bg-[#0A0A0C] overflow-hidden flex flex-col relative border border-white/5 text-white font-sans">
          {/* Status Bar */}
          <div className="h-9 px-6 flex items-center justify-between z-20 shrink-0">
            <span className="text-[11px] font-medium tracking-tight text-[#86868B]">9:41</span>

            {/* Camera Pill */}
            <div className="w-16 h-3.5 bg-black rounded-full border border-white/10" />

            <div className="flex items-center gap-1.5 text-[#86868B]">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* App Title Bar */}
          <div className="px-4 py-2 border-b border-white/5 flex items-center justify-between shrink-0">
            <span className="text-xs font-semibold tracking-tight text-white">
              {caseStudy.title}
            </span>
            <span className="text-[10px] font-mono text-[#86868B]">
              PROD
            </span>
          </div>

          {/* Screen Content - Pure, restrained UI without rainbow colors */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col justify-between">
            {/* SAFETIFY APP */}
            {caseStudy.id === "safetify" && (
              <div className="space-y-3">
                {activeScreenIndex === 0 && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-[#141418] border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-medium text-white">Active Perimeter</span>
                        <span className="font-mono text-[#86868B]">2.5 KM</span>
                      </div>
                      <div className="h-24 rounded-lg bg-[#0E0E12] border border-white/5 flex flex-col items-center justify-center relative">
                        <div className="w-12 h-12 rounded-full border border-accent/40 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                        </div>
                        <span className="text-[9px] font-mono text-[#86868B] mt-2">Latency: ~2.1s</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#141418] border border-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-medium text-white">State Road Obstruction</div>
                        <div className="text-[10px] text-[#86868B]">Verified by 14 responders</div>
                      </div>
                      <span className="text-[10px] font-mono text-accent">Active</span>
                    </div>

                    <button className="w-full py-2.5 rounded-lg bg-accent text-white text-xs font-medium hover:bg-accent-hover transition-colors">
                      Broadcast Dispatch
                    </button>
                  </div>
                )}

                {activeScreenIndex === 1 && (
                  <div className="space-y-3">
                    <span className="text-xs font-medium text-white">Incident Report</span>
                    <div className="p-3 rounded-xl bg-[#141418] border border-white/5 space-y-2">
                      <span className="text-[10px] text-[#86868B] block">GPS LOCK</span>
                      <div className="text-xs font-mono text-white bg-[#0E0E12] p-2 rounded">
                        12.0022° N, 8.5920° E
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#141418] border border-white/5 text-[11px] text-[#86868B]">
                      WebP client-side compression (-65%) completed. Offline queue active.
                    </div>
                    <button className="w-full py-2 rounded-lg bg-accent text-white text-xs font-medium">
                      Submit to Queue
                    </button>
                  </div>
                )}

                {activeScreenIndex === 2 && (
                  <div className="space-y-3">
                    <span className="text-xs font-medium text-white">Community Consensus</span>
                    <div className="p-3 rounded-xl bg-[#141418] border border-white/5 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-white">Report #4928</span>
                        <span className="font-mono text-accent">94% Confidence</span>
                      </div>
                      <p className="text-[11px] text-[#86868B]">
                        Waterlogging at flyover underpass confirmed by perimeter sensor cluster.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* BUK STUDENT APP */}
            {caseStudy.id === "buk-student-app" && (
              <div className="space-y-3">
                {activeScreenIndex === 0 && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-[#141418] border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-medium text-white">Campus Assistant</span>
                        <span className="font-mono text-accent">Gemini 2.5 Flash</span>
                      </div>
                      <div className="text-[11px] text-[#86868B]">
                        &quot;When does faculty course registration close?&quot;
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0E0E12] border border-white/5 text-[11px] text-white/90 leading-relaxed">
                      Senate Circular #84 extends registration to Friday, Oct 24th for all 300L IT students.
                    </div>

                    <div className="flex items-center gap-2 p-2 rounded-lg bg-[#141418] border border-white/5">
                      <input
                        type="text"
                        placeholder="Ask campus policy..."
                        disabled
                        className="bg-transparent text-[11px] text-[#86868B] w-full outline-none"
                      />
                      <Send className="w-3.5 h-3.5 text-accent shrink-0" />
                    </div>
                  </div>
                )}

                {activeScreenIndex === 1 && (
                  <div className="space-y-3">
                    <span className="text-xs font-medium text-white">Lost & Found</span>
                    <div className="p-3 rounded-xl bg-[#141418] border border-white/5 space-y-1">
                      <div className="text-xs font-medium text-white">Student ID Card Found</div>
                      <div className="text-[10px] text-[#86868B]">Faculty of CS & IT Library</div>
                      <div className="text-[10px] font-mono text-accent mt-1">Matched matriculation record</div>
                    </div>
                    <button className="w-full py-2 rounded-lg bg-accent text-white text-xs font-medium">
                      Initiate Ownership Claim
                    </button>
                  </div>
                )}

                {activeScreenIndex === 2 && (
                  <div className="space-y-3">
                    <span className="text-xs font-medium text-white">Senate Bulletins</span>
                    <div className="p-3 rounded-xl bg-[#141418] border border-white/5 space-y-1">
                      <div className="text-xs font-medium text-white">Exam Timetable Published</div>
                      <div className="text-[10px] text-[#86868B]">Faculty of Computing • 2 hrs ago</div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TUBALI FINTECH */}
            {caseStudy.id === "tubali-otp-migration" && (
              <div className="space-y-3 text-center">
                {activeScreenIndex === 0 && (
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-full bg-[#141418] border border-white/10 flex items-center justify-center mx-auto text-accent">
                      <Lock className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="text-xs font-medium text-white">Verify Phone Number</div>
                      <div className="text-[10px] text-[#86868B] mt-0.5">+234 810 *** 4920</div>
                    </div>

                    <div className="flex justify-center gap-1.5 my-2">
                      {["7", "4", "2", "9", "1", "8"].map((num, idx) => (
                        <div
                          key={idx}
                          className="w-8 h-10 rounded-md bg-[#141418] border border-surface-border text-accent font-mono text-sm font-semibold flex items-center justify-center"
                        >
                          {num}
                        </div>
                      ))}
                    </div>

                    <div className="text-[10px] font-mono text-[#86868B]">
                      Carrier SMS autofill active • Resend in 0:42
                    </div>
                  </div>
                )}

                {activeScreenIndex === 1 && (
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-2 text-xs font-medium text-white">
                      <KeyRound className="w-3.5 h-3.5 text-accent" />
                      <span>Reset Transaction PIN</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#141418] border border-white/5 space-y-2 text-[10px] text-[#86868B]">
                      <div>Enter 4-digit PIN:</div>
                      <div className="flex gap-2 justify-center py-1">
                        {[1, 2, 3, 4].map((dot) => (
                          <div key={dot} className="w-2.5 h-2.5 rounded-full bg-accent" />
                        ))}
                      </div>
                      <div className="text-center font-mono text-[9px]">Hardware Keystore Encrypted</div>
                    </div>

                    <button className="w-full py-2 rounded-lg bg-accent text-white text-xs font-medium">
                      Update PIN
                    </button>
                  </div>
                )}

                {activeScreenIndex === 2 && (
                  <div className="space-y-2 text-left">
                    <span className="text-xs font-medium text-white">Device Vault</span>
                    <div className="p-2.5 rounded-xl bg-[#141418] border border-white/5 flex items-center justify-between text-xs">
                      <div>
                        <div className="text-white font-medium">iPhone 16 Pro</div>
                        <div className="text-[10px] text-[#86868B]">Current Device • Active</div>
                      </div>
                      <span className="text-[10px] font-mono text-accent">Verified</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Home Bar */}
            <div className="w-24 h-1 bg-white/20 rounded-full mx-auto mt-2 shrink-0" />
          </div>
        </div>
      </div>

      {/* Screen selector pills */}
      <div className="mt-4 flex items-center gap-1.5 p-1 rounded-full border border-surface-border">
        {caseStudy.screenFlows.map((flow, idx) => {
          const isActive = activeScreenIndex === idx;
          return (
            <button
              key={flow.name}
              onClick={() => onSelectScreen(idx)}
              className={`px-3 py-1 rounded-full text-[11px] font-mono transition-colors ${
                isActive
                  ? "bg-accent text-white font-medium"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {flow.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
