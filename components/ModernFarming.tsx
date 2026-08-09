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
  "/images/company.jpg",
  "/images/company.jpg",
  "/images/company.jpg",
];

export default function ModernFarming() {
  const { t } = useLanguage();

  const items = t.modern.features.map((feature, index) => ({
    number: `0${index + 1}`,
    title: feature.title,
    desc: feature.desc,
    icon: icons[index],
    image: images[index],
  }));

  return (
    <section
      id="modern-farming"
      className="relative overflow-hidden bg-[#23361F] py-28 text-[#FBF8EE] md:py-40"
    >
      <div className="container-editorial">

        {/* =========================================
            HEADER
        ========================================== */}

        <div className="mb-16 grid gap-8 md:mb-20 md:grid-cols-12 md:items-end">

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
              margin: "-100px",
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-4"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#E8B06C] md:text-[11px]">
              {t.modern.eyebrow}
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
            <h2 className="max-w-4xl font-display text-5xl font-medium leading-[0.92] tracking-[-0.045em] md:text-7xl lg:text-8xl">
              {t.modern.heading}
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
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 max-w-2xl text-base leading-relaxed text-[#FBF8EE]/65 md:mb-20 md:text-lg"
        >
          {t.modern.body}
        </motion.p>

        {/* =========================================
            FLOWING MENU
        ========================================== */}

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
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <FlowingMenu items={items} />
        </motion.div>

      </div>
    </section>
  );
}