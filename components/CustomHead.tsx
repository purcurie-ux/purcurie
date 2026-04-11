"use client";

import Script from "next/script";

interface GlamzHeadProps {
  cssUrl?: string;
}

export default function GlamzHead({
  cssUrl = "https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/css/glamz-template.webflow.shared.2b171c674.min.css",
}: GlamzHeadProps) {
  return (
    <>
      <meta name="generator" content="Webflow" />

      <link rel="preconnect" href="https://cdn.prod.website-files.com" />
      <link rel="dns-prefetch" href="https://cdn.prod.website-files.com" />

      {/* Glamz CSS (Optimized) */}
      <link
        rel="preload"
        href={cssUrl}
        as="style"
      />
      <link rel="stylesheet" href={cssUrl} />

      {/* Touch Detection Script */}
      <Script id="modernizr-touch" strategy="beforeInteractive">
        {`
          !(function (o, c) {
            var n = c.documentElement,
              t = " w-mod-";
            (n.className += t + "js"),
              ("ontouchstart" in o ||
                (o.DocumentTouch && c instanceof DocumentTouch)) &&
                (n.className += t + "touch");
          })(window, document);
        `}
      </Script>

      {/* Webflow Currency Settings */}
      <Script id="webflow-currency" strategy="beforeInteractive">
        {`
          window.__WEBFLOW_CURRENCY_SETTINGS = {
            currencyCode: "USD",
            symbol: "$",
            decimal: ".",
            fractionDigits: 2,
            group: ",",
            template:
              '{{wf {"path":"symbol","type":"PlainText"} }} {{wf {"path":"amount","type":"CommercePrice"} }} {{wf {"path":"currencyCode","type":"PlainText"} }}',
            hideDecimalForWholeNumbers: false,
          };
        `}
      </Script>
    </>
  );
}