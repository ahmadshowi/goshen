"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

function Counter({ target, locale }: { target: number; locale: "id" | "en" }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        setDisplay(Math.round(v).toLocaleString(locale === "id" ? "id-ID" : "en-US"));
      },
    });
    return () => controls.stop();
  }, [inView, target, locale]);

  return <span ref={ref}>{display}</span>;
}

export default function CompanyStats() {
  const { t, locale } = useLanguage();
  const items = t.stats.items;

  return (
    <section className="relative bg-charcoal py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-rust-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-moss-500/10 blur-3xl" />

      <div className="container-editorial relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6">
          <p className="eyebrow text-rust-300">{t.stats.eyebrow}</p>
          <h2 className="font-display text-display-3 text-cream max-w-md">{t.stats.heading}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative px-0 sm:px-8 lg:px-10 py-10 sm:py-0 first:pl-0 ${
                i !== 0 ? "sm:border-l border-cream/10" : ""
              }`}
            >
              <div className="flex items-baseline gap-1 font-display text-cream">
                {item.suffix && <span className="text-2xl md:text-3xl text-rust-300 self-start mt-2">{item.suffix}</span>}
                <span className="text-[clamp(2.75rem,6vw,4.75rem)] leading-none font-medium tracking-tight">
                  <Counter target={Number(item.value.replace(/[.,]/g, ""))} locale={locale} />
                </span>
                {"unit" in item && item.unit && (
                  <span className="text-xl md:text-2xl text-cream/60 ml-1">{item.unit}</span>
                )}
              </div>
              <p className="eyebrow text-cream/50 mt-4">{item.label}</p>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="block h-px bg-rust-400 mt-6 origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
