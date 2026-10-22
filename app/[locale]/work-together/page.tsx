import type { Metadata } from "next";
import ImageSection from "@/components/image-section/image-section";
import Card from "@/components/card/card";
import OrientationIcon from "@/components/icons/orientation-icon";
import StrategyIcon from "@/components/icons/strategy-icon";
import DesignIcon from "@/components/icons/design-icon";
import Button from "@/components/button/button";
import ArrowRight from "@/components/icons/arrow-right";
import Columns from "@/components/layout/Columns";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "workTogether.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function WorkTogetherPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("workTogether");
  const buttonT = await getTranslations("Buttons.workTogether");
  
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

      <ImageSection src="/assets/images/TestAbout.jpg" fit="cover">
        <h1 className="w-full text-center">{t("hero.title")}</h1>
     </ImageSection>

     <section className="container mt-lg">
        <h2>{t("intro.title")}</h2>
        <p>{t("intro.text")}</p>
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
      {buttonT("start")}
      </Button>
    </section>
    
    </div>
  );
}