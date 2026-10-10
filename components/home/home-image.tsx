// ============================================
// IMPORT
// ============================================
import styles from "./home-image.module.css";
import homeimage from  "@/public/assets/images/test home page_1.png"
import Image from "next/image";


// ============================================
// TIPI (il testo arriva dalla pagina come children)
// ============================================
type HomeImageProps = {
  children?: React.ReactNode;
};


// ============================================
// SEZIONE IMMAGINE HOME (a tutta larghezza, con testo sopra)
// ============================================
export default function HomeImage({ children }: HomeImageProps) {
  return (

    // --- Cornice dell'immagine (occupa tutta la larghezza) ---
    <div className={styles.frame}>

      <div className={styles.frame}>
        <Image
        src="/assets/images/test home page_1.png"
        alt="Hero image MATCHdesign"
        fill
        priority
        style={{ objectFit: "cover" }}
        />
      </div>

      {/* --- Livello del testo sopra l'immagine --- */}
      <div className={styles.overlay}>

        {/* --- Contenitore allineato all'header --- */}
        <div className={styles.content}>
          {children}
        </div>

      </div>

    </div>
  );
}