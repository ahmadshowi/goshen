"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";

type GalleryItem = {
  image: string;
  title?: string;
  label?: string;
};

type ImagePlaceholderProps = {
  // Mode gallery — optional
  items?: GalleryItem[];

  // Props lama — tetap dipertahankan
  icon?: LucideIcon;
  tone?: "rust" | "moss" | "charcoal" | "cream";
  label?: string;
  className?: string;
};

const toneStyles: Record<
  NonNullable<ImagePlaceholderProps["tone"]>,
  string
> = {
  rust: "bg-gradient-to-br from-rust-400 via-rust-500 to-charcoal",
  moss: "bg-gradient-to-br from-moss-400 via-moss-500 to-charcoal",
  charcoal:
    "bg-gradient-to-br from-charcoal-soft via-charcoal to-moss-700",
  cream:
    "bg-gradient-to-br from-cream-deep via-rust-200 to-rust-400",
};

export default function ImagePlaceholder({
  items,
  icon: Icon,
  tone = "rust",
  label,
  className = "",
}: ImagePlaceholderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  /*
   * ==========================================================
   * ACCORDION GALLERY MODE
   * ==========================================================
   *
   * Aktif kalau props "items" dikirim.
   */

  if (items && items.length > 0) {
    return (
      <div
        className={`flex h-[380px] w-full gap-1.5 overflow-hidden md:h-[500px] ${className}`}
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={`${item.image}-${index}`}
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
              className="group relative min-w-0 cursor-pointer overflow-hidden"
            >
              {/* =================================================
                  IMAGE
              ================================================== */}

              <motion.img
                src={item.image}
                alt={
                  item.title ||
                  item.label ||
                  `Gallery image ${index + 1}`
                }
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
                  opacity: isActive ? 0.18 : 0.55,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="absolute inset-0 bg-[#172015]"
              />

              {/* =================================================
                  NUMBER
              ================================================== */}

              <div className="absolute left-4 top-4 z-20 md:left-6 md:top-6">
                <span
                  className={`font-mono text-[9px] tracking-[0.2em] transition-colors duration-300 ${
                    isActive
                      ? "text-[#E8B06C]"
                      : "text-[#FBF8EE]/65"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* =================================================
                  ACTIVE CONTENT
              ================================================== */}

              <motion.div
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 15,
                }}
                transition={{
                  duration: 0.4,
                  delay: isActive ? 0.1 : 0,
                }}
                className="absolute inset-x-0 bottom-0 z-20 p-5 md:p-7"
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

                <div className="mt-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#FBF8EE]/40">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.3}
                    className="text-[#FBF8EE]"
                  />
                </div>
              </motion.div>

              {/* =================================================
                  ACTIVE GOLD ACCENT
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
      </div>
    );
  }

  /*
   * ==========================================================
   * OLD PLACEHOLDER MODE
   * ==========================================================
   *
   * Kalau tidak ada "items", component bekerja seperti sebelumnya.
   */

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${toneStyles[tone]} ${className}`}
    >
      {/* Decorative texture */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #FBF8EE 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Center content */}

      <div className="relative z-10 flex flex-col items-center text-center">

        {Icon && (
          <Icon
            size={34}
            strokeWidth={1.2}
            className="text-cream/70"
          />
        )}

        {label && (
          <p className="mt-4 max-w-[220px] font-mono text-[9px] uppercase tracking-[0.2em] text-cream/70">
            {label}
          </p>
        )}

      </div>
    </div>
  );
}