"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const statImages = [
  {
    src: "/images/masked.jpg",
    position: "center",
  },
  {
    src: "/images/ayam.jpg",
    position: "center",
  },
  {
    src: "/images/telor.jpg",
    position: "center",
  },
  {
    src: "/images/company.jpg",
    position: "center",
  },
];

export default function CompanyStats() {
  const { t } = useLanguage();
  const items = t.stats.items;

  return (
    <section className="relative overflow-hidden bg-[#23361F] py-28 text-[#FBF8EE] md:py-36">
      <div className="container-editorial">

        {/* =========================================
            HEADER
        ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 grid gap-8 md:mb-20 md:grid-cols-12 md:items-end"
        >
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#E8B06C] md:text-[11px]">
              {t.stats.eyebrow}
            </p>
          </div>

          <div className="md:col-span-7">
            <h2 className="max-w-3xl font-display text-4xl font-medium leading-[0.95] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              {t.stats.heading}
            </h2>
          </div>
        </motion.div>

        {/* =========================================
            STAT GRID
        ========================================== */}

        <div className="grid gap-px overflow-hidden border border-[#FBF8EE]/10 bg-[#FBF8EE]/10 md:grid-cols-2">
          {items.map((item, i) => {
            const image = statImages[i % statImages.length];

            return (
              <motion.article
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative min-h-[430px] overflow-hidden bg-[#23361F] md:min-h-[500px]"
              >

                {/* =========================================
                    IMAGE
                ========================================== */}

                <motion.div
                  initial={{
                    scale: 1.12,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    margin: "-100px",
                  }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={image.src}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    style={{
                      objectPosition: image.position,
                    }}
                  />
                </motion.div>

                {/* =========================================
                    IMAGE OVERLAY
                ========================================== */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#172015] via-[#172015]/35 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />

                {/* =========================================
                    CONTENT
                ========================================== */}

                <div className="relative z-10 flex h-full min-h-[430px] flex-col justify-between p-7 md:min-h-[500px] md:p-10">

                  {/* Number */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.25 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start"
                  >
                    {item.suffix && (
                      <span className="mr-2 mt-2 font-display text-2xl text-[#E8B06C] md:text-3xl">
                        {item.suffix}
                      </span>
                    )}

                    <span className="font-display text-6xl font-medium leading-none tracking-[-0.05em] md:text-8xl">
                      {item.value}
                    </span>

                    {"unit" in item && item.unit && (
                      <span className="ml-2 mt-2 font-display text-xl text-[#FBF8EE]/70 md:text-2xl">
                        {item.unit}
                      </span>
                    )}
                  </motion.div>

                  {/* Bottom */}
                  <div>
                    <div className="mb-5 h-px w-10 bg-[#E8B06C] transition-all duration-500 group-hover:w-20" />

                    <p className="max-w-xs font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-[#FBF8EE]/75 md:text-[11px]">
                      {item.label}
                    </p>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}