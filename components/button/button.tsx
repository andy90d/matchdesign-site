// ============================================
// IMPORT
// ============================================
import Link from "next/link";
import styles from "./button.module.css";


// ============================================
// TIPI (le proprietà personalizzabili in ogni istanza)
// ============================================
type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
};


// ============================================
// COMPONENTE BUTTON (testo + icone opzionali)
// ============================================
export default function Button({
  children,
  href,
  type = "button",
  iconStart,
  iconEnd,
}: ButtonProps) {

  // --- Contenuto interno: icona iniziale, testo, icona finale ---
  const content = (
    <>
      {iconStart && (
        <span className={styles.icon} aria-hidden="true">{iconStart}</span>
      )}
      <span>{children}</span>
      {iconEnd && (
        <span className={styles.icon} aria-hidden="true">{iconEnd}</span>
      )}
    </>
  );

  // --- Versione link (se è presente href) ---
  if (href) {
    return (
      <Link href={href} className={styles.button}>
        {content}
      </Link>
    );
  }

  // --- Versione pulsante (per i form) ---
  return (
    <button type={type} className={styles.button}>
      {content}
    </button>
  );
}