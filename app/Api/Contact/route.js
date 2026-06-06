import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = 'info.match.design@gmail.com'

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, note, path, diagnosis, contactMethod, answers } = body;

    if (!name || !email) {
      return Response.json({ error: "Nome e email sono obbligatori." }, { status: 400 });
    }

    const answersHtml = answers
      ?.map(
        ({ question, answer }) => `
        <tr>
          <td style="padding:8px 12px;color:#888;font-size:13px;vertical-align:top;width:45%">${question}</td>
          <td style="padding:8px 12px;color:#f4efe9;font-size:13px;vertical-align:top">${answer}</td>
        </tr>`
      )
      .join("") ?? "";

    const html = `
      <div style="background:#1e1e1e;padding:40px 32px;font-family:'DM Sans',sans-serif;max-width:600px;margin:0 auto">
        <p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#d9453d;margin:0 0 8px">
          MATCHdesign — Nuova richiesta
        </p>
        <h1 style="font-size:24px;color:#f4efe9;margin:0 0 4px;font-weight:700">${name}</h1>
        <p style="font-size:13px;color:#888;margin:0 0 32px">${email}${phone ? ` · ${phone}` : ""}</p>

        <table style="width:100%;border-collapse:collapse;margin-bottom:32px">
          <tr style="background:rgba(217,69,61,0.08);border-bottom:1px solid rgba(244,239,233,0.08)">
            <td style="padding:10px 12px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#d9453d">Diagnosi</td>
            <td style="padding:10px 12px;font-size:14px;color:#f4efe9;font-weight:700">${diagnosis}</td>
          </tr>
          <tr style="border-bottom:1px solid rgba(244,239,233,0.06)">
            <td style="padding:8px 12px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#555">Percorso</td>
            <td style="padding:8px 12px;font-size:13px;color:#aaa">${path}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#555">Contatto preferito</td>
            <td style="padding:8px 12px;font-size:13px;color:#aaa">${contactMethod ?? "—"}</td>
          </tr>
        </table>

        <p style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#555;margin:0 0 8px">Risposte</p>
        <table style="width:100%;border-collapse:collapse;border:1px solid rgba(244,239,233,0.08)">
          ${answersHtml}
        </table>

        ${note ? `
        <div style="margin-top:32px;border-left:2px solid #d9453d;padding-left:16px">
          <p style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#555;margin:0 0 6px">Nota</p>
          <p style="font-size:14px;color:rgba(244,239,233,0.7);line-height:1.6;margin:0">${note}</p>
        </div>` : ""}
      </div>
    `;

    await resend.emails.send({
      from: "MATCHdesign Quiz <quiz@yourdomain.com>",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[MATCHdesign] ${diagnosis} — ${name}`,
      html,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ error: "Errore interno. Riprova più tardi." }, { status: 500 });
  }
}