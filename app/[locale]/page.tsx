// ============================================
// IMPORT
// ============================================
import { Fragment } from "react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import HomeImage from "@/components/home/home-image";
import Button from "@/components/button/button";
import ArrowRight from "@/components/icons/arrow-right";
import ImageSection from "@/components/image-section/image-section";
import ContactForm from "@/components/contact-form/contact-form";


// ============================================
// METADATA SEO (title e description della home, per lingua)
// ============================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomeMetadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}


// ============================================
// PAGINA HOME
// ============================================
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Home" });
  const questions = t.raw("questions.items") as string[];

  return (
    <div className="home-page">

      {/* --- Immagine principale --- */}
      <HomeImage>
        <h1 className="sr-only">{t("hero.title")}</h1>
        <p className="text-center">{t("hero.text")}</p>
        <div className="text-center mt-md">
          <Button href="/work-together" iconEnd={<ArrowRight />}>
            {t("hero.cta")}
          </Button>
        </div>
      </HomeImage>


      {/* --- Sezione testo introduttivo (margini laterali e spazio verticale) --- */}
      <section className="container section home-intro">

        {/* --- Titolo --- */}
        <h2 className="text-center">{t("intro.title")}</h2>

        <h4 className="text-center mt-md">{t("intro.subtitle")}</h4>

        <p className="text-center">{t("intro.text")}</p>

        {/* --- Bottone con icona dopo il testo --- */}
        <div className="text-center mt-lg">
          <Button href="/contact" iconEnd={<ArrowRight />}>
            {t("intro.cta")}
          </Button>
        </div>

      </section>


      {/* --- Sezione immagine con citazione e bottone --- */}
      <ImageSection src="/assets/images/TestWwm.jpg" alt="">
        <div className="container">
          <h3 className="title-narrow">{t("quote.text")}</h3>
          <p>-Andrea</p>
          <Button href="/about" iconEnd={<ArrowRight />} className="mt-md">
            {t("quote.cta")}
          </Button>
        </div>
      </ImageSection>


      {/* --- Sezione domande --- */}
      <section className="container section">
        <h3>{t("questions.title")}</h3>

        <p className="mt-md">
          {questions.map((question, index) => (
            <Fragment key={index}>
              {question}
              <br />
            </Fragment>
          ))}
        </p>
        <p className="mt-md">{t("questions.closing")}</p>

        <Button href="/contact" iconEnd={<ArrowRight />} className="mt-md">
          {t("questions.cta")}
        </Button>
      </section>


      {/* --- Sezione evidenziata con form contatti --- */}
      <section className="section--highlight">
        <div className="container">
          <h2>{t("form.title")}</h2>

          <ContactForm />
        </div>
      </section>

    </div>
  );
}