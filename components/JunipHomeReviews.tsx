"use client";

import { useEffect, useState } from "react";

export default function JunipHomeReviews() {
  const [error, setError] = useState(false);

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 10;

    const initJunip = () => {
      
      if (window.Junip && typeof window.Junip.init === 'function') {
      
        window.Junip.init();
        console.log("Junip Initialized successfully");
      } else if (retryCount < maxRetries) {
        retryCount++;
        setTimeout(initJunip, 1000); // Try again in 1 second
      } else {
        setError(true);
        console.error("Junip failed to load after 10 seconds.");
      }
    };

    initJunip();
  }, []);

  return (
    <section className="reviews" style={{ padding: "80px 0", backgroundColor: "#fff" }}>
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-title">
          <div className="sub-title">
            <img
              src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870de521dcfdb3c101ba086_sub-title.svg"
              loading="lazy"
              alt="Sub Title Icon"
            />
            <div>Testimonials</div>
          </div>
          <h2 className="section-heading">Store Reviews</h2>
        </div>

        {/* 1. Required: Hidden Store Key for Global Widget */}
        <span 
          className="junip-store-key"
          data-store-key={process.env.NEXT_PUBLIC_JUNIP_STORE_KEY}
        ></span>

        {/* 2. Standard Global Store Reviews Container */}
        <div className="junip-store-review"></div>

        {error && (
          <p style={{ textAlign: 'center', color: '#888', fontSize: '12px' }}>
            Unable to connect to reviews. Please refresh.
          </p>
        )}
        
        <style jsx global>{`
          .junip-store-review {
            min-height: 400px;
            width: 100%;
          }
          /* Custom styling to ensure widget visibility */
          .junip-store-review:empty::before {
            content: "Fetching your latest reviews...";
            font-size: 14px;
            color: #aaa;
            display: block;
            text-align: center;
            padding-top: 50px;
          }
        `}</style>
      </div>
    </section>
  );
}