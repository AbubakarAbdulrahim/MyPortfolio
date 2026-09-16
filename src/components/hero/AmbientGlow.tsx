"use client";

import { motion } from "framer-motion";

export function AmbientGlow() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden="true"
    >
      {/* Primary Keynote-style Electric Blue Radial Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.45, 0.35],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[550px] rounded-full bg-gradient-to-b from-[#2F7DFF]/35 to-[#175CE6]/5 blur-[120px] dark:opacity-50 opacity-25"
      />

      {/* Secondary Azure Sub-Glow Offset */}
      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.2, 0.3, 0.2],
          x: [-30, 20, -30],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-24 w-[450px] h-[450px] rounded-full bg-[#38BDF8]/20 blur-[130px] dark:opacity-30 opacity-15"
      />

      {/* Subtle Bottom Horizon Line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Subtle Coordinate Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
