// ============================================
// IMPORT
// ============================================
import type { Metadata } from "next";
import HomeImage from "@/components/home/home-image";


// ============================================
// METADATA SEO (title e description della home)
// ============================================
export const metadata: Metadata = {
  title: "MATCHdesign",
  description:
    "Costruiamo il sistema che protegge la coerenza del tuo brand nel tempo.",
};


// ============================================
// PAGINA HOME
// ============================================
export default function Home() {
  return (
    <div className="home-page">
      <HomeImage/>

      {/* --- Titolo e testo di benvenuto --- */}
      <h2 className="text-center">
        Ci hai provato e riprovato.
        Ma qualcosa non torna.
      </h2>
      <p className="text-center">
        Hai cambiato il logo. Rifatto il sito. Rinnovato l'identità.

        Eppure il tuo brand non sembra ancora rappresentarti davvero.

        Il business è cresciuto, ma il brand è rimasto indietro.
        Il team è cresciuto, ma non tutti sembrano parlare la stessa lingua.
        La comunicazione si è moltiplicata, ma mantenerla coerente è diventato sempre più difficile.

        Forse il problema non è quello che stai guardando.
        È la prospettiva da cui lo stai guardando.
      </p>

    </div>
  );
  
}