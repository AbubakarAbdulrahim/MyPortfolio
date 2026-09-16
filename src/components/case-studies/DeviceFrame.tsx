"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Wifi, Battery, Signal, Shield, AlertTriangle, MapPin, Send, MessageSquare, Check, Sparkles, Lock, RefreshCw, KeyRound } from "lucide-react";
import { CaseStudy } from "@/types";

interface DeviceFrameProps {
  caseStudy: CaseStudy;
  activeScreenIndex: number;
  onSelectScreen: (index: number) => void;
}

export function DeviceFrame({ caseStudy, activeScreenIndex, onSelectScreen }: DeviceFrameProps) {
  const currentScreen = caseStudy.screenFlows[activeScreenIndex] || caseStudy.screenFlows[0];

  return (
    <div className="flex flex-col items-center">
      {/* Hardware Frame Shell */}
      <div className="relative w-[300px] sm:w-[320px] h-[620px] rounded-[48px] p-3 bg-[#1C1D24] dark:bg-[#12131C] border-4 border-[#2D303E] dark:border-[#2A2C3E] phone-shadow select-none">
        {/* Hardware side buttons hints */}
        <div className="absolute -left-[7px] top-24 w-[3px] h-9 bg-[#35394A] rounded-l-sm" />
        <div className="absolute -left-[7px] top-36 w-[3px] h-12 bg-[#35394A] rounded-l-sm" />
        <div className="absolute -right-[7px] top-28 w-[3px] h-14 bg-[#35394A] rounded-r-sm" />

        {/* Screen Bezel Interior */}
        <div className="w-full h-full rounded-[40px] bg-[#07080C] overflow-hidden flex flex-col relative border border-white/10 text-white font-sans">
          {/* Status Bar */}
          <div className="h-10 px-6 flex items-center justify-between z-20 shrink-0">
            <span className="text-[11px] font-semibold tracking-tight">9:41</span>

            {/* Dynamic Island / Camera Punch Hole */}
            <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center gap-1.5 px-2 border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1C2030]" />
              <div className="w-2 h-2 rounded-full bg-[#0E1528] border border-[#2F7DFF]/50" />
            </div>

            <div className="flex items-center gap-1.5 text-white/80">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* App Header Banner */}
          <div className="px-4 py-2.5 border-b border-white/10 flex items-center justify-between bg-black/40 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center text-white text-[11px] font-bold">
                {caseStudy.title[0]}
              </div>
              <span className="text-xs font-bold font-display tracking-tight text-white">
                {caseStudy.title}
              </span>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/40 font-semibold">
              {currentScreen.badge || "PROD V2.4"}
            </span>
          </div>

          {/* Interactive Screen Dynamic Body based on Case Study & Screen Index */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col justify-between">
            {/* SAFETIFY APP SCREEN SIMULATION */}
            {caseStudy.id === "safetify" && (
              <div className="space-y-3">
                {activeScreenIndex === 0 && (
                  /* Screen 1: Threat Radar */
                  <div className="space-y-3">
                    <div className="p-3 rounded-2xl bg-[#0E111E] border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5 text-xs text-rose-400 font-semibold">
                          <AlertTriangle className="w-3.5 h-3.5 animate-pulse" />
                          <span>ACTIVE RADIUS: 2.5 KM</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/50">KANO METRO</span>
                      </div>

                      {/* Radar Screen Visual */}
                      <div className="relative h-28 w-full rounded-xl bg-[#080B15] border border-accent/30 overflow-hidden flex items-center justify-center">
                        <div className="absolute w-24 h-24 rounded-full border border-accent/40 animate-ping opacity-30" />
                        <div className="absolute w-16 h-16 rounded-full border border-accent/60" />
                        <div className="absolute w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-glow" />
                        </div>
                        {/* Incident markers */}
                        <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                        <div className="absolute bottom-6 left-10 w-2 h-2 rounded-full bg-amber-400" />
                        <div className="absolute bottom-2 right-4 text-[9px] font-mono text-white/40">LATENCY: 2.1s</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                          <Shield className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[11px] font-bold">Obstruction Reported</div>
                          <div className="text-[9px] text-white/50">State Road • 4 mins ago</div>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono text-emerald-400">VERIFIED</span>
                    </div>

                    <button className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-rose-600/30">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>DISPATCH EMERGENCY BEACON</span>
                    </button>
                  </div>
                )}

                {activeScreenIndex === 1 && (
                  /* Screen 2: Rapid Report Wizard */
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-white flex items-center justify-between">
                      <span>Report Incident</span>
                      <span className="text-[10px] font-mono text-accent">STEP 2 OF 3</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#0E111E] border border-white/10 space-y-2">
                      <div className="text-[10px] text-white/60">GPS COORDINATES (AUTO-LOCKED)</div>
                      <div className="text-xs font-mono text-emerald-400 bg-black/40 p-1.5 rounded-lg flex items-center justify-between">
                        <span>12.0022° N, 8.5920° E</span>
                        <span className="text-[9px] text-white/50">± 1.8m ACCURACY</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#0E111E] border border-white/10 space-y-1.5">
                      <div className="text-[10px] text-white/60">EVIDENCE ATTACHMENT</div>
                      <div className="h-16 rounded-lg bg-white/5 border border-dashed border-white/20 flex flex-col items-center justify-center text-[10px] text-white/50">
                        <span>Image downsampled via WebP (-65%)</span>
                        <span className="text-accent font-mono">Ready for signed upload</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" />
                      <span>Offline queue listener active: zero data loss</span>
                    </div>

                    <button className="w-full py-2 rounded-xl bg-accent text-white text-xs font-bold">
                      Transmit to Dispatch Queue
                    </button>
                  </div>
                )}

                {activeScreenIndex === 2 && (
                  /* Screen 3: Verification Hub */
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-white">Community Consensus</div>
                    <div className="p-3 rounded-xl bg-[#0E111E] border border-white/10 space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold">Incident #4928</span>
                        <span className="text-[10px] font-mono text-accent">Score: 94%</span>
                      </div>
                      <p className="text-[10px] text-white/70">
                        Heavy waterlogging at Gidan Murtala flyover underpass.
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <button className="flex-1 py-1 rounded bg-emerald-600/30 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
                          Confirm (+14)
                        </button>
                        <button className="flex-1 py-1 rounded bg-rose-600/30 text-rose-300 text-[10px] font-semibold border border-rose-500/30">
                          Refute (0)
                        </button>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent text-[10px] font-mono">
                      Usability benchmark validated at 4.4/5.0 across 60 field test evaluations.
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* BUK STUDENT APP SCREEN SIMULATION */}
            {caseStudy.id === "buk-student-app" && (
              <div className="space-y-3">
                {activeScreenIndex === 0 && (
                  /* Screen 1: BUK AI Intelligence */
                  <div className="space-y-2.5">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-[#12162A] to-[#0A0D17] border border-accent/30 relative overflow-hidden">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-xs font-bold text-white">BUK Intelligence</span>
                        <span className="text-[9px] font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded ml-auto">
                          Gemini 2.5 Flash
                        </span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/5 text-[11px] text-white/80 leading-relaxed">
                        &quot;When is the faculty registration deadline for 300L IT students?&quot;
                      </div>
                    </div>

                    {/* Streaming AI response */}
                    <div className="p-3 rounded-2xl bg-[#0D101C] border border-white/10 space-y-1.5">
                      <div className="text-[10px] font-mono text-accent flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                        <span>VERIFIED CAMPUS POLICY (340ms)</span>
                      </div>
                      <p className="text-[11px] text-white/90 leading-relaxed">
                        Senate Circular #84 extends regular course registration to Friday, Oct 24th. New Campus central e-library is open 24/7.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10">
                      <input
                        type="text"
                        placeholder="Ask campus policy..."
                        disabled
                        className="bg-transparent text-[10px] text-white/50 w-full outline-none"
                      />
                      <Send className="w-3.5 h-3.5 text-accent shrink-0" />
                    </div>
                  </div>
                )}

                {activeScreenIndex === 1 && (
                  /* Screen 2: Lost & Found */
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-white flex items-center justify-between">
                      <span>Lost & Found Ledger</span>
                      <span className="text-[10px] text-emerald-400 font-mono">MATCH DETECTED</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0E111E] border border-emerald-500/30 space-y-2">
                      <div className="text-[11px] font-semibold text-white">Bayero Student ID Card</div>
                      <div className="text-[10px] text-white/60">Faculty of CS & IT • New Site Library</div>
                      <div className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 p-1.5 rounded">
                        Attribute Match: Mat No. CST/21/IFT/00***
                      </div>
                    </div>

                    <button className="w-full py-2 rounded-xl bg-accent text-white text-xs font-bold">
                      Claim with Matriculation Pin
                    </button>
                  </div>
                )}

                {activeScreenIndex === 2 && (
                  /* Screen 3: Senate Bulletins */
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-white">Official Senate Wire</div>
                    <div className="p-2.5 rounded-xl bg-[#0E111E] border border-white/10 space-y-1">
                      <span className="text-[9px] font-mono text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded">URGENT</span>
                      <div className="text-xs font-semibold text-white">Continuous Assessment Schedule</div>
                      <div className="text-[10px] text-white/60">Faculty of Computing timetable uploaded.</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#0E111E] border border-white/10 space-y-1">
                      <span className="text-[9px] font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded">ACADEMIC</span>
                      <div className="text-xs font-semibold text-white">ICT Hostel Wi-Fi Maintenance</div>
                      <div className="text-[10px] text-white/60">Fiber switch replacement completed.</div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TUBALI FINTECH OTP MIGRATION SCREEN SIMULATION */}
            {caseStudy.id === "tubali-otp-migration" && (
              <div className="space-y-3">
                {activeScreenIndex === 0 && (
                  /* Screen 1: OTP Matrix Gate */
                  <div className="space-y-3 text-center">
                    <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 text-accent flex items-center justify-center mx-auto">
                      <Lock className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="text-xs font-bold text-white">Verify Phone Number</div>
                      <div className="text-[10px] text-white/60 mt-0.5">Code sent to +234 810 *** 4920</div>
                    </div>

                    {/* 6-digit OTP boxes */}
                    <div className="flex justify-center gap-1.5 my-2">
                      {["7", "4", "2", "9", "1", "8"].map((num, idx) => (
                        <div
                          key={idx}
                          className="w-9 h-11 rounded-lg bg-[#0E111E] border border-accent text-accent font-mono text-base font-bold flex items-center justify-center shadow-glow-sm"
                        >
                          {num}
                        </div>
                      ))}
                    </div>

                    <div className="text-[10px] font-mono text-white/50 flex items-center justify-center gap-1">
                      <RefreshCw className="w-3 h-3 text-accent animate-spin" />
                      <span>Resend OTP in 0:42 via SMS / WhatsApp</span>
                    </div>

                    <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                      Carrier SMS autofill verified: +38% onboarding lift
                    </div>
                  </div>
                )}

                {activeScreenIndex === 1 && (
                  /* Screen 2: 2FA PIN Reset */
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <KeyRound className="w-4 h-4 text-accent" />
                      <span>Reset Transaction PIN</span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0E111E] border border-white/10 space-y-2 text-[10px] text-white/70">
                      <div>Enter new 4-digit financial authorization PIN:</div>
                      <div className="flex gap-2 justify-center py-2">
                        {[1, 2, 3, 4].map((dot) => (
                          <div key={dot} className="w-3 h-3 rounded-full bg-accent" />
                        ))}
                      </div>
                      <div className="text-center font-mono text-accent">Keystore encrypted: zero plaintext leakage</div>
                    </div>

                    <button className="w-full py-2 rounded-xl bg-accent text-white text-xs font-bold">
                      Update Secure PIN
                    </button>
                  </div>
                )}

                {activeScreenIndex === 2 && (
                  /* Screen 3: Device Vault */
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-white">Hardware Device Vault</div>
                    <div className="p-2.5 rounded-xl bg-[#0E111E] border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-white">iPhone 16 Pro</div>
                        <div className="text-[9px] text-white/50">Current Device • Kano, NG</div>
                      </div>
                      <span className="text-[9px] font-mono text-emerald-400">ACTIVE</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#0E111E] border border-white/10 flex items-center justify-between opacity-60">
                      <div>
                        <div className="text-xs font-semibold text-white">Samsung SM-G998B</div>
                        <div className="text-[9px] text-white/50">Last active 3 days ago</div>
                      </div>
                      <span className="text-[9px] font-mono text-rose-400">REVOKED</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Home Bar Indicator */}
            <div className="w-28 h-1 bg-white/20 rounded-full mx-auto mt-3 shrink-0" />
          </div>
        </div>
      </div>

      {/* Screen selector chips under the phone */}
      <div className="mt-4 flex items-center gap-1.5 p-1.5 rounded-full bg-black/10 dark:bg-white/5 border border-black/10 dark:border-white/10">
        {caseStudy.screenFlows.map((flow, idx) => {
          const isActive = activeScreenIndex === idx;
          return (
            <button
              key={flow.name}
              onClick={() => onSelectScreen(idx)}
              className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all ${
                isActive
                  ? "bg-accent text-white font-semibold shadow-glow-sm"
                  : "text-foreground/70 hover:text-foreground"
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
