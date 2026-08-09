"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Leaf,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useRef } from "react";

const icons = [ShieldCheck, Sparkles, Leaf];

export default function ProductSection() {
  const { t } = useLanguage();

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // =========================================
  // IMAGE SCROLL ANIMATION
  // =========================================

  const imageScale = useTransform(
    scrollYProgress,
    [0.12, 0.45],
    [0.84, 1]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0.12, 0.45],
    [45, 0]
  );

  const imageRadius = useTransform(
    scrollYProgress,
    [0.12, 0.45],
    [28, 0]
  );

  return (
    <section
      ref={sectionRef}
      id="product"
      className="relative overflow-hidden bg-[#FBF8EE] py-28 md:py-40"
    >
      <div className="container-editorial">

        {/* =====================================================
            PRODUCT INTRO
        ====================================================== */}

        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">

          {/* =========================================
              LEFT — SECTION LABEL
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="shrink-0"
          >
            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-[#B9791F]" />

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B9791F] md:text-[11px]">
                {t.product.eyebrow}
              </p>

            </div>
          </motion.div>


          {/* =========================================
              RIGHT — STATEMENT
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="max-w-2xl md:text-right"
          >

            <h2 className="font-display text-3xl font-medium leading-[1] tracking-[-0.035em] text-[#23361F] sm:text-4xl md:text-5xl">
              {t.product.heading}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#687260] md:ml-auto md:text-base">
              {t.product.body}
            </p>

          </motion.div>

        </div>


        {/* =====================================================
            PRODUCT IMAGE
        ====================================================== */}

        <div className="relative mt-12 md:mt-16">

          <motion.div
            style={{
              scale: imageScale,
              y: imageY,
              borderRadius: imageRadius,
            }}
            className="relative h-[58vh] min-h-[400px] w-full overflow-hidden md:h-[72vh]"
          >

            <img
              src="/images/telor.jpg"
              alt="Telur ayam berkualitas PT Goshen Anugerah Sejahtera"
              className="h-full w-full object-cover"
            />

            {/* =========================================
                IMAGE OVERLAY
            ========================================= */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#172015]/80 via-[#172015]/15 to-transparent" />


            {/* =========================================
                PRODUCT LABEL
            ========================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="absolute bottom-7 left-7 md:bottom-10 md:left-10"
            >

              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#E8B06C]">
                PT GOSHEN ANUGERAH SEJAHTERA
              </p>

              <h3 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-[#FBF8EE] md:text-6xl">
                Telur berkualitas
                <br />
                untuk Indonesia.
              </h3>

            </motion.div>


            {/* =========================================
                IMAGE INDEX
            ========================================= */}

            <div className="absolute right-7 top-7 md:right-10 md:top-10">

              <span className="font-mono text-[10px] tracking-[0.25em] text-[#FBF8EE]/70">
                01 / PRODUCT
              </span>

            </div>

          </motion.div>

        </div>


        {/* =====================================================
            PRODUCT PILLARS
        ====================================================== */}

        <div className="mt-4 grid grid-cols-1 gap-px bg-[#23361F]/10 sm:grid-cols-3">

          {t.product.pillars.map((pillar, i) => {
            const Icon = icons[i];

            return (
              <motion.div
                key={pillar.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="group relative bg-white p-7 transition-colors duration-500 hover:bg-[#35502C] md:p-9"
              >

                {/* =========================================
                    NUMBER + ARROW
                ========================================= */}

                <div className="flex items-start justify-between">

                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#9AA092] transition-colors duration-500 group-hover:text-[#E8B06C]">
                    0{i + 1}
                  </span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.3}
                    className="
                      text-[#B9791F]
                      opacity-70
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-[#E8B06C]
                      group-hover:opacity-100
                    "
                  />

                </div>


                {/* =========================================
                    ICON
                ========================================= */}

                <div className="mt-12 flex h-11 w-11 items-center justify-center rounded-full border border-[#23361F]/10 bg-[#FBF8EE] transition-all duration-500 group-hover:border-[#E8B06C] group-hover:bg-[#E8B06C]">

                  <Icon
                    size={19}
                    strokeWidth={1.4}
                    className="text-[#35502C]"
                  />

                </div>


                {/* =========================================
                    TITLE
                ========================================= */}

                <h3 className="mt-7 font-display text-2xl font-medium tracking-[-0.025em] text-[#23361F] transition-colors duration-500 group-hover:text-[#FBF8EE] md:text-3xl">
                  {pillar.title}
                </h3>


                {/* =========================================
                    DESCRIPTION
                ========================================= */}

                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#687260] transition-colors duration-500 group-hover:text-[#FBF8EE]/70">
                  {pillar.desc}
                </p>


                {/* =========================================
                    ACCENT LINE
                ========================================= */}

                <div className="mt-7 h-[2px] w-8 bg-[#B9791F] transition-all duration-500 group-hover:w-16 group-hover:bg-[#E8B06C]" />

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}