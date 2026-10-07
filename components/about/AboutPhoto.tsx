import styles from "./AboutPhoto.module.css";

type Props = {
  src: "/public/assets/images/default-placeholder-businessman-half-length-portr-portrait-photo-avatar-man-gray-color-113622427";
  alt: "Ritratto";
  width: number;  // dimensioni intrinseche del file, evitano layout shift
  height: number;
};

export default function AboutPhoto({ src, alt, width, height }: Props) {
  return (
    <figure className={styles.photo}>
      <img className={styles.image} src={src} alt={alt} width={width} height={height} decoding="async" />
    </figure>
  );
}