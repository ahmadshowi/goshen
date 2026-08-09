"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

function ScrambledText({
  text,
  start,
}: {
  text: string;
  start: boolean;
}) {
  const [display, setDisplay] = useState("");
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    let frame = 0;
    const totalFrames = Math.max(55, text.length * 2);

    const animateText = () => {
      frame++;

      const progress = frame / totalFrames;

      const output = text
        .split("")
        .map((char, index) => {
          // Jangan scramble spasi
          if (char === " ") return " ";

          // Karakter dikunci dari kiri ke kanan
          const lockProgress = index / text.length;

          if (progress > lockProgress + 0.15) {
            return char;
          }

          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(output);

      if (frame < totalFrames) {
        frameRef.current = requestAnimationFrame(animateText);
      } else {
        setDisplay(text);
      }
    };

    frameRef.current = requestAnimationFrame(animateText);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [start, text]);

  return <>{display || text.replace(/[^\s]/g, "·")}</>;
}

export default function VisionSection() {
  const { t } = useLanguage();

  const [started, setStarted] = useState(false);

  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-[#FBF8EE] py-28 md:py-40"
    >
      <div className="container-editorial">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
            duration: 0.6,
          }}
          onViewportEnter={() => setStarted(true)}
          className="mb-10 flex items-center gap-3 md:mb-14"
        >
          <span className="h-px w-8 bg-[#B9791F]" />

          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B9791F] md:text-[11px]">
            {t.vision.eyebrow}
          </p>
        </motion.div>


        {/* =====================================================
            SCRAMBLED VISION STATEMENT
        ====================================================== */}

        <motion.blockquote
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
            margin: "-100px",
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="
            max-w-5xl
            font-display
            text-[clamp(1.8rem,4vw,3.75rem)]
            font-medium
            leading-[1.08]
            tracking-[-0.035em]
            text-[#23361F]
          "
        >
          <span className="text-[#B9791F]">
            “
          </span>

          <ScrambledText
            text={t.vision.statement}
            start={started}
          />

          <span className="text-[#B9791F]">
            ”
          </span>
        </motion.blockquote>


        {/* =====================================================
            BOTTOM LINE
        ====================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 1,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="mt-14 h-px origin-left bg-[#23361F]/15"
        />


        {/* =====================================================
            COMPANY NAME
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
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
            duration: 0.6,
            delay: 0.6,
          }}
          className="mt-6 flex items-center justify-between"
        >

          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#7B8475] md:text-[10px]">
            PT Goshen Anugerah Sejahtera
          </p>

          <span className="font-mono text-[9px] tracking-[0.2em] text-[#9AA092]">
            VISION / 01
          </span>

        </motion.div>

      </div>
    </section>
  );
}