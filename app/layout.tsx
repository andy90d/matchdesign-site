import type { Metadata } from "next";
import { IubendaHead, IubendaLoader, IubendaLinks } from "@/components/legal/Iubenda"; 
import { dmSans, spaceMono, unbounded } from "@/lib/fonts/fonts";
import "./globals.css";
import Header from "@/components/header/header";

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
      className={`${unbounded.variable} ${dmSans.variable} ${spaceMono.variable}`}>
      <head>
        {/* Widget / Script Head Iubenda */}
        <IubendaHead />
      </head>
      <body>
           <Header />
              <main>{children}</main>
        {/* Footer globale con i link Privacy & Cookie Policy */}
        <footer className="site-footer">
          <IubendaLinks />
        </footer>

        {/* Loader JS Iubenda caricato a fine body */}
        <IubendaLoader />
      </body>
    </html>
  );
}