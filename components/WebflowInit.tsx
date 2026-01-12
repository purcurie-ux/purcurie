"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function WebflowInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const Webflow = (window as any).Webflow;
    if (!Webflow) return;

    // Reset & re-init Webflow interactions
    Webflow.destroy();
    Webflow.ready();
    Webflow.require("ix2")?.init();

    // Needed for some Webflow components
    document.dispatchEvent(new Event("readystatechange"));
  }, [pathname]);

  return null;
}
