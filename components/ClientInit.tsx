"use client";

import { useEffect } from "react";
import { checkAndClearCache } from "@/lib/clearCache";

export default function ClientInit() {
  useEffect(() => {
    // ✅ Cache clear
    checkAndClearCache();

    // ✅ Junip init — runs after script loads
  const initJunip = () => {
      if (typeof window !== "undefined" && window.Junip) {
        const junip = window.Junip as any; // ✅ bypasses TypeScript strict check
        if (typeof junip.init === "function") junip.init();
        if (typeof junip.load === "function") junip.load();
      }
    };

    // Run immediately in case script already loaded
    initJunip();

    // ✅ Also retry after delay for slow connections
    const t1 = setTimeout(initJunip, 500);
    const t2 = setTimeout(initJunip, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return null;
}