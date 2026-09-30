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
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>

    </div>
  );
}