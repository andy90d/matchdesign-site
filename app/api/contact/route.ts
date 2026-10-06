// ============================================
// IMPORT
// ============================================
import { Resend } from "resend";


// ============================================
// CONFIGURAZIONE (destinatario, mittente, limiti)
// ============================================
const CONTACT_EMAIL = "info.match.design@gmail.com";
const FROM_EMAIL = "MATCHdesign <sito@matchdesign.eu>";
const LIMITS = { name: 100, email: 200, message: 4000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// ============================================
// FUNZIONE DI SUPPORTO (pulizia dei testi)
// ============================================
function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}


// ============================================
// ROUTE POST (riceve il form e invia l'email)
// ============================================
export async function POST(request: Request) {

  // --- Chiave Resend (letta qui, non a livello di modulo) ---
  const apiKey = process.env.match_design_site_ContactForm || process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Servizio non configurato." }, { status: 500 });
  }

  // --- Lettura dei dati ricevuti ---
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return Response.json({ error: "Richiesta non valida." }, { status: 400 });
  }
  const data = body as Record<string, unknown>;

  // --- Campo trappola per i bot: se è compilato, si finge successo ---
  if (clean(data.website)) {
    return Response.json({ success: true });
  }

  // --- Validazione ---
  const name = clean(data.name);
  const email = clean(data.email);
  const message = clean(data.message);

  if (!name || !email || !message) {
    return Response.json({ error: "Compila tutti i campi." }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return Response.json({ error: "Indirizzo email non valido." }, { status: 400 });
  }
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return Response.json({ error: "Uno dei campi è troppo lungo." }, { status: 400 });
  }
  if (data.consent !== true) {
    return Response.json(
      { error: "Conferma di aver letto l'informativa privacy." },
      { status: 400 }
    );
  }

  // --- Invio dell'email ---
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: CONTACT_EMAIL,
    reply_to: email,
    subject: `[MATCHdesign] Nuovo messaggio da ${name.replace(/[\r\n]+/g, " ")}`,
    text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Errore invio email:", error);
    return Response.json(
      { error: "Invio non riuscito. Riprova più tardi." },
      { status: 500 }
    );
  }

  return Response.json({ success: true });
}