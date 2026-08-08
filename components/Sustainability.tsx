"use client";

import { motion } from "framer-motion";
import { Recycle, HandHeart, Users } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import SectionHeading from "./SectionHeading";
import ImagePlaceholder from "./ImagePlaceholder";

const icons = [Recycle, Users, HandHeart];

export default function Sustainability() {
  const { t } = useLanguage();

  return (
    <section id="sustainability" className="relative bg-moss-700 py-28 md:py-36 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #F7F3EA 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }} />
      <div className="container-editorial relative">
        <SectionHeading eyebrow={t.sustainability.eyebrow} heading={t.sustainability.heading} tone="light" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-2xl text-cream/70 leading-relaxed font-body"
        >
          {t.sustainability.body}
        </motion.p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {t.sustainability.pillars.map((pillar, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="border-t border-cream/20 pt-6"
              >
                <Icon size={20} className="text-rust-300" strokeWidth={1.5} />
                <h3 className="font-display text-lg text-cream mt-4">{pillar.title}</h3>
                <p className="text-sm text-cream/60 mt-2 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-cream/[0.06] border border-cream/15 p-8 md:p-12"
        >
          <div className="lg:col-span-5">
            <ImagePlaceholder tone="rust" label="Sumur bor Desa Kalisalak" className="h-[260px] lg:h-full min-h-[260px]" />
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="eyebrow text-rust-300 mb-3">{t.sustainability.csrTitle}</p>
            <p className="text-cream/80 leading-relaxed font-body text-lg">{t.sustainability.csrBody}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
