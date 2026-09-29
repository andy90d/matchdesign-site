import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MATCHdesign",
  description:
    "Costruiamo il sistema che protegge la coerenza del tuo brand nel tempo.",
};



export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-black [font-family:var(--font-unbounded)]">
        Test Font Google Unbounded
      </h1>
    </main>
  );
}