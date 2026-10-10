import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./AboutHero.module.css";

type HeroImage = {
  src: string;
  alt: string;
  /** Punto della foto da tenere in vista quando viene ritagliata, es. "70% 30%" */
  objectPosition?: string;
};

type Props = {
  /** Contenuto sovrapposto all'immagine (titolo e paragrafo). */
  children: ReactNode;
  /** Se manca, l'hero mostra solo lo sfondo scuro. */
  image?: HeroImage;
  cueLabel?: string;
  /** Deve coincidere con l'id del layout a cui scorre la freccia. */
  cueHref?: string;
};

export default function AboutHero({
  children,
  image,
  cueLabel = "Scorri",
  cueHref = "#storia",
}: Props) {
  return (
    <section className={styles.hero}>
      {image && (
        <Image
          className={styles.image}
          src={"/assets/images/ImmagineSezioneTest.jpg"}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: image.objectPosition }}
        />
      )}
      <div className={styles.scrim} />

      <div className={styles.inner}>{children}</div>

      <a className={styles.cue} href={cueHref}>
        <span>{cueLabel}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 4v16M5 13l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}