// ============================================
// IMPORT
// ============================================
import type { Metadata } from "next";
import HomeImage from "@/components/home/home-image";
import Button from "@/components/button/button";
import ArrowRight from "@/components/icons/arrow-right";
import ImageSection from "@/components/image-section/image-section";
import ContactForm from "@/components/contact-form/contact-form";

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

      {/* --- Immagine principale --- */}
      
      <HomeImage>
        <h1 className="sr-only">Capire a fondo. Progettare con criterio.</h1>
        <p className= "text-center">Strategia e design per dare struttura e coerenza alla comunicazione del tuo brand.</p>
        <div className="text-center mt-md">
         <Button href="/work-together" iconEnd={<ArrowRight />}>
         Come posso aiutarti
         </Button>
  </div>      
      </HomeImage>


      {/* --- Sezione testo introduttivo (margini laterali e spazio verticale) --- */}
      <section className="container section home-intro">

        {/* --- Titolo --- */}
        <h2 className="text-center">
          Il tuo brand. La tua comunicazione. La tua direzione.
        </h2>

        <h4 className="text-center mt-md">Mantenere tutto coerente diventa sempre più difficile.</h4>

        <p className="text-center">
          Che tu stia mettendo le basi per il tuo brand o che tu stia cercando di farlo crescere, è importante che la tua comunicazione sia coerente e chiara.
          MATCHdesign ti aiuta a fare chiarezza, mettere ordine e costruire una comunicazione capace di crescere senza perdere la propria direzione.
        </p>

        {/* --- Bottone con icona dopo il testo --- */}
        <div className="text-center mt-lg">
          <Button href="/contact" iconEnd={<ArrowRight />}>
            Parliamo del tuo brand
          </Button>
        </div>

      </section>

    {/* --- Sezione immagine con testo e bottone --- */}
      <ImageSection src="/assets/images/ImmagineSezioneTest.jpg" alt="">
       <div className="container">
        <h3 className="title-narrow">"Credo che prima di affrontare una sfida,
          sia importante avere una visione chiara del problema
          e delle possibili soluzioni." </h3>
          <p>-Andrea</p>
        <Button href="/about" iconEnd={<ArrowRight />} className="mt-md">
          Chi sono
        </Button>
        </div>
      </ImageSection>

      <section className="container section"> 
        <h3>Non partiamo dal design. Partiamo dalle domande.</h3>

        <p className="mt-md">
          Cosa vogliamo ottenere?<br />
          Cosa ci impedisce di arrivarci?<br />
          Cosa non sta funzionando?<br />
          Cosa deve rimanere coerente?<br />
          E cosa può cambiare?<br />
        </p>
        <p className="mt-md">
        Trovare queste risposte ci permette di capire dove intervenire davvero.</p>
        
        <Button href="/contact" iconEnd={<ArrowRight />} className="mt-md">
        Iniziamo?
       </Button>
      </section>

    <section className="section--highlight">
      <div className="container">
        <h2>Non partiamo dal design. Partiamo dalle domande.</h2>

        <ContactForm />

      </div>
    </section>

    </div>   
  )
}