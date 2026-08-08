"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Building2, Compass, Users2, ShieldCheck, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { siteConfig } from "@/lib/translations";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const dark = scrolled || mobileOpen;

  const navLinks = [
    { label: t.nav.business, href: "#business" },
    { label: t.nav.sustainability, href: "#sustainability" },
    { label: t.nav.investors, href: "#investors" },
    { label: t.nav.media, href: "#media" },
  ];

  const aboutMega = [
    { icon: Building2, title: t.nav.aboutMega.profile, desc: t.nav.aboutMega.profileDesc, href: "#about" },
    { icon: Compass, title: t.nav.aboutMega.vision, desc: t.nav.aboutMega.visionDesc, href: "#vision" },
    { icon: Users2, title: t.nav.aboutMega.management, desc: t.nav.aboutMega.managementDesc, href: "#about" },
    { icon: ShieldCheck, title: t.nav.aboutMega.certifications, desc: t.nav.aboutMega.certificationsDesc, href: "#about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial ${
          dark ? "bg-cream/95 backdrop-blur-md border-b border-charcoal/10" : "bg-transparent"
        }`}
      >
        <nav className="container-editorial flex items-center justify-between h-20 md:h-24">
          <a
            href="#home"
            className={`font-display text-lg md:text-xl tracking-tight transition-colors duration-500 ${
              dark ? "text-charcoal" : "text-cream"
            }`}
          >
            Goshen<span className="text-rust-400">.</span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm tracking-wide transition-colors duration-500 ${
                  dark ? "text-charcoal hover:text-rust-400" : "text-cream hover:text-cream/70"
                }`}
                aria-expanded={aboutOpen}
              >
                {t.nav.about}
                <ChevronDown size={14} className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[560px] bg-cream border border-charcoal/10 shadow-2xl grid grid-cols-2 gap-1 p-3"
                  >
                    {aboutMega.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="flex items-start gap-3 p-4 hover:bg-charcoal/5 transition-colors duration-200"
                      >
                        <item.icon size={20} className="text-rust-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                        <span>
                          <span className="block text-sm text-charcoal font-medium">{item.title}</span>
                          <span className="block text-xs text-charcoal-faint mt-0.5">{item.desc}</span>
                        </span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-500 ${
                  dark ? "text-charcoal hover:text-rust-400" : "text-cream hover:text-cream/70"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <LanguageSwitcher dark={dark} />
            <a
              href="#contact"
              className={`group inline-flex items-center gap-1.5 text-sm font-medium px-5 py-2.5 border transition-all duration-300 ${
                dark
                  ? "border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"
                  : "border-cream/60 text-cream hover:bg-cream hover:text-charcoal"
              }`}
            >
              {t.nav.cta}
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={26} className="text-charcoal" />
            ) : (
              <Menu size={26} className={dark ? "text-charcoal" : "text-cream"} />
            )}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream pt-24 lg:hidden"
          >
            <div className="container-editorial flex flex-col h-full pb-10">
              <div className="flex flex-col gap-1 flex-1 overflow-y-auto">
                <a href="#about" onClick={() => setMobileOpen(false)} className="py-4 border-b border-charcoal/10 text-2xl font-display text-charcoal">
                  {t.nav.about}
                </a>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-4 border-b border-charcoal/10 text-2xl font-display text-charcoal"
                  >
                    {link.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setMobileOpen(false)} className="py-4 border-b border-charcoal/10 text-2xl font-display text-charcoal">
                  {t.nav.contact}
                </a>
              </div>
              <div className="flex items-center justify-between pt-6">
                <LanguageSwitcher dark />
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium px-5 py-2.5 bg-charcoal text-cream"
                >
                  {t.nav.cta}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
