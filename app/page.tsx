import { unbounded } from "@/lib/fonts/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MATCHdesign",
  description:
    "Costruiamo il sistema che protegge la coerenza del tuo brand nel tempo.",
};




export default function Home() {
  return (
    <main className="p-8">
      {/* Iniettiamo direttamente la classe generata da next/font */}
      <h1 className={`${unbounded.className} text-4xl font-black`}>
        Test Font Google Unbounded
      </h1>
    </main>
  );
}