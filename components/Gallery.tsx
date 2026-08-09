"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const images = [
  "/images/company.jpg",
  "/images/hero.png",
  "/images/ayam.jpg",
  "/images/telor.jpg",
];

export default function Gallery() {
  const { t } = useLanguage();

  const [activeIndex, setActiveIndex] = useState(0);

  const captions = t.gallery.captions;

  return (
    <section id="gallery" className="relative bg-[#FBF8EE] py-28 md:py-36">
      <div className="container-editorial">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-12 md:mb-16">

          <motion.p
            initial={{
              opacity: 0,
              x: -15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#B9791F] md:text-[11px]"
          >
            <span className="h-px w-8 bg-[#B9791F]" />
            {t.gallery.eyebrow}
          </motion.p>

          <motion.h2
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
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-[#23361F] sm:text-5xl md:text-6xl"
          >
            {t.gallery.heading}
          </motion.h2>

        </div>


        {/* =====================================================
            ACCORDION GALLERY
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="flex h-[420px] w-full gap-1.5 overflow-hidden md:h-[560px]"
        >

          {images.map((image, index) => {
            const isActive = activeIndex === index;

            const caption =
              captions[index] ?? `Gallery ${index + 1}`;

            return (
              <motion.div
                key={image}
                initial={false}
                animate={{
                  flexGrow: isActive ? 4 : 1,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className="group relative min-w-0 cursor-pointer overflow-hidden bg-[#23361F]"
              >

                {/* =================================================
                    IMAGE
                ================================================== */}

                <motion.img
                  src={image}
                  alt={caption}
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 1.08,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />


                {/* =================================================
                    OVERLAY
                ================================================== */}

                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 0.15 : 0.48,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="absolute inset-0 bg-[#172015]"
                />


                {/* =================================================
                    TOP NUMBER
                ================================================== */}

                <div className="absolute left-5 top-5 z-20 md:left-7 md:top-7">

                  <span
                    className={`font-mono text-[9px] tracking-[0.2em] transition-colors duration-300 ${
                      isActive
                        ? "text-[#E8B06C]"
                        : "text-[#FBF8EE]/60"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                {/* =================================================
                    VERTICAL TITLE FOR INACTIVE CARD
                ================================================== */}

                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="absolute inset-x-0 bottom-7 z-20 flex justify-center"
                >

                  <span
                    className="
                      writing-mode-vertical
                      rotate-180
                      whitespace-nowrap
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-[#FBF8EE]/70
                    "
                    style={{
                      writingMode: "vertical-rl",
                    }}
                  >
                    {caption}
                  </span>

                </motion.div>


                {/* =================================================
                    ACTIVE CONTENT
                ================================================== */}

                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 20,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: isActive ? 0.1 : 0,
                  }}
                  className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-9"
                >

                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#E8B06C]">
                    0{index + 1} / 0{images.length}
                  </p>

                  <h3 className="mt-2 max-w-lg font-display text-2xl font-medium leading-[0.95] tracking-[-0.025em] text-[#FBF8EE] md:text-4xl lg:text-5xl">
                    {caption}
                  </h3>

                  <div className="mt-5 h-px w-10 bg-[#E8B06C]" />

                </motion.div>


                {/* =================================================
                    ACTIVE GOLD LINE
                ================================================== */}

                <motion.div
                  initial={false}
                  animate={{
                    scaleY: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  className="absolute bottom-0 left-0 top-0 z-30 w-[2px] origin-bottom bg-[#E8B06C]"
                />

              </motion.div>
            );
          })}

        </motion.div>


        {/* =====================================================
            BOTTOM INDICATOR
        ====================================================== */}

        <div className="mt-5 flex items-center justify-between">

          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#687260]">
            Hover / click to explore
          </p>

          <div className="flex gap-1.5">

            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Open gallery image ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className="p-1"
              >
                <motion.span
                  animate={{
                    width: activeIndex === index ? 24 : 6,
                    opacity: activeIndex === index ? 1 : 0.3,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="block h-1 rounded-full bg-[#B9791F]"
                />
              </button>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}