import type { Metadata } from "next";
import {dmSans, spaceMono } from "@/lib/fonts/fonts";
import { BoundedBlack } from "@/lib/fonts/fonts";
import { IubendaHead, IubendaLoader } from "@/components/legal/Iubenda";
import Footer from "@/components/common/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MATCHdesign",
    template: "%s — MATCHdesign",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${BoundedBlack.variable} ${dmSans.variable} ${spaceMono.variable}`}>
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