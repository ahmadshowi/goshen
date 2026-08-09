"use client";

import { motion } from "framer-motion";
import { Droplets, Wind, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import MagicBento from "./MagicBento";

const icons = [Droplets, Wind, MapPin];

export default function NaturalFarming() {
  const { t } = useLanguage();

  const points = t.natural.points;

  return (
    <section
      id="natural"
      className="relative overflow-hidden bg-[#FBF8EE] py-28 md:py-36"
    >
      <div className="container-editorial">

        {/* =========================================
            SECTION INTRO
        ========================================== */}

        <div className="mb-14 md:mb-16">

          {/* Eyebrow */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
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
              duration: 0.6,
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
              duration: 0.75,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-4
              max-w-3xl
              font-display
              text-4xl
              font-medium
              leading-[0.95]
              tracking-[-0.04em]
              text-[#23361F]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            {t.natural.heading}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 18,
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
              duration: 0.65,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-6
              max-w-xl
              text-base
              leading-relaxed
              text-[#4B5A44]
              md:text-lg
            "
          >
            {t.natural.body}
          </motion.p>

        </div>

        {/* =========================================
            MAGIC BENTO
        ========================================== */}

        <motion.div
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
            margin: "-80px",
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <MagicBento
            glowColor="185, 121, 31"
            spotlightRadius={380}
            enableSpotlight
            enableBorderGlow
            enableTilt
            enableMagnetism
            clickEffect
          >

            {/* =======================================
                FEATURE IMAGE
            ======================================== */}

            <div className="relative h-full w-full overflow-hidden">

              <img
                src="/images/company.jpg"
                alt="Peternakan PT Goshen Anugerah Sejahtera"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#172015] via-[#172015]/20 to-transparent" />

              {/* Image content */}
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">

                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#E8B06C]">
                  PT GOSHEN ANUGERAH SEJAHTERA
                </p>

                <h3 className="mt-3 max-w-lg font-display text-3xl font-medium leading-[0.95] tracking-[-0.035em] text-[#FBF8EE] md:text-5xl">
                  Peternakan modern,
                  <br />
                  tumbuh bersama alam.
                </h3>

              </div>
            </div>

            {/* =======================================
                NATURAL POINTS
            ======================================== */}

            {points.map((point, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={point.title}
                  className="flex h-full flex-col justify-between p-7 md:p-8"
                >

                  {/* Icon + Number */}
                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#23361F]/15 bg-[#FBF8EE]">
                      <Icon
                        size={20}
                        strokeWidth={1.4}
                        className="text-[#35502C]"
                      />
                    </div>

                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#8A927F]">
                      0{index + 1}
                    </span>

                  </div>

                  {/* Content */}
                  <div>

                    <h3 className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] text-[#23361F] md:text-3xl">
                      {point.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#687260]">
                      {point.desc}
                    </p>

                    <div className="mt-6 h-px w-8 bg-[#B9791F] transition-all duration-500" />

                  </div>

                </div>
              );
            })}

          </MagicBento>
        </motion.div>

      </div>
    </section>
  );
}