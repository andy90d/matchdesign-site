"use client";

import { useState } from "react";

// ─── TYPES ───────────────────────────────────────────────────────────────────

type PathKey = "founder" | "freelance" | "company";
type QualifierTag = "email" | "call_online" | "call_phone" | "message" | "any";

interface ScoreMap {
  [key: string]: number;
}

interface QuizOption {
  label: string;
  scores?: ScoreMap;
  tag?: QualifierTag;
}

interface QuizQuestion {
  id: string;
  text: string;
  qualifier?: boolean;
  options: QuizOption[];
}

interface Profile {
  label: string;
  tag: string;
  description: string;
  cta: string;
}

interface PathConfig {
  label: string;
  sublabel: string;
  questions: QuizQuestion[];
  profiles: Record<string, Profile>;
  scoreKeys: string[];
}

interface AnswerLog {
  question: string;
  answer: string;
  qualifier: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  note: string;
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const founderQuestions: QuizQuestion[] = [
  {
    id: "f1",
    text: "A che punto sei con il progetto?",
    options: [
      { label: "È ancora un'idea nella mia testa", scores: { F1: 3 } },
      { label: "Ho una visione chiara ma non ho ancora nulla di concreto", scores: { F1: 2, F2: 1 } },
      { label: "Ho validato l'idea e sto costruendo il prodotto o servizio", scores: { F2: 2, F3: 1 } },
      { label: "Sono quasi pronto al lancio, manca solo il brand", scores: { F3: 2, F4: 3 } },
    ],
  },
  {
    id: "f2",
    text: "Hai già un nome o un concept visivo?",
    options: [
      { label: "No, neanche il nome", scores: { F1: 3 } },
      { label: "Ho un nome ma niente visivo", scores: { F2: 2, F1: 1 } },
      { label: "Ho qualche idea visiva ma non è definita", scores: { F3: 2 } },
      { label: "Ho bozze o materiali ma non sono coordinati", scores: { F4: 3 } },
    ],
  },
  {
    id: "f3",
    text: "Sai descrivere in una frase chi è il tuo cliente ideale?",
    options: [
      { label: "No, è ancora vago", scores: { F1: 3 } },
      { label: "Ho un'idea ma non riesco a renderla precisa", scores: { F1: 2, F2: 1 } },
      { label: "Sì, ma non so come parlare a quella persona", scores: { F2: 3 } },
      { label: "Sì, e so anche cosa vuole sentirsi dire", scores: { F3: 2, F4: 1 } },
    ],
  },
  {
    id: "f4",
    text: "Hai già validato l'idea con qualcuno?",
    options: [
      { label: "No, non ancora", scores: { F1: 2 } },
      { label: "Ne ho parlato ma non ho ricevuto feedback strutturati", scores: { F2: 2 } },
      { label: "Sì, ho avuto feedback positivi ma la comunicazione non convince", scores: { F2: 2, F3: 1 } },
      { label: "Sì, ho già clienti o pre-iscritti — ma il brand non è ancora pronto", scores: { F4: 3 } },
    ],
  },
  {
    id: "f5",
    text: "Come stai comunicando il progetto adesso?",
    options: [
      { label: "Non sto comunicando ancora niente", scores: { F1: 2, F2: 1 } },
      { label: "A voce o su WhatsApp, in modo informale", scores: { F2: 2 } },
      { label: "Ho qualcosa online ma è provvisorio", scores: { F3: 2 } },
      { label: "Ho una presenza ma non è coerente o non mi rappresenta", scores: { F4: 3 } },
    ],
  },
  {
    id: "f6",
    text: "Cosa ti blocca di più in questa fase?",
    options: [
      { label: "Non so ancora chi sono come brand", scores: { F1: 3 } },
      { label: "So chi sono ma non so come raccontarlo", scores: { F2: 3 } },
      { label: "So cosa dire ma non ho un visual all'altezza", scores: { F3: 3 } },
      { label: "Ho tutto ma manca un sistema coordinato", scores: { F4: 3 } },
    ],
  },
  {
    id: "f7",
    text: "Hai una data o un obiettivo di lancio?",
    options: [
      { label: "No, sono ancora in fase esplorativa", scores: { F1: 2 } },
      { label: "Vagamente, entro qualche mese", scores: { F2: 1, F3: 1 } },
      { label: "Sì, entro breve — ho urgenza", scores: { F4: 2, F3: 1 } },
      { label: "Sono già live ma il brand non mi soddisfa", scores: { F4: 3 } },
    ],
  },
  {
    id: "f8",
    text: "Qual è la tua priorità immediata?",
    options: [
      { label: "Capire chi sono e come posizionarmi", scores: { F1: 3 } },
      { label: "Trovare le parole giuste per raccontare il progetto", scores: { F2: 3 } },
      { label: "Avere un'identità visiva professionale", scores: { F3: 3 } },
      { label: "Avere tutto pronto e coordinato per il lancio", scores: { F4: 3 } },
    ],
  },
  {
    id: "f9",
    qualifier: true,
    text: "Come preferisci che ti risponda?",
    options: [
      { label: "Via email, con calma", tag: "email" },
      { label: "Una call online — Zoom, Meet o simili", tag: "call_online" },
      { label: "Una call telefonica o su WhatsApp", tag: "call_phone" },
      { label: "Un messaggio veloce", tag: "message" },
      { label: "Nessuna preferenza", tag: "any" },
    ],
  },
];

const freelanceQuestions: QuizQuestion[] = [
  {
    id: "p1",
    text: "Da quanto lavori in autonomia?",
    options: [
      { label: "Ho appena iniziato o sto per farlo", scores: { P1: 3 } },
      { label: "Meno di 2 anni", scores: { P1: 2, P2: 1 } },
      { label: "Da alcuni anni, con clienti ricorrenti", scores: { P2: 1, P3: 2 } },
      { label: "Ho una pratica consolidata", scores: { P3: 1, P4: 2 } },
    ],
  },
  {
    id: "p2",
    text: "Hai un'identità visiva — logo, palette, font?",
    options: [
      { label: "No, uso qualcosa di improvvisato", scores: { P1: 3 } },
      { label: "Ho qualcosa ma non mi rappresenta più", scores: { P3: 3 } },
      { label: "Sì, ma non la uso in modo coerente", scores: { P3: 2, P2: 1 } },
      { label: "Sì, funziona — ma non attira il tipo di cliente che voglio", scores: { P4: 3 } },
    ],
  },
  {
    id: "p3",
    text: "Come trovano te i nuovi clienti?",
    options: [
      { label: "Quasi sempre tramite passaparola", scores: { P1: 1, P2: 2 } },
      { label: "Principalmente online, ma non so bene come", scores: { P2: 2 } },
      { label: "Ho una presenza online ma non genera molto", scores: { P2: 1, P3: 2 } },
      { label: "Ho un sistema, ma attira il profilo sbagliato", scores: { P4: 3 } },
    ],
  },
  {
    id: "p4",
    text: "Quando mostri il tuo lavoro online, come ti senti?",
    options: [
      { label: "Non ho ancora niente da mostrare", scores: { P1: 3 } },
      { label: "Ho qualcosa ma non mi convince", scores: { P2: 2, P3: 1 } },
      { label: "Ho materiali ma non sono coerenti tra loro", scores: { P3: 3 } },
      { label: "Ho tutto, ma sento che non parlo al cliente giusto", scores: { P4: 3 } },
    ],
  },
  {
    id: "p5",
    text: "I clienti che attiri sono quelli che vuoi?",
    options: [
      { label: "Non ne ho ancora abbastanza per dirlo", scores: { P1: 2 } },
      { label: "Spesso no — mi contattano persone che non fanno per me", scores: { P2: 2, P4: 1 } },
      { label: "A volte sì, ma il processo è casuale", scores: { P3: 2 } },
      { label: "No — voglio lavorare con un profilo di cliente più alto", scores: { P4: 3 } },
    ],
  },
  {
    id: "p6",
    text: "Come gestisci la comunicazione quotidiana — email, preventivi, presentazioni?",
    options: [
      { label: "Improvviso ogni volta", scores: { P1: 2, P2: 1 } },
      { label: "Ho qualcosa ma non è professionale come vorrei", scores: { P2: 2 } },
      { label: "Ho materiali ma non parlano tutti la stessa lingua", scores: { P3: 3 } },
      { label: "Ho un sistema, ma non è all'altezza del posizionamento che voglio", scores: { P4: 3 } },
    ],
  },
  {
    id: "p7",
    text: "Ti è mai capitato di perdere un cliente per come ti sei presentato?",
    options: [
      { label: "Probabilmente sì, ma non ne sono sicuro", scores: { P1: 1, P2: 2 } },
      { label: "Sì, sento che il mio valore non viene percepito", scores: { P2: 3 } },
      { label: "Sì, i miei materiali non sono coerenti o all'altezza", scores: { P3: 3 } },
      { label: "No, ma sento che sto lasciando soldi sul tavolo", scores: { P4: 3 } },
    ],
  },
  {
    id: "p8",
    text: "Qual è la tua priorità adesso?",
    options: [
      { label: "Costruire una presenza riconoscibile da zero", scores: { P1: 3 } },
      { label: "Comunicare meglio il valore di quello che faccio", scores: { P2: 3 } },
      { label: "Rendere coerente e professionale quello che già ho", scores: { P3: 3 } },
      { label: "Attrarre un cliente diverso — più alto, più specifico", scores: { P4: 3 } },
    ],
  },
  {
    id: "p9",
    qualifier: true,
    text: "Come preferisci che ti risponda?",
    options: [
      { label: "Via email, con calma", tag: "email" },
      { label: "Una call online — Zoom, Meet o simili", tag: "call_online" },
      { label: "Una call telefonica o su WhatsApp", tag: "call_phone" },
      { label: "Un messaggio veloce", tag: "message" },
      { label: "Nessuna preferenza", tag: "any" },
    ],
  },
];

const companyQuestions: QuizQuestion[] = [
  {
    id: "c1",
    text: "La tua azienda o attività è…",
    options: [
      { label: "Attiva da meno di 2 anni", scores: { A: 2, B: 1 } },
      { label: "Attiva da alcuni anni, in crescita", scores: { B: 2, C: 1 } },
      { label: "Consolidata con un brand riconoscibile", scores: { C: 1, D: 2 } },
      { label: "Consolidata ma in fase di cambiamento strategico", scores: { D: 3 } },
    ],
  },
  {
    id: "c2",
    text: "Hai già un logo?",
    options: [
      { label: "No, o quasi niente", scores: { A: 3 } },
      { label: "Sì, ma non ci rappresenta più", scores: { B: 3 } },
      { label: "Sì, ma non sappiamo bene come usarlo", scores: { C: 3 } },
      { label: "Sì, funziona — ma sento che è invecchiato", scores: { D: 3 } },
    ],
  },
  {
    id: "c3",
    text: "Se mostri il brand a qualcuno, cosa succede?",
    options: [
      { label: "Non abbiamo niente da mostrare", scores: { A: 3 } },
      { label: "Mostriamo qualcosa ma la reazione non ci convince", scores: { B: 3 } },
      { label: "Abbiamo materiali ma non sono coerenti tra loro", scores: { C: 3 } },
      { label: "Il brand è riconoscibile, ma non regge il confronto dove vogliamo arrivare", scores: { D: 3 } },
    ],
  },
  {
    id: "c4",
    text: "Come descriveresti il vostro visual attuale?",
    options: [
      { label: "Non abbiamo un visual definito", scores: { A: 3 } },
      { label: "Abbiamo qualcosa, ma fatto in fretta o senza un criterio", scores: { B: 3 } },
      { label: "Abbiamo un'identità ma non la applichiamo con costanza", scores: { C: 3 } },
      { label: "Abbiamo un sistema solido ma non rispecchia dove stiamo andando", scores: { D: 3 } },
    ],
  },
  {
    id: "c5",
    text: "I vostri clienti capiscono subito cosa fate e per chi lo fate?",
    options: [
      { label: "No, stiamo ancora definendo il posizionamento", scores: { A: 3 } },
      { label: "A volte sì, a volte no — il messaggio non è chiaro", scores: { B: 3 } },
      { label: "Generalmente sì, ma la comunicazione visiva non aiuta", scores: { C: 3 } },
      { label: "Sì, ma vogliamo parlare a un pubblico diverso o più elevato", scores: { D: 3 } },
    ],
  },
  {
    id: "c6",
    text: "Come vi muovete nella comunicazione quotidiana?",
    options: [
      { label: "Improvvisiamo ogni volta, non abbiamo linee guida", scores: { A: 2, B: 1 } },
      { label: "Usiamo materiali diversi che non parlano la stessa lingua", scores: { B: 2, C: 1 } },
      { label: "Abbiamo delle linee guida ma non le seguiamo con costanza", scores: { C: 3 } },
      { label: "Abbiamo un sistema, ma sentiamo che limita invece di aiutare", scores: { D: 3 } },
    ],
  },
  {
    id: "c7",
    text: "Avete già lavorato con un designer o un'agenzia per il brand?",
    options: [
      { label: "No, mai", scores: { A: 3 } },
      { label: "Sì, ma il risultato non ci ha convinto", scores: { B: 3 } },
      { label: "Sì, abbiamo materiali ma mancano istruzioni su come usarli", scores: { C: 3 } },
      { label: "Sì, e ora vogliamo fare un passo avanti", scores: { D: 3 } },
    ],
  },
  {
    id: "c8",
    text: "Cosa vi blocca di più in questo momento?",
    options: [
      { label: "Non sappiamo da dove iniziare", scores: { A: 3 } },
      { label: "Non riusciamo a spiegare chi siamo e cosa ci distingue", scores: { B: 3 } },
      { label: "Abbiamo difficoltà ad applicare il brand in modo coerente", scores: { C: 3 } },
      { label: "Il brand attuale non regge il confronto con dove vogliamo arrivare", scores: { D: 3 } },
    ],
  },
  {
    id: "c9",
    text: "In che contesti vi serve il brand principalmente?",
    options: [
      { label: "Online — sito, social, email", scores: { A: 1, B: 1, C: 1, D: 1 } },
      { label: "Materiali fisici — packaging, stampa, spazi", scores: { A: 1, B: 1, C: 1, D: 1 } },
      { label: "Entrambi", scores: { A: 1, B: 1, C: 1, D: 1 } },
      { label: "Non lo sappiamo ancora", scores: { A: 2 } },
    ],
  },
  {
    id: "c10",
    text: "In una frase, qual è la vostra priorità adesso?",
    options: [
      { label: "Creare qualcosa da zero che ci rappresenti davvero", scores: { A: 3 } },
      { label: "Capire cosa non funziona e sistemarlo", scores: { B: 3 } },
      { label: "Usare meglio quello che abbiamo già", scores: { C: 3 } },
      { label: "Portare il brand al livello successivo", scores: { D: 3 } },
    ],
  },
  {
    id: "c11",
    qualifier: true,
    text: "Come preferite che vi risponda?",
    options: [
      { label: "Via email, con calma", tag: "email" },
      { label: "Una call online — Zoom, Meet o simili", tag: "call_online" },
      { label: "Una call telefonica o su WhatsApp", tag: "call_phone" },
      { label: "Un messaggio veloce", tag: "message" },
      { label: "Nessuna preferenza", tag: "any" },
    ],
  },
];

const founderProfiles: Record<string, Profile> = {
  F1: {
    label: "Identità da definire",
    tag: "POSIZIONAMENTO",
    description: "Prima ancora del logo, hai bisogno di sapere chi sei come brand — a chi parli, cosa ti distingue, qual è il tuo territorio. Costruire un visual prima di avere chiarezza strategica è uno spreco. Partiamo dalle fondamenta.",
    cta: "Parliamo del tuo progetto",
  },
  F2: {
    label: "Storia da raccontare",
    tag: "NARRAZIONE",
    description: "Sai cosa fai e perché ha valore. Il problema è che non riesci ancora a trasmetterlo all'esterno in modo convincente. Serve lavorare sul messaggio — le parole giuste prima delle immagini giuste.",
    cta: "Troviamo le parole giuste",
  },
  F3: {
    label: "Visual da costruire",
    tag: "IDENTITÀ VISIVA",
    description: "Hai chiarezza strategica e sai a chi ti rivolgi. Quello che manca è un'identità visiva professionale che traduca tutto questo in qualcosa di riconoscibile e coerente. Sei al punto giusto per iniziare.",
    cta: "Costruiamo la tua identità",
  },
  F4: {
    label: "Brand da lanciare",
    tag: "SISTEMA",
    description: "Hai quasi tutto — manca solo la regia. I pezzi ci sono ma non parlano la stessa lingua. Serve un sistema coordinato, pronto all'uso dal giorno uno del lancio.",
    cta: "Portiamo tutto a sistema",
  },
};

const freelanceProfiles: Record<string, Profile> = {
  P1: {
    label: "Presenza da costruire",
    tag: "FONDAMENTA",
    description: "Non hai ancora un'identità riconoscibile come professionista. Prima di tutto il resto, serve costruire una presenza coerente e credibile.",
    cta: "Costruiamo la tua presenza",
  },
  P2: {
    label: "Valore da comunicare",
    tag: "PERCEZIONE",
    description: "Sei bravo in quello che fai — ma non riesci a farlo percepire all'esterno. Un brand che comunica il tuo valore attira clienti migliori, a tariffe migliori.",
    cta: "Facciamo percepire il tuo valore",
  },
  P3: {
    label: "Immagine da allineare",
    tag: "COERENZA",
    description: "Hai materiali, una presenza online, forse anche un logo. Ma non parlano tutti la stessa lingua. Il risultato è un'immagine frammentata che non rende giustizia a quello che fai.",
    cta: "Allineiamo la tua immagine",
  },
  P4: {
    label: "Posizionamento da affinare",
    tag: "EVOLUZIONE",
    description: "Hai un brand funzionante, ma attira il profilo sbagliato di cliente. Per parlare a chi vuoi davvero, il brand deve essere calibrato su quella persona — non su tutti.",
    cta: "Affiniamo il tuo posizionamento",
  },
};

const companyProfiles: Record<string, Profile> = {
  A: {
    label: "Brand da costruire",
    tag: "FONDAMENTA",
    description: "Non avete ancora un'identità visiva strutturata — o quello che avete non riflette chi siete davvero. È il momento giusto per costruire dalle basi: posizionamento, naming, visual identity.",
    cta: "Parla con noi del tuo progetto",
  },
  B: {
    label: "Brand da chiarire",
    tag: "CHIAREZZA",
    description: "Avete qualcosa, ma non funziona come dovrebbe. Il problema non è sempre estetico — spesso è strategico. Prima di ridisegnare, serve capire cosa state comunicando e a chi.",
    cta: "Raccontaci dove si inceppa",
  },
  C: {
    label: "Brand da applicare",
    tag: "COERENZA",
    description: "L'identità esiste, ma si perde nell'applicazione. Serve un brand system chiaro — non una guida da archiviare, ma uno strumento da usare ogni giorno.",
    cta: "Costruiamo il vostro sistema",
  },
  D: {
    label: "Brand da evolvere",
    tag: "EVOLUZIONE",
    description: "Il vostro brand ha una storia, ma non sta tenendo il passo. È il momento di un'evoluzione consapevole — non un restyling, ma un riposizionamento.",
    cta: "Parliamo di dove volete arrivare",
  },
};

const contactMethodLabels: Record<QualifierTag, string> = {
  email: "Via email",
  call_online: "Call online",
  call_phone: "Call telefonica / WhatsApp",
  message: "Messaggio diretto",
  any: "Nessuna preferenza",
};

const pathConfig: Record<PathKey, PathConfig> = {
  founder: {
    label: "Founder / Startup",
    sublabel: "Sto lanciando qualcosa di nuovo",
    questions: founderQuestions,
    profiles: founderProfiles,
    scoreKeys: ["F1", "F2", "F3", "F4"],
  },
  freelance: {
    label: "Professionista / Freelance",
    sublabel: "Lavoro in autonomia, vendo competenze o servizi",
    questions: freelanceQuestions,
    profiles: freelanceProfiles,
    scoreKeys: ["P1", "P2", "P3", "P4"],
  },
  company: {
    label: "Azienda / Brand esistente",
    sublabel: "Ho già un'attività strutturata",
    questions: companyQuestions,
    profiles: companyProfiles,
    scoreKeys: ["A", "B", "C", "D"],
  },
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function BrandQuiz() {
  const [phase, setPhase] = useState<"path" | "quiz" | "result" | "contact">("path");
  const [path, setPath] = useState<PathKey | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<ScoreMap>({});
  const [qualifierTag, setQualifierTag] = useState<QualifierTag | null>(null);
  const [selectedOption, setSelectedOption] = useState<QuizOption | null>(null);
  const [answersLog, setAnswersLog] = useState<AnswerLog[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "", note: "" });
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<PathKey | null>(null);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const config = path ? pathConfig[path as PathKey] : null;
  const questions = config?.questions || [];
  const q = questions[currentQ];

  function selectPath(p: PathKey) {
    setAnimating(true);
    setTimeout(() => {
      setPath(p);
      setPhase("quiz");
      setAnimating(false);
    }, 280);
  }

  function handleSelect(opt: QuizOption) {
    setSelectedOption(opt);
  }

  function handleNext() {
    if (!selectedOption) return;
    const newScores = { ...scores };
    const newLog: AnswerLog[] = [...answersLog, { question: q.text, answer: selectedOption.label, qualifier: !!q.qualifier }];
    setAnswersLog(newLog);

    if (q.qualifier) {
      setQualifierTag(selectedOption.tag ?? null);
    } else {
      Object.entries(selectedOption.scores || {}).forEach(([k, v]) => {
        newScores[k] = (newScores[k] || 0) + v;
      });
      setScores(newScores);
    }

    if (currentQ < questions.length - 1) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentQ(currentQ + 1);
        setSelectedOption(null);
        setAnimating(false);
      }, 280);
    } else {
      const keys = config!.scoreKeys;
      const top = keys.reduce((a: string, b: string) => {
        return (newScores[b] || 0) > (newScores[a] || 0) ? b : a;
      }, keys[0]);
      setResult(top);
      setAnimating(true);
      setTimeout(() => {
        setPhase("result");
        setAnimating(false);
      }, 350);
    }
  }

  async function handleSubmit() {
    if (!formData.name || !formData.email) return;
    if (qualifierTag === "call_phone" && !formData.phone) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          path: config?.label,
          result,
          profile: profile?.label,
          contactMethod: qualifierTag ? contactMethodLabels[qualifierTag] : null,
          answers: answersLog,
        }),
      });

      if (!res.ok) throw new Error("Errore durante l'invio. Riprova.");
      setSent(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Errore sconosciuto";
      setSubmitError(message);
    } finally {
      setSubmitting(false);
    }
  }

  const profile = result && config ? config.profiles[result] : null;
  const totalQ = questions.length;
  const contactMethod = qualifierTag ? contactMethodLabels[qualifierTag as QualifierTag] : null;
  const diagnosticAnswers = answersLog.filter((a) => !a.qualifier);

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

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .fade-wrap { transition: opacity 0.28s ease, transform 0.28s ease; }
        .fade-wrap.out { opacity: 0; transform: translateY(10px); }

        .path-card {
          width: 100%;
          border: 1px solid rgba(244,239,233,0.1);
          padding: 1.5rem 1.5rem;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
          background: transparent;
          text-align: left;
        }
        .path-card:hover, .path-card.hovered {
          border-color: #d9453d;
          background: rgba(217,69,61,0.06);
        }
        .path-card .acc {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: #d9453d;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.22s ease;
        }
        .path-card:hover .acc,
        .path-card.hovered .acc { transform: scaleX(1); }

        .opt-btn {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(244,239,233,0.1);
          color: #f4efe9;
          padding: 0.95rem 1.25rem;
          text-align: left;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 300;
          line-height: 1.55;
          transition: all 0.16s ease;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          position: relative;
        }
        .opt-btn:hover { border-color: rgba(217,69,61,0.45); background: rgba(217,69,61,0.05); }
        .opt-btn.sel { border-color: #d9453d; background: rgba(217,69,61,0.09); }
        .opt-btn.sel::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: #d9453d;
        }

        .next-btn {
          background: #d9453d;
          color: #f4efe9;
          border: none;
          padding: 0.8rem 2.25rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.16s ease;
        }
        .next-btn:hover:not(:disabled) { background: #c03530; transform: translateY(-1px); }
        .next-btn:disabled { opacity: 0.22; cursor: not-allowed; }

        .ghost-btn {
          background: transparent;
          color: #d9453d;
          border: 1px solid #d9453d;
          padding: 0.8rem 2.25rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.16s ease;
          display: inline-block;
        }
        .ghost-btn:hover { background: #d9453d; color: #f4efe9; }

        .answer-row {
          padding: 0.85rem 0;
          border-bottom: 1px solid rgba(244,239,233,0.06);
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 1rem;
          align-items: baseline;
        }
        .answer-row:last-child { border-bottom: none; }

        .text-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(244,239,233,0.15);
          color: #f4efe9;
          padding: 0.65rem 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 300;
          outline: none;
          transition: border-color 0.2s;
        }
        .text-input:focus { border-bottom-color: #d9453d; }
        .text-input::placeholder { color: rgba(244,239,233,0.22); }

        .prog-bar { transition: width 0.38s cubic-bezier(0.4,0,0.2,1); }

        .field-wrap label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(244,239,233,0.3);
          display: block;
          margin-bottom: 0.5rem;
        }
      `}</style>

      {/* Top accent */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", background: "#d9453d", zIndex: 20 }} />

      {/* Logo */}
      <div style={{ position: "fixed", top: "1.4rem", left: "1.75rem", zIndex: 20, fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.22em", color: "rgba(244,239,233,0.4)", textTransform: "uppercase" }}>
        MATCH<span style={{ color: "#d9453d" }}>design</span>
      </div>

      {/* Grain */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`, pointerEvents: "none", zIndex: 0 }} />

      <div className={`fade-wrap ${animating ? "out" : ""}`} style={{ width: "100%", maxWidth: "640px", position: "relative", zIndex: 1 }}>

        {/* ── PATH SELECTION ── */}
        {phase === "path" && (
          <>
            <div style={{ marginBottom: "3rem" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.22em", color: "#d9453d", textTransform: "uppercase", fontWeight: 500, marginBottom: "1.25rem" }}>
                Diagnosi brand — MATCHdesign
              </p>
              <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.7rem, 4vw, 2.4rem)", fontWeight: 700, color: "#f4efe9", lineHeight: 1.15 }}>
                Scopri di cosa ha bisogno il tuo brand.
              </h1>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "rgba(244,239,233,0.4)", marginTop: "0.85rem", fontWeight: 300, lineHeight: 1.65 }}>
                Poche domande. Una diagnosi precisa. Nessuna email richiesta per iniziare.
              </p>
            </div>

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(244,239,233,0.25)", marginBottom: "0.875rem" }}>
              Prima di iniziare — come ti definiresti?
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {(Object.entries(pathConfig) as [PathKey, PathConfig][]).map(([key, cfg]) => (
                <button
                  key={key}
                  className={`path-card ${hoveredPath === key ? "hovered" : ""}`}
                  onMouseEnter={() => setHoveredPath(key)}
                  onMouseLeave={() => setHoveredPath(null)}
                  onClick={() => selectPath(key)}
                >
                  <div className="acc" />
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: "1.05rem", fontWeight: 700, color: "#f4efe9", marginBottom: "0.25rem" }}>
                    {cfg.label}
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", fontWeight: 300, color: "rgba(244,239,233,0.35)", lineHeight: 1.5 }}>
                    {cfg.sublabel}
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        {/* ── QUIZ ── */}
        {phase === "quiz" && q && (
          <>
            <div style={{ marginBottom: "2.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#d9453d", fontWeight: 500 }}>
                  {config!.label}
                </span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "rgba(244,239,233,0.25)" }}>
                  {currentQ + 1} / {totalQ}
                </span>
              </div>
              <div style={{ height: "1px", background: "rgba(244,239,233,0.08)" }}>
                <div className="prog-bar" style={{ height: "1px", background: "#d9453d", width: `${((currentQ + 1) / totalQ) * 100}%` }} />
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.1rem, 2.8vw, 1.4rem)", fontWeight: 700, color: "#f4efe9", lineHeight: 1.35 }}>
                {q.text}
              </p>
              {q.qualifier && (
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(244,239,233,0.25)", marginTop: "0.5rem" }}>
                  Ultima domanda
                </p>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", marginBottom: "2.5rem" }}>
              {q.options.map((opt, i) => (
                <button key={i} className={`opt-btn ${selectedOption === opt ? "sel" : ""}`} onClick={() => handleSelect(opt)}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 500, color: selectedOption === opt ? "#d9453d" : "rgba(244,239,233,0.2)", flexShrink: 0, width: "1.2rem", paddingTop: "0.05rem" }}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt.label}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="next-btn" onClick={handleNext} disabled={!selectedOption}>
                {currentQ < totalQ - 1 ? "Avanti →" : "Vedi la diagnosi →"}
              </button>
            </div>
          </>
        )}

        {/* ── RESULT ── */}
        {phase === "result" && profile && (
          <>
            <div style={{ marginBottom: "0.6rem" }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#d9453d", fontWeight: 500 }}>
                La tua diagnosi
              </span>
            </div>

            <div style={{ display: "inline-block", border: "1px solid rgba(244,239,233,0.1)", padding: "0.25rem 0.65rem", marginBottom: "1rem" }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(244,239,233,0.35)" }}>
                {profile.tag}
              </span>
            </div>

            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.2rem, 6vw, 3.2rem)", fontWeight: 700, color: "#f4efe9", lineHeight: 1.05, marginBottom: "1.75rem" }}>
              {profile.label}
            </h2>

            <div style={{ height: "1px", background: "rgba(244,239,233,0.07)", marginBottom: "1.5rem" }} />

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "rgba(244,239,233,0.7)", lineHeight: 1.8, marginBottom: "2rem" }}>
              {profile.description}
            </p>

            <button className="ghost-btn" onClick={() => setPhase("contact")}>
              {profile.cta} →
            </button>
          </>
        )}

        {/* ── CONTACT ── */}
        {phase === "contact" && (
          <>
            {sent ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div style={{ width: "44px", height: "44px", border: "1px solid #d9453d", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem", color: "#d9453d", fontSize: "1.1rem" }}>✓</div>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.9rem", fontWeight: 700, color: "#f4efe9", marginBottom: "1rem" }}>Messaggio ricevuto.</h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "rgba(244,239,233,0.4)", fontWeight: 300, lineHeight: 1.7 }}>
                  Ti rispondo entro 48 ore con una prima valutazione.
                </p>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: "2.25rem" }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#d9453d", textTransform: "uppercase", fontWeight: 500, marginBottom: "0.875rem" }}>Parliamo</p>
                  <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 700, color: "#f4efe9", lineHeight: 1.2 }}>
                    Conferma e invia la tua diagnosi.
                  </h2>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "rgba(244,239,233,0.35)", fontWeight: 300, lineHeight: 1.6, marginTop: "0.75rem" }}>
                    Le tue risposte vengono inviate insieme alla richiesta — non devi spiegare niente da capo.
                  </p>
                </div>

                <div style={{ border: "1px solid rgba(244,239,233,0.08)", marginBottom: "2rem" }}>
                  <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid rgba(244,239,233,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(217,69,61,0.06)", flexWrap: "wrap", gap: "0.5rem" }}>
                    <div>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#d9453d", display: "block", marginBottom: "0.2rem" }}>Diagnosi</span>
                      <span style={{ fontFamily: "'Fraunces', serif", fontSize: "1.05rem", color: "#f4efe9", fontWeight: 700 }}>{profile?.label}</span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", color: "rgba(244,239,233,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", display: "block" }}>{config?.label}</span>
                      {contactMethod && (
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", color: "rgba(244,239,233,0.22)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                          {contactMethod}
                        </span>
                      )}
                    </div>
                  </div>

                  <div style={{ padding: "0.25rem 1.25rem 0.5rem" }}>
                    {diagnosticAnswers.map((item, i) => (
                      <div key={i} className="answer-row">
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "rgba(244,239,233,0.3)", fontWeight: 300, lineHeight: 1.4 }}>
                          {item.question}
                        </span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "rgba(244,239,233,0.65)", fontWeight: 400, lineHeight: 1.4 }}>
                          {item.answer}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginBottom: "2.5rem" }}>
                  {([
                    { key: "name", label: "Nome *", placeholder: "Il tuo nome", type: "text" },
                    { key: "email", label: "Email *", placeholder: "La tua email", type: "email" },
                  ] as { key: keyof FormData; label: string; placeholder: string; type: string }[]).map(f => (
                    <div key={f.key} className="field-wrap">
                      <label>{f.label}</label>
                      <input
                        className="text-input"
                        type={f.type}
                        placeholder={f.placeholder}
                        value={formData[f.key]}
                        onChange={e => setFormData({ ...formData, [f.key]: e.target.value })}
                      />
                    </div>
                  ))}
                  {(qualifierTag === "call_phone" || qualifierTag === "message") && (
                    <div className="field-wrap">
                      <label>
                        Numero di telefono{qualifierTag === "call_phone" ? " *" : " (opzionale)"}
                      </label>
                      <input
                        className="text-input"
                        type="tel"
                        placeholder={qualifierTag === "call_phone" ? "Il tuo numero" : "Il tuo numero — per WhatsApp o simili"}
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  )}
                  <div className="field-wrap">
                    <label>Vuoi aggiungere qualcosa? (opzionale)</label>
                    <textarea
                      className="text-input"
                      rows={3}
                      placeholder="Contesto extra, urgenza, domande specifiche…"
                      value={formData.note}
                      onChange={e => setFormData({ ...formData, note: e.target.value })}
                      style={{ resize: "none" }}
                    />
                  </div>
                </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "1rem" }}>
                <input
                  type="checkbox"
                  id="privacy"
                  checked={privacyAccepted}
                  onChange={e => setPrivacyAccepted(e.target.checked)}
                  style={{ marginTop: "0.15rem", accentColor: "#d9453d", cursor: "pointer" }}
                />
                <label htmlFor="privacy" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "rgba(244,239,233,0.4)", lineHeight: 1.6, cursor: "pointer" }}>
                  Ho letto e accetto la <a href="https://www.iubenda.com/privacy-policy/18476717" target="_blank" rel="noopener noreferrer" style={{ color: "#d9453d", textDecoration: "none" }}>Privacy Policy</a>. Acconsento al trattamento dei miei dati per ricevere una risposta.
                </label>
              </div>
                {submitError && (
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#d9453d", marginBottom: "1rem", textAlign: "right" }}>
                    {submitError}
                  </p>
                )}

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button
                    className="next-btn"
                    onClick={handleSubmit}
                    disabled={submitting || !formData.name || !formData.email || (qualifierTag === "call_phone" && !formData.phone) || !privacyAccepted}
                  >
                    {submitting ? "Invio in corso…" : "Invia richiesta →"}
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>

        {/* Footer legal */}
        <div style={{ position: "fixed", bottom: "1.25rem", left: 0, right: 0, display: "flex", justifyContent: "center", gap: "1.5rem", zIndex: 10 }}>
        <a href="https://www.iubenda.com/privacy-policy/18476717" className="iubenda-white iubenda-noiframe iubenda-embed" title="Privacy Policy" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(244,239,233,0.25)", textDecoration: "none" }}>Privacy Policy</a>
        <a href="https://www.iubenda.com/privacy-policy/18476717/cookie-policy" className="iubenda-white iubenda-noiframe iubenda-embed" title="Cookie Policy" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(244,239,233,0.25)", textDecoration: "none" }}>Cookie Policy</a>
      </div>
    </div>
  );
}