"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { contactInfo, siteConfig } from "@/lib/translations";

export default function Footer() {
  const { t } = useLanguage();

  const columns = [
    {
      title: t.footer.columns.company,
      links: [
        { label: t.footer.links.about, href: "#about" },
        { label: t.footer.links.vision, href: "#vision" },
        { label: t.footer.links.management, href: "#about" },
      ],
    },
    {
      title: t.footer.columns.business,
      links: [
        { label: t.footer.links.product, href: "#business" },
        { label: t.footer.links.sustainability, href: "#sustainability" },
        { label: t.footer.links.investor, href: "#investors" },
      ],
    },
    {
      title: t.footer.columns.resources,
      links: [
        { label: t.footer.links.media, href: "#media" },
        { label: t.footer.links.gallery, href: "#media" },
        { label: t.footer.links.contact, href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="relative bg-charcoal border-t border-cream/10 pt-20 pb-10">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          <div className="lg:col-span-5">
            <p className="font-display text-2xl text-cream">
              Goshen<span className="text-rust-400">.</span>
            </p>
            <p className="mt-4 text-cream/50 max-w-xs leading-relaxed">{t.footer.tagline}</p>
            <p className="mt-6 text-sm text-cream/40">{siteConfig.name}</p>
            <p className="text-sm text-cream/40">{contactInfo.email}</p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="eyebrow text-cream/40 mb-5">{col.title}</p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-cream/70 hover:text-rust-300 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
          </p>
          <p className="text-xs text-cream/30 eyebrow">Natural · Modern · Sustainable</p>
        </div>
      </div>
    </footer>
  );
}
