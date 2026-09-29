import type { Metadata } from "next";
import { fraunces, dmSans, spaceMono } from "@/lib/fonts";
import { IubendaHead, IubendaLoader } from "@/components/legal/Iubenda";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MATCHdesign",
    template: "%s — MATCHdesign",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${fraunces.variable} ${dmSans.variable} ${spaceMono.variable}`}>
      <head>
        <IubendaHead />
      </head>
      <body>
        <main>{children}</main>
        <Footer />
        <IubendaLoader />
      </body>
    </html>
  );
}