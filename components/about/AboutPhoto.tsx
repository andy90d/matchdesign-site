import styles from "./AboutPhoto.module.css";

type Props = {
  src: "/assets/images/TestAbout.jpg";
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