import { Fraunces, DM_Sans } from "next/font/google";
import Script from "next/script"; // <-- Importiamo il componente corretto di Next.js

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  title: "Diagnosi Brand — MATCHdesign",
  description: "Scopri di cosa ha bisogno il tuo brand. Poche domande, una diagnosi precisa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${fraunces.variable} ${dmSans.variable}`}>
      <head>
        {/* 1. Script di configurazione per inizializzare l'oggetto Iubenda prima del widget */}
        <Script id="iubenda-config" strategy="beforeInteractive">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {
              "askForConsent": true,
              "lang": "it"
            };
          `}
        </Script>
        
        {/* 2. Caricamento del widget reale (Senza virgole di sintassi errate e con chiusura corretta) */}
        <Script 
          src="https://embeds.iubenda.com/widgets/f2cc20d5-bfbe-4c85-880d-6c958cd3c60c.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}