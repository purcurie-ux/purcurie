"use client";

import Script from "next/script";

interface BodyScriptsProps {
  jqueryUrl?: string;
  webflowUrl?: string;
}

export default function BodyScripts() {
  return (
    <>
      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=686f439ee34b78f814ae2de2"
        type="text/javascript"
        // integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        
      ></script>
      <script
        src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/js/webflow.schunk.74913c4b4b4ccfa6.js"
        type="text/javascript"
      ></script>
      <script
        src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/js/webflow.schunk.b3e18e1a6e478bb6.js"
        type="text/javascript"
      ></script>
      <script
        src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/js/webflow.8a267672.347e9cb06ba68506.js"
        type="text/javascript"
      ></script>
    </>
  );
}
