"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    // Reset loader on every route change
    setVisible(true);
    setSlideUp(false);

    // After a brief moment, trigger slide-up
    const slideTimer = setTimeout(() => {
      setSlideUp(true);
    }, 400); // logo visible for 900ms

    // After slide-up animation completes, hide fully
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 600); // 900ms hold + 600ms slide

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <>
      <style>{`
        .pl-overlay {
          position: fixed;
          inset: 0;
          background: #1d2c34;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(0);
          transition: transform 0.35s cubic-bezier(0.76, 0, 0.24, 1);
          pointer-events: all;
        }

        .pl-overlay.slide-up {
          transform: translateY(-100%);
        }

        .pl-logo {
          width: clamp(160px, 30vw, 320px);
          opacity: 0;
          transform: translateY(12px);
          animation: pl-fadein 0.5s ease forwards;
          animation-delay: 0.1s;
        }

        @keyframes pl-fadein {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className={`pl-overlay${slideUp ? " slide-up" : ""}`}>
        <img
          src="/logoload.svg"
          alt="Purcurie"
          className="pl-logo"
        />
      </div>
    </>
  );
}