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

            {/* --- Sezione form di contatto --- */}
      <section className="container section">
        <h1 className="text-center">Contattami</h1>
        <p> Raccontami di più sulla fase di lavoro in cui ti trovi.
          Se stai progettando di lanciare un brand dimmi la tua idea.
          Se hai già un azienda e percepisci che qualcosa non va cerchiamo di individuare il problema reale.
        </p>
        <div className="mt-md">
          <ContactForm />
        </div>
      </section>
    </div>
    
  );
}