"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function WebflowInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ✅ Only run Webflow on important pages
    const allowedPages = ["/", "/products", "/contact", "/categories"];

    if (!allowedPages.includes(pathname)) return;

    const Webflow = (window as any).Webflow;
    if (!Webflow) return;

    Webflow.destroy();
    Webflow.ready();
    Webflow.require("ix2")?.init();

    document.dispatchEvent(new Event("readystatechange"));

    setTimeout(() => {
      window.dispatchEvent(new Event("scroll"));
      window.dispatchEvent(new Event("resize"));

      if (Webflow.require("ix2")) {
        Webflow.require("ix2").store.dispatch({ type: "IX2_PAGE_UPDATE" });
      }
    }, 100);

  }, [pathname]);

  return null;
}