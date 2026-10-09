// app/work-together/page.tsx

import type { Metadata } from "next";
import ImageSection from "@/components/image-section/image-section"; // <- metti il percorso reale

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

    </div>
  );
}