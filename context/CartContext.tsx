"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { trackEvent } from "@/lib/fpixel";

interface CartItem {
  variantId: string;
  productId: string;
  title: string;
  price: string;
  quantity: number;
  image: string;
  sku: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addToCart: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  removeFromCart: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
  subtotal: string;
  checkoutUrl: string | null;
  createCheckout: () => Promise<void>;
  isCheckoutLoading: boolean;
  buyNow: (item: Omit<CartItem, "quantity">, buyQuantity?: number) => Promise<void>;
  buyNowLoading: boolean;
  discountCode: string;
  setDiscountCode: React.Dispatch<React.SetStateAction<string>>;
  discountError: string;
  discountedTotal: string | null;
  isValidatingCode: boolean;
  applyDiscount: () => Promise<void>;
  removeDiscount: () => void; // ✅ ADD THIS
  clearCart: () => void; // ✅ Add this line
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const CART_STORAGE_KEY = "shopping-cart-items";

const saveToStorage = (items: CartItem[]) => {
  try {
    if (typeof window !== "undefined") {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  } catch (error) {
    console.error("Error saving to storage:", error);
  }
};

const loadFromStorage = (): CartItem[] => {
  try {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    }
  } catch (error) {
    console.error("Error loading from storage:", error);
  }
  return [];
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") return loadFromStorage();
    return [];
  });
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const [buyNowLoading, setBuyNowLoading] = useState(false); 
  const [isMounted, setIsMounted] = useState(false);

  const [discountCode, setDiscountCode] = useState("");
  const [discountError, setDiscountError] = useState("");
  const [discountedTotal, setDiscountedTotal] = useState<string | null>(null);
  const [isValidatingCode, setIsValidatingCode] = useState(false);

  const itemsRef = useRef(items);
  const isValidatingRef = useRef(false);
    useEffect(() => {
      itemsRef.current = items;
    }, [items]);

  useEffect(() => { setIsMounted(true); }, []);

useEffect(() => {
    if (isMounted) {
      saveToStorage(items);
      // ✅ After items save, re-sync itemsRef immediately
      itemsRef.current = items;
    }
  }, [items, isMounted]);

 

// ✅ ADD THIS FUNCTION
// ✅ FIXED VERSION
  const clearCart = useCallback(() => {
    setItems([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem(CART_STORAGE_KEY);
      localStorage.removeItem("active_coupon");
    }
  }, []);

  
  // Check if order was confirmed after returning from Shopify
  useEffect(() => {
    if (!isMounted) return;

    const checkoutTime = sessionStorage.getItem("purcurie_checkout_time");
    if (!checkoutTime) return;

    const timeSinceCheckout = Date.now() - parseInt(checkoutTime);

    if (timeSinceCheckout < 30 * 60 * 1000) {
      const checkOrder = async () => {
        try {
          const res = await fetch("/api/check-latest-order");
          const data = await res.json();

          if (data.confirmed) {
          console.log("✅ Order confirmed — clearing cart");

          // ✅ TRACK PURCHASE
         try {
            if (typeof window !== "undefined") {
              trackEvent('Purchase', {
                value: itemsRef.current.reduce((acc, item) => {
                  const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
                  return acc + price * item.quantity;
                }, 0),
                currency: 'INR'
              });
            }
          } catch (e) {
            console.log("Purchase pixel error:", e);
          }
                    clearCart();
        }
        } catch (err) {
          console.error("Order check failed:", err);
        } finally {
          sessionStorage.removeItem("purcurie_checkout_time");
        }
      };

      const timer = setTimeout(checkOrder, 1500);
      return () => clearTimeout(timer);
    } else {
      sessionStorage.removeItem("purcurie_checkout_time");
    }
  }, [isMounted, clearCart]);

  // ✅ NEW: Helper function to do the math (used automatically and manually)
  const runValidation = useCallback(async (code: string, currentItems: CartItem[]) => {
    if (!code.trim() || currentItems.length === 0) return;
    if (isValidatingRef.current) return;
    isValidatingRef.current = true;
    setIsValidatingCode(true);
    setDiscountError("");

    try {
      const lineItems = currentItems.map((item) => ({
        variantId: item.variantId,
        quantity: item.quantity,
      }));

      const res = await fetch("/api/validate-discount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lineItems, discountCode: code }),
      });

      const data = await res.json();

      if (!res.ok) {
        setDiscountError(data.error || "Invalid code");
        setDiscountedTotal(null);
      } else {
        setDiscountedTotal(data.total);
      }
    } catch (err) {
      setDiscountError("Something went wrong.");
    } finally {
      setIsValidatingCode(false);
    }
 }, []);

// Auto-apply saved discount on page load OR if item quantity changes
// ... clearCart function stays the same ...

  // ✅ 1. Unified Coupon & Storage Listener
  useEffect(() => {
    if (!isMounted) return;

    const syncDiscount = () => {
      const savedCode = localStorage.getItem("active_coupon");
      if (savedCode) {
        setDiscountCode(savedCode);
        if (itemsRef.current.length > 0) {
          runValidation(savedCode, itemsRef.current);
        }
      } else {
        setDiscountCode("");
        setDiscountedTotal(null);
        setDiscountError("");
      }
    };

    // Run once on mount
    syncDiscount();

    // Listen for coupon applied from product page
   // Listen for custom event from product page
  const handleCouponApplied = () => {
    // ✅ Wait longer so itemsRef.current has the latest cart state
    setTimeout(() => {
      const savedCode = localStorage.getItem("active_coupon");
      if (savedCode) {
        setDiscountCode(savedCode);
        if (itemsRef.current.length > 0) {
          // ✅ Reset guard so validation always runs fresh
          isValidatingRef.current = false;
          runValidation(savedCode, itemsRef.current);
        }
      }
    }, 800); // ✅ Increased from 200ms to 800ms
  };
    window.addEventListener("coupon-applied", handleCouponApplied);

    const handleCouponRemoved = () => {
      setDiscountCode("");
      setDiscountedTotal(null);
      setDiscountError("");
      localStorage.removeItem("active_coupon");
      window.dispatchEvent(new Event("coupon-removed"));
    };
    window.addEventListener("coupon-removed", handleCouponRemoved);

   // Listen for storage changes across OTHER tabs only
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "active_coupon" && e.storageArea === localStorage && e.oldValue !== e.newValue) {
        syncDiscount();
      }
    };
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("coupon-applied", handleCouponApplied);
      window.removeEventListener("coupon-removed", handleCouponRemoved);
      window.removeEventListener("storage", handleStorage);
    };
  }, [isMounted]);



  // ✅ 2. Manual Apply Button Logic
const applyDiscount = async () => {
    if (!discountCode.trim()) {
      setDiscountedTotal(null);
      localStorage.removeItem("active_coupon");
      return;
    }
    const code = discountCode.trim().toUpperCase();
    localStorage.setItem("active_coupon", code);
    
    // Reset the guard so manual apply always works
    isValidatingRef.current = false;
    
    await runValidation(code, items);
    window.dispatchEvent(new Event("coupon-applied"));
  };

  // ✅ 3. Remove Discount Logic
  const removeDiscount = () => {
    setDiscountCode("");
    setDiscountedTotal(null);
    setDiscountError("");
    if (typeof window !== "undefined") {
      localStorage.removeItem("active_coupon");
    }
  };

  

  const addToCart = (item: Omit<CartItem, "quantity">, qty: number = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.variantId === item.variantId);
      if (existingItem) {
        return prevItems.map((i) =>
          i.variantId === item.variantId ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [...prevItems, { ...item, quantity: qty }];
    });
  };

  const removeFromCart = (variantId: string) => {
    setItems((prevItems) => prevItems.filter((i) => i.variantId !== variantId));
  };

  const updateQuantity = (variantId: string, quantity: number) => {
    if (quantity <= 0) { removeFromCart(variantId); return; }
    setItems((prevItems) =>
      prevItems.map((i) => (i.variantId === variantId ? { ...i, quantity } : i))
    );
    // Re-validate discount when quantity changes
    const savedCode = localStorage.getItem("active_coupon");
    if (savedCode && discountedTotal) {
      isValidatingRef.current = false;
      setTimeout(() => {
        runValidation(savedCode, itemsRef.current);
      }, 100);
    }
  };

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const subtotal = items
    .reduce((acc, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
      return acc + price * item.quantity;
    }, 0)
    .toFixed(2);

const createCheckout = async () => {
    setIsCheckoutLoading(true);
    try {
      const lineItems = items.map((item) => ({
        variantId: item.variantId,
        quantity: item.quantity,
      }));

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lineItems }),
      });

      const data = await response.json();

      if (data.checkoutUrl) {
        sessionStorage.setItem("purcurie_checkout_time", Date.now().toString());

        // Append discount code to checkout URL if one is applied
        const savedCode = localStorage.getItem("active_coupon");
        let finalUrl = data.checkoutUrl;
        if (savedCode?.trim()) {
          const separator = finalUrl.includes("?") ? "&" : "?";
          finalUrl = `${finalUrl}${separator}discount=${savedCode}`;
        }
        
        // ✅ TRACK BEFORE REDIRECT
        trackEvent('InitiateCheckout', {
          value: itemsRef.current.reduce((acc, item) => {
          const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
          return acc + price * item.quantity;
        }, 0),
          currency: 'INR'
        });


        window.location.href = finalUrl;
      }
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setIsCheckoutLoading(false);
      isValidatingRef.current = false;
    }
  };

  const buyNow = async (item: Omit<CartItem, "quantity">, buyQuantity: number = 1) => {
    setBuyNowLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        lineItems: [{ variantId: item.variantId, quantity: buyQuantity }],
        }),
      });

      const data = await response.json();

      if (data.checkoutUrl) {
        const savedCode = localStorage.getItem("active_coupon");
        let finalUrl = data.checkoutUrl;
        if (savedCode?.trim()) {
          const separator = finalUrl.includes("?") ? "&" : "?";
          finalUrl = `${finalUrl}${separator}discount=${savedCode}`;
        }

        // ✅ TRACK HERE ALSO
        trackEvent('InitiateCheckout', {
          value: parseFloat(item.price.replace(/[^\d.]/g, '')) || 0,
          currency: 'INR'
        });
        window.location.href = finalUrl;
      }
    } catch (error) {
      console.error("Buy Now error:", error);
      alert("Failed to proceed. Please try again.");
    } finally {
      setBuyNowLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        openCart,
        closeCart,
        subtotal,
        checkoutUrl,
        createCheckout,
        isCheckoutLoading,
        buyNow,        
        buyNowLoading, 
        discountCode,
        setDiscountCode,
        discountError,
        discountedTotal,
        isValidatingCode,
        applyDiscount,
        removeDiscount,
        clearCart, // ✅ ADD THIS HERE
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}