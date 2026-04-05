"use client";
 import Image from "next/image";

interface ProductFeaturesSplitProps {
  heading?: string;       // Large italic serif heading
  body?: string;          // Small paragraph below heading
  features?: string[];    // 3 italic feature lines
  image?: { url: string; alt?: string };
}

export default function ProductFeaturesSplit({
  heading = "High protection against UVA, UVB, IR and HEV",
  body = "",
  features = [],
  image,
}: ProductFeaturesSplitProps) {
  if (!heading && !image) return null;

  return (
    <>
      <style>{`
        .pfs-section {
          background: #e8edf2;
          overflow: hidden;
        }

        .pfs-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          min-height: 600px;
        }

        /* LEFT */
        .pfs-left {
          padding: 80px 60px 80px 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .pfs-heading {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-style: italic;
          font-size: clamp(26px, 3vw, 42px);
          font-weight: 400;
          line-height: 1.15;
          color: #1a1a1a;
          letter-spacing: -0.3px;
          margin: 0 0 28px 0;
          max-width: 480px;
        }

        .pfs-body {
          font-family: 'Helvetica Neue', Helvetica, sans-serif;
          font-size: 14px;
          line-height: 1.75;
          color: #555;
          margin: 0 0 48px 0;
          max-width: 400px;
          text-align: center;
        }

        .pfs-features {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .pfs-feature {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-style: italic;
          font-size: clamp(20px, 2.2vw, 30px);
          font-weight: 400;
          color: #b0a898;
          line-height: 1.4;
        }

        /* RIGHT — flush image, no padding */
        .pfs-right {
          position: relative;
          height: 100%;
          min-height: 600px;
        }

        .pfs-image {
          width: 100%;
          height: 100%;
          min-height: 600px;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .pfs-inner {
            grid-template-columns: 1fr;
            min-height: unset;
          }
          .pfs-right {
            order: -1;
            min-height: 420px;
          }
          .pfs-image {
            min-height: 420px;
          }
          .pfs-left {
            padding: 52px 24px;
          }
          .pfs-heading {
            max-width: 100%;
          }
          .pfs-body {
            max-width: 100%;
          }
        }
      `}</style>

      <section className="pfs-section">
        <div className="pfs-inner">

          {/* LEFT */}
          <div className="pfs-left">
            <h2 className="pfs-heading">{heading}</h2>

            {body && <p className="pfs-body">{body}</p>}

            {features.length > 0 && (
              <div className="pfs-features">
                {features.map((f, i) => (
                  <span key={i} className="pfs-feature">{f}</span>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT */}
          {image && (
            <div className="pfs-right">
             <Image
            src={image.url}
            alt={image.alt || heading}
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, 500px"
            className="pfs-image"
          />
            </div>
          )}

        </div>
      </section>
    </>
  );
}