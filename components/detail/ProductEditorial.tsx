"use client";

import Image from "next/image";

interface EditorialImage {
  url: string;
  alt?: string;
}

interface ProductEditorialProps {
  mainImage?: EditorialImage;
  heading?: string;
  paragraphs?: string[]; // array of paragraph strings, supports basic **bold** markdown
  secondaryImages?: EditorialImage[]; // 2 images for the bottom-right stack
}

// Renders **bold** text inline
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function ProductEditorial({
  mainImage,
  heading = "Your skin remembers every day without SPF",
  paragraphs = [],
  secondaryImages = [],
}: ProductEditorialProps) {
  if (!mainImage && paragraphs.length === 0) return null;

  return (
    <>
      <style>{`
        .pe-section {
          background: #fff;
          padding: 0 0 80px 0;
          overflow: hidden;
        }

        .pe-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: start;
        }

        /* LEFT — tall image */
        .pe-left {
          position: relative;
        }

        .pe-main-image {
          width: 100%;
          height: 680px;
          object-fit: cover;
          object-position: center top;
          display: block;
          
        }

        /* RIGHT — text + stacked images */
        .pe-right {
          padding: 80px 60px 0 60px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .pe-heading {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: clamp(28px, 3.5vw, 46px);
          font-weight: 400;
          line-height: 1.1;
          color: #1a1a1a;
          letter-spacing: -0.5px;
          margin: 0 0 32px 0;
          max-width: 480px;
        }

        .pe-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 48px;
          max-width: 440px;
        }

        .pe-paragraph {
          font-family: 'Helvetica Neue', Helvetica, sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: #444;
          margin: 0;
          text-align: center;
        }

        .pe-paragraph strong {
          font-weight: 700;
          color: #1a1a1a;
        }

        /* Secondary image stack — bottom right */
        .pe-images-stack {
          position: relative;
          height: 320px;
          align-self: flex-end;
          width: 100%;
        }

        .pe-img-back {
          position: absolute;
          top: 0;
          right: 0;
          width: 72%;
          height: 260px;
          object-fit: cover;
          display: block;
        }

        .pe-img-front {
          position: absolute;
          bottom: 0;
          right: 42%;
          width: 45%;
          height: 200px;
          object-fit: cover;
          display: block;
          z-index: 2;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .pe-inner {
            grid-template-columns: 1fr;
          }
          .pe-main-image {
            height: 420px;
            object-position: center 20%;
          }
          .pe-right {
            padding: 48px 24px 0 24px;
          }
          .pe-paragraphs {
            max-width: 100%;
          }
          .pe-heading {
            max-width: 100%;
          }
          .pe-images-stack {
            height: 260px;
          }
          .pe-img-back {
            height: 200px;
          }
          .pe-img-front {
            height: 160px;
          }
        }
      `}</style>

      <section className="pe-section">
        <div className="pe-inner">
          {/* LEFT */}
          <div className="pe-left">
            {mainImage && (
             <Image
              src={mainImage.url}
              alt={mainImage.alt || heading}
              width={600}
              height={600}
              sizes="(max-width: 768px) 100vw, 600px"
              className="pe-main-image"
            />
            )}
          </div>

          {/* RIGHT */}
          <div className="pe-right">
            <h2 className="pe-heading">{heading}</h2>

            {paragraphs.length > 0 && (
              <div className="pe-paragraphs">
                {paragraphs.map((p, i) => (
                  <p key={i} className="pe-paragraph">
                    <RichText text={p} />
                  </p>
                ))}
              </div>
            )}

            {/* Stacked secondary images */}
            {secondaryImages.length >= 2 && (
              <div className="pe-images-stack">
             <Image
              src={secondaryImages[0].url}
              alt={secondaryImages[0].alt || "Product image"}
              width={400}
              height={400}
              sizes="(max-width: 768px) 100vw, 400px"
              className="pe-img-back"
            />

            <Image
              src={secondaryImages[1].url}
              alt={secondaryImages[1].alt || "Product image"}
              width={400}
              height={400}
              sizes="(max-width: 768px) 100vw, 400px"
              className="pe-img-front"
            />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}