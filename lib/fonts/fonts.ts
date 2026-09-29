import { Unbounded, DM_Sans, Space_Mono } from "next/font/google";

export const UnboundedBlack = Unbounded({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-unbounded-black",
  display: "swap",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});