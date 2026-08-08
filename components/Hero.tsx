"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import ImagePlaceholder from "./ImagePlaceholder";

const wordVariants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.08 },
  }),
};

// Gradasi "matahari terbit di atas ladang" — dipakai sebagai isi huruf pada
// baris kedua heading. Tidak bergantung pada foto, jadi selalu tajam di
// ukuran besar. Ganti stop warnanya kalau mau nuansa lain.
const MASK_GRADIENT = [
  "radial-gradient(circle at 28% 22%, #F7D488 0%, #F7D488 8%, transparent 42%)",
  "linear-gradient(180deg, #EAD9A0 0%, #C9B36B 22%, #7C9B5C 55%, #35502C 100%)",
].join(", ");

export default function Hero() {
  const { t } = useLanguage();

  const line1Words = t.hero.headline1.split(" ");
  const line2Words = t.hero.headline2.split(" ");

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#F3EEDD] grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]"
    >
      {/* KIRI — konten */}
      <div className="relative z-10 flex flex-col justify-center gap-7 px-6 py-16 lg:px-[4vw] lg:py-0">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex w-fit -rotate-2 items-center gap-2 rounded-full border border-[#23361F] px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-[#23361F]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#B9791F]" />
          {t.hero.eyebrow}
        </motion.span>

        <h1 className="font-display text-display-1 font-semibold leading-[0.92] tracking-tight text-[#23361F] max-w-xl">
          {/* Baris 1 — solid, jadi anchor keterbacaan */}
          <span className="block overflow-hidden">
            <motion.span custom={0} variants={wordVariants} initial="hidden" animate="visible" className="block">
              {line1Words.join(" ")}
            </motion.span>
          </span>

          {/* Baris 2 — masked heading, isinya gradasi "dawn over field" */}
          <span className="block overflow-hidden">
            <motion.span
              custom={1}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="block bg-clip-text text-transparent"
              style={{ backgroundImage: MASK_GRADIENT }}
            >
              {line2Words.join(" ")}
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-display flex items-center gap-2.5 text-xl font-medium text-[#35502C] before:h-0.5 before:w-7 before:bg-[#B9791F]"
        >
          Kualitas untuk Indonesia
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-[32ch] text-base leading-relaxed text-[#4B5A44]"
        >
          {t.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-1 flex flex-wrap items-center gap-3.5"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-2 border border-[#23361F] bg-[#35502C] px-6 py-3.5 text-sm font-medium text-[#FBF8EE] transition-colors duration-300 hover:bg-[#23361F]"
          >
            {t.hero.ctaPrimary}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#business"
            className="group inline-flex items-center gap-2 border border-[#23361F] px-6 py-3.5 text-sm font-medium text-[#23361F] transition-colors duration-300 hover:bg-[#23361F]/[0.08]"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      {/* KANAN — foto, dipotong diagonal biar nggak jadi kotak lurus generik */}
      <div
        className="relative min-h-[320px] bg-[#35502C]"
        style={{ clipPath: "polygon(9% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        <ImagePlaceholder tone="forest" icon={Leaf} className="h-full w-full" label="Farm & fasilitas — foto asli" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#23361F]/60 via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-7 left-8 md:left-11 -rotate-1 flex items-center gap-2 bg-[#FBF8EE] px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider text-[#23361F]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#B24A34]" />
          100% telur segar
        </motion.div>
      </div>
    </section>
  );
}