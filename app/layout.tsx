import type { Metadata } from "next";
import { UnboundedBlack, dmSans, spaceMono } from "@/lib/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistemi di Brand Identity",
  description: "Costruiamo il sistema che protegge la coerenza del tuo brand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${UnboundedBlack.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}