"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { ChevronLeft, ChevronRight, Award, Gem, Truck, ShoppingCart } from "lucide-react";
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
  
  const { addToCart, buyNow, buyNowLoading, openCart } = useCart();
  const [quantity, setQuantity] = useState<number | string>(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  // ✅ 1. Cursor Tracking State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // ✅ 2. Notification State
  const [showNotification, setShowNotification] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  // ✅ 3. Mobile Swipe State
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const allImages = Array.from(new Set([product.mainImage, ...product.moreImages.map(img => img.url)]));
  const [coupon, setCoupon] = useState("");
  const [couponStatus, setCouponStatus] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState<string | null>(null); // Add this

useEffect(() => {
    const handleCouponRemoved = () => {
      setCoupon("");
      setCouponStatus("");
      setDiscountedPrice(null);
    };

    const handleCouponApplied = () => {
      const savedCode = localStorage.getItem("active_coupon");
      if (savedCode) {
        const validCodes = ["SENPAI100", "JAY100", "PANKAJ50", "PAL10"];
        if (validCodes.includes(savedCode)) {
          setCoupon(savedCode);
          setCouponStatus("✅ Applied! Your discount is ready.");
          const basePrice = parseFloat(product.price.replace(/[^\d.]/g, ''));
          if (!isNaN(basePrice)) {
            const discountAmount = savedCode.includes("100") ? 100 : savedCode === "PANKAJ50" ? 50 : basePrice * 0.10;
            setDiscountedPrice(`₹ ${(basePrice - discountAmount).toFixed(2)} INR`);
          }
        }
      }
    };

    window.addEventListener("coupon-removed", handleCouponRemoved);
    window.addEventListener("coupon-applied", handleCouponApplied);
    return () => {
      window.removeEventListener("coupon-removed", handleCouponRemoved);
      window.removeEventListener("coupon-applied", handleCouponApplied);
    };
  }, [product.price]);


  // Restore coupon on page refresh
  useEffect(() => {
    const savedCoupon = localStorage.getItem('active_coupon');
    if (savedCoupon) {
      const validCodes = ["SENPAI100", "JAY100", "PANKAJ50", "PAL10"];
      if (validCodes.includes(savedCoupon)) {
        setCoupon(savedCoupon);
        setCouponStatus("✅ Applied! Your discount is ready.");
        const basePrice = parseFloat(product.price.replace(/[^\d.]/g, ''));
        if (!isNaN(basePrice)) {
          const discountAmount = savedCoupon.includes("100") ? 100 : savedCoupon === "PANKAJ50" ? 50 : basePrice * 0.10;
          setDiscountedPrice(`₹ ${(basePrice - discountAmount).toFixed(2)} INR`);
        }
      }
    }
  }, [product.price]);

  // --- PASTE THIS HERE ---
// --- Inside ProductDetail.tsx ---
  const handleApplyCoupon = () => {
    const inputCode = coupon.trim().toUpperCase();
    if (!inputCode) return;

    const validCodes = ["SENPAI100", "JAY100", "PANKAJ50", "PAL10"];
    setCouponStatus("Verifying...");

    setTimeout(() => {
      if (validCodes.includes(inputCode)) {
        localStorage.setItem('active_coupon', inputCode);
        setCouponStatus("✅ Applied! Your discount is ready.");
        
        // Trigger the custom event for the CartContext to hear
        window.dispatchEvent(new Event("coupon-applied"));

        // Price display logic
        const basePrice = parseFloat(product.price.replace(/[^\d.]/g, ''));
        if (!isNaN(basePrice)) {
          const discountAmount = inputCode.includes("100") ? 100 : inputCode === "PANKAJ50" ? 50 : basePrice * 0.10;
          const finalPrice = basePrice - discountAmount;
          setDiscountedPrice(`₹ ${finalPrice.toFixed(2)} INR`);
        }
      } else {
        setCouponStatus("❌ Invalid code. Please check and try again.");
        localStorage.removeItem('active_coupon');
        setDiscountedPrice(null);
        // Dispatch even on failure to clear any old codes from the cart UI
                // Fire once immediately
        window.dispatchEvent(new Event("coupon-applied"));

        // Fire again after delay to ensure CartContext catches it
        setTimeout(() => {
          window.dispatchEvent(new Event("coupon-applied"));
        }, 300);
      }
    }, 600);
  };

  const handleRemoveCoupon = () => {
    setCoupon("");
    setCouponStatus("");
    setDiscountedPrice(null);
    localStorage.removeItem("active_coupon");
    window.dispatchEvent(new Event("coupon-removed"));
  };


  // ✅ Effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

 const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    const finalQuantity = typeof quantity === 'number' ? quantity : 1;
    addToCart({
      variantId: product.skuId,
      productId: product.productId,
      title: product.title,
      price: product.price,
      image: product.mainImage,
      sku: product.sku,
    }, finalQuantity);

    window.location.href = "/cart"; 
  };

  useEffect(() => {
    setMounted(true);
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [allImages.length]);

useEffect(() => {
  const refreshJunip = () => {
    if (typeof window === "undefined") return;

    // ✅ If Junip already loaded, re-init
    if (window.Junip) {
      const junip = window.Junip as any;
      if (typeof junip.init === "function") junip.init();
      if (typeof junip.load === "function") junip.load();
      if (typeof junip.render === "function") junip.render();
      return;
    }

    // ✅ If Junip not loaded (client-side nav), remove old script and re-inject
    const existingScript = document.querySelector(
      'script[src*="juniphq.com"]'
    );
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.src = "https://widgets.juniphq.com/v1/junip_shopify.js";
    script.async = true;
    script.onload = () => {
      const junip = (window as any).Junip;
      if (junip) {
        if (typeof junip.init === "function") junip.init();
        if (typeof junip.load === "function") junip.load();
      }
    };
    document.head.appendChild(script);
  };


  // ✅ Multiple retries to catch slow script + slow navigation
  refreshJunip();
  const t1 = setTimeout(refreshJunip, 300);
  const t2 = setTimeout(refreshJunip, 800);
  const t3 = setTimeout(refreshJunip, 1500); // final fallback

  // ✅ Re-init after review is submitted
  const handleReviewSubmit = () => {
    setTimeout(refreshJunip, 1000);
    setTimeout(refreshJunip, 3000);
  };

  window.addEventListener("junip:review_submitted", handleReviewSubmit);

  return () => {
    clearTimeout(t1);
    clearTimeout(t2);
    clearTimeout(t3);
    window.removeEventListener("junip:review_submitted", handleReviewSubmit);
  };
}, [product.productId]);

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

  const handleAddToCart = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isAddingToCart) return; // 🔒 Block rapid clicks
    setIsAddingToCart(true);
    const finalQuantity = typeof quantity === 'number' ? quantity : 1;

      // 1. Apply the discount to Shopify's backend first
    if (coupon.trim() !== "") {
      try {
        await fetch('/cart/update.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            update: { discount: coupon.toUpperCase() }
          })
        });
        localStorage.setItem('active_coupon', coupon.toUpperCase());
      } catch (err) {
        console.error("Failed to sync coupon", err);
      }
    }

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

    // Fire coupon event so CartContext picks up discount after item is added
    if (coupon.trim() !== "") {
      setTimeout(() => {
        window.dispatchEvent(new Event("coupon-applied"));
      }, 200);
      setTimeout(() => {
        window.dispatchEvent(new Event("coupon-applied"));
      }, 600);
    }

  setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    setTimeout(() => {
      openCart();
      setIsAddingToCart(false); // 🔓 Unlock after cart opens
    }, 400);
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

        /* ✅ FORCE ONE LINE CSS */
        .notification-toast {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%) translateY(100px); /* Start hidden below */
          background: #1D2C34;
          color: #fff;
          padding: 12px 24px;
          border-radius: 50px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          z-index: 2147483647;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          pointer-events: none;
          
          /* CRITICAL FIXES FOR ONE LINE */
          width: auto;            /* Let content define width */
          max-width: 90%;         /* Prevent touching screen edges */
          white-space: nowrap;    /* 1. Never let text wrap */
        }

        .notification-toast.show {
          transform: translateX(-50%) translateY(0); /* Animate to visible */
          opacity: 1;
        }

        .toast-content {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: nowrap;      /* 2. Force items to stay in a row */
          width: 100%;
        }

        .toast-message {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
          white-space: nowrap;    /* 3. Double insurance for text */
        }

        /* Mobile Adjustment */
        @media (max-width: 480px) {
          .notification-toast {
            padding: 10px 16px;   /* Reduce padding slightly on small screens */
            bottom: 80px;         /* Move up slightly to avoid bottom bars */
          }
          .toast-message {
            font-size: 13px;      /* Slightly smaller text to fit better */
          }
        }
          /* ✅ ACTION BUTTON STYLES (Sleek & Smaller) */
        .action-buttons-container {
          display: flex;
          gap: 12px;
          margin-bottom: 5px;
          max-width: 450px; /* Prevents them from getting huge on desktop */
        }

        .btn-custom {
          flex: 1; /* Makes both buttons equal width */
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          height: 56px; /* Reduced height so it's not too big */
          border-radius: 30px; /* Pill shape from your screenshot */
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }

        /* Dark "Add to Cart" Button */
        .btn-add {
          background-color: #1d2c34; 
          color: white;
        }
        .btn-add:hover {
          background-color: #CDDFE7;
          color:#1d2c34;
          border: 2px solid #1d2c34 !important;
        }

        /* Outline "Buy Now" Button */
        .btn-buy {
          background-color:#f6be80;
          color: #1d2c34;
          
        }
        .btn-buy:hover {
          background-color:  #CDDFE7;
          color:#1d2c34;
          border: 2px solid #1d2c34 !important;
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .action-buttons-container {
            flex-direction: column !important; 
            gap: 12px !important; 
          }
          .btn-custom {
            width: 100% !important; 
            flex: none !important; /* ✅ Stops flexbox from squishing the height */
            height: 56px !important; 
            min-height: 56px !important; /* ✅ Locks the height in place */
            font-size: 14px !important; 
          }
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
                {/* ✅ ADD THIS: Junip Star Ratings */}
                <div style={{ marginBottom: "12px" }}>
                  <span 
                    className="junip-product-summary" 
                    data-product-id={product.productId.split('/').pop()}
                  ></span>
                </div>
             <div className="product-price" style={{ marginBottom: "4px", display: "flex", alignItems: "center", gap: "8px" }}>
              {discountedPrice ? (
                <>
                  {/* Slashed Price: Now smaller and slightly faded */}
                  <span style={{ 
                    textDecoration: "line-through", 
                    color: "#888", 
                    fontSize: "14px",      // Smaller than original
                    opacity: "0.7",        // Faded effect
                    fontWeight: "400" 
                  }}>
                    {product.price}
                  </span>
                  
                  {/* New Price: Bold and prominent */}
                  <span style={{ 
                    color: "#1D2C34", 
                    fontWeight: "700", 
                    fontSize: "20px"        // Larger to stand out
                  }}>
                    {discountedPrice} <span style={{ fontSize: "16px" }}>✨⭐</span>
                  </span>
                </>
              ) : (
                // Default state when no coupon is applied
                <span style={{ fontWeight: "600" }}>{product.price}</span>
              )}
            </div>
              </div>

              <div className="product-wrapper" style={{ marginTop: "1px" }}>
            <div style={{ marginBottom: "1px" }}>
            <label style={{ fontSize: "12px", fontWeight: "600", color: "#1D2C34", display: "block", marginBottom: "8px" }}>
              HAVE A DISCOUNT CODE?
            </label>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                type="text"
                placeholder="Enter code here..."
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                // THIS LINE ADDS THE KEYBOARD LISTENER
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // Prevents page reload if inside a form
                    handleApplyCoupon();
                  }
                }}
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  border: "1px solid #e5e5e5",
                  borderRadius: "4px",
                  fontSize: "14px",
                  outline: "none",
                  textTransform: "uppercase"
                }}
              />
       <button
              type="button"
              onClick={couponStatus.includes('✅') ? handleRemoveCoupon : handleApplyCoupon}
              style={{
                padding: "10px 16px",
                backgroundColor: couponStatus.includes('✅') ? "#d9534f" : "#1D2C34",
                color: "white",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.2s ease"
              }}
            >
              {couponStatus.includes('✅') ? "REMOVE" : "APPLY"}
            </button>
            </div>
            {couponStatus && (
              <p style={{ fontSize: "12px", marginTop: "6px", color: couponStatus.includes('✅') ? "green" : "red" }}>
                {couponStatus}
              </p>
            )}
          </div>
               {/* ✅ SLEEK ACTION BUTTONS (With Working Logic) */}
                {/* ✅ QUANTITY SELECTOR */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <label style={{ fontSize: "12px", fontWeight: "600", color: "#1D2C34" }}>QTY</label>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #e5e5e5",
                    borderRadius: "50px",
                    padding: "4px 8px",
                    gap: "8px",
                    height: "40px",
                    backgroundColor: "#fff",
                  }}>
                    {/* Minus */}
                    <button
                      type="button"
                      onClick={() => setQuantity(prev => Math.max(1, Number(prev) - 1))}
                      style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    </button>

                    {/* Number */}
                    <input
                      type="number"
                      value={quantity}
                      onChange={handleQuantityChange}
                      onBlur={handleBlur}
                      style={{
                        width: "36px",
                        textAlign: "center",
                        border: "none",
                        padding: "0",
                        fontSize: "14px",
                        fontWeight: "600",
                        outline: "none",
                        background: "transparent",
                        MozAppearance: "textfield",
                      }}
                    />

                    {/* Plus */}
                    <button
                      type="button"
                      onClick={() => setQuantity(prev => Number(prev) + 1)}
                      style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    </button>
                  </div>
                </div>

               {/* ✅ SLEEK ACTION BUTTONS (With Working Logic) */}
                <div className="action-buttons-container">
                  <button onClick={handleAddToCart} className="btn-custom btn-add">
                    <ShoppingCart size={18} strokeWidth={2} />
                    ADD TO CART
                  </button>
                  
                  {/* 👇 FIXED: Using your exact working buyNow function */}
                 <button 
                    onClick={() => {
                      const finalQty = typeof quantity === 'number' ? quantity : 1;
                      setQuantity(1); // ✅ Reset to 1 after click
                      buyNow({
                        variantId: product.skuId,
                        productId: product.productId,
                        title: product.title,
                        price: product.price,
                        image: product.mainImage,
                        sku: product.sku,
                      }, finalQty);
                    }}
                    disabled={buyNowLoading}
                    className="btn-custom btn-buy"
                    style={{ 
                      cursor: buyNowLoading ? "not-allowed" : "pointer",
                      opacity: buyNowLoading ? 0.7 : 1 
                    }}
                  >
                    {buyNowLoading ? "PURCHASING..." : "BUY NOW"}
                  </button>
                </div>
                
                {product.descriptionHtml ? (
                  <div 
                    className="product-description-content"
                    dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                    style={{ marginTop: "1px" }}
                    
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

 {/* similar product enable it later */}
      {/* <section className="products">
        <div className="w-layout-blockcontainer container w-container">
          <h2>Similar Products</h2>
         <div className="product-list">
              {similarProducts.map((p) => (
                <SimilarProductCard key={p.id} product={p} />
              ))}
            </div>
        </div>
      </section> */}
  
      {/* ✅ REPLACED: Junip Review Section */}
    <section style={{ padding: "60px 0", borderTop: "1px solid #eee" }}>
      <div className="w-layout-blockcontainer container w-container">
        
        {/* 1. Required Store Key Tag */}
        <span 
          className="junip-store-key"
          data-store-key={process.env.NEXT_PUBLIC_JUNIP_STORE_KEY}
        ></span>
          
        {/* 2. Main Review Widget */}
        <div 
          className="junip-product-review" 
          data-product-id={product.productId.split('/').pop()}
        ></div>

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