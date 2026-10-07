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
        <h1 className="text-center">Work together</h1>
        <div className="mt-md">
          <ContactForm />
        </div>
      </section>
    </div>
    
  );
}