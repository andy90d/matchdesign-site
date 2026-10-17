"use client";

// ============================================
// IMPORT
// ============================================
import { useState } from "react";
import Button from "@/components/button/button";
import styles from "./contact-form.module.css";


// ============================================
// CONFIGURAZIONE (link all'informativa privacy)
// ============================================
const PRIVACY_URL = "#"; // sostituisci con l'indirizzo della privacy policy Iubenda


// ============================================
// FORM DI CONTATTO
// ============================================
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // --- Invio del form ---
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
          website: data.get("website"),
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Invio non riuscito.");

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Invio non riuscito.");
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      {/* --- Campo nome --- */}
      <div className={styles.field}>
        <label htmlFor="name">Nome</label>
        <input id="name" name="name" type="text" autoComplete="name" maxLength={100} required />
      </div>

      {/* --- Campo email --- */}
      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" maxLength={200} required />
      </div>

      {/* --- Campo messaggio --- */}
      <div className={styles.field}>
        <label htmlFor="message">Messaggio</label>
        <textarea id="message" name="message" rows={6} maxLength={4000} required />
      </div>

      {/* --- Campo trappola per i bot (invisibile agli utenti) --- */}
      <div className={styles.trap} aria-hidden="true">
        <label htmlFor="website">Non compilare questo campo</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* --- Conferma lettura informativa privacy --- */}
      <div className={styles.consent}>
        <input id="consent" name="consent" type="checkbox" required />
        <label htmlFor="consent">
          Ho letto l&apos;<a href={"https://www.iubenda.com/privacy-policy/18476717"}>informativa privacy</a>
        </label>
      </div>

      {/* --- Pulsante di invio --- */}
      <div>
        <Button type="submit">
          {status === "sending" ? "Invio in corso..." : "Invia messaggio"}
        </Button>
      </div>

      {/* --- Messaggi di esito (letti dagli screen reader) --- */}
      {status === "success" && (
        <p role="status" className={styles.success}>
          Messaggio inviato. Ti risponderemo il prima possibile.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className={styles.error}>
          {errorMessage}
        </p>
      )}

    </form>
  );
}