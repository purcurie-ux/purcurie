"use client";

interface EditorialImage {
  url: string;
  alt?: string;
}

interface ProductEditorialReverseProps {
  mainImage?: EditorialImage;
  heading?: string;
  paragraph?: string;
  stackImages?: EditorialImage[]; // 2 images that overlap on the left side
}

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

export default function ProductEditorialReverse({
  mainImage,
  heading = "Skincare with face and eye area protection!",
  paragraph = "",
  stackImages = [],
}: ProductEditorialReverseProps) {
  if (!mainImage && !paragraph) return null;

  return (
    <>
      <style>{`
        .per-section {
          background: #e8edf2;
          padding: 80px 0;
          overflow: hidden;
        }

        .per-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 0;
        }

        /* LEFT — text + stacked images */
        .per-left {
          padding: 0 60px 0 80px;
          display: flex;
          flex-direction: column;
        }

        .per-heading {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: clamp(26px, 3.2vw, 44px);
          font-weight: 400;
          line-height: 1.1;
          color: #1a1a1a;
          letter-spacing: -0.5px;
          margin: 0 0 28px 0;
          max-width: 420px;
        }

        .per-paragraph {
          font-family: 'Helvetica Neue', Helvetica, sans-serif;
          font-size: 14px;
          line-height: 1.75;
          color: #444;
          margin: 0 0 48px 0;
          max-width: 380px;
          text-align: center;
        }

        .per-paragraph strong {
          font-weight: 700;
          color: #1a1a1a;
          font-style: italic;
        }

       /* Stacked images — left side */
.per-stack {
  position: relative;
  height: 420px; /* Slightly taller to give the bottle room */
  width: 100%;
  margin-top: 20px;
}

/* The Eye/Face detail image (Larger background) */
.per-img-back {
  position: absolute;
  top: 0;
  right: 0;
  width: 75%;
  height: 280px;
  object-fit: cover; /* This stays cover to fill the wide area */
  display: block;
  z-index: 1;
}

/* The Product-in-hand image (The one that was cutting) */
.per-img-front {
  position: absolute;
  bottom: 0;
  left: 5%;
  width: 30%; 
  height: 240px; 
  
  /* KEY CHANGES BELOW */
  object-fit: contain;     /* This stops the cutting/cropping */
  background: #ffffff;     /* Adds a white background if the image is transparent */
  padding: 10px;           /* Adds space around the bottle so it doesn't touch the edges */
  
  display: block;
  z-index: 2;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08); 
  border: 1px solid #eee;  /* Light border for definition */
}

        /* RIGHT — tall single image */
        .per-right {
          position: relative;
        }

        .per-main-image {
          width: 100%;
          height: 680px;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .per-inner {
            grid-template-columns: 1fr;
          }
          /* On mobile, image goes first */
          .per-right {
            order: -1;
          }
          .per-main-image {
            height: 400px;
          }
          .per-left {
            padding: 48px 24px 0 24px;
          }
          .per-paragraph {
            max-width: 100%;
          }
          .per-heading {
            max-width: 100%;
          }
          ..per-stack {
            height: 320px;
        }
         .per-img-back {
            width: 80%;
            height: 220px;
        }
          .per-img-front {
            width: 40%;
            height: 160px;
            left: 5%;
        }
        }
      `}</style>

      <section className="per-section">
        <div className="per-inner">

          {/* LEFT */}
          <div className="per-left">
            <h2 className="per-heading">{heading}</h2>

            {paragraph && (
              <p className="per-paragraph">
                <RichText text={paragraph} />
              </p>
            )}

            {/* Stacked images */}
            {stackImages.length >= 2 && (
              <div className="per-stack">
                <img
                  src={stackImages[0].url}
                  alt={stackImages[0].alt || "Product detail"}
                  className="per-img-back"
                />
                <img
                  src={stackImages[1].url}
                  alt={stackImages[1].alt || "Product shot"}
                  className="per-img-front"
                />
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="per-right">
            {mainImage && (
              <img
                src={mainImage.url}
                alt={mainImage.alt || heading}
                className="per-main-image"
              />
            )}
          </div>

        </div>
      </section>
    </>
  );
}