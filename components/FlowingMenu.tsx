"use client";

import { useState } from "react";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

interface FlowingItem {
  number: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  image: string;
}

interface FlowingMenuProps {
  items: FlowingItem[];
}

export default function FlowingMenu({ items }: FlowingMenuProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="relative">

      {/* =====================================================
          DESKTOP IMAGE PREVIEW
      ====================================================== */}

      <div className="pointer-events-none absolute right-0 top-0 z-30 hidden h-full w-[38%] lg:block">

        <div className="sticky top-24 h-[430px] overflow-hidden rounded-[2px]">

          {items.map((item, index) => (
            <img
              key={item.number}
              src={item.image}
              alt=""
              className={`
                absolute inset-0
                h-full w-full
                object-cover
                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  active === index
                    ? "scale-100 opacity-100"
                    : "scale-110 opacity-0"
                }
              `}
            />
          ))}

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#172015]/70 via-transparent to-transparent" />

          {/* Image label */}
          <div className="absolute bottom-6 left-6 right-6">

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-[#E8B06C]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#FBF8EE]/80">
                Modern Farming
              </span>

            </div>

          </div>

        </div>
      </div>


      {/* =====================================================
          FLOWING ITEMS
      ====================================================== */}

      <div className="relative z-20 w-full border-t border-[#23361F]/15 lg:w-[64%]">

        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = active === index;

          return (
            <div
              key={item.number}
              onMouseEnter={() => setActive(index)}
              className="relative"
            >

              {/* =================================================
                  CARD
              ================================================== */}

              <button
                type="button"
                onClick={() => setActive(index)}
                className={`
                  relative
                  flex
                  w-full
                  items-start
                  gap-5
                  overflow-hidden
                  border-b
                  border-[#23361F]/15
                  px-5
                  py-6
                  text-left
                  transition-all
                  duration-500
                  md:px-7
                  md:py-7
                  ${
                    isActive
                      ? "bg-[#35502C] shadow-[0_18px_45px_rgba(35,54,31,0.14)]"
                      : "bg-white hover:bg-[#F3F0E7]"
                  }
                `}
              >

                {/* =================================================
                    ACTIVE GLOW / LEFT INDICATOR
                ================================================== */}

                <span
                  className={`
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[3px]
                    origin-top
                    transition-transform
                    duration-500
                    ${
                      isActive
                        ? "scale-y-100 bg-[#D99A45]"
                        : "scale-y-0 bg-transparent"
                    }
                  `}
                />


                {/* =================================================
                    NUMBER
                ================================================== */}

                <span
                  className={`
                    mt-1
                    w-7
                    shrink-0
                    font-mono
                    text-[10px]
                    tracking-[0.15em]
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "text-[#E8B06C]"
                        : "text-[#9AA092]"
                    }
                  `}
                >
                  {item.number}
                </span>


                {/* =================================================
                    ICON
                ================================================== */}

                <span
                  className={`
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    transition-all
                    duration-500
                    ${
                      isActive
                        ? "border-[#E8B06C] bg-[#E8B06C] text-[#23361F] scale-105"
                        : "border-[#23361F]/15 bg-[#FBF8EE] text-[#35502C]"
                    }
                  `}
                >
                  <Icon
                    size={19}
                    strokeWidth={1.5}
                  />
                </span>


                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="min-w-0 flex-1">

                  {/* Title + Arrow */}

                  <div className="flex items-center justify-between gap-4">

                    <h3
                      className={`
                        font-display
                        text-2xl
                        font-medium
                        leading-none
                        tracking-[-0.025em]
                        transition-all
                        duration-500
                        md:text-3xl
                        ${
                          isActive
                            ? "translate-x-1 text-[#FBF8EE]"
                            : "text-[#23361F]"
                        }
                      `}
                    >
                      {item.title}
                    </h3>

                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.4}
                      className={`
                        shrink-0
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "translate-x-0 -translate-y-0 rotate-0 text-[#E8B06C] opacity-100"
                            : "-translate-x-2 translate-y-2 text-[#B9791F] opacity-0"
                        }
                      `}
                    />

                  </div>


                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}

                  <div
                    className={`
                      grid
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? "mt-4 grid-rows-[1fr] opacity-100"
                          : "mt-0 grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >

                    <div className="overflow-hidden">

                      <p
                        className={`
                          max-w-xl
                          text-sm
                          leading-relaxed
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "text-[#FBF8EE]/70"
                              : "text-[#687260]"
                          }
                        `}
                      >
                        {item.desc}
                      </p>

                    </div>

                  </div>


                  {/* =================================================
                      ACTIVE YELLOW LINE
                  ================================================== */}

                  <div
                    className={`
                      mt-5
                      h-[2px]
                      origin-left
                      transition-all
                      duration-700
                      ${
                        isActive
                          ? "w-14 bg-[#E8B06C]"
                          : "w-0 bg-transparent"
                      }
                    `}
                  />

                </div>

              </button>


              {/* =================================================
                  MOBILE IMAGE
              ================================================== */}

              <div
                className={`
                  overflow-hidden
                  bg-[#23361F]
                  transition-all
                  duration-700
                  lg:hidden
                  ${
                    isActive
                      ? "max-h-[300px]"
                      : "max-h-0"
                  }
                `}
              >

                <img
                  src={item.image}
                  alt=""
                  className={`
                    h-[260px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ${
                      isActive
                        ? "scale-100"
                        : "scale-110"
                    }
                  `}
                />

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}