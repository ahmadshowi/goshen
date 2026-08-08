"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText, PieChart, Leaf } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import SectionHeading from "./SectionHeading";

const icons = [PieChart, FileText, Leaf];

export default function InvestorSection() {
  const { t } = useLanguage();

  return (
    <section id="investors" className="relative bg-cream-soft py-28 md:py-36">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={t.investor.eyebrow} heading={t.investor.heading} />
            <p className="mt-8 text-charcoal-soft leading-relaxed font-body max-w-md">{t.investor.body}</p>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 bg-charcoal text-cream px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 hover:bg-rust-400"
            >
              {t.investor.cta}
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex flex-col">
            {t.investor.links.map((link, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-5 py-6 border-b border-charcoal/10 group cursor-default"
                >
                  <Icon size={22} className="text-rust-400 shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display text-lg text-charcoal">{link.title}</h3>
                    <p className="text-sm text-charcoal-faint mt-1">{link.desc}</p>
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
