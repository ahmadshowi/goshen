"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Leaf } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import SectionHeading from "./SectionHeading";
import ImagePlaceholder from "./ImagePlaceholder";

const icons = [ShieldCheck, Sparkles, Leaf];

export default function ProductSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-cream py-28 md:py-36">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={t.product.eyebrow} heading={t.product.heading} />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 text-charcoal-soft leading-relaxed font-body max-w-md"
            >
              {t.product.body}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <ImagePlaceholder tone="cream" label="Telur berkualitas tinggi" className="h-[280px] md:h-[380px]" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-charcoal/10">
          {t.product.pillars.map((pillar, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="bg-cream p-8 md:p-10"
              >
                <Icon size={22} className="text-moss-400" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-charcoal mt-6">{pillar.title}</h3>
                <p className="text-sm text-charcoal-faint mt-2 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
