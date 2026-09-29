import type { Metadata } from "next";
import { dmSans, spaceMono, unbounded } from "@/lib/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistemi di Brand Identity per Founder e Professionisti",
  description:
    "Costruiamo il sistema che protegge la coerenza del tuo brand nel tempo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${unbounded.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}