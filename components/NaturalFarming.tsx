"use client";

import { motion } from "framer-motion";
import { Droplets, Wind, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import SectionHeading from "./SectionHeading";
import ImagePlaceholder from "./ImagePlaceholder";

const icons = [Droplets, Wind, MapPin];

export default function NaturalFarming() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-cream py-28 md:py-36">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={t.natural.eyebrow} heading={t.natural.heading} />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 text-charcoal-soft leading-relaxed font-body"
            >
              {t.natural.body}
            </motion.p>

            <div className="mt-10 flex flex-col gap-6">
              {t.natural.points.map((point, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    className="flex gap-4 border-t border-charcoal/10 pt-5"
                  >
                    <Icon size={20} className="text-moss-400 mt-1 shrink-0" strokeWidth={1.5} />
                    <div>
                      <h3 className="font-display text-lg text-charcoal">{point.title}</h3>
                      <p className="text-sm text-charcoal-faint mt-1 leading-relaxed">{point.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 gap-4 h-full"
          >
            <ImagePlaceholder tone="moss" label="Sumber air alami" className="h-[280px] md:h-[420px] mt-10" />
            <ImagePlaceholder tone="cream" label="Dataran tinggi" className="h-[280px] md:h-[420px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
