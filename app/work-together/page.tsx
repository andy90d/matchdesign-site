// app/work-together/page.tsx

import type { Metadata } from "next";
import ImageSection from "@/components/image-section/image-section"; // <- metti il percorso reale
import Columns from "@/components/layout/Columns";
import Button from "@/components/button/button";
import ArrowRight from "@/components/icons/arrow-right";

export const metadata: Metadata = {
  title: "Work together | MATCHdesign",
  description: "Scopri come possiamo lavorare insieme.", // sostituisci con il tuo testo
};

export default function WorkTogetherPage() {
  return (
    <div>

      <ImageSection src="/assets/images/ImmagineSezioneTest.jpg" alt="..." fit="cover">
        <h2 className="text-center">Non tutti i problemi hanno bisogno
          dello stesso tipo di intervento.</h2>
     </ImageSection>

     <section className="container mt-lg">
        <h2>Ogni problema richiede il giusto approccio.</h2>
        <p>
          Non tutte le sfide di comunicazione si affrontano allo stesso modo.
          A volte serve fare chiarezza, altre costruire qualcosa di nuovo.
          MATCHdesign combina strategia e design per aiutare le organizzazioni 
          a prendere decisioni migliori e trasformarle in sistemi di 
          comunicazione coerenti.
        </p>
      </section>



    <div className="container about-container mt-lg">
      <Columns id="servizi" columns={3}>

        <section>
          <div className="column-visual" aria-hidden="true" />
          <p className="micro">01 / ORIENTAMENTO</p>
          <h3>Capire meglio il problema</h3>
          <p>
            Facilito la comprensione delle situazioni complesse,
            aiutando le persone coinvolte a mettere a fuoco il problema,
            condividere punti di vista e riconoscere ciò che conta davvero.
          </p>
          <p className="micro">Dalla confusione a una comprensione condivisa.</p>
        </section>

        <section>
          <div className="column-visual" aria-hidden="true" />
          <p className="micro">02 / STRATEGIA</p>
          <h3>Definire una direzione.</h3>
          <p>
            Analizzo il contesto e sviluppo criteri, 
            priorità e principi per guidare le decisioni 
            di comunicazione del brand.
          </p>
          <p className="micro">Dalla comprensione a una direzione strategica.</p>
        </section>

         <section>
          <div className="column-visual" aria-hidden="true" />
          <p className="micro">03 / DESIGN</p>
          <h3>Dare forma alle decisioni.</h3>
          <p>
           Traduco le esigenze e la direzione del brand 
           in identità visive, sistemi e strumenti di comunicazione concreti, 
           coerenti e utilizzabili nel tempo.
          </p>
          <p className="micro">Dalla direzione a un sistema concreto.</p>
        </section>

      </Columns>
    </div>

    <section className="container text-fmicro mt-sm">
      <Button href="/work-together" iconEnd={<ArrowRight />} className="mt-md">
      Da dove iniziamo?
      </Button>
    </section>


    </div>
  );
}