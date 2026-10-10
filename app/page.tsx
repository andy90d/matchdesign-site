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
      <HomeImage/>


      {/* --- Sezione testo introduttivo (margini laterali e spazio verticale) --- */}
      <section className="container section">

        {/* --- Titolo --- */}
        <h2 className="text-center">
          Il tuo brand. La tua comunicazione. La tua direzione.
        </h2>

        {/* --- Sottotitolo --- */}
        <h4 className="text-center mt-md">Il tuo brand è cresciuto. Ma la sua comunicazione è cresciuta con lui?</h4>

        {/* --- Paragrafo --- */}
        <p className="text-center">
          Quando aumentano persone, canali, prodotti e messaggi, mantenere tutto coerente diventa più difficile.

          MATCHdesign ti aiuta a fare chiarezza, mettere ordine e costruire una comunicazione capace di crescere senza perdere la propria direzione.
        </p>

        {/* --- Bottone con icona dopo il testo --- */}
        <div className="text-center mt-lg">
          <Button href="/work-together" iconEnd={<ArrowRight />}>
            Come posso aiutarti
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
          Da dove nasce MATCHdesign
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
        
        <Button href="/work-together" iconEnd={<ArrowRight />} className="mt-md">
        Da dove iniziamo?
       </Button>
        
      </section>

       {/* --- Sezione form di contatto --- */}
      <section className="container section">
        <h1 className="text-center">Work together</h1>
        <div className="mt-md">
          <ContactForm />
        </div>
      </section>

    </div>   
  )
}