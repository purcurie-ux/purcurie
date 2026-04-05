"use client";
import Link from "next/link";
import Image from "next/image";

interface Ingredient {
  image: { url: string; alt?: string };
  name: string;
  description: string;
}

interface KeyIngredientsProps {
  label?: string;           // e.g. "KEY INGREDIENTS"
  keywords?: string[];      // e.g. ["Hydration", "Protection", "Antioxidation"] — 3 italic words
  ingredients?: Ingredient[];
  buttonText?: string;
  buttonLink?: string;
}

export default function KeyIngredients({
  label = "KEY INGREDIENTS",
  keywords = ["Hydration", "Protection", "Antioxidation"],
  ingredients = [],
  buttonText = "VIEW ALL INGREDIENTS",
  buttonLink = "#",
}: KeyIngredientsProps) {
  if (ingredients.length === 0) return null;

  return (
    <>
      <style>{`
        .ki-section {
          background: #ffff;
          padding: 80px 80px;
        }

        .ki-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 60px;
          align-items: center;
        }

        /* LEFT */
        .ki-left {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .ki-label {
          font-family: 'Helvetica Neue', Helvetica, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2px;
          color: #888;
          text-transform: uppercase;
          margin: 0 0 24px 0;
        }

        .ki-keywords {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 40px;
        }

        .ki-keyword {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-style: italic;
          font-size: clamp(28px, 3vw, 38px);
          font-weight: 400;
          color: #1a1a1a;
          line-height: 1.3;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* Every other keyword gets the dash */
        .ki-keyword.has-dash::before {
          content: "—";
          font-style: normal;
          font-size: 20px;
          color: #1a1a1a;
          flex-shrink: 0;
        }

        .ki-button {
          display: inline-block;
          padding: 14px 28px;
          border: 1.5px solid #1a1a1a;
          background: transparent;
          font-family: 'Helvetica Neue', Helvetica, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #1a1a1a;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
          align-self: flex-start;
        }

        .ki-button:hover {
          background: #1a1a1a;
          color: #f2ede6;
        }

        /* RIGHT — ingredient columns */
        .ki-ingredients {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 40px 32px;
          align-items: start;
        }

        .ki-ingredient {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .ki-ingredient-img {
          width: 72px;
          height: 72px;
          object-fit: contain;
          margin-bottom: 20px;
        }

        .ki-ingredient-name {
          font-family: 'Helvetica Neue', Helvetica, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #1a1a1a;
          margin: 0 0 12px 0;
        }

        .ki-ingredient-desc {
          font-family: 'Helvetica Neue', Helvetica, sans-serif;
          font-size: 13px;
          line-height: 1.65;
          color: #555;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .ki-section {
            padding: 60px 24px;
          }
          .ki-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .ki-ingredients {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 32px 24px;
          }
        }
      `}</style>

      <section className="ki-section">
        <div className="ki-inner">

          {/* LEFT */}
          <div className="ki-left">
            <p className="ki-label">{label}</p>

            <div className="ki-keywords">
              {keywords.map((word, i) => (
                <span
                  key={i}
                  className={`ki-keyword${i === 1 ? " has-dash" : ""}`}
                >
                  {word}
                </span>
              ))}
            </div>

            <button
            className="ki-button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-accordion", { detail: "how" }))}
            >
            {buttonText}
            </button>
            </div>

        {/* RIGHT */}
<div className="ki-ingredients">
  {ingredients.map((ing, i) => (
    <div key={i} className="ki-ingredient">
      <Image
        src={ing.image.url}
        alt={ing.image.alt || ing.name}
        width={120}
        height={120}
        sizes="120px"
        className="ki-ingredient-img"
      />
      <p className="ki-ingredient-name">{ing.name}</p>
      <p className="ki-ingredient-desc">{ing.description}</p>
    </div>
  ))}
</div>

        </div>
      </section>
    </>
  );
}