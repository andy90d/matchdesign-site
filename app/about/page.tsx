import type { Metadata } from "next";
import AboutLayout from "@/components/about/AboutLayout";
import AboutPhoto from "@/components/about/AboutPhoto";

export const metadata: Metadata = {
  title: "MATCHdesign",
  description:
    "Costruiamo il sistema che protegge la coerenza del tuo brand nel tempo.",
};

export default function Home() {
  return (
    <div className="about-page">
      <AboutLayout
        className="container"
        photo={
          <AboutPhoto
            src="/public/assets/images/default-placeholder-businessman-half-length-portr-portrait-photo-avatar-man-gray-color-113622427"
            alt="Ritratto"
            width={800}
            height={800}
          />
        }
        // badge={<DesignThatMatchBadge />}
      >
        <section>
          <h2>Oggi</h2>
          <p>
            Lavoro con organizzazioni che stanno crescendo, cambiando o affrontando una comunicazione difficile da governare.
            Le aiuto a fare chiarezza, costruire sistemi di brand coerenti e creare gli strumenti per comunicare con autonomia.
            <span className="text-accent"> Perché un buon sistema non dovrebbe aver bisogno del suo designer per ogni decisione.</span>
          </p>
        </section>

        <section>
          <h2>È da qui che nasce MATCHdesign.</h2>
          <p>
            Dopo anni di lavoro con piccole realtà, ho visto quanto facilmente la comunicazione possa diventare frammentata.
            Nuovi materiali, nuove esigenze, ma pochi criteri condivisi. Ho iniziato così a chiedermi
            se il ruolo del designer potesse essere qualcosa di più che produrre soluzioni: costruire sistemi capaci
            di trasformare la complessità in qualcosa con cui lavorare.
            <span className="text-accent"> Mi interessa capire il problema, rendere visibili le connessioni e trasformare la complessità in qualcosa con cui sia possibile lavorare.</span>
          </p>
        </section>

        <section>
          <h2>Non ho iniziato sapendo di voler diventare designer.</h2>
          <p>
            Quello che mi ha fatto continuare, però, è stata la curiosità. Più studiavo design,
            più mi interessava capire cosa ci fosse dietro una scelta: perché qualcosa funziona,
            come gli elementi si influenzano e come il design possa aiutare le persone a orientarsi e prendere decisioni.
            Il mio percorso è semplicemente cambiato mentre continuavo a farmi domande.
          </p>
        </section>

        <section>
          <h2>Una prospettiva, prima ancora che un metodo.</h2>
          <p>
            Non ho tutte le risposte. Ma so che le domande giuste possono cambiare il modo in cui guardiamo un problema.
            È da questo approccio che nasce il mio modo di lavorare: osservare, mettere in relazione e costruire strumenti
            che aiutino a prendere decisioni migliori.
          </p>
        </section>
      </AboutLayout>
    </div>
  );
}