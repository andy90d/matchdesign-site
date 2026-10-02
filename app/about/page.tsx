import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MATCHdesign",
  description:
    "Costruiamo il sistema che protegge la coerenza del tuo brand nel tempo.",
};




export default function Home() {
  return (
    <div className="about-page">
      
      <section className="container section">
        <h2>Non ho iniziato sapendo di voler diventare designer.</h2>
        <p>Quello che mi ha fatto continuare, però, è stata la curiosità.
        Da sempre mi interessa capire come funzionano le cose e più studiavo design, più mi rendevo conto che dietro una scelta apparentemente estetica c'era molto più da capire: perché qualcosa funziona, come gli elementi si influenzano tra loro, cosa rende un'identità riconoscibile e, soprattutto, come il design possa aiutare le persone a orientarsi e prendere decisioni.
        Il mio percorso non è stato lineare. Mi sono formato in gran parte da solo, passando dall'illustrazione alla grafica e, progressivamente, al brand design. Non c'è stato un momento preciso in cui ho deciso di cambiare direzione. Ho semplicemente continuato a farmi domande finché il mio modo di guardare al design è cambiato.
        </p>
      </section>

      <section className="container section">
        <h2>È da qui che nasce MATCHdesign.</h2>
        <p> Dopo anni di lavoro con piccole realtà, ho visto quanto facilmente la comunicazione possa diventare frammentata: nuovi materiali senza un sistema, nuove esigenze senza criteri condivisi, identità che faticano a seguire la crescita dell'organizzazione.
          E ho iniziato a chiedermi se il ruolo del designer potesse essere qualcosa di più che produrre soluzioni.
          Oggi lavoro per costruire sistemi che aiutino le organizzazioni a capire cosa comunicare, come farlo e soprattutto come continuare a prendere decisioni coerenti anche quando il contesto cambia
          Non mi interessa rendere le cose semplicemente più belle.
          <span className="text-accent"> Mi interessa capire il problema, rendere visibili le connessioni e trasformare la complessità in qualcosa con cui sia possibile lavorare.</span>.
        </p>
      </section>
      
      <section className="container section">
      <h2>MATCHdesign nasce da questa prospettiva.</h2>
      <p>
        Non ho tutte le risposte.
        Ma so che le domande giuste possono cambiare il modo in cui guardiamo un problema.
      </p>
      </section>
      <section className="container section">
        <h2>Oggi</h2>
        <p>
          Lavoro con organizzazioni che stanno crescendo, cambiando o affrontando una comunicazione diventata difficile da governare.
          Le aiuto a fare chiarezza, costruire sistemi di brand più coerenti e creare gli strumenti necessari per continuare a comunicare con autonomia.
          <span className="text-accent2"> Perché un buon sistema non dovrebbe aver bisogno del suo designer per ogni decisione.</span>
        </p>
        </section>
    </div>
  );
}