"use client";

import { useState, useEffect } from "react";
import { IubendaLinks } from "@/components/legal/Iubenda";

export default function SafeIubendaLinks() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div style={{ minHeight: "24px" }} />; // Segnaposto vuoto durante il server-side
  }

  return <IubendaLinks />;
}