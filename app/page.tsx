import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "MATCHdesign — Sistemi di Brand Identity per Founder e Professionisti",
  description: "Costruiamo il sistema che protegge la coerenza del tuo brand nel tempo. Diagnosi gratuita in pochi minuti. Poche domande, nessuna email per iniziare. Solo alla fine, se vuoi, per essere ricontattato.",
};

export default function Home() {
  return (
    <div style={{
      background: "#1e1e1e",
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

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 1.25rem 3rem",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{ width: "100%", maxWidth: "640px" }}>

          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.22em", color: "#d9453d", textTransform: "uppercase", fontWeight: 500, marginBottom: "1.25rem" }}>
            MATCHdesign
          </p>

          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.9rem, 4.5vw, 2.6rem)", fontWeight: 700, color: "#f4efe9", lineHeight: 1.2, marginBottom: "2rem" }}>
            Accendere un brand è facile. Tenerlo acceso, no.
          </h1>

          <div style={{ height: "1px", background: "rgba(244,239,233,0.07)", marginBottom: "2rem" }} />

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "rgba(244,239,233,0.6)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Ogni progetto nasce da una scintilla — un&apos;idea, un&apos;intuizione, un modo di vedere le cose che è solo tuo. Il problema non è accenderla. È non spegnerla per strada, tra scadenze, incoerenze e un&apos;identità che si disperde invece di crescere. Da MATCHdesign costruiamo il sistema che protegge quella scintilla nel tempo.
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
      </section>

      {/* PROBLEMA */}
      <section style={{
        padding: "5rem 1.25rem",
        borderTop: "1px solid rgba(244,239,233,0.07)",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.3rem, 3vw, 1.6rem)", fontWeight: 700, color: "#f4efe9", lineHeight: 1.35, marginBottom: "1.5rem" }}>
            Quello che hai adesso non è stato pensato. È stato solo prodotto.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "rgba(244,239,233,0.6)", lineHeight: 1.8 }}>
            Un logo, una palette, un sito, i social — ogni pezzo, preso da solo, magari funziona. Ma messi insieme non reggono: si vede la cucitura. Il risultato è tempo perso a rifare le cose, incoerenze che il cliente nota prima di te, la fatica di comunicare qualcosa che dentro di te è già chiaro.
          </p>
        </div>
      </section>

      {/* METODO */}
      <section style={{
        padding: "5rem 1.25rem",
        borderTop: "1px solid rgba(244,239,233,0.07)",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.3rem, 3vw, 1.6rem)", fontWeight: 700, color: "#f4efe9", lineHeight: 1.35, marginBottom: "1.5rem" }}>
            Prima capiamo. Poi disegniamo.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "rgba(244,239,233,0.6)", lineHeight: 1.8 }}>
            Ogni progetto parte da una domanda semplice: di cosa ha bisogno questo brand per essere chiaro, coerente e riconoscibile? Ci arriviamo con una diagnosi, non con un brief generico — guardiamo cosa c&apos;è già, cosa manca, cosa va tenuto. Solo dopo entra il lavoro che si vede: la cura nei dettagli, la proporzione, lo spazio lasciato libero apposta, non per fretta. Il sistema prima, la forma dopo.
          </p>
        </div>
      </section>

      {/* PROCESSO */}
      <section style={{
        padding: "5rem 1.25rem",
        borderTop: "1px solid rgba(244,239,233,0.07)",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.22em", color: "#d9453d", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.75rem" }}>
          Come funziona
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "rgba(244,239,233,0.6)", marginBottom: "2.5rem" }}>
            Bastano pochi minuti.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem" }}>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "rgba(217,69,61,0.7)", marginBottom: "0.5rem" }}>01</p>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: "1rem", fontWeight: 700, color: "#f4efe9", marginBottom: "0.5rem" }}>Rispondi</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 300, color: "rgba(244,239,233,0.55)", lineHeight: 1.6 }}>Poche domande, nessuna email richiesta per iniziare.</p>
            </div>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "rgba(217,69,61,0.7)", marginBottom: "0.5rem" }}>02</p>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: "1rem", fontWeight: 700, color: "#f4efe9", marginBottom: "0.5rem" }}>Scopri il profilo</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 300, color: "rgba(244,239,233,0.55)", lineHeight: 1.6 }}>Le quattro aree che contano: chiarezza strategica, coerenza visiva, applicabilità, scalabilità.</p>
            </div>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "rgba(217,69,61,0.7)", marginBottom: "0.5rem" }}>03</p>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: "1rem", fontWeight: 700, color: "#f4efe9", marginBottom: "0.5rem" }}>Agisci</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 300, color: "rgba(244,239,233,0.55)", lineHeight: 1.6 }}>Una direzione concreta su dove intervenire per primo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section style={{
        padding: "6rem 1.25rem",
        borderTop: "1px solid rgba(244,239,233,0.07)",
        position: "relative",
        zIndex: 1,
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.4rem, 3.2vw, 1.8rem)", fontWeight: 700, color: "#f4efe9", lineHeight: 1.35, marginBottom: "2rem" }}>
            La scintilla ce l&apos;hai già. Il sistema lo costruiamo insieme.
          </h2>
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
      </section>

    </div>
  );
}