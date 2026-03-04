"use client";

import { useEffect } from "react";

export default function ProductReviews({ productId }: { productId: string }) {
  
  // Strip "gid://shopify/Product/10200656216386" → "10200656216386"
  const numericId = productId.split("/").pop();

  useEffect(() => {
    const initJunip = () => {
      if ((window as any).Junip) {
        (window as any).Junip.init();
      }
    };

    if ((window as any).Junip) {
      initJunip();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.junip.co/embed/junip.js";
    script.async = true;
    script.setAttribute("data-store-key", process.env.NEXT_PUBLIC_JUNIP_STORE_KEY);
    script.onload = () => {
      setTimeout(initJunip, 100);
    };
    document.head.appendChild(script);

  }, [productId]);

  return (
    <div style={{ marginTop: "40px", borderTop: "1px solid #e5e7eb", paddingTop: "32px" }}>
      <div
        className="junip-product-review"
        data-product-id={numericId}
      />
      <div
        className="junip-store-key"
        data-store-key={process.env.NEXT_PUBLIC_JUNIP_STORE_KEY}
      />
    </div>
  );
}