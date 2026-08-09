"use client";

import { motion } from "framer-motion";
import {
  Thermometer,
  Wheat,
  HeartPulse,
  BadgeCheck,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import FlowingMenu from "./FlowingMenu";

const icons = [
  Thermometer,
  Wheat,
  HeartPulse,
  BadgeCheck,
];

const images = [
  "/images/company.jpg",
  "/images/hero.png",
  "/images/ayam.jpg",
  "/images/telor.jpg",
];

export default function ModernFarming() {
  const { t } = useLanguage();

  const items = t.modern.features.map((feature, index) => ({
    number: `0${index + 1}`,
    title: String(feature.title ?? ""),
    desc: String(feature.desc ?? ""),
    icon: icons[index],
    image: images[index],
  }));

  return (
    <section
      id="modern-farming"
      className="relative overflow-hidden bg-[#F3F0E7] py-28 md:py-40"
    >

      <div className="container-editorial">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-14 md:mb-20">

          {/* Eyebrow */}

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
            }}
            className="flex items-center gap-3"
          >

            <span className="h-px w-8 bg-[#B9791F]" />

            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B9791F] md:text-[11px]">
              {t.modern.eyebrow}
            </p>

          </motion.div>


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
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="
              mt-5
              max-w-2xl
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
            {t.modern.heading}
          </motion.h2>


          {/* Body */}

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
              duration: 0.7,
              delay: 0.18,
            }}
            className="
              mt-6
              max-w-xl
              text-base
              leading-relaxed
              text-[#687260]
              md:text-lg
            "
          >
            {t.modern.body}
          </motion.p>

        </div>


        {/* =====================================================
            FLOWING MENU
        ====================================================== */}

        <motion.div
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
            margin: "-80px",
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >

          <FlowingMenu items={items} />

        </motion.div>

      </div>

    </section>
  );
}