// ============================================
// IMPORT
// ============================================
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { IubendaHead, IubendaLoader } from "@/components/legal/Iubenda";
import { dmSans, spaceMono, unbounded } from "@/lib/fonts/fonts";
import "../globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";


// ============================================
// LINGUE GENERATE IN FASE DI BUILD (it, en)
// ============================================
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}


// ============================================
// METADATA SEO (title e description, per lingua)
// ============================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/icon.svg",
    },
  };
}


// ============================================
// LAYOUT PRINCIPALE (avvolge tutte le pagine)
// ============================================
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Se la lingua nell'URL non esiste (es. /fr) mostra la pagina 404
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (

    // --- TAG HTML: lingua e font applicati a tutto il sito ---
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${unbounded.variable} ${dmSans.variable} ${spaceMono.variable}`}>

      {/* --- HEAD: script nell'intestazione della pagina --- */}
      <head>
        {/* Widget / Script Head Iubenda */}
        <IubendaHead />
      </head>


      {/* --- BODY: contenuto visibile --- */}
      <body>
        <NextIntlClientProvider>

          {/* Header (menu di navigazione) e contenuto della pagina */}
          <Header />
          <main>{children}</main>

          {/* Footer globale con i link Privacy & Cookie Policy */}
          <Footer />

        </NextIntlClientProvider>

        {/* Loader JS Iubenda caricato a fine body */}
        <IubendaLoader />

      </body>
    </html>
  );
}