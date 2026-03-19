"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  description: string;
}

interface ClinicalStatsProps {
  headingNormal?: string;
  headingItalic?: string;
  bodyText?: string;
  stats?: Stat[];
}

function useCountUp(target: string, triggered: boolean) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!triggered) return;

    const match = target.match(/^([+\-]?)(\d+\.?\d*)(%?)$/);
    if (!match) {
      setDisplay(target);
      return;
    }

    const prefix = match[1];
    const end = parseFloat(match[2]);
    const suffix = match[3];
    const duration = 1600;
    const steps = 60;
    let current = 0;

    const timer = setInterval(() => {
      current += end / steps;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      const formatted = Number.isInteger(end)
        ? Math.round(current).toString()
        : current.toFixed(1);
      setDisplay(`${prefix}${formatted}${suffix}`);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [triggered, target]);

  return display;
}

function StatItem({
  value,
  description,
  triggered,
}: Stat & { triggered: boolean }) {
  const display = useCountUp(value, triggered);
  return (
    <div className="cs-stat">
      <div className="cs-stat-value">{display}</div>
      <div className="cs-stat-desc">{description}</div>
    </div>
  );
}

export default function ClinicalStats({
  headingNormal = "Clinically",
  headingItalic = "proven results",
  bodyText = "Results from instrumental and application tests obtained with regular product use.",
  stats = [],
}: ClinicalStatsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Don't render section if no stats were provided from Shopify
  if (!stats || stats.length === 0) return null;

  return (
    <>
      <style>{`
        .cs-section {
          background: #e8edf2;
          padding: 80px 40px;
          font-family: 'Georgia', serif;
        }
        .cs-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .cs-heading {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 400;
          line-height: 1.15;
          color: #1a1a1a;
          margin: 0 0 20px 0;
          letter-spacing: -0.5px;
        }
        .cs-heading em {
          font-style: italic;
          font-weight: 400;
        }
        .cs-body {
          font-family: 'Helvetica Neue', Helvetica, sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: #555;
          max-width: 360px;
          margin: 0;
        }
        .cs-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px 32px;
        }
        .cs-stat-value {
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 400;
          color: #1a1a1a;
          letter-spacing: -1px;
          margin-bottom: 8px;
          font-family: 'Courier New', Courier, monospace;
        }
        .cs-stat-desc {
          font-family: 'Helvetica Neue', Helvetica, sans-serif;
          font-size: 13px;
          line-height: 1.5;
          color: #666;
          max-width: 180px;
        }
        @media (max-width: 768px) {
          .cs-section { padding: 60px 24px; }
          .cs-inner { grid-template-columns: 1fr; gap: 40px; }
          .cs-body { max-width: 100%; }
          .cs-stats-grid { gap: 32px 24px; }
          .cs-stat-desc { max-width: 100%; }
        }
        @media (max-width: 400px) {
          .cs-stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="cs-section" ref={sectionRef}>
        <div className="cs-inner">
          <div className="cs-left">
            <h2 className="cs-heading">
              {headingNormal}
              <br />
              <em>{headingItalic}</em>
            </h2>
            <p className="cs-body">{bodyText}</p>
          </div>
          <div className="cs-stats-grid">
            {stats.map((stat, i) => (
              <StatItem
                key={i}
                value={stat.value}
                description={stat.description}
                triggered={triggered}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}