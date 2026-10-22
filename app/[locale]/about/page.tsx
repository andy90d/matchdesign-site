import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Columns from "@/components/layout/Columns";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("About");

  return (
    <div className="about-page">
      <AboutHero
         image={{ src: "/assets/images/TestAbout.jpg", alt: t("heroImageAlt"), objectPosition: "center" }}
         cueLabel={t("scrollCue")}
      >
        <div className="container">
          <h1>{t("todayTitle")}</h1>
          <p>
            {t("todayText")}
            <span className="text-accent"> {t("todayHighlight")}</span>
          </p>
        </div>
      </AboutHero>

      <div className="container">
        <Columns id="storia" columns={2}>
        <Image
          src="/assets/images/testAbout2.jpg"
          alt={t("storyImageAlt")}
          width={1000}
          height={1250}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
        <div>
          <section>
            <h3>{t("storyOriginTitle")}</h3>
            <p>
              {t("storyOriginText")}
              <span className="text-accent"> {t("storyOriginHighlight")}</span>
            </p>
          </section>

          <section  className="mt-lg">
            <h3>{t("journeyTitle")}</h3>
            <p>{t("journeyText")}</p>
          </section>

          <section  className="mt-lg">
            <h3>{t("perspectiveTitle")}</h3>
            <p>{t("perspectiveText")}</p>
          </section>

          </div>
        </Columns>
      </div>
    </div>
  );
}