// ===== SEZIONE: CARD (componente riutilizzabile) =====
import type { ElementType, ReactNode } from "react";
import styles from "./card.module.css";

type CardProps = {
  icon?: ReactNode;
  eyebrow?: string;
  title: string;
  text: string;
  note?: string;
  headingLevel?: "h2" | "h3" | "h4";
  className?: string;
};

export default function Card({
  icon,
  eyebrow,
  title,
  text,
  note,
  headingLevel = "h3",
  className = "",
}: CardProps) {
  const Heading: ElementType = headingLevel;

  return (
    <article className={`${styles.card} ${className}`}>
      {icon && (
        <div className={styles.icon} aria-hidden="true">
          {icon}
        </div>
      )}

      <div className={styles.body}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <Heading className={styles.title}>{title}</Heading>
        <p className={styles.text}>{text}</p>
      </div>

      {note && <p className={styles.note}>{note}</p>}
    </article>
  );
}