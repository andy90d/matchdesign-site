import { Children, Fragment, type CSSProperties, type ReactNode } from "react";
import styles from "./AboutLayout.module.css";

type Props = {
  /** Le sezioni di testo, nell'ordine. Servono almeno 3, altrimenti la foto non ha corsa. */
  children: ReactNode;
  /** Slot per la foto (es. <AboutPhoto />). */
  photo: ReactNode;
  /** Slot opzionale per il badge, accanto alla prima sezione. */
  badge?: ReactNode;
  /** Larghezza / altezza della foto. Default 1 (quadrata). */
  photoRatio?: number;
  className?: string;
};

/**
 * Solo layout. La foto compare all'altezza della 2ª sezione, scende rispetto al testo
 * e si ferma con il bordo superiore allineato all'inizio dell'ultima sezione.
 * Come: l'area sticky va dalla 2ª sezione a una riga di coda alta quanto la foto,
 * che coincide con l'inizio dell'ultima sezione. Nessun JavaScript di scroll.
 * Ordine nel DOM (= ordine di lettura su mobile): badge, sezione 1, foto, sezione 2, 3, …
 */
export default function AboutLayout({ children, photo, badge, photoRatio = 1, className }: Props) {
  const items = Children.toArray(children);
  const n = items.length;

  const rootStyle = {
    "--about-photo-ratio": photoRatio,
    // righe 1..n-1 = sezioni; riga n = coda alta come la foto; riga n+1 = resto dell'ultima sezione
    "--about-rows": `${"auto ".repeat(n - 1)}var(--about-photo-h) auto`,
    "--about-photo-row": `2 / ${n + 1}`,
  } as CSSProperties;

  return (
    <div className={[styles.layout, className].filter(Boolean).join(" ")} style={rootStyle}>
      {badge && <div className={styles.badge}>{badge}</div>}

      {items.map((item, i) => (
        <Fragment key={i}>
          <div
            className={styles.cell}
            // l'ultima sezione parte dalla riga di coda e prosegue nella successiva
            style={{ "--row": i === n - 1 ? `${n} / span 2` : String(i + 1) } as CSSProperties}
          >
            {item}
          </div>

          {i === 0 && <div className={styles.photoSlot}>{photo}</div>}
        </Fragment>
      ))}
    </div>
  );
}