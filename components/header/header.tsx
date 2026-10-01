"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work together", href: "/work-together" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Chiudi" : "Menu"}
        </button>

        <nav
          id="main-nav"
          aria-label="Principale"
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
        >
          <ul className={styles.list}>
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={styles.link}
                  aria-current={pathname === href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.lang}>
          <span lang="it">IT</span>
          <span aria-hidden="true">|</span>
          <span lang="en">EN</span>
        </div>
      </div>
    </header>
  );
}