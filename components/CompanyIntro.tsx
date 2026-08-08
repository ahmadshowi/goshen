"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function CompanyIntro() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-28 md:py-36 bg-cream">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={t.intro.eyebrow} heading={t.intro.heading} />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-charcoal-soft leading-relaxed font-body"
            >
              {t.intro.body}
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              href="#business"
              className="group mt-8 inline-flex items-center gap-2 text-charcoal font-medium border-b border-charcoal pb-1 w-fit transition-colors duration-300 hover:text-rust-400 hover:border-rust-400"
            >
              {t.intro.cta}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
