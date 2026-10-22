import type { Metadata } from "next";
import ContactForm from "@/components/contact-form/contact-form";
import { getContactFormMessages } from "@/i18n/contact-form-messages";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");
  const formMessages = await getContactFormMessages();

  return (
    <div className="home-page">
      <section className="container section">
        <h1 className="text-center">{t("title")}</h1>
        <p>{t("intro")}</p>
        <div className="mt-md">
          <ContactForm messages={formMessages} />
        </div>
      </section>
    </div>
  );
}