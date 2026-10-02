// ============================================
// IMPORT
// ============================================
import Image from "next/image";
import styles from "./image-section.module.css";


// ============================================
// TIPI (immagine e contenuto personalizzabili in ogni istanza)
// ============================================
type ImageSectionProps = {
  src: string;
  alt?: string;
  children?: React.ReactNode;
};


// ============================================
// SEZIONE IMMAGINE CON TESTO E BOTTONE SOPRA
// ============================================
export default function ImageSection({ src, alt = "", children }: ImageSectionProps) {
  return (

    // --- Cornice (occupa tutta la larghezza) ---
    <div className={styles.frame}>

      {/* --- Immagine di sfondo --- */}
      <Image src={src} alt={alt} fill sizes="100vw" className={styles.image} />

      {/* --- Livello del testo sopra l'immagine (con velo scuro) --- */}
      <div className={styles.overlay}>

        {/* --- Contenitore allineato all'header --- */}
        <div className={styles.content}>
          {children}
        </div>

      </div>

    </div>
  );
}