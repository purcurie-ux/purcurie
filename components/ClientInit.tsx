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
        if (typeof window.Junip.init === "function") window.Junip.init();
        if (typeof window.Junip.load === "function") window.Junip.load();
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