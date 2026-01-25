"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { ChevronLeft, ChevronRight, Award, Gem, Truck } from "lucide-react";
import Link from "next/link";

interface MoreImage {
  url: string;
}

interface ProductDetailData {
  mainImage: string;
  mainImageSrcset: string;
  moreImages: MoreImage[];
  title: string;
  price: string;
  description: string;
  descriptionHtml?: string;
  category: string;
  sku: string;
  tag: string;
  skuId: string;
  productId: string;
}

interface SimilarProduct {
  id: string;
  slug: string;
  title: string;
  price: string;
  image: string;
  srcset: string;
}

interface ProductDetailProps {
  product?: ProductDetailData;
  similarProducts?: SimilarProduct[];
}

const defaultProduct: ProductDetailData = {
  mainImage:
    "https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png",
  mainImageSrcset:
    "https://i.postimg.cc/W4Yjzc0D/Chat-GPT-Image-Jan-6-2026-12-09-08-PM.png",
  moreImages: [
    {
      url: "https://i.postimg.cc/W4Yjzc0D/Chat-GPT-Image-Jan-6-2026-12-09-08-PM.png",
    },
    {
      url: "https://i.postimg.cc/pXvN2L30/Chat-GPT-Image-Jan-6-2026-02-45-38-PM-(1).png",
    },
    {
      url: "https://i.postimg.cc/rpK3h0Rv/Remove-Dark-spots.png",
    },
    {
      url: "https://i.postimg.cc/cCNz4Fk0/Gemini-Generated-Image-rytbn6rytbn6rytb.png",
    },
  ],
  title: "Argan Oil Repair Shampoo",
  price: "$ 22.99 USD",
  description:
    "Revitalize your hair with Argan Oil Repair Shampoo, nourishing formula designed to restore strength, moisture, and shine. Enriched with pure argan oil, keratin, and botanical extracts, this shampoo deeply hydrates while repairing damaged strands.",
  category: "Organic Beauty",
  sku: "AORS-007",
  tag: "Strengthening",
  skuId: "6871dbd8aa48a044cd83e93b",
  productId: "6871dbd877f454c5d99bff7c",
};

const defaultSimilarProducts: SimilarProduct[] = [
  {
    id: "1",
    slug: "hydrating-rose-water-mist",
    title: "Hydrating Rose Water Mist",
    price: "₹ 34.99 USD",
    image:
      "https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png",
    srcset:
      "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08-p-800.webp 800w, https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png 824w",
  },
  {
    id: "2",
    slug: "euphoria-bloom-eau-de-parfum",
    title: "Euphoria Bloom Eau de Parfum",
    price: "$ 49.99 USD",
    image:
      "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03.webp",
    srcset:
      "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03.webp 824w",
  },
  {
    id: "3",
    slug: "vitamin-c-brightening-toner",
    title: "Vitamin C Brightening Toner",
    price: "$ 21.99 USD",
    image:
      "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02.webp",
    srcset:
      "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02.webp 824w",
  },
];

function ProductDetail({
  product = defaultProduct,
  similarProducts = defaultSimilarProducts,
}: ProductDetailProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number | string>(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  // ✅ 1. Cursor Tracking State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // ✅ 2. Notification State
  const [showNotification, setShowNotification] = useState(false);

  // ✅ 3. Mobile Swipe State
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const allImages = Array.from(new Set([product.mainImage, ...product.moreImages.map(img => img.url)]));

  // ✅ Effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setMounted(true);
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [allImages.length]);

  // ✅ Handlers
  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) goToNext();
    if (distance < -50) goToPrevious();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    const finalQuantity = typeof quantity === 'number' ? quantity : 1;

    for (let i = 0; i < finalQuantity; i++) {
      addToCart({
        variantId: product.skuId,
        productId: product.productId,
        title: product.title,
        price: product.price,
        image: product.mainImage,
        sku: product.sku,
      });
    }
    setQuantity(1);
    
    // ✅ TRIGGER NOTIFICATION
    setShowNotification(true);
    
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === "") {
      setQuantity("");
      return;
    }
    const parsed = parseInt(val);
    if (!isNaN(parsed)) {
      setQuantity(parsed);
    }
  };

  const handleBlur = () => {
    if (quantity === "" || Number(quantity) < 1) {
      setQuantity(1);
    }
  };

  return (
    <div className="page-wrap">
      {/* ✅ UPGRADED CAROUSEL STYLES */}
      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 4px;
        }

        .carousel-main {
          position: relative;
          width: 100%;
          padding-bottom: 120%; /* Square aspect ratio */
          background: #f9f9f9;
        }

        .carousel-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0;
          transition: opacity 0.5s ease-in-out; /* Smooth Fade */
        }

        .carousel-image.active {
          opacity: 1;
          z-index: 1;
        }

        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0,0,0,0.05);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          z-index: 10;
          transition: all 0.2s ease;
          opacity: 1; /* Hidden by default */
        }

        .carousel-main:hover .carousel-nav {
          opacity: 1;
        }

        .carousel-nav:hover {
          background: #1D2C34;
          color:#CDDFE7;
          transform: translateY(-50%) scale(1.05);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }

        .carousel-nav.prev { left: 16px; }
        .carousel-nav.next { right: 16px; }

        .carousel-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
          padding: 6px 12px;
          background: rgba(0,0,0,0.3);
          border-radius: 20px;
          backdrop-filter: blur(4px);
        }

        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .carousel-dot.active {
          background: #fff;
          transform: scale(1.2);
        }

        .carousel-thumbnails {
          display: flex;
          gap: 12px;
          margin-top: 16px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding-bottom: 8px;
          display:none;
        }

        .carousel-thumbnails::-webkit-scrollbar {
          height: 6px;
        }

        .carousel-thumbnails::-webkit-scrollbar-track {
          background: #e5e5e5;
          border-radius: 4px;
        }

        .carousel-thumbnails::-webkit-scrollbar-thumb {
          background: #b5b5b5;
          border-radius: 4px;
        }

        .carousel-thumbnail {
          position: relative;
          width: 90px;
          height: 90px;
          cursor: pointer;
          border: 2px solid transparent;
          border-radius: 6px;
          overflow: hidden;
          transition: all 0.2s;
        }

        .carousel-thumbnail.active {
          border-color: #CEDFE7;
        }

        .carousel-thumbnail img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .carousel-nav {
            opacity: 1;
            width: 25px;
            height: 25px;
          }
          .carousel-nav.prev { left: 8px; }
          .carousel-nav.next { right: 8px; }
          
          .carousel-thumbnails {
            gap: 8px;
            overflow-x: auto;
            display: flex;
          }
          .carousel-thumbnail {
            width: 70px;
            height: 70px;
            flex-shrink: 0;
            padding-bottom: 0;
          }
        }

        .custom-detail-cursor {
          position: fixed;
          width: 80px;
          height: 80px;
          background-color: #1d2c34;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          font-weight: 500;
          pointer-events: none;
          z-index: 9999;
          transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
          white-space: nowrap;
        }

        .product-block:hover {
          cursor: none;
        }

        @media (max-width: 991px) {
          .custom-detail-cursor { display: none; }
        }

        /* ✅ Description Styles */
        .product-description-content {
          font-size: 16px;
          line-height: 1.7;
          color: #333;
          margin-bottom: 24px;
        }

        .product-description-content ul {
          list-style: none !important;
          padding-left: 0 !important;
          margin-left: 0 !important;
          margin-bottom: 16px;
        }

        .product-description-content li {
          position: relative;
          padding-left: px;
          margin-bottom: 12px;
          display: block;
        }

        .product-description-content li::before {
          content: "✨";
          position: absolute;
          left: 0;
          top: 0;
          font-size: 14px;
        }

        .product-description-content strong,
        .product-description-content b {
          font-weight: 700;
          color: #1a1a1a;
        }

        /* ✅ FIXED CSS: Added the dot before notification-toast */
        .notification-toast {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%) translateY(100px);
          background: #1D2C34;
          color: #fff;
          padding: 12px 24px;
          border-radius: 50px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 2147483647;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          pointer-events: none;
        }

        .notification-toast.show {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }

        .toast-content {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .toast-icon {
          background: #4CAF50;
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
        }

        .toast-message {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
      `}</style>

      {/* ✅ 4. Follow-Cursor Element */}
      <div 
        className="custom-detail-cursor"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          opacity: isHovering ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1 : 0.5})`
        }}
      >
        <div>Detail</div>
      </div>

      <section className="product-main">
        <div className="w-layout-blockcontainer container w-container">
          <div className="product-inner">
            {/* LEFT SIDE - IMAGES */}
            <div className="product-left">
              <div className="product-main-img">
                <div className="carousel-container" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                  <div className="carousel-main">
                    {/* Images */}
                    {allImages.map((img, index) => (
                      <img
                        key={index}
                        loading="lazy"
                        src={img}
                        srcSet={index === 0 ? product.mainImageSrcset : undefined}
                        className={`product-main-image carousel-image ${
                          index === currentImageIndex ? 'active' : ''
                        }`}
                        alt={product.title}
                      />
                    ))}
                    
                    {/* Navigation Arrows */}
                    {allImages.length > 1 && (
                      <>
                        <button 
                          className="carousel-nav prev" 
                          onClick={goToPrevious}
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={24} strokeWidth={2.5} />
                        </button>
                        <button 
                          className="carousel-nav next" 
                          onClick={goToNext}
                          aria-label="Next image"
                        >
                          <ChevronRight size={24} strokeWidth={2.5} />
                        </button>

                        {/* Pagination Dots */}
                        <div className="carousel-dots">
                          {allImages.map((_, index) => (
                            <button
                              key={index}
                              className={`carousel-dot ${
                                index === currentImageIndex ? 'active' : ''
                              }`}
                              onClick={() => setCurrentImageIndex(index)}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="carousel-thumbnails">
                {allImages.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-thumbnail ${
                      index === currentImageIndex ? 'active' : ''
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      loading="lazy"
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE - DETAILS */}
            <div className="product-right">
              <div>
                <h2 className="product-main-heading">{product.title}</h2>
                <div className="product-price" style={{ marginBottom: "4px" }}>
                  {product.price}
                </div>
              </div>

              <div className="product-wrapper" style={{ marginTop: "-40px" }}>
                <form
                  className="w-commerce-commerceaddtocartform default-state"
                  onSubmit={handleAddToCart}
                >
                  <input
                    type="submit"
                    value="Add to Cart"
                    className="w-commerce-commerceaddtocartbutton add-to-cart-button"
                  />
                </form>

                {product.descriptionHtml ? (
                  <div 
                    className="product-description-content"
                    dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                    style={{ marginTop: "-50px" }}
                  />
                ) : (
                  <p className="single-text">{product.description}</p>
                )}

                <div className="product-main-data">
                  <div className="product-info top">
                    <div className="square"></div>
                    <div className="product-data">
                      <div className="product-text">Category:</div>
                      <div>{product.category}</div>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="square"></div>
                    <div className="product-data">
                      <div className="product-text">SKU:</div>
                      <div>{product.sku}</div>
                    </div>
                  </div>
                  <div className="product-info last">
                    <div className="square"></div>
                    <div className="product-data">
                      <div className="product-text">Tag:</div>
                      <div>{product.tag}</div>
                    </div>
                  </div>
                </div>

                <div className="product-info-wrap">
                  <div className="product-main-info">
                    <Award size={24} strokeWidth={1.5} style={{ marginBottom: "8px" }} />
                    <div>High-Quality Beauty</div>
                  </div>
                  <div className="product-main-info">
                    <Gem size={24} strokeWidth={1.5} style={{ marginBottom: "8px" }} />
                    <div>Exclusive Launches</div>
                  </div>
                  <div className="product-main-info">
                    <Truck size={24} strokeWidth={1.5} style={{ marginBottom: "8px" }} />
                    <div>Easy Shopping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="w-layout-blockcontainer container w-container">
          <h2>Similar Products</h2>
         <div className="product-list">
              {similarProducts.map((p) => (
                <SimilarProductCard key={p.id} product={p} />
              ))}
            </div>
        </div>
      </section>

      {/* ✅ 6. NOTIFICATION HTML (Moved inside Return) */}
      <div className={`notification-toast ${showNotification ? 'show' : ''}`}>
        <div className="toast-content">
          <div className="toast-icon">✓</div>
          <div className="toast-message">Product added to cart</div>
        </div>
      </div>

    </div>
  );
}

export default ProductDetail;

function SimilarProductCard({ product }: { product: SimilarProduct }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="product-item">
      <Link
        href={`/product/${product.slug}`}
        className="product-block"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
        style={{ position: "relative", overflow: "hidden", display: "block" }}
      >
        <img src={product.image} alt={product.title} className="product-image" />
        <div
          style={{
            opacity: isHovering ? 1 : 0,
            transform: isHovering ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.3s ease",
            marginTop: "12px", 
            textAlign: "center",
            paddingBottom: "20px",
          }}
        >
          <h5>{product.title}</h5>
          <div>{product.price}</div>
        </div>

        <div
          style={{
            position: "absolute",
            left: pos.x,
            top: pos.y,
            width: "58px",
            height: "58px",
            backgroundColor: "#1d2c34",
            borderRadius: "50%",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "11px",
            fontWeight: 300,
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            opacity: isHovering ? 1 : 0,
            transition: "opacity 0.2s ease",
            zIndex: 10,
          }}
        >
          Detail
        </div>
      </Link>
    </div>
  );
}