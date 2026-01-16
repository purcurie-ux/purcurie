"use client";

import Script from "next/script";

interface GlamzHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  twitterImage?: string;
  faviconSmall?: string;
  faviconLarge?: string;
  cssUrl?: string;
}

export default function GlamzHead({
  title = "PurCurie",
  description = "Pure Care For Skin",
  ogImage = "https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f99f37ed0ca3467964e3a_og-image.webp",
  twitterImage = "https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f99f37ed0ca3467964e3a_og-image.webp",
  faviconSmall = "https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f99e437b3c6dbe2d349ac_favicon-small.jpg",
  faviconLarge = "https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f99e65721d3c404cb7f34_favicon-big.jpg",
  cssUrl = "https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/css/glamz-template.webflow.shared.2b171c674.min.css",
}: GlamzHeadProps) {
  return (
    <>
      {/* Meta Tags */}
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="generator" content="Webflow" />

      {/* OG */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={twitterImage} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Glamz CSS */}
      {/* <link rel="stylesheet" href={cssUrl} /> */}

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

      {/* Favicons */}
      <link rel="shortcut icon" href={faviconSmall} type="image/x-icon" />
      <link rel="apple-touch-icon" href={faviconLarge} />

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
