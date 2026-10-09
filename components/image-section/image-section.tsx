// ============================================
// IMPORT
// ============================================
import Image from "next/image";
import styles from "./image-section.module.css";


// ============================================
// TIPI (tutto personalizzabile in ogni istanza)
// ============================================
type ImageSectionProps = {
  src: string;
  alt?: string;
  overlay?: boolean;            // velo scuro sopra l'immagine (default: attivo)
  fit?: "cover" | "contain";    // cover = riempie e taglia, contain = immagine intera
  aspectRatio?: string;         // es. "4 / 3": proporzioni della cornice
  children?: React.ReactNode;
};


// ============================================
// SEZIONE IMMAGINE CON TESTO E BOTTONE SOPRA (opzionali)
// ============================================
export default function ImageSection({
  src,
  alt = "",
  overlay = true,
  fit = "cover",
  aspectRatio,
  children,
}: ImageSectionProps) {
  const isContain = fit === "contain";

  return (

    // --- Cornice (occupa tutta la larghezza) ---
    <div
      className={`${styles.frame} ${isContain ? styles.frameContain : ""}`}
      style={aspectRatio ? ({ "--frame-ratio": aspectRatio } as React.CSSProperties) : undefined}
    >

      {/* --- Immagine --- */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={`${styles.image} ${isContain ? styles.imageContain : ""}`}
      />

      {/* --- Livello del testo sopra l'immagine (solo se c'è contenuto) --- */}
      {children && (
        <div className={`${styles.overlay} ${overlay ? styles.veil : ""}`}>

          {/* --- Contenitore allineato all'header --- */}
          <div className={styles.content}>
            {children}
          </div>

        </div>
      )}

    </div>
  );
}