import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "MATCHdesign — Brand Visual Identity",
  description: "Studio di brand identity per founder e professionisti. Strategia, visual identity e sistemi di brand costruiti per durare.",
};

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#1e1e1e",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "5rem 1.25rem 3rem",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Top accent */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", background: "#d9453d", zIndex: 20 }} />

      {/* Logo */}
      <div style={{ position: "fixed", top: "1.2rem", left: "1.75rem", zIndex: 20 }}>
        <Image src="/Logo_DarkBg.svg" alt="MATCHdesign" width={120} height={32} priority />
      </div>

      {/* Grain */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`, pointerEvents: "none", zIndex: 0 }} />

      <div style={{ width: "100%", maxWidth: "640px", position: "relative", zIndex: 1 }}>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.22em", color: "#d9453d", textTransform: "uppercase", fontWeight: 500, marginBottom: "1.25rem" }}>
          MATCHdesign
        </p>

        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.7rem, 4vw, 2.4rem)", fontWeight: 700, color: "#f4efe9", lineHeight: 1.15, marginBottom: "2rem" }}>
          Brand visual identity per founder e professionisti.
        </h1>

        <div style={{ height: "1px", background: "rgba(244,239,233,0.07)", marginBottom: "2rem" }} />

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "rgba(244,239,233,0.6)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
          L'IA ha reso possibile generare loghi, palette e copy in pochi secondi. Il risultato? Un mercato pieno di brand che si assomigliano tutti — veloci da produrre, impossibili da ricordare.
        </p>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "rgba(244,239,233,0.6)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
          Da MATCHdesign usiamo l'IA in modo diverso: come strumento di ricerca, analisi e accelerazione — non come sostituto del pensiero strategico. Ogni progetto inizia con una domanda precisa: <em style={{ color: "rgba(244,239,233,0.85)", fontStyle: "normal" }}>di cosa ha bisogno questo brand per essere riconoscibile, coerente e credibile?</em>
        </p>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "rgba(244,239,233,0.6)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
          Per rispondere a questa domanda abbiamo costruito una diagnosi gratuita. Poche domande, nessuna email richiesta per iniziare. Alla fine: un profilo preciso del tuo brand e una direzione concreta su dove intervenire.
        </p>

        <Link href="/quiz" style={{
          display: "inline-block",
          background: "#d9453d",
          color: "#f4efe9",
          padding: "0.8rem 2.25rem",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.72rem",
          fontWeight: 500,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          textDecoration: "none",
          transition: "background 0.16s ease",
          outline: "none",
        }}>
          Scopri di cosa ha bisogno il tuo brand →
        </Link>

      </div>
    </div>
  );
}