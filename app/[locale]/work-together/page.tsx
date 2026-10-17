// app/work-together/page.tsx

import type { Metadata } from "next";
import ImageSection from "@/components/image-section/image-section"; // <- metti il percorso reale
import Card from "@/components/card/card";
import OrientationIcon from "@/components/icons/orientation-icon";
import StrategyIcon from "@/components/icons/strategy-icon";
import DesignIcon from "@/components/icons/design-icon";
import Button from "@/components/button/button";
import ArrowRight from "@/components/icons/arrow-right";
import Columns from "@/components/layout/Columns";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Work together | MATCHdesign",
  description: "Scopri come possiamo lavorare insieme.", // sostituisci con il tuo testo
};

export default async function WorkTogetherPage() {
  const t = await getTranslations("workTogether");
  
  // ===== SEZIONE: DATI SERVIZI =====
const services = [
  {
    icon: <OrientationIcon />,
    eyebrow: t("OrientationCard.orientation-eyebrow"),
    title: t("OrientationCard.orientation-title"),
    text: t("OrientationCard.orientation-text"),
    note: t("OrientationCard.orientation-note"),
  },
  {
    icon: <StrategyIcon />,
    eyebrow: t("StrategyCard.strategy-eyebrow"),
    title: t("StrategyCard.strategy-title"),
    text: t("StrategyCard.strategy-text"),
    note: t("StrategyCard.strategy-note"),
  },
  {
    icon: <DesignIcon />,
    eyebrow: t("DesignCard.design-eyebrow"),
    title: t("DesignCard.design-title"),
    text: t("DesignCard.design-text"),
    note: t("DesignCard.design-note"),
  },
];
  return (
    <div>

      <ImageSection src="/assets/images/TestAbout.jpg" alt="..." fit="cover">
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



    {/* ===== SEZIONE: SERVIZI (3 card) ===== */}
<div className="container about-container mt-lg mb-sm">
  <Columns id="servizi" columns={3}>
    {services.map((service) => (
      <Card
        key={service.eyebrow}
        icon={service.icon}
        eyebrow={service.eyebrow}
        title={service.title}
        text={service.text}
        note={service.note}
      />
    ))}
  </Columns>
</div>

    <section className="container button-center mt-sm mb-lg">
      <Button href="/contact" iconEnd={<ArrowRight />} className="mt-md">
      Da dove iniziamo?
      </Button>
    </section>
    
    </div>
  );
}