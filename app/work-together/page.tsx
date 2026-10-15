// app/work-together/page.tsx

import type { Metadata } from "next";
import ImageSection from "@/components/image-section/image-section"; // <- metti il percorso reale
import Columns from "@/components/layout/Columns";
import Button from "@/components/button/button";
import ArrowRight from "@/components/icons/arrow-right";
import ColumnVisual from "@/components/column-visual/column-visual";

export const metadata: Metadata = {
  title: "Work together | MATCHdesign",
  description: "Scopri come possiamo lavorare insieme.", // sostituisci con il tuo testo
};

export default function WorkTogetherPage() {
  return (
    <div>

      <ImageSection src="/assets/images/ImmagineSezioneTest.jpg" alt="..." fit="cover">
        <h2 className="w-full text-center">Non tutti i problemi hanno bisogno
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
          <ColumnVisual>
          <svg viewBox="10 -25 200 150" fill="currentColor" preserveAspectRatio="xMinYMid meet">
            <svg xmlns="http://www.w3.org/2000/svg"
              height="100px" 
              viewBox="0 -960 960 960" 
              width="100px" 
              fill= "var(--color-accent)">
                <path d="M220-520 80-600v-160l140-80 140 80v160l-140 80Zm0-92 60-34v-68l-60-34-60 34v68l60 34Zm440 123v-93l140 82v280L560-80 320-220v-280l140-82v93l-60 35v188l160 93 160-93v-188l-60-35Zm-140 89v-480h360l-80 120 80 120H600v240h-80Zm40 69ZM220-680Z"/>
            </svg>
          </svg>
          </ColumnVisual>
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
          <ColumnVisual> 
          <svg viewBox="10 -25 200 150" fill="currentColor" preserveAspectRatio="xMinYMid meet">
            <svg xmlns="http://www.w3.org/2000/svg"
            height="100px"
            viewBox="0 -960 960 960"
            width="100px"
            fill="var(--color-accent)">
              <path d="M440-80v-200q0-56-17-83t-45-53l57-57q12 11 23 23.5t22 26.5q14-19 28.5-33.5T538-485q38-35 69-81t33-161l-63 63-57-56 160-160 160 160-56 56-64-63q-2 143-44 203.5T592-425q-32 29-52 56.5T520-280v200h-80ZM248-633q-4-20-5.5-44t-2.5-50l-64 63-56-56 160-160 160 160-57 56-63-62q0 21 2 39.5t4 34.5l-78 19Zm86 176q-20-21-38.5-49T263-575l77-19q10 27 23 46t28 34l-57 57Z"/></svg>
          </svg>
          </ColumnVisual>
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
          <ColumnVisual>
          <svg viewBox="10 -25 200 150" fill="currentColor" preserveAspectRatio="xMinYMid meet">
            <svg xmlns="http://www.w3.org/2000/svg"
            height="100px"
            viewBox="0 -960 960 960"
            width="100px"
            fill="var(--color-accent)">
              <path d="M120-120v-80h120v80H120Zm0-160v-80h320v80H120Zm0-160v-80h720v80H120Zm0-160v-80h320v80H120Zm0-160v-80h120v80H120Zm200 640v-80h120v80H320Zm0-640v-80h120v80H320Zm200 640v-80h120v80H520Zm0-160v-80h320v80H520Zm0-320v-80h320v80H520Zm0-160v-80h120v80H520Zm200 640v-80h120v80H720Zm0-640v-80h120v80H720Z"/>
            </svg>
          </svg>
          </ColumnVisual>
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
      <Button href="/contact" iconEnd={<ArrowRight />} className="mt-md">
      Da dove iniziamo?
      </Button>
    </section>
    
    </div>
  );
}