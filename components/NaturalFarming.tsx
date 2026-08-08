"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Droplets, Wind, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useRef } from "react";

const icons = [Droplets, Wind, MapPin];

export default function NaturalFarming() {
  const { t } = useLanguage();

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // =========================================
  // PARALLAX IMAGES
  // =========================================

  const leftImageY = useTransform(
    scrollYProgress,
    [0, 1],
    [70, -70]
  );

  const rightImageY = useTransform(
    scrollYProgress,
    [0, 1],
    [-50, 90]
  );

  // =========================================
  // IMAGE SCALE
  // =========================================

  const leftImageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.08, 1, 1.04]
  );

  const rightImageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.04, 1, 1.08]
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FBF8EE] py-28 md:py-40"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">

          {/* =========================================
              LEFT — CONTENT
          ========================================== */}

          <div className="lg:col-span-5">

            {/* Eyebrow */}
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B9791F] md:text-[11px]"
            >
              {t.natural.eyebrow}
            </motion.p>

            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 max-w-xl font-display text-5xl font-medium leading-[0.95] tracking-[-0.045em] text-[#23361F] md:text-6xl lg:text-7xl"
            >
              {t.natural.heading}
            </motion.h2>

            {/* Body */}
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
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
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-lg text-base leading-relaxed text-[#4B5A44] md:text-lg"
            >
              {t.natural.body}
            </motion.p>

            {/* =========================================
                POINTS
            ========================================== */}

            <div className="mt-10 flex flex-col">
              {t.natural.points.map((point, i) => {
                const Icon = icons[i];

                return (
                  <motion.div
                    key={point.title}
                    initial={{
                      opacity: 0,
                      x: -25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-70px",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex gap-4 border-t border-[#23361F]/10 py-5"
                  >
                    {/* Icon */}
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#23361F]/15 transition-colors duration-300 group-hover:border-[#B9791F]">
                      <Icon
                        size={17}
                        strokeWidth={1.5}
                        className="text-[#35502C]"
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-display text-lg text-[#23361F] md:text-xl">
                        {point.title}
                      </h3>

                      <p className="mt-1 max-w-md text-sm leading-relaxed text-[#6B7664]">
                        {point.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* =========================================
              RIGHT — VISUAL
          ========================================== */}

          <div className="relative lg:col-span-6 lg:col-start-7">

            <div className="relative min-h-[650px] md:min-h-[760px]">

              {/* =====================================
                  IMAGE 1 — LARGE
              ====================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  clipPath: "inset(100% 0 0 0)",
                }}
                whileInView={{
                  opacity: 1,
                  clipPath: "inset(0% 0 0 0)",
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute right-0 top-0 h-[470px] w-[82%] overflow-hidden md:h-[580px]"
              >
                <motion.img
                  style={{
                    y: leftImageY,
                    scale: leftImageScale,
                  }}
                  src="/images/company.jpg"
                  alt="Peternakan Goshen"
                  className="h-[115%] w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#172015]/35 via-transparent to-transparent" />

                {/* Label */}
                <div className="absolute bottom-6 left-6 bg-[#FBF8EE] px-4 py-3">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#23361F]">
                    Modern Poultry Farming
                  </p>
                </div>
              </motion.div>

              {/* =====================================
                  IMAGE 2 — SMALL OFFSET
              ====================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  clipPath: "inset(0 0 100% 0)",
                }}
                whileInView={{
                  opacity: 1,
                  clipPath: "inset(0 0 0% 0)",
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 1,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-0 left-0 z-10 h-[250px] w-[52%] overflow-hidden border-[10px] border-[#FBF8EE] md:h-[310px]"
              >
                <motion.img
                  style={{
                    y: rightImageY,
                    scale: rightImageScale,
                  }}
                  src="/images/hero.jpg"
                  alt="Lingkungan peternakan Goshen"
                  className="h-[125%] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#172015]/30 to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
                    Natural Environment
                  </p>
                </div>
              </motion.div>

              {/* =====================================
                  DECORATIVE NUMBER
              ====================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.8,
                }}
                className="absolute right-0 top-[500px] hidden md:block"
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#6B7664] [writing-mode:vertical-rl]">
                  Growing with nature
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}