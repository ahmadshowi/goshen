"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FileText,
  PieChart,
  Leaf,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const icons = [PieChart, FileText, Leaf];

export default function InvestorSection() {
  const { t } = useLanguage();

  return (
    <section
      id="investor"
      className="relative overflow-hidden bg-[#23361F] py-28 md:py-40"
    >
      {/* =====================================================
          SUBTLE BACKGROUND TEXTURE
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #FBF8EE 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container-editorial relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-10 md:grid-cols-12 md:items-end">

          {/* LEFT — EYEBROW + DESCRIPTION */}

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
                {t.investor.eyebrow}
              </p>

            </div>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#FBF8EE]/60 md:text-base">
              {t.investor.body}
            </p>
          </motion.div>


          {/* RIGHT — HEADING */}

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
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="md:col-span-8"
          >
            <h2 className="max-w-3xl font-display text-4xl font-medium leading-[0.96] tracking-[-0.035em] text-[#FBF8EE] sm:text-5xl md:text-6xl">
              {t.investor.heading}
            </h2>
          </motion.div>

        </div>


        {/* =====================================================
            INVESTOR DOCUMENT INDEX
        ====================================================== */}

        <div className="mt-20 border-t border-[#FBF8EE]/15 md:mt-24">

          {t.investor.links.map((link, i) => {

            const Icon = icons[i];

            return (
              <motion.div
                key={link.title}
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
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="group relative border-b border-[#FBF8EE]/15"
              >

                {/* GOLD VERTICAL ACCENT */}

                <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-[#E8B06C] transition-transform duration-500 group-hover:scale-y-100" />


                {/* ROW */}

                <div className="flex items-center gap-4 px-1 py-7 transition-all duration-500 group-hover:px-5 sm:gap-5 md:py-8">

                  {/* NUMBER */}

                  <span className="hidden w-8 shrink-0 font-mono text-[10px] tracking-[0.2em] text-[#FBF8EE]/35 sm:block">
                    0{i + 1}
                  </span>


                  {/* ICON */}

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#FBF8EE]/15 bg-[#FBF8EE]/[0.04] transition-all duration-500 group-hover:border-[#E8B06C] group-hover:bg-[#E8B06C]">

                    <Icon
                      size={19}
                      strokeWidth={1.4}
                      className="text-[#FBF8EE]/70 transition-colors duration-500 group-hover:text-[#23361F]"
                    />

                  </div>


                  {/* TEXT */}

                  <div className="min-w-0 flex-1">

                    <h3 className="font-display text-xl font-medium tracking-[-0.02em] text-[#FBF8EE] transition-transform duration-500 group-hover:translate-x-1 md:text-2xl">
                      {link.title}
                    </h3>

                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-[#FBF8EE]/55">
                      {link.desc}
                    </p>

                  </div>


                  {/* ARROW */}

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#FBF8EE]/15 transition-all duration-500 group-hover:border-[#E8B06C] group-hover:bg-[#E8B06C]">

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.3}
                      className="text-[#FBF8EE]/60 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#23361F]"
                    />

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>


        {/* =====================================================
            CTA
        ====================================================== */}

        <motion.div
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
            margin: "-60px",
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-10 flex justify-end"
        >

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border-b border-[#FBF8EE]/50 pb-2 text-sm font-medium text-[#FBF8EE] transition-colors duration-300 hover:border-[#E8B06C] hover:text-[#E8B06C]"
          >
            {t.investor.cta}

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

        </motion.div>

      </div>
    </section>
  );
}