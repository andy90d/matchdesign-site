import { Fraunces, DM_Sans } from "next/font/google";
/*import Script from "next/script";*/

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
        {/* Disabilitiamo il controllo di Next.js per questo script per accontentare il bot di iubenda */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script 
          type="text/javascript" 
          src="https://embeds.iubenda.com/widgets/f2cc20d5-bfbe-4c85-880d-6c958cd3c60c.js"
        ></script>
      </head>
      <body>
        {/* Contenuto principale del sito */}
        <main>
          {children}
        </main>

        {/* 2. Link a Privacy e Cookie Policy posizionati in fondo alla pagina */}
        <footer style={{ padding: "2rem", textAlign: "center", fontSize: "0.875rem" }}>
          <a 
            href="https://www.iubenda.com/privacy-policy/18476717" 
            className="iubenda-black iubenda-noiframe iubenda-embed" 
            title="Privacy Policy"
          >
            Privacy Policy
          </a>
          <span style={{ margin: "0 10px" }}>|</span>
          <a 
            href="https://www.iubenda.com/privacy-policy/18476717/cookie-policy" 
            className="iubenda-black iubenda-noiframe iubenda-embed" 
            title="Cookie Policy"
          >
            Cookie Policy
          </a>
        </footer>

        {/* 3. Lo script generico di iubenda per far funzionare i popup (caricato una sola volta) */}
        <Script 
          id="iubenda-policy-script"
          src="https://cdn.iubenda.com/iubenda.js" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}