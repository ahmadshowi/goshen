"use client";

import { motion } from "framer-motion";
import { ArrowRight, Newspaper, Sprout, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import SectionHeading from "./SectionHeading";
import ImagePlaceholder from "./ImagePlaceholder";

const icons = [ShieldCheck, Sprout, Newspaper];
const tones: ("rust" | "moss" | "cream")[] = ["rust", "moss", "cream"];

export default function NewsSection() {
  const { t } = useLanguage();

  return (
    <section id="media" className="relative bg-cream py-28 md:py-36">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <SectionHeading eyebrow={t.news.eyebrow} heading={t.news.heading} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {t.news.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col"
              >
                <div className="overflow-hidden">
                  <ImagePlaceholder
                    tone={tones[i]}
                    icon={Icon}
                    label={item.category}
                    className="h-56 transition-transform duration-700 ease-editorial group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <span className="eyebrow text-rust-400">{item.category}</span>
                  <span className="h-1 w-1 rounded-full bg-charcoal/30" />
                  <span className="eyebrow text-charcoal-faint">{item.date}</span>
                </div>
                <h3 className="font-display text-xl text-charcoal mt-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-charcoal-faint mt-2 leading-relaxed">{item.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal w-fit border-b border-transparent group-hover:border-charcoal transition-colors duration-300">
                  {t.news.readMore}
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
