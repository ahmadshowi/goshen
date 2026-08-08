"use client";

import { motion } from "framer-motion";
import { Camera, Droplets, Egg, MapPin, Truck, Users } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import SectionHeading from "./SectionHeading";
import ImagePlaceholder from "./ImagePlaceholder";

const icons = [Camera, MapPin, Egg, Users, Droplets, Truck];
const tones: ("rust" | "moss" | "charcoal" | "cream")[] = ["moss", "rust", "cream", "charcoal", "moss", "rust"];
const spans = [
  "md:col-span-4 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-6",
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-cream-soft py-28 md:py-36">
      <div className="container-editorial">
        <SectionHeading eyebrow={t.gallery.eyebrow} heading={t.gallery.heading} className="mb-14" />

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 auto-rows-[180px]">
          {t.gallery.captions.map((caption, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={caption}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`${spans[i]} relative overflow-hidden group`}
              >
                <ImagePlaceholder
                  tone={tones[i]}
                  icon={Icon}
                  className="h-full w-full transition-transform duration-700 ease-editorial group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 eyebrow text-cream/90 z-10">{caption}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
