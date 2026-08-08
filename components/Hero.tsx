"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const wordVariants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15 + i * 0.08,
    },
  }),
};

const MASK_IMAGE = "/images/masked.png";
const FARM_IMAGE = "/images/hero.png";

export default function Hero() {
  const { t } = useLanguage();

  const line1Words = t.hero.headline1.split(" ");
  const line2Words = t.hero.headline2.split(" ");

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FBF8EE]">
      <div className="grid min-h-screen lg:grid-cols-[54%_46%]">

        {/* =========================
            LEFT — TYPOGRAPHY
        ========================== */}
        <div className="relative z-10 flex items-center">
          <div className="w-full px-6 py-24 sm:px-10 md:px-14 lg:px-16 xl:px-20">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex -rotate-1 items-center rounded-full border border-[#23361F]/30 bg-[#FBF8EE]/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#23361F]"
            >
              {t.hero.eyebrow}
            </motion.div>

            {/* Main heading */}
            <h1 className="max-w-[850px] font-display text-[clamp(4rem,7.5vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.055em] text-[#23361F]">

              {/* BARIS 1 — IMAGE MASK */}
              <span className="block overflow-hidden">
                <motion.span
                  custom={0}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="block bg-cover bg-center bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `url(${MASK_IMAGE})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {line1Words.join(" ")}
                </motion.span>
              </span>

              {/* BARIS 2 — IMAGE MASK */}
              <span className="block overflow-hidden">
                <motion.span
                  custom={1}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="block bg-cover bg-center bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `url(${MASK_IMAGE})`,
                    backgroundPosition: "center 65%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {line2Words.join(" ")}
                </motion.span>
              </span>
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-7 flex items-center gap-3 font-display text-xl font-medium text-[#35502C] md:text-2xl"
            >
              <span className="h-[2px] w-8 bg-[#C8753D]" />
              Kualitas untuk Indonesia.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-4 max-w-[34ch] text-sm leading-[1.7] text-[#4B5A44] md:text-base"
            >
              {t.hero.subheadline}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#about"
                className="group inline-flex items-center gap-3 bg-[#35502C] px-6 py-3.5 text-sm font-medium text-[#FBF8EE] transition-all duration-300 hover:bg-[#23361F]"
              >
                {t.hero.ctaPrimary}

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#business"
                className="group inline-flex items-center gap-3 border border-[#35502C]/30 px-6 py-3.5 text-sm font-medium text-[#35502C] transition-all duration-300 hover:border-[#35502C] hover:bg-[#35502C]/5"
              >
                {t.hero.ctaSecondary}

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* =========================
            RIGHT — FARM IMAGE
        ========================== */}
        <div className="relative min-h-[55vh] overflow-hidden lg:min-h-screen">

          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <img
              src={FARM_IMAGE}
              alt="Peternakan ayam petelur modern"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Soft left fade */}
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#FBF8EE]/35 to-transparent" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#23361F]/35 to-transparent" />

          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="absolute bottom-8 left-8 bg-[#FBF8EE] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#23361F] md:left-10"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#C8753D]" />
            Modern Poultry Farming
          </motion.div>
        </div>
      </div>

      {/* =========================
          BOTTOM STAT BAR
      ========================== */}
      
    </section>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-[#23361F]/10 px-5 py-6 md:border-r last:border-r-0 md:px-8 md:py-7">
      <div className="font-display text-2xl font-semibold tracking-tight text-[#23361F] md:text-3xl">
        {value}
      </div>

      <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#6B7664] md:text-[10px]">
        {label}
      </div>
    </div>
  );
}