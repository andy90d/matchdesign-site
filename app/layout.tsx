// ============================================
// IMPORT
// ============================================
import type { Metadata } from "next";
import { IubendaHead, IubendaLoader, IubendaLinks } from "@/components/legal/Iubenda"; 
import { dmSans, spaceMono, unbounded } from "@/lib/fonts/fonts";
import "./globals.css";
import Header from "@/components/header/header";


// ============================================
// METADATA SEO (title e description del sito)
// ============================================
export const metadata: Metadata = {
  title: "Sistemi di Brand Identity per Founder e Professionisti",
  description:
    "Costruiamo il sistema che protegge la coerenza del tuo brand nel tempo.",
};


// ============================================
// LAYOUT PRINCIPALE (avvolge tutte le pagine)
// ============================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    // --- TAG HTML: lingua e font applicati a tutto il sito ---
    <html
      lang="it"
      className={`${unbounded.variable} ${dmSans.variable} ${spaceMono.variable}`}>

      {/* --- HEAD: script nell'intestazione della pagina --- */}
      <head>
        {/* Widget / Script Head Iubenda */}
        <IubendaHead />
      </head>


      {/* --- BODY: contenuto visibile --- */}
      <body>

        {/* Header (menu di navigazione) e contenuto della pagina */}
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