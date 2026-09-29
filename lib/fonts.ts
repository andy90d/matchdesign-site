import { DM_Sans, Space_Mono } from "next/font/google";
import localFont from "next/font/local";

export const BoundedBlack = localFont({
  src: [
    {
      path: "./BOUNDED-BLACK.TTF",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bounded-black",
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