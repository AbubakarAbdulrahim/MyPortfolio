"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  index,
  tag,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-accent font-semibold",
          align === "center" ? "justify-center" : "justify-start"
        )}
      >
        {index && (
          <span className="px-2 py-0.5 rounded bg-accent/10 border border-accent/25 text-accent">
            {index}
          </span>
        )}
        {tag && <span>{tag}</span>}
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-display leading-[1.12]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-foreground/70 leading-relaxed font-sans max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
