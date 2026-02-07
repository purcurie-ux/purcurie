// components/ui/ScrollTrigger.tsx
'use client';

import { useEffect } from 'react';

export default function ScrollTrigger() {
  useEffect(() => {
    // Your friend's approach: Create invisible element with small margin
    // This tricks the browser into thinking there's scrollable content
    const triggerDiv = document.createElement('div');
    triggerDiv.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 1px;
      height: calc(100vh + 2px);
      margin-top: 1px;
      pointer-events: none;
      visibility: hidden;
      opacity: 0;
    `;
    
    // Add to body
    document.body.appendChild(triggerDiv);

    // Also force initial scroll
    setTimeout(() => {
      window.scrollTo(0, 1);
      setTimeout(() => window.scrollTo(0, 0), 5);
      window.dispatchEvent(new Event('scroll'));
    }, 100);

    // Cleanup function
    return () => {
      if (document.body.contains(triggerDiv)) {
        document.body.removeChild(triggerDiv);
      }
    };
  }, []);

  return null;
}
