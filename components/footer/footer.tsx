// ============================================
// FOOTER: import
// ============================================
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import styles from "@/components/footer/footer.module.css";
import Image from "next/image";
import SafeIubendaLinks from "@/components/legal/SafeIubendaLinks";


// ============================================
// FOOTER: dati modificabili
// ============================================
const SITEMAP = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "workTogether", href: "/work-together" },
  { key: "contact", href: "/contact" },
  /*{ key: "legal", href: "/legal" },*/
];

const LEGAL_INFO = [
  "MATCHdesign di Andrea Sabolo",
  "P.IVA 00000000000",
  "C.F. SBLNDR90L13E379W",
  "Via Mombarone 5, Ivrea (TO), Italia",
];


// ============================================
// FOOTER: componente
// ============================================
export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>

          {/* Colonna 1: badge */}
          <div>
            <Image
              src="/assets/images/BadgeTextColorDarkBG.svg"
              alt={t("badgeAlt")}
              width={100}
              height={100}
              className={styles.badge}
            />
          </div>

          {/* Colonna 2: descrizione */}
          <div>
            <h2 className={styles.title}>MATCHdesign</h2>
            <p className={styles.description}>{t("description")}</p>
          </div>

          {/* Colonna 3: mappa del sito */}
          <nav aria-label={t("sitemapTitle")}>
            <h2 className={styles.title}>{t("sitemapTitle")}</h2>
            <ul className={styles.list}>
              {SITEMAP.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{t(item.key)}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Colonna 4: informazioni legali e Privacy */}
          <div className={styles.info}>
            <h2 className={styles.title}>{t("legalTitle")}</h2>
            {LEGAL_INFO.map((line) => (
              <p key={line} className="micro">
                {line}
              </p>
            ))}

            <h2 className={styles.title}>{t("privacyTitle")}</h2>
            <SafeIubendaLinks />
          </div>

        </div>

        {/* Copyright */}
        <div className={styles.legal}>
          <p className="micro">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}