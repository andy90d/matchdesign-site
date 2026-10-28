import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import styles from "./page.module.css";

export default async function ErrorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("ErrorPage");

  return (
    <section className={styles.page}>
      <h1>{t("errorMessage1")}</h1>
      <div className={styles.portfolio}>
        <p className="micro">{t("portfolioLink")}</p>
        <a
          href="https://www.behance.net/andreasabolo1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Behance"
        >
          <Image
            src="/BehanceWhite.svg"
            alt=""
            width={100}
            height={19}
          />
        </a>
      </div>
    </section>
  );
}
