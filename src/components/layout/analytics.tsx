"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const STORAGE_KEY = "bw-cookie-consent";

export function ConsentAnalytics() {
  const [allowed, setAllowed] = useState(false);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (!gaId) return;
    const check = () => {
      const v = localStorage.getItem(STORAGE_KEY);
      setAllowed(v === "all");
    };
    check();
    const handler = () => check();
    window.addEventListener("storage", handler);
    window.addEventListener("bw-consent", handler as EventListener);
    return () => {
      window.removeEventListener("storage", handler);
      window.removeEventListener("bw-consent", handler as EventListener);
    };
  }, [gaId]);

  if (!gaId || !allowed) return null;
  return <GoogleAnalytics gaId={gaId} />;
}
