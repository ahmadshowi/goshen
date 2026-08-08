"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function CompanyIntro() {
  const { t } = useLanguage();

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // =========================================
  // IMAGE EXPANSION
  // =========================================

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.6],
    [0.82, 1]
  );

  const imageWidth = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["42%", "100%"]
  );

  const imageHeight = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["48%", "100%"]
  );

  const imageRadius = useTransform(
    scrollYProgress,
    [0, 0.6],
    [28, 0]
  );

  // =========================================
  // IMAGE POSITION
  // =========================================

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["0%", "0%"]
  );

  // =========================================
  // OVERLAY
  // =========================================

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.7],
    [0, 0.62]
  );

  // =========================================
  // ABOUT CONTENT
  // =========================================

  const contentOpacity = useTransform(
    scrollYProgress,
    [0.58, 0.76],
    [0, 1]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0.58, 0.76],
    [70, 0]
  );

  // =========================================
  // SMALL LABEL
  // =========================================

  const labelOpacity = useTransform(
    scrollYProgress,
    [0, 0.35],
    [1, 0]
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-[240vh] bg-[#FBF8EE]"
    >
      {/* =========================================
          STICKY VIEWPORT
      ========================================== */}

      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">

        {/* =========================================
            BACKGROUND
        ========================================== */}

        <div className="absolute inset-0 bg-[#FBF8EE]" />

        {/* =========================================
            SMALL INTRO LABEL
        ========================================== */}

        <motion.div
          style={{
            opacity: labelOpacity,
          }}
          className="absolute top-16 left-1/2 z-30 -translate-x-1/2 text-center md:top-20"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#4B5A44]">
            {t.intro.eyebrow}
          </p>
        </motion.div>

        {/* =========================================
            COMPANY IMAGE
        ========================================== */}

        <motion.div
          style={{
            width: imageWidth,
            height: imageHeight,
            scale: imageScale,
            y: imageY,
            borderRadius: imageRadius,
          }}
          className="absolute overflow-hidden"
        >
          <img
            src="/images/company.jpg"
            alt="Peternakan PT Goshen Anugerah Sejahtera"
            className="h-full w-full object-cover"
          />

          {/* Dark overlay */}
          <motion.div
            style={{
              opacity: overlayOpacity,
            }}
            className="absolute inset-0 bg-[#172015]"
          />
        </motion.div>

        {/* =========================================
            ABOUT CONTENT
        ========================================== */}

        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
          className="relative z-20 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16"
        >
          <div className="max-w-4xl text-[#FBF8EE]">

            {/* Eyebrow */}
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-[#E8B06C] md:text-[11px]">
              {t.intro.eyebrow}
            </p>

            {/* Heading */}
            <h2 className="max-w-4xl font-display text-5xl font-medium leading-[0.92] tracking-[-0.045em] md:text-7xl lg:text-8xl">
              {t.intro.heading}
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#FBF8EE]/80 md:mt-8 md:text-xl">
              {t.intro.body}
            </p>

            {/* CTA */}
            <a
              href="#business"
              className="group mt-9 inline-flex items-center gap-3 border-b border-[#FBF8EE]/60 pb-2 text-sm font-medium text-[#FBF8EE] transition-colors duration-300 hover:border-[#E8B06C] hover:text-[#E8B06C]"
            >
              {t.intro.cta}

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

        {/* =========================================
            SCROLL INDICATOR
        ========================================== */}

        <motion.div
          style={{
            opacity: labelOpacity,
          }}
          className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-center"
        >


          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto mt-3 h-8 w-px bg-[#23361F]/40"
          />
        </motion.div>

      </div>
    </section>
  );
}