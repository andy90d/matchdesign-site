// ===== MIDDLEWARE: gestione lingua nell'URL =====
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

// Esclude api, file interni di Next.js e qualsiasi file con estensione
// (robots.txt, sitemap.xml, icon.svg, immagini, ecc.)
export const config = {
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};