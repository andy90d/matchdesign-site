import { unbounded } from "@/lib/fonts/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MATCHdesign",
  description:
    "Costruiamo il sistema che protegge la coerenza del tuo brand nel tempo.",
};

function TextHighlight({ children }: { children: React.ReactNode }) {
  return (
    <mark className="bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/30 px-2 py-0.5 rounded-md font-medium">
      {children}
    </mark>
  );
}


export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8 sm:p-12 space-y-10">
      
      {/* Header */}
      <header className="border-b border-[var(--border)] pb-6">
        <h1 className="text-3xl font-extrabold text-[var(--primary)] mb-2">
          Dark Mode Playground
        </h1>
        <p className="text-[var(--muted)]">
          Configurazione fissa su tema scuro.
        </p>
      </header>

      {/* Sezione Testo ed Evidenziatore */}
      <section className="bg-[var(--surface)] border border-[var(--border)] p-6 rounded-2xl shadow-xl space-y-4">
        <h2 className="text-xl font-bold text-[var(--foreground)]">
          Testo ed Evidenziazioni
        </h2>
        
        <p className="text-base leading-relaxed text-[var(--foreground)]">
          In un'interfaccia scura, per evidenziare i concetti <TextHighlight>fondamentali</TextHighlight> è 
          meglio usare sfondi opachi o semi-trasparenti per evitare che il contrasto risulti troppo 
          aggressivo per la vista.
        </p>

        <p className="text-base leading-relaxed text-[var(--muted)]">
          I testi secondari utilizzano il colore <span className="text-[var(--foreground)] font-semibold">muted</span> per 
          creare una gerarchia visiva chiara senza affaticare gli occhi.
        </p>
      </section>

      {/* Anteprima Tavolozza Colori */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-center text-xs font-semibold">
          Surface (#1e293b)
        </div>
        <div className="p-4 rounded-xl bg-[var(--primary)] text-white text-center text-xs font-semibold">
          Primary (#3b82f6)
        </div>
        <div className="p-4 rounded-xl bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/30 text-center text-xs font-semibold">
          Accent Muted
        </div>
        <div className="p-4 rounded-xl bg-[var(--border)] text-[var(--foreground)] text-center text-xs font-semibold">
          Border (#334155)
        </div>
      </section>

    </main>
  );
}