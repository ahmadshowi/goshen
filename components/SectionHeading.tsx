"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  heading: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  heading,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`eyebrow mb-4 ${tone === "light" ? "text-cream/70" : "text-rust-400"}`}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className={`font-display text-display-2 font-medium ${
          tone === "light" ? "text-cream" : "text-charcoal"
        }`}
      >
        {heading}
      </motion.h2>
    </div>
  );
}
