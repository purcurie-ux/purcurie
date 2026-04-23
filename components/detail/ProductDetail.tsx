"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { ChevronLeft, ChevronRight, ChevronDown, Award, Gem, Truck, ShoppingCart } from "lucide-react";
import ClinicalStats from "./ClinicalStats";
import ProductEditorial from "@/components/detail/ProductEditorial";
import ProductEditorialReverse from "@/components/detail/ProductEditorialReverse";
import KeyIngredients from "@/components/detail/Keyingredients";
import ProductFeaturesSplit from "@/components/detail/Productfeaturessplit";
import { trackEvent } from "@/lib/fpixel";
import Link from "next/link"; 
import Image from "next/image";

// interface MoreImage {
//   url: string;
// }
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

interface ProductDetailData {
  mainImage: string;
  mainImageSrcset: string;
  moreImages: { url: string }[];
  title: string;
  price: string;
  description: string;
  descriptionHtml?: string;
  category: string;
  sku: string;
  tag: string;
  skuId: string;
  productId: string;
  clinicalStats?: {
    headingNormal: string;
    headingItalic: string;
    bodyText: string;
    stats: { value: string; description: string }[];
  } | null;
  editorial?: {
    heading: string;
    paragraphs: string[];
    mainImage: { url: string; alt?: string };
    secondaryImages: { url: string; alt?: string }[];
  } | null;
  editorialReverse?: {
    heading: string;
    paragraph: string;
    mainImage: { url: string; alt?: string };
    stackImages: { url: string; alt?: string }[];
  } | null;
  keyIngredients?: {
    label?: string;
    keywords?: string[];
    buttonText?: string;
    buttonLink?: string;
    ingredients: {
      name: string;
      description: string;
      image: { url: string; alt?: string };
    }[];
  } | null;
  featuresSplit?: {
    heading: string;
    body?: string;
    features?: string[];
    image: { url: string; alt?: string };
  } | null;
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
  


  const [openSection, setOpenSection] = useState<string | null>(null);
  
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
  const savings = discountedPrice
  ? (() => {
      const base = parseFloat(product.price.replace(/[^\d.]/g, ""));
      const final = parseFloat(discountedPrice.replace(/[^\d.]/g, ""));
      return base - final;
    })()
  : 0; 

 const getSection = (desc: string, title: string) => {
  if (!desc) return null;

  const lowerDesc = desc.toLowerCase();
  const lowerTitle = title.toLowerCase();

  const parts = lowerDesc.split(lowerTitle);
  if (parts.length < 2) return null;

  const originalParts = desc.split(new RegExp(title, "i"));

  const content = originalParts[1]
    ?.split(/WHAT IS IT|WHAT IT DOES|HOW IT DOES|WHY YOU'LL LOVE IT/i)[0];

  return content?.trim() || null;
};




useEffect(() => {
    const handleCouponRemoved = () => {
      setCoupon("");
      setCouponStatus("");
      setDiscountedPrice(null);
    };

    const handleCouponApplied = () => {
      const savedCode = localStorage.getItem("active_coupon");
      if (savedCode) {
        const validCodes = ["SENPAI100", "JAY100", "PANKAJ50", "PAL10", "WELCOME10", "GLOW10", "SIBANI50", "RUTU50"];
        if (validCodes.includes(savedCode)) {
          setCoupon(savedCode);
          setCouponStatus("✅ Applied! Your discount is ready.");
          const basePrice = parseFloat(product.price.replace(/[^\d.]/g, ''));
          if (!isNaN(basePrice)) {
            const discountAmount = savedCode.includes("100") ? 100 : savedCode === "PANKAJ50" ? 50 : basePrice * 0.10;
            setDiscountedPrice(`₹ ${(basePrice - discountAmount).toFixed(0)} INR`);
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



useEffect(() => {
  const handleOpenAccordion = (e: CustomEvent) => {
    setOpenSection(e.detail);
    setTimeout(() => {
      const el = document.getElementById("accordion-how");
      if (el) {
        const offset = 100; // adjust if heading still hidden — try 120 or 140
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 100);
  };

  window.addEventListener("open-accordion" as any, handleOpenAccordion);
  return () => window.removeEventListener("open-accordion" as any, handleOpenAccordion);
}, []);


  // Restore coupon on page refresh
  useEffect(() => {
    const savedCoupon = localStorage.getItem('active_coupon');
    if (savedCoupon) {
      const validCodes = ["SENPAI100", "JAY100", "PANKAJ50", "PAL10", "WELCOME10", "GLOW10", "SIBANI50", "RUTU50"];
      if (validCodes.includes(savedCoupon)) {
        setCoupon(savedCoupon);
        setCouponStatus("✅ Applied! Your discount is ready.");
        const basePrice = parseFloat(product.price.replace(/[^\d.]/g, ''));
        if (!isNaN(basePrice)) {
          const discountAmount = savedCoupon.includes("100") ? 100 : savedCoupon === "PANKAJ50" ? 50 : basePrice * 0.10;
          setDiscountedPrice(`₹ ${(basePrice - discountAmount).toFixed(0)} INR`);
        }
      }
    }
  }, [product.price]);

  // --- PASTE THIS HERE ---
// --- Inside ProductDetail.tsx ---
  const handleApplyCoupon = () => {
    const inputCode = coupon.trim().toUpperCase();
    if (!inputCode) return;

    const validCodes = ["SENPAI100", "JAY100", "PANKAJ50", "PAL10","WELCOME10", "GLOW10", "SIBANI50", "RUTU50"];
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
          setDiscountedPrice(`₹ ${finalPrice.toFixed(0)} INR`);
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


useEffect(() => {
  try {
    if (typeof window !== "undefined" && product) {
      trackEvent('ViewContent', {
        content_name: product.title || '',
        content_ids: [product.productId || ''],
        content_type: 'product',
        value: parseFloat(product.price.replace(/[^\d.]/g, '')) || 0,
        currency: 'INR'
      });
    }
  } catch (e) {
    console.log("Pixel ViewContent error:", e);
  }
}, [product]);

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
   if (touchStart === null || touchEnd === null) return;
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
  /* ─── Carousel Container ─── */
  .carousel-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
  }

  .carousel-main {
    position: relative;
    width: 100%;
    background: #f9f9f9;
    height: auto;
    min-height: auto;
    padding-bottom: 0;
  }

  /* ─── Carousel Images ─── */
  .carousel-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .carousel-image.active {
    opacity: 1;
    z-index: 1;
  }

  /* ─── Nav Buttons (hidden on desktop, shown on mobile) ─── */
  .carousel-nav {
    display: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.05);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    color: #111;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 10;
    transition: all 0.2s ease;
  }

  .carousel-nav:hover {
    background: #1D2C34;
    color: #CDDFE7;
    transform: translateY(-50%) scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  .carousel-nav.prev { left: 16px; }
  .carousel-nav.next { right: 16px; }

  /* ─── Dots (hidden on desktop) ─── */
  .carousel-dots {
    display: none;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    gap: 8px;
    z-index: 10;
    padding: 6px 12px;
    background: rgba(0, 0, 0, 0.3);
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

  /* ─── Thumbnails (hidden on desktop) ─── */
  .carousel-thumbnails {
    display: none;
    gap: 12px;
    margin-top: 16px;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding-bottom: 8px;
  }

  .carousel-thumbnails::-webkit-scrollbar { height: 6px; }
  .carousel-thumbnails::-webkit-scrollbar-track { background: #e5e5e5; border-radius: 4px; }
  .carousel-thumbnails::-webkit-scrollbar-thumb { background: #b5b5b5; border-radius: 4px; }

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

  .carousel-thumbnail.active { border-color: #CEDFE7; }

  .carousel-thumbnail img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* ─── Desktop Overrides ─── */
  @media (min-width: 769px) {
    .carousel-image {
      position: relative;
      height: auto;
      opacity: 1 !important;
    }
  }

  /* ─── Mobile Overrides ─── */
  @media (max-width: 768px) {
    .carousel-main {
      height: auto;
      min-height: auto;
      padding-bottom: 0;
    }

    .carousel-image {
      position: absolute;
      height: 100%;
      opacity: 0;
    }

    .carousel-image.active {
      opacity: 1;
    }

    .carousel-nav {
      display: none !important;
      opacity: 1;
      width: 25px;
      height: 25px;
    }

    .carousel-nav.prev { left: 8px; }
    .carousel-nav.next { right: 8px; }

    .carousel-dots {
      display: flex;
    }

    .carousel-thumbnails {
      display: flex;
      gap: 8px;
      overflow-x: auto;
    }

    .carousel-thumbnail {
      width: 70px;
      height: 70px;
      flex-shrink: 0;
      padding-bottom: 0;
    }

    .product-price {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 4px;
    }

    .main-price {
      font-size: 24px !important;
      font-weight: 500; !important
    }

    .action-buttons-container {
      flex-direction: column !important;
      gap: 12px !important;
    }

    .btn-custom {
      width: 100% !important;
      flex: none !important;
      height: 56px !important;
      min-height: 56px !important;
      font-size: 14px !important;
    }

    .btn-amazon-img {
      max-width: 65% !important;
    }
  }

  @media (max-width: 480px) {
    .notification-toast {
      padding: 10px 16px;
      bottom: 80px;
    }
    .toast-message {
      font-size: 13px;
    }
  }

  /* ─── Custom Cursor ─── */
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

  .product-block:hover { cursor: none; }

  @media (max-width: 991px) {
    .custom-detail-cursor { display: none; }
  }

  /* ─── Product Description ─── */
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
    padding-left: 0;
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

  /* ─── Notification Toast ─── */
  .notification-toast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: #1D2C34;
    color: #fff;
    padding: 12px 24px;
    border-radius: 50px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    z-index: 2147483647;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    pointer-events: none;
    width: auto;
    max-width: 90%;
    white-space: nowrap;
  }

  .notification-toast.show {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }

  .toast-content {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: nowrap;
    width: 100%;
  }

  .toast-message {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
    white-space: nowrap;
  }

  /* ─── Action Buttons ─── */
  .action-buttons-container {
    display: flex;
    gap: 12px;
    margin-bottom: 1px;
    max-width: 450px;
  }

  .btn-custom {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 56px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
  }

  .btn-add {
    background-color: #1d2c34;
    color: white;
  }

  .btn-add:hover {
    background-color: #CDDFE7;
    color: #1d2c34;
    border: 2px solid #1d2c34 !important;
  }

  .btn-buy {
    background-color: #f6be80;
    color: #1d2c34;
  }

  .btn-buy:hover {
    background-color: #CDDFE7;
    color: #1d2c34;
    border: 2px solid #1d2c34 !important;
  }

  /* ─── Amazon Button ─── */
  .btn-amazon-img {
    display: inline-block;
    width: auto;
    max-width: 260px;
  }

  .btn-amazon-img:active { transform: scale(0.96); }

  .amazon-btn-image {
    width: 70%;
    height: auto;
    display: block;
  }

  /* ─── Product Price ─── */
  .product-price span {
    font-size: 24px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .product-price span {
      font-size: 22px;
      font-weight: 700;
    }
  }

  @media (min-width: 769px) {
    .savings-text {
      width: 100%;
      margin-top: 4px;
    }
  }

  .price-clean {
    font-family: "Satoshi", -apple-system, BlinkMacSystemFont, sans-serif;
  }

  /* OLD PRICE */
  .price-clean .old-price {
    font-size: 14px;
    color: #888;
    font-weight: 400;
    text-decoration: line-through;
    opacity: 0.7;
  }

  /* SAVINGS TEXT */
  .price-clean .savings-text {
    font-size: 18px;
    font-weight: 700;
    color: #2e7d32;;
  }

  /* MAIN PRICE */
  .price-clean .main-price {
    font-size: 26px;
    font-weight: 700;
    color: #1D2C34;
    letter-spacing: -0.3px;
  }

  /* REMOVE EMOJI FONT BREAK */
  .price-clean .emoji {
    font-family: inherit;
  }

  .product-main-heading {
  font-weight: 600;
  letter-spacing: -0.5px;
}

.coupon-status.success {
  color: #1D2C34;
}

.coupon-status.error {
  color: #d9534f;
}

/* Default (desktop first) */
.mobile-carousel {
  display: none;
}

.desktop-carousel {
  display: block;
}

/* Mobile */
@media (max-width: 768px) {
  .mobile-carousel {
    display: block;
  }

  .desktop-carousel {
    display: none;
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
<div className="mobile-carousel">
  {/* ✅ MOBILE CAROUSEL */}
  {allImages.map((img, index) => (
    <Image
      key={index}
      src={img}
      alt={product.title}
      width={800}
      height={800}
      priority={index === currentImageIndex} // ✅ This fixes "Request Discovery"
      loading={index === 0 ? "eager" : "lazy"} // ✅ Eager for the first one
      fetchPriority={index === 0 ? "high" : "low"} // ✅ High priority for first image
      className={`carousel-image ${
        index === currentImageIndex ? "active" : ""
      }`}
    />
  ))}
</div>

<div className="desktop-carousel">
  {/* ✅ DESKTOP STACKED */}
  {allImages.map((img, index) => (
    <Image
      key={index}
      src={img}
      alt={product.title}
      width={720} // Match your actual display width
      height={860}
      priority={index === 0} // Still prioritize the first one
      sizes="(max-width: 768px) 100vw, 720px" // ✅ Prevents loading the massive version
      style={{
        width: "100%",
        height: "auto",
        marginBottom: "20px",
      }}
    />
  ))}
</div>
                    
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
                   <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  sizes="100px"
                />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE - DETAILS */}
            <div className="product-right">
              <div>
                <h1 className="product-main-heading">{product.title}</h1>
                {/* ✅ ADD THIS: Junip Star Ratings */}
                <div style={{ marginBottom: "12px" }}>
                  <span 
                    className="junip-product-summary" 
                    data-product-id={product.productId.split('/').pop()}
                  ></span>
                </div>
        <div className="product-price price-clean" style={{ 
            display: "flex",
            flexDirection: "row",   // 👈 desktop fix
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap"        // 👈 important
          }}>

            
              {discountedPrice ? (
                <>
                  {/* Slashed Price: Now smaller and slightly faded */}
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  <span className="old-price">
    {product.price.replace(".00", "")}
  </span>

  <span className="main-price">
    {discountedPrice} <span style={{ fontSize: "16px" }}>✨⭐</span>
  </span>
</div>

<div className="savings-text">
  You saved ₹ {Number(savings).toFixed(0)} on this order 🎉
</div>
                </>
              ) : (
                // Default state when no coupon is applied
                <span style={{ fontWeight: "600" }}>{product.price.replace(".00", "")}</span>
              )}
            </div>
              </div>

              
                {/* ✅ QUANTITY SELECTOR */}
                 <div style={{ display: "flex", alignItems: "center", gap: "1px", marginBottom: "1px" }}>
                  <label style={{ fontSize: "12px", fontWeight: "600", color: "#1D2C34" }}></label>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #1d2c34",
                    borderRadius: "50px",
                    padding: "4px 8px",
                    gap: "10px",
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


                {/* ✅ Amazon Button — full width below */}
{/* 🎁 Coupon Highlight */}
{/* <div style={{
  background: "#CDDFE7",
  padding: "8px",
  borderRadius: "6px",
  fontSize: "13px",
  color: "#1d2c34",
  marginBottom: "8px",
  width: "fit-content",
  display: "inline-block",   // 👈 fixes width issue
  maxWidth: "100%",        // safety for mobile
}}
>
  🚚 Free!! Shipping on all orders
</div> */}

{/* coupon */}
              <div className="product-wrapper" style={{ marginTop: "0px" }}>
            <div style={{ marginBottom: "1px" }}>
            <label style={{ fontSize: "12px", fontWeight: "600", color: "#1D2C34", display: "block", marginBottom: "1px" }}>
              Have a Discount Code?
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
                  border: "1px solid #1D2C34",
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
             <p className={`coupon-status ${couponStatus.includes('✅') ? 'success' : 'error'}`}>
                {couponStatus}
              </p>
            )}
          </div>
               {/* ✅ SLEEK ACTION BUTTONS (With Working Logic) */}
              
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
{/* <a
  href="https://www.amazon.in/dp/B0GQWQ5MZ7"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-amazon-img"
>
  <Image
    src="https://cdn.shopify.com/s/files/1/0984/6843/0146/files/Untitled_design_70.png?v=1775228310"
    alt="Buy on Amazon"
    width={160}
    height={50}
    className="amazon-btn-image"
  />
</a>*/}
                

                
              {/* ✅ DYNAMIC MULTI-SECTION ACCORDION */}
        <div style={{ marginTop: "1px" }}>
          
          {/* 1. WHAT IS IT */}
          <div className="accordion-item">
            <button className="accordion-trigger" onClick={() => setOpenSection(openSection === 'what' ? null : 'what')}>
              <span className="accordion-title">WHAT IS IT</span>
              <ChevronDown size={22} style={{ transform: openSection === 'what' ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
            </button>
            <div style={{ display: openSection === 'what' ? 'block' : 'none' }} className="accordion-content">
               <p>{getSection(product.description, "WHAT IS IT") || product.description.split("WHAT IT DOES")[0]}</p>
            </div>
          </div>

          {/* 2. WHAT IT DOES */}
          <div className="accordion-item">
            <button className="accordion-trigger" onClick={() => setOpenSection(openSection === 'does' ? null : 'does')}>
              <span className="accordion-title">WHAT IT DOES</span>
              <ChevronDown size={22} style={{ transform: openSection === 'does' ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
            </button>
            <div style={{ display: openSection === 'does' ? 'block' : 'none' }} className="accordion-content">
              <div className="text-body" dangerouslySetInnerHTML={{ __html: getSection(product.descriptionHtml || "", "WHAT IT DOES") || "Refer to description." }} />
            </div>
          </div>

          {/* 3. HOW IT DOES / KEY INGREDIENTS */}
          <div className="accordion-item" id="accordion-how">
            <button className="accordion-trigger" onClick={() => setOpenSection(openSection === 'how' ? null : 'how')}>
              <span className="accordion-title">HOW IT DOES</span>
              <ChevronDown size={22} style={{ transform: openSection === 'how' ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
            </button>
            <div style={{ display: openSection === 'how' ? 'block' : 'none' }} className="accordion-content">
               <div suppressHydrationWarning>
  <div className="text-body" dangerouslySetInnerHTML={{
      __html:
        typeof window !== "undefined"
          ? getSection(product.descriptionHtml || "", "HOW IT DOES") || "Refer to description."
          : "",
    }}
  />
</div>
          </div>
          </div>

          {/* 4. WHY YOU'LL LOVE IT */}
          <div className="accordion-item">
            <button className="accordion-trigger" onClick={() => setOpenSection(openSection === 'love' ? null : 'love')}>
              <span className="accordion-title">WHY YOU'LL LOVE IT</span>
              <ChevronDown size={22} style={{ transform: openSection === 'love' ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
            </button>
            <div style={{ display: openSection === 'love' ? 'block' : 'none' }} className="accordion-content">
               <div className="text-body" dangerouslySetInnerHTML={{ __html: getSection(product.descriptionHtml || "", "WHY YOU'LL LOVE IT") || "Refer to description." }} />
            </div>
          </div>

        
        </div>

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

      {/* come here */}
<div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
      <ClinicalStats
  headingNormal={product.clinicalStats?.headingNormal}
  headingItalic={product.clinicalStats?.headingItalic}
  bodyText={product.clinicalStats?.bodyText}
  stats={product.clinicalStats?.stats}
/>

<ProductEditorial
  heading={product.editorial?.heading}
  paragraphs={product.editorial?.paragraphs}
  mainImage={product.editorial?.mainImage}
  secondaryImages={product.editorial?.secondaryImages}
/>

<ProductEditorialReverse
  heading={product.editorialReverse?.heading}
  paragraph={product.editorialReverse?.paragraph}
  mainImage={product.editorialReverse?.mainImage}
  stackImages={product.editorialReverse?.stackImages}
/>

<KeyIngredients
  label={product.keyIngredients?.label}
  keywords={product.keyIngredients?.keywords}
  buttonText={product.keyIngredients?.buttonText}
  buttonLink={product.keyIngredients?.buttonLink}
  ingredients={product.keyIngredients?.ingredients ?? []}
  
/>

<ProductFeaturesSplit
  heading={product.featuresSplit?.heading}
  body={product.featuresSplit?.body}
  features={product.featuresSplit?.features}
  image={product.featuresSplit?.image}
/>

</div>
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
  const [rect, setRect] = useState<DOMRect | null>(null); // ✅ Store the box dimensions

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setRect(e.currentTarget.getBoundingClientRect()); // ✅ Only ask ONCE
    setIsHovering(true);
  };

 const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!rect) return;
    // ✅ No reflow here! Just simple math.
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
  
  onMouseEnter={handleMouseEnter} // ✅ New handle
  onMouseLeave={() => setIsHovering(false)}
  onMouseMove={handleMouseMove}
  style={{ position: "relative", overflow: "hidden", display: "block" }}
>
  <Image
    src={product.image}
    alt={product.title}
    width={400}
    height={400}
   sizes="(max-width: 768px) 50vw, 300px"
    className="product-image"
  />

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
    <h1 className="heading-lg">{product.title}</h1>
   <div className="text-price">{product.price}</div>
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