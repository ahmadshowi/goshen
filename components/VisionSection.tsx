"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function VisionSection() {
  const { t } = useLanguage();

  return (
    <section id="vision" className="relative bg-cream py-28 md:py-40">
      <div className="container-editorial">
        <p className="eyebrow text-rust-400 mb-8">{t.vision.eyebrow}</p>
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(1.75rem,4.2vw,3.5rem)] leading-[1.15] text-charcoal max-w-6xl"
        >
          &ldquo;{t.vision.statement}&rdquo;
        </motion.blockquote>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-charcoal/20 mt-14 origin-left"
        />
        <p className="mt-6 eyebrow text-charcoal-faint">PT Goshen Anugerah Sejahtera</p>
      </div>
    </section>
  );
}
