import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MATCHdesign",
  description:
    "Costruiamo il sistema che protegge la coerenza del tuo brand nel tempo.",
};




export default function Home() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>Welcome to the About Us page!</p>
    </div>
  );
}