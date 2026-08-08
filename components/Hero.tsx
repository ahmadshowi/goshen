"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Leaf } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import ImagePlaceholder from "./ImagePlaceholder";

const wordVariants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.08 },
  }),
};

export default function Hero() {
  const { t } = useLanguage();

  const line1Words = t.hero.headline1.split(" ");
  const line2Words = t.hero.headline2.split(" ");

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <ImagePlaceholder tone="charcoal" icon={Leaf} className="h-full w-full" label="Modern farm — highland facility" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="container-editorial pb-14 md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow text-rust-300 mb-6"
          >
            {t.hero.eyebrow}
          </motion.p>

          <h1 className="font-display text-display-1 font-medium text-cream max-w-5xl">
            <span className="block overflow-hidden">
              <motion.span custom={0} variants={wordVariants} initial="hidden" animate="visible" className="block">
                {line1Words.join(" ")}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span custom={1} variants={wordVariants} initial="hidden" animate="visible" className="block text-cream/90">
                {line2Words.join(" ")}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 max-w-lg text-base md:text-lg text-cream/70 font-body leading-relaxed"
          >
            {t.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-2 bg-cream text-charcoal px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 hover:bg-rust-400 hover:text-cream"
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#business"
              className="group inline-flex items-center gap-2 border border-cream/40 text-cream px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 hover:border-cream hover:bg-cream/10"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="hidden md:flex items-center gap-3 absolute bottom-10 right-8 lg:right-20 text-cream/60"
        >
          <span className="eyebrow">{t.hero.scrollHint}</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
