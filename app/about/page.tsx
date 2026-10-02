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
        <h1>Non ho iniziato facendo questo lavoro perché sapevo di voler diventare designer.</h1>
      <p>Ho iniziato perché era qualcosa che sapevo fare e che poteva diventare un lavoro. 
        Quello che mi ha fatto continuare, però, è stata la curiosità.
        Da sempre mi interessa capire come funzionano le cose e più studiavo design, più mi rendevo conto che dietro una scelta apparentemente estetica c'era molto più da capire: perché qualcosa funziona, come gli elementi si influenzano tra loro, cosa rende un'identità riconoscibile e, soprattutto, come il design possa aiutare le persone a orientarsi e prendere decisioni.
        Il mio percorso non è stato lineare. Mi sono formato in gran parte da solo, passando dall'illustrazione alla grafica e, progressivamente, al brand design. Non c'è stato un momento preciso in cui ho deciso di cambiare direzione. Ho semplicemente continuato a farmi domande finché il mio modo di guardare al design è cambiato.
        </p>
      </section>

      <section className="container section">
        <h1>È da qui che nasce MATCHdesign.</h1>
        <p> Dopo anni di lavoro con piccole realtà, ho visto quanto facilmente la comunicazione possa diventare frammentata: nuovi materiali senza un sistema, nuove esigenze senza criteri condivisi, identità che faticano a seguire la crescita dell'organizzazione.
          E ho iniziato a chiedermi se il ruolo del designer potesse essere qualcosa di più che produrre soluzioni.
          Oggi lavoro per costruire sistemi che aiutino le organizzazioni a capire cosa comunicare, come farlo e soprattutto **come continuare a prendere decisioni coerenti anche quando il contesto cambia**.
          Non mi interessa rendere le cose semplicemente più belle.
          Mi interessa capire il problema, rendere visibili le connessioni e trasformare la complessità in qualcosa con cui sia possibile lavorare.
        </p>
      </section>
      
      <h1>MATCHdesign nasce da questa prospettiva.</h1>
      <p>
        Non ho tutte le risposte.
        Ma so che le domande giuste possono cambiare il modo in cui guardiamo un problema.
      </p>
    </div>
  );
}