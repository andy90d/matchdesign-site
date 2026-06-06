import { Fraunces, DM_Sans } from "next/font/google";

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
        <script type="text/javascript" src="https://embeds.iubenda.com/widgets/f2cc20d5-bfbe-4c85-880d-6c958cd3c60c.js"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}