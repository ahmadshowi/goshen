"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { contactInfo } from "@/lib/translations";

export default function ContactCTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative bg-charcoal py-28 md:py-36 overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 opacity-[0.04]" style={{
        backgroundImage: "repeating-linear-gradient(115deg, transparent 0, transparent 38px, #F7F3EA 39px, transparent 40px)",
      }} />
      <div className="container-editorial relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="eyebrow text-rust-300 mb-6">{t.contact.eyebrow}</p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-display-2 font-medium text-cream max-w-lg"
            >
              {t.contact.heading}
            </motion.h2>
            <p className="mt-6 text-cream/60 leading-relaxed font-body max-w-md">{t.contact.body}</p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="group mt-10 inline-flex items-center gap-2 bg-cream text-charcoal px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 hover:bg-rust-400 hover:text-cream w-fit"
            >
              {t.contact.cta}
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-0">
            <motion.a
              href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-5 py-6 border-b border-cream/15 group"
            >
              <Phone size={20} className="text-rust-300 mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="eyebrow text-cream/50">{t.contact.phone}</p>
                <p className="text-cream text-lg mt-1 group-hover:text-rust-300 transition-colors duration-300">{contactInfo.phone}</p>
                <p className="text-cream/50 text-sm mt-0.5">{contactInfo.phoneAlt}</p>
              </div>
            </motion.a>

            <motion.a
              href={`mailto:${contactInfo.email}`}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-5 py-6 border-b border-cream/15 group"
            >
              <Mail size={20} className="text-rust-300 mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="eyebrow text-cream/50">{t.contact.email}</p>
                <p className="text-cream text-lg mt-1 group-hover:text-rust-300 transition-colors duration-300 break-all">{contactInfo.email}</p>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-5 py-6"
            >
              <Clock size={20} className="text-rust-300 mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="eyebrow text-cream/50">{t.contact.hours}</p>
                <p className="text-cream/80 text-sm mt-1">{t.contact.hoursWeekday}</p>
                <p className="text-cream/80 text-sm mt-0.5">{t.contact.hoursSaturday}</p>
                <p className="text-cream/50 text-sm mt-0.5">{t.contact.hoursSunday}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
