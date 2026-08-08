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
      className="relative overflow-hidden bg-[#FBF8EE] py-28 md:py-40"
    >
      <div className="container-editorial">

        {/* =========================================
            HEADER
        ========================================== */}

        <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-12 md:items-end">

          <motion.div
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
            className="md:col-span-4"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B9791F] md:text-[11px]">
              {t.natural.eyebrow}
            </p>
          </motion.div>

          <motion.div
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
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-8"
          >
            <h2 className="max-w-4xl font-display text-5xl font-medium leading-[0.92] tracking-[-0.045em] text-[#23361F] md:text-7xl lg:text-8xl">
              {t.natural.heading}
            </h2>
          </motion.div>

        </div>

        {/* =========================================
            INTRO
        ========================================== */}

        <motion.p
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 max-w-2xl text-base leading-relaxed text-[#4B5A44] md:mb-16 md:text-lg"
        >
          {t.natural.body}
        </motion.p>

        {/* =========================================
            MAGIC BENTO
        ========================================== */}

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

          <div
            className="relative h-full w-full overflow-hidden"
          >
            <img
              src="/images/company.jpg"
              alt="Peternakan PT Goshen Anugerah Sejahtera"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#172015] via-[#172015]/20 to-transparent" />

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

                <div>

                  <h3 className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] text-[#23361F] md:text-3xl">
                    {point.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#687260]">
                    {point.desc}
                  </p>

                  <div className="mt-6 h-px w-8 bg-[#B9791F] transition-all duration-500 group-hover:w-16" />

                </div>

              </div>
            );
          })}

          {/* =======================================
              CLOSING CARD
          ======================================== */}

          <div className="flex h-full flex-col justify-between bg-[#35502C] p-7 md:p-9">

            <div className="flex items-center justify-between">

              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#E8B06C]">
                OUR PRINCIPLE
              </span>

              <span className="text-xl text-[#FBF8EE]/30">
                ✦
              </span>

            </div>

            <div>

              <h3 className="font-display text-3xl font-medium leading-[0.95] tracking-[-0.035em] text-[#FBF8EE] md:text-5xl">
                Growing
                <br />
                with nature.
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#FBF8EE]/65">
                Mengutamakan lokasi strategis, sumber daya alam yang baik,
                dan praktik peternakan yang berkelanjutan.
              </p>

            </div>

          </div>

        </MagicBento>

      </div>
    </section>
  );
}