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
  className?: string;
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
  className = "", // <--- 1. Estratto className con valore di default vuoto
}: ButtonProps) {

  // Combiniamo la classe del modulo CSS con la classe passata dall'esterno
  const combinedClass = `${styles.button} ${className}`.trim();

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
      <Link href={href} className={combinedClass}>
        {content}
      </Link>
    );
  }

  // --- Versione pulsante (per i form) ---
  return (
    <button type={type} className={combinedClass}>
      {content}
    </button>
  );
}