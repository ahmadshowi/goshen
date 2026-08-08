"use client";

import { motion } from "framer-motion";
import { Thermometer, Wheat, HeartPulse, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import SectionHeading from "./SectionHeading";
import ImagePlaceholder from "./ImagePlaceholder";

const icons = [Thermometer, Wheat, HeartPulse, BadgeCheck];

export default function ModernFarming() {
  const { t } = useLanguage();

  return (
    <section id="business" className="relative bg-cream-soft py-28 md:py-36">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={t.modern.eyebrow} heading={t.modern.heading} />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-charcoal-soft leading-relaxed font-body">{t.modern.body}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <ImagePlaceholder tone="rust" label="Fasilitas kandang modern" className="h-[320px] lg:h-full min-h-[420px]" />
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.modern.features.map((feature, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-cream border border-charcoal/10 p-7 flex flex-col justify-between min-h-[200px] hover:border-rust-400/50 transition-colors duration-300"
                >
                  <Icon size={24} className="text-rust-400" strokeWidth={1.5} />
                  <div className="mt-8">
                    <h3 className="font-display text-lg text-charcoal">{feature.title}</h3>
                    <p className="text-sm text-charcoal-faint mt-2 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
