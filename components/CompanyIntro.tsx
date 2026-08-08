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
  // LOGO ANIMATION
  // =========================================

  const logoScale = useTransform(
    scrollYProgress,
    [0, 0.28],
    [1, 0.32]
  );

  const logoY = useTransform(
    scrollYProgress,
    [0, 0.32],
    [0, -110]
  );

  const logoOpacity = useTransform(
    scrollYProgress,
    [0.22, 0.42],
    [1, 0]
  );

  // =========================================
  // COMPANY IMAGE ANIMATION
  // =========================================

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.58],
    [0.72, 1]
  );

  const imageWidth = useTransform(
    scrollYProgress,
    [0, 0.58],
    ["62%", "100%"]
  );

  const imageHeight = useTransform(
    scrollYProgress,
    [0, 0.58],
    ["62%", "100%"]
  );

  const imageRadius = useTransform(
    scrollYProgress,
    [0, 0.58],
    [32, 0]
  );

  // =========================================
  // IMAGE OVERLAY
  // =========================================

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.7],
    [0.05, 0.62]
  );

  // =========================================
  // ABOUT CONTENT ANIMATION
  // =========================================

  const contentOpacity = useTransform(
    scrollYProgress,
    [0.58, 0.73],
    [0, 1]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0.58, 0.73],
    [60, 0]
  );

  // =========================================
  // RETURN
  // =========================================

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-[280vh] bg-[#FBF8EE]"
    >
      {/* =========================================
          STICKY EXPERIENCE
      ========================================== */}

      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">

        {/* =========================================
            BACKGROUND
        ========================================== */}

        <div className="absolute inset-0 bg-[#FBF8EE]" />

        {/* =========================================
            COMPANY IMAGE
        ========================================== */}

        <motion.div
          style={{
            width: imageWidth,
            height: imageHeight,
            scale: imageScale,
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
            LOGO
        ========================================== */}

        <motion.div
          style={{
            scale: logoScale,
            y: logoY,
            opacity: logoOpacity,
          }}
          className="relative z-20 flex items-center justify-center"
        >
          <img
            src="/images/logo.png"
            alt="PT Goshen Anugerah Sejahtera"
            className="w-52 md:w-72 lg:w-80"
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
          className="relative z-30 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16"
        >
          <div className="max-w-3xl text-[#FBF8EE]">

            {/* Eyebrow */}
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-[#E8B06C] md:text-[11px]">
              {t.intro.eyebrow}
            </p>

            {/* Heading */}
            <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              {t.intro.heading}
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#FBF8EE]/80 md:mt-8 md:text-xl">
              {t.intro.body}
            </p>

            {/* CTA */}
            <a
              href="#business"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#FBF8EE]/60 pb-2 text-sm font-medium text-[#FBF8EE] transition-colors hover:border-[#E8B06C] hover:text-[#E8B06C]"
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
            opacity: logoOpacity,
          }}
          className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-center md:bottom-10"
        >
          <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#4B5A44]">
            Scroll to discover
          </div>

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