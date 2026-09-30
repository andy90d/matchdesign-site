import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MATCHdesign",
  description:
    "Costruiamo il sistema che protegge la coerenza del tuo brand nel tempo.",
};




export default function Home() {
  return (
    <div className="home-page">
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
    </div>
  );
}