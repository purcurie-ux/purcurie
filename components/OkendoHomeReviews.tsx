"use client";

import { useEffect } from "react";

export default function OkendoHomeReviews() {
  useEffect(() => {
    // Manually trigger Okendo to scan the DOM for the new widget
    // @ts-ignore
    if (window.okeReviewsWidget && typeof window.okeReviewsWidget.init === 'function') {
      // @ts-ignore
      window.okeReviewsWidget.init();
    }
  }, []);

  return (
    <section className="reviews" style={{ padding: "80px 0" }}>
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-title">
          <div className="sub-title">
            <img src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870de521dcfdb3c101ba086_sub-title.svg" alt="Icon" />
            <div>Customer Stories</div>
          </div>
          <h2 className="section-heading">PurCurie Reviews</h2>
        </div>

        {/* This div tells Okendo to inject the Store-wide reviews here */}
        <div 
          className="okeReviews-widget-holder" 
          data-oke-reviews-subscriber-id={process.env.NEXT_PUBLIC_OKENDO_SUBSCRIBER_ID}
        ></div>
      </div>
    </section>
  );
}