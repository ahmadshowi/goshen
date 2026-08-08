import type { Metadata } from "next";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata: Metadata = {
  title: "PT Goshen Anugerah Sejahtera | Peternakan Ayam Petelur Modern",
  description:
    "PT Goshen Anugerah Sejahtera adalah perusahaan peternakan ayam petelur modern yang menggabungkan kekuatan alam dengan teknologi budidaya terkini untuk menghasilkan telur berkualitas tinggi bagi Indonesia.",
  openGraph: {
    title: "PT Goshen Anugerah Sejahtera | Modern Poultry Farming",
    description:
      "A fast-growing modern layer poultry company combining the strength of nature with cutting-edge farming technology.",
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="font-body antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
