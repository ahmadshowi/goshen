"use client";

import { motion } from "framer-motion";
import {
  Recycle,
  HandHeart,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const icons = [Recycle, Users, HandHeart];

export default function Sustainability() {
  const { t } = useLanguage();

  return (
    <section
      id="sustainability"
      className="relative overflow-hidden bg-[#23361F] py-28 md:py-36"
    >

      {/* =====================================================
          BACKGROUND TEXTURE
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F7F3EA 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container-editorial relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-10 md:grid-cols-12 md:items-end">

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
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
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="md:col-span-4"
          >

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-[#E8B06C]" />

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#E8B06C] md:text-[11px]">
                {t.sustainability.eyebrow}
              </p>

            </div>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#FBF8EE]/60 md:text-base">
              {t.sustainability.body}
            </p>

          </motion.div>


          {/* RIGHT — CONTROLLED HEADING */}

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
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="md:col-span-8"
          >

            <h2 className="max-w-3xl font-display text-4xl font-medium leading-[0.96] tracking-[-0.035em] text-[#FBF8EE] sm:text-5xl md:text-6xl">
              {t.sustainability.heading}
            </h2>

          </motion.div>

        </div>


        {/* =====================================================
            IMPACT AREA
        ====================================================== */}

        <div className="mt-20 grid gap-5 lg:mt-24 lg:grid-cols-12">

          {/* =================================================
              IMPACT LIST
          ================================================== */}

          <div className="lg:col-span-5">

            <div className="border-t border-[#FBF8EE]/15">

              {t.sustainability.pillars.map((pillar, i) => {
                const Icon = icons[i];

                return (
                  <motion.div
                    key={pillar.title}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-60px",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                      ease: [0.22, 1, 0.36, 1] as const,
                    }}
                    className="group relative border-b border-[#FBF8EE]/15 py-7 md:py-8"
                  >

                    {/* Active accent */}

                    <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-[#E8B06C] transition-transform duration-500 group-hover:scale-y-100" />

                    <div className="flex gap-5">

                      {/* Number */}

                      <span className="w-7 shrink-0 pt-1 font-mono text-[10px] tracking-[0.15em] text-[#E8B06C]">
                        0{i + 1}
                      </span>


                      {/* Icon */}

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#FBF8EE]/15 transition-all duration-500 group-hover:border-[#E8B06C] group-hover:bg-[#E8B06C]">
                        <Icon
                          size={18}
                          strokeWidth={1.4}
                          className="text-[#FBF8EE] transition-colors duration-500 group-hover:text-[#23361F]"
                        />
                      </div>


                      {/* Content */}

                      <div className="min-w-0">

                        <h3 className="font-display text-xl font-medium tracking-[-0.02em] text-[#FBF8EE] md:text-2xl">
                          {pillar.title}
                        </h3>

                        <p className="mt-2 max-w-md text-sm leading-relaxed text-[#FBF8EE]/55">
                          {pillar.desc}
                        </p>

                        <div className="mt-4 h-px w-7 bg-[#E8B06C] transition-all duration-500 group-hover:w-14" />

                      </div>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>


          {/* =================================================
              CSR IMAGE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="relative min-h-[420px] overflow-hidden lg:col-span-7 lg:min-h-[560px]"
          >

            <img
              src="/images/company.jpg"
              alt="Program CSR PT Goshen Anugerah Sejahtera"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#172015]/80 via-[#172015]/10 to-transparent" />


            {/* Image index */}

            <div className="absolute right-6 top-6 md:right-8 md:top-8">

              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#FBF8EE]/70">
                01 / COMMUNITY
              </span>

            </div>


            {/* Image caption */}

            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">

              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#E8B06C]">
                {t.sustainability.csrTitle}
              </p>

              <div className="mt-3 flex items-end justify-between gap-5">

                <p className="max-w-lg text-base leading-relaxed text-[#FBF8EE]/80 md:text-lg">
                  {t.sustainability.csrBody}
                </p>

                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#FBF8EE]/30 md:flex">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.3}
                    className="text-[#E8B06C]"
                  />
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}