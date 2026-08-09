"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type GalleryItem = {
  image: string;
  title?: string;
  label?: string;
};

type AccordionGalleryProps = {
  items: GalleryItem[];
  className?: string;
};

export default function AccordionGallery({
  items,
  className = "",
}: AccordionGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items.length) return null;

  return (
    <div
      className={`flex h-[420px] w-full gap-2 overflow-hidden md:h-[520px] ${className}`}
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <motion.div
            key={`${item.image}-${index}`}
            initial={false}
            animate={{
              flex: isActive ? 3.2 : 1,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={() => setActiveIndex(index)}
            className="group relative min-w-0 cursor-pointer overflow-hidden"
          >
            {/* IMAGE */}

            <motion.img
              src={item.image}
              alt={item.title || `Gallery ${index + 1}`}
              initial={false}
              animate={{
                scale: isActive ? 1 : 1.08,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* DARK OVERLAY */}

            <motion.div
              initial={false}
              animate={{
                opacity: isActive ? 0.25 : 0.48,
              }}
              className="absolute inset-0 bg-[#172015]"
            />

            {/* SIDE NUMBER */}

            <div className="absolute left-4 top-4 z-10 md:left-6 md:top-6">
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#FBF8EE]/80">
                0{index + 1}
              </span>
            </div>

            {/* ACTIVE CONTENT */}

            <motion.div
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 15,
              }}
              transition={{
                duration: 0.4,
                delay: isActive ? 0.15 : 0,
              }}
              className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8"
            >
              {item.label && (
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#E8B06C]">
                  {item.label}
                </p>
              )}

              {item.title && (
                <h3 className="mt-2 max-w-md font-display text-2xl font-medium leading-[0.95] tracking-[-0.025em] text-[#FBF8EE] md:text-4xl">
                  {item.title}
                </h3>
              )}

              <div className="mt-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#FBF8EE]/40">
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.3}
                  className="text-[#FBF8EE]"
                />
              </div>
            </motion.div>

            {/* VERTICAL ACTIVE LINE */}

            <motion.div
              initial={false}
              animate={{
                scaleY: isActive ? 1 : 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="absolute bottom-0 left-0 top-0 z-20 w-[2px] origin-bottom bg-[#E8B06C]"
            />
          </motion.div>
        );
      })}
    </div>
  );
}