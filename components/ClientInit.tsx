"use client";

import { useEffect } from "react";
import { checkAndClearCache } from "@/lib/clearCache";

export default function ClientInit() {
  useEffect(() => {
    checkAndClearCache();
  }, []);

  return null;
}