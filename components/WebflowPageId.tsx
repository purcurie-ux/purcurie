// components/WebflowPageId.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const PAGE_IDS: Record<string, string> = {
  "/": "686f439ee34b78f814ae2df2",
  "/about": "68748fe57d199e1c9924253e",
};

export default function WebflowPageId() {
  const pathname = usePathname();

  useEffect(() => {
    const pageId = PAGE_IDS[pathname];
    if (!pageId) return;

    document.documentElement.setAttribute("data-wf-page", pageId);

    const Webflow = (window as any).Webflow;
    if (Webflow) {
      Webflow.destroy();
      Webflow.ready();
      Webflow.require("ix2")?.init();
    }
  }, [pathname]);

  return null;
}
