"use client";

// ============================================
// IMPORT
// ============================================
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import styles from "./header.module.css";


// ============================================
// VOCI DEL MENU (key = chiave nel dizionario)
// ============================================
const NAV_ITEMS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "workTogether", href: "/work-together" },
  /* { key: "portfolio", href: "/portfolio" }, */
  { key: "contacts", href: "/contact" },
];


// ============================================
// HEADER
// ============================================
export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const t = useTranslations("Header");

  // --- Cambio lingua: resta sulla stessa pagina ---
  function changeLanguage(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        {/* --- Logo (link alla home) --- */}
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          <img
            src="/assets/images/Logo-Main-Color-Dark-BG.svg"
            alt="MATCHdesign"
            width={160}
            height={32}
          />
        </Link>

        {/* --- Pulsante menu (solo mobile) --- */}
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? t("close") : t("menu")}
        </button>

        {/* --- Navigazione principale --- */}
        <nav
          id="main-nav"
          aria-label={t("navLabel")}
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
        >
          <ul className={styles.list}>
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.link}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* --- Switch lingua IT | EN --- */}
        <div className={styles.lang}>
          {routing.locales.map((code, index) => (
            <span key={code} className={styles.langItem}>
              {index > 0 && <span aria-hidden="true">|</span>}
              <button
                type="button"
                lang={code}
                className={styles.langButton}
                aria-current={locale === code ? "true" : undefined}
                onClick={() => changeLanguage(code)}
              >
                {code.toUpperCase()}
              </button>
            </span>
          ))}
        </div>

      </div>
    </header>
  );
}