// ============================================
// FOOTER: import
// ============================================
import Link from "next/link";
import {IubendaLinks} from "@/components/legal/Iubenda"; 
import styles from "@/components/footer/footer.module.css";
import Image from "next/image";
import SafeIubendaLinks from "@/components/legal/SafeIubendaLinks";

// ============================================
// FOOTER: dati modificabili
// ============================================
const DESCRIPTION =
  "Sono un brand designer che aiuta le organizzazioni a prendere decisioni migliori e trasformarle in sistemi di comunicazione coerenti.";

const SITEMAP = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work together", href: "/work-together" },
  { label: "Contact", href: "/contact" },
  /*{ label: "Note legali", href: "/legal" },*/
];

const LEGAL_INFO = [
  "MATCHdesign di Andrea Sabolo",
  "P.IVA 00000000000",
  "C.F. SBLNDR90L13E379W",
  "Via Mombarone 5, Ivrea (TO), Italia",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Colonna 1: badge */}
          <div>
            <Image
              src="/assets/images/BadgeTextColorDarkBG.svg"
              alt="Badge MATCHdesign"
              width={100}
              height={100}
              className={styles.badge}
            />
          </div>

          {/* Colonna 2: descrizione */}
          <div>
            <h2 className={styles.title}>MATCHdesign</h2>
            <p className={styles.description}>{DESCRIPTION}</p>
          </div>

          {/* Colonna 3: mappa del sito */}
          <nav aria-label="Mappa del sito">
            <h2 className={styles.title}>Mappa del sito</h2>
            <ul className={styles.list}>
              {SITEMAP.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Colonna 4: informazioni legali e Privacy */}
          <div className={styles.info}>
            <h2 className={styles.title}>Info legali</h2>
            {LEGAL_INFO.map((line) => (
              <p key={line} className="micro">
                {line}
              </p>
            ))}
            
            <h2 className={styles.title}>Privacy</h2>
            <SafeIubendaLinks />
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.legal}>
          <p className="micro">
            © {new Date().getFullYear()} MATCHdesign. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}