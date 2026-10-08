import type { ReactNode } from "react";
import styles from "./StoryColumns.module.css";

type Props = {
  /** Colonna sinistra. Se manca, mostra un placeholder. */
  media?: ReactNode;
  /** Colonna destra: le sezioni di testo. */
  children: ReactNode;
  /** Destinazione della freccia dell'hero. */
  id?: string;
};

export default function StoryColumns({ media, children, id = "storia" }: Props) {
  return (
    <section id={id} className={styles.columns}>
      <div className={styles.media}>
        {media ?? <div className={styles.placeholder} aria-hidden="true" />}
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
}