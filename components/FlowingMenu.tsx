"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface FlowingItem {
  number: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  image: string;
}

interface FlowingMenuProps {
  items: FlowingItem[];
}

export default function FlowingMenu({ items }: FlowingMenuProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="relative">
      {/* Desktop image preview */}
      <div className="pointer-events-none absolute right-0 top-1/2 z-10 hidden h-[420px] w-[42%] -translate-y-1/2 overflow-hidden lg:block">
        <div className="relative h-full w-full overflow-hidden rounded-[2px]">

          {items.map((item, index) => (
            <img
              key={item.number}
              src={item.image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                active === index
                  ? "scale-100 opacity-100"
                  : "scale-110 opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-[#172015]/45 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#FBF8EE]/80">
              PT Goshen Anugerah Sejahtera
            </span>
          </div>
        </div>
      </div>

      {/* Flowing rows */}
      <div className="relative z-20 border-t border-[#23361F]/15">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = active === index;

          return (
            <div
              key={item.number}
              onMouseEnter={() => setActive(index)}
              className="group relative border-b border-[#23361F]/15"
            >
              <button
                type="button"
                onClick={() => setActive(index)}
                className="relative flex w-full items-center gap-5 py-7 text-left transition-all duration-500 md:py-8 lg:pr-[46%]"
              >
                {/* Number */}
                <span
                  className={`w-8 shrink-0 font-mono text-[10px] tracking-[0.2em] transition-colors duration-300 ${
                    isActive
                      ? "text-[#B9791F]"
                      : "text-[#8A927F]"
                  }`}
                >
                  {item.number}
                </span>

                {/* Icon */}
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                    isActive
                      ? "border-[#B9791F] bg-[#35502C] text-[#FBF8EE]"
                      : "border-[#23361F]/15 text-[#35502C]"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </span>

                {/* Text */}
                <div className="min-w-0 flex-1">

                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className={`font-display text-2xl font-medium leading-none tracking-[-0.025em] transition-colors duration-300 md:text-3xl ${
                        isActive
                          ? "text-[#23361F]"
                          : "text-[#687260]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.4}
                      className={`shrink-0 transition-all duration-500 ${
                        isActive
                          ? "translate-x-0 -translate-y-0 opacity-100 text-[#B9791F]"
                          : "-translate-x-2 translate-y-2 opacity-0"
                      }`}
                    />
                  </div>

                  {/* Description */}
                  <div
                    className={`grid transition-all duration-500 ${
                      isActive
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "mt-0 grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-lg text-sm leading-relaxed text-[#687260]">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                </div>
              </button>

              {/* Active progress line */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] bg-[#B9791F] transition-all duration-700 ${
                  isActive ? "w-full" : "w-0"
                }`}
              />

              {/* Mobile image */}
              <div
                className={`overflow-hidden transition-all duration-700 lg:hidden ${
                  isActive
                    ? "max-h-[300px] pb-6"
                    : "max-h-0"
                }`}
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-[260px] w-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}