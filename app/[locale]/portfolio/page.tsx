import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Portfolio.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PortfolioPage() {
  return (
    <div className="home-page">
      <h1>Portfolio</h1>
      <p>Portfolio</p>
    </div>
  );
}