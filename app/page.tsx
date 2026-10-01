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
      <h1>Sai che qualcosa si sta mettendo in mezzo alla tua comunicazione...</h1>
      <p>Descrizione del problema e del servizio offerto, con un invito a contattarci per una consulenza gratuita.
      </p>

    </div>
  );
}