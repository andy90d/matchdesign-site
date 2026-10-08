import type { Metadata } from "next";
import ContactForm from "@/components/contact-form/contact-form";

export const metadata: Metadata = {
  title: "MATCHdesign",
  description:
    "Costruiamo il sistema che protegge la coerenza del tuo brand nel tempo.",
};




export default function Home() {
  return (
    <div className="home-page">
      <section className="container section">
        <h2 className="text-center">
          Quattro dimensioni. Un unico obiettivo: costruire un sistema
          di brand coerente e capace di crescere nel tempo.
        </h2>
      </section>

      <section className="container section section--highlight">
        immagine della matrice con sezioni che si illuminano
        <div className="mt-md">
          High touch
          → la soluzione si adatta maggiormente al contesto specifico
          dell'organizzazione. <br />

          Low touch
          → il sistema incorpora criteri e strumenti che permettono
          al cliente di lavorare con maggiore autonomia.<br />
          </div>
      </section>      
           
      <section className="container section">
        immagine della matrice con sezioni che si illuminano
      </section>

    </div>
  );
}