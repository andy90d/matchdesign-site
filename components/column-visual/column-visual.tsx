// ============================================
// IMPORT
// ============================================
import Image from "next/image";
import styles from "./column-visual.module.css";


// ============================================
// TIPI
// ============================================
type ColumnVisualProps = {
  src?: string;                 // immagine da /public (JPG, PNG, WebP, SVG)
  alt?: string;                 // vuoto = decorativa
  aspectRatio?: string;         // es. "4 / 3" (default nel CSS)
  children?: React.ReactNode;   // alternativa a src: SVG inline
};


// ============================================
// VISUAL SOPRA LE COLONNE (immagine o SVG)
// ============================================
export default function ColumnVisual({
  src,
  alt = "",
  aspectRatio,
  children,
}: ColumnVisualProps) {
  const isDecorative = alt === "";

  return (
    <div
      className={styles.visual}
      style={aspectRatio ? ({ "--visual-ratio": aspectRatio } as React.CSSProperties) : undefined}
      aria-hidden={isDecorative ? true : undefined}
    >

      {/* --- Immagine --- */}
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 767px) 100vw, 33vw"
          className={styles.image}
        />
      )}

      {/* --- SVG inline (prende il colore da currentColor) --- */}
      {!src && children && <div className={styles.svg}>{children}</div>}

    </div>
  );
}