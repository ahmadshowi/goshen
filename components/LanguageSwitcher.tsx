"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { locale, setLocale } = useLanguage();

  const base = "eyebrow px-1.5 transition-colors duration-300";
  const activeColor = dark ? "text-charcoal" : "text-cream";
  const inactiveColor = dark ? "text-charcoal/40 hover:text-charcoal/70" : "text-cream/40 hover:text-cream/70";

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language switcher">
      <button
        type="button"
        onClick={() => setLocale("id")}
        aria-pressed={locale === "id"}
        className={`${base} ${locale === "id" ? activeColor : inactiveColor}`}
      >
        ID
      </button>
      <span className={dark ? "text-charcoal/30" : "text-cream/30"}>|</span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`${base} ${locale === "en" ? activeColor : inactiveColor}`}
      >
        EN
      </button>
    </div>
  );
}
