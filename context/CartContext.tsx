// // "use client";

// // import React, { createContext, useContext, useState } from "react";

// // interface CartItem {
// //   variantId: string;
// //   productId: string;
// //   title: string;
// //   price: string;
// //   quantity: number;
// //   image: string;
// //   sku: string;
// // }

// // interface CartContextType {
// //   items: CartItem[];
// //   isOpen: boolean;
// //   addToCart: (item: Omit<CartItem, "quantity">) => void;
// //   removeFromCart: (variantId: string) => void;
// //   updateQuantity: (variantId: string, quantity: number) => void;
// //   openCart: () => void;
// //   closeCart: () => void;
// //   subtotal: string;
// //   checkoutUrl: string | null;
// //   createCheckout: () => Promise<void>;
// // }

// // const CartContext = createContext<CartContextType | undefined>(undefined);

// // export function CartProvider({ children }: { children: React.ReactNode }) {
// //   const [items, setItems] = useState<CartItem[]>([]);
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);

// //   const addToCart = (item: Omit<CartItem, "quantity">) => {
// //     setItems((prevItems) => {
// //       const existingItem = prevItems.find(
// //         (i) => i.variantId === item.variantId
// //       );
// //       if (existingItem) {
// //         return prevItems.map((i) =>
// //           i.variantId === item.variantId
// //             ? { ...i, quantity: i.quantity + 1 }
// //             : i
// //         );
// //       }
// //       return [...prevItems, { ...item, quantity: 1 }];
// //     });
// //     setIsOpen(true);
// //   };

// //   const removeFromCart = (variantId: string) => {
// //     setItems((prevItems) => prevItems.filter((i) => i.variantId !== variantId));
// //   };

// //   const updateQuantity = (variantId: string, quantity: number) => {
// //     if (quantity <= 0) {
// //       removeFromCart(variantId);
// //       return;
// //     }
// //     setItems((prevItems) =>
// //       prevItems.map((i) => (i.variantId === variantId ? { ...i, quantity } : i))
// //     );
// //   };

// //   const openCart = () => setIsOpen(true);
// //   const closeCart = () => setIsOpen(false);

// //   const subtotal = items
// //     .reduce((acc, item) => {
// //       const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
// //       return acc + price * item.quantity;
// //     }, 0)
// //     .toFixed(2);

// //   const createCheckout = async () => {
// //     try {
// //       const lineItems = items.map((item) => ({
// //         variantId: item.variantId,
// //         quantity: item.quantity,
// //       }));

// //       const response = await fetch("/api/checkout", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ lineItems }),
// //       });

// //       const data = await response.json();
// //       if (data.checkoutUrl) {
// //         setCheckoutUrl(data.checkoutUrl);
// //         window.location.href = data.checkoutUrl;
// //       }
// //     } catch (error) {
// //       console.error("Error creating checkout:", error);
// //       alert("Failed to create checkout. Please try again.");
// //     }
// //   };

// //   return (
// //     <CartContext.Provider
// //       value={{
// //         items,
// //         isOpen,
// //         addToCart,
// //         removeFromCart,
// //         updateQuantity,
// //         openCart,
// //         closeCart,
// //         subtotal,
// //         checkoutUrl,
// //         createCheckout,
// //       }}
// //     >
// //       {children}
// //     </CartContext.Provider>
// //   );
// // }

// // export function useCart() {
// //   const context = useContext(CartContext);
// //   if (context === undefined) {
// //     throw new Error("useCart must be used within a CartProvider");
// //   }
// //   return context;
// // }




// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";

// interface CartItem {
//   variantId: string;
//   productId: string;
//   title: string;
//   price: string;
//   quantity: number;
//   image: string;
//   sku: string;
// }

// interface CartContextType {
//   items: CartItem[];
//   isOpen: boolean;
//   addToCart: (item: Omit<CartItem, "quantity">) => void;
//   removeFromCart: (variantId: string) => void;
//   updateQuantity: (variantId: string, quantity: number) => void;
//   openCart: () => void;
//   closeCart: () => void;
//   subtotal: string;
//   checkoutUrl: string | null;
//   createCheckout: () => Promise<void>;
//   isCheckoutLoading: boolean;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// const CART_STORAGE_KEY = "shopping-cart-items";

// // Storage helper functions
// const saveToStorage = (items: CartItem[]) => {
//   try {
//     if (typeof window !== "undefined") {
//       localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
//       console.log("Cart saved:", items);
//     }
//   } catch (error) {
//     console.error("Error saving to storage:", error);
//   }
// };

// const loadFromStorage = (): CartItem[] => {
//   try {
//     if (typeof window !== "undefined") {
//       const saved = localStorage.getItem(CART_STORAGE_KEY);
//       if (saved) {
//         const parsed = JSON.parse(saved);
//         console.log("Cart loaded:", parsed);
//         return parsed;
//       }
//     }
//   } catch (error) {
//     console.error("Error loading from storage:", error);
//   }
//   return [];
// };

// export function CartProvider({ children }: { children: React.ReactNode }) {
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
//   const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
//   const [isHydrated, setIsHydrated] = useState(false);

//   // Load cart from storage on mount (client-side only)
//   useEffect(() => {
//     setIsHydrated(true);
//     const savedItems = loadFromStorage();
//     console.log("Loading saved items:", savedItems);
//     if (savedItems.length > 0) {
//       setItems(savedItems);
//     }
//   }, []);

//   // Save cart to storage whenever items change (after hydration)
//   useEffect(() => {
//     if (isHydrated) {
//       saveToStorage(items);
//     }
//   }, [items, isHydrated]);

//   const addToCart = (item: Omit<CartItem, "quantity">) => {
//     setItems((prevItems) => {
//       const existingItem = prevItems.find(
//         (i) => i.variantId === item.variantId
//       );
//       if (existingItem) {
//         return prevItems.map((i) =>
//           i.variantId === item.variantId
//             ? { ...i, quantity: i.quantity + 1 }
//             : i
//         );
//       }
//       return [...prevItems, { ...item, quantity: 1 }];
//     });
//     setIsOpen(true);
//   };

//   const removeFromCart = (variantId: string) => {
//     setItems((prevItems) => prevItems.filter((i) => i.variantId !== variantId));
//   };

//   const updateQuantity = (variantId: string, quantity: number) => {
//     if (quantity <= 0) {
//       removeFromCart(variantId);
//       return;
//     }
//     setItems((prevItems) =>
//       prevItems.map((i) => (i.variantId === variantId ? { ...i, quantity } : i))
//     );
//   };

//   const openCart = () => setIsOpen(true);
//   const closeCart = () => setIsOpen(false);

//   const subtotal = items
//     .reduce((acc, item) => {
//       const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
//       return acc + price * item.quantity;
//     }, 0)
//     .toFixed(2);

//   const createCheckout = async () => {
//     setIsCheckoutLoading(true);
//     try {
//       const lineItems = items.map((item) => ({
//         variantId: item.variantId,
//         quantity: item.quantity,
//       }));

//       const response = await fetch("/api/checkout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ lineItems }),
//       });

//       const data = await response.json();
//       if (data.checkoutUrl) {
//         setCheckoutUrl(data.checkoutUrl);
//         window.location.href = data.checkoutUrl;
//       }
//     } catch (error) {
//       console.error("Error creating checkout:", error);
//       alert("Failed to create checkout. Please try again.");
//     } finally {
//       setIsCheckoutLoading(false);
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         items,
//         isOpen,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         openCart,
//         closeCart,
//         subtotal,
//         checkoutUrl,
//         createCheckout,
//         isCheckoutLoading,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// }





// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";

// interface CartItem {
//   variantId: string;
//   productId: string;
//   title: string;
//   price: string;
//   quantity: number;
//   image: string;
//   sku: string;
// }

// interface CartContextType {
//   items: CartItem[];
//   isOpen: boolean;
//   addToCart: (item: Omit<CartItem, "quantity">) => void;
//   removeFromCart: (variantId: string) => void;
//   updateQuantity: (variantId: string, quantity: number) => void;
//   openCart: () => void;
//   closeCart: () => void;
//   subtotal: string;
//   checkoutUrl: string | null;
//   createCheckout: () => Promise<void>;
//   isCheckoutLoading: boolean;
//   buyNow: (item: Omit<CartItem, "quantity">) => Promise<void>;  // ✅ NEW
//   buyNowLoading: boolean;                                        // ✅ NEW
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);
// const CART_STORAGE_KEY = "shopping-cart-items";

// const saveToStorage = (items: CartItem[]) => {
//   try {
//     if (typeof window !== "undefined") {
//       localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
//     }
//   } catch (error) {
//     console.error("Error saving to storage:", error);
//   }
// };

// const loadFromStorage = (): CartItem[] => {
//   try {
//     if (typeof window !== "undefined") {
//       const saved = localStorage.getItem(CART_STORAGE_KEY);
//       if (saved) return JSON.parse(saved);
//     }
//   } catch (error) {
//     console.error("Error loading from storage:", error);
//   }
//   return [];
// };

// export function CartProvider({ children }: { children: React.ReactNode }) {
//   const [items, setItems] = useState<CartItem[]>(() => {
//     if (typeof window !== "undefined") return loadFromStorage();
//     return [];
//   });
//   const [isOpen, setIsOpen] = useState(false);
//   const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
//   const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
//   const [buyNowLoading, setBuyNowLoading] = useState(false); // ✅ NEW
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => { setIsMounted(true); }, []);

//   useEffect(() => {
//     if (isMounted) saveToStorage(items);
//   }, [items, isMounted]);

//   const addToCart = (item: Omit<CartItem, "quantity">) => {
//     setItems((prevItems) => {
//       const existingItem = prevItems.find((i) => i.variantId === item.variantId);
//       if (existingItem) {
//         return prevItems.map((i) =>
//           i.variantId === item.variantId ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       }
//       return [...prevItems, { ...item, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (variantId: string) => {
//     setItems((prevItems) => prevItems.filter((i) => i.variantId !== variantId));
//   };

//   const updateQuantity = (variantId: string, quantity: number) => {
//     if (quantity <= 0) { removeFromCart(variantId); return; }
//     setItems((prevItems) =>
//       prevItems.map((i) => (i.variantId === variantId ? { ...i, quantity } : i))
//     );
//   };

//   const openCart = () => setIsOpen(true);
//   const closeCart = () => setIsOpen(false);

//   const subtotal = items
//     .reduce((acc, item) => {
//       const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
//       return acc + price * item.quantity;
//     }, 0)
//     .toFixed(2);

//   const createCheckout = async () => {
//     setIsCheckoutLoading(true);
//     try {
//       const lineItems = items.map((item) => ({
//         variantId: item.variantId,
//         quantity: item.quantity,
//       }));

//       const response = await fetch("/api/checkout", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ lineItems }),
//       });

//       const data = await response.json();

//       if (data.checkoutUrl) {
//         setCheckoutUrl(data.checkoutUrl);
//         const savedCode = localStorage.getItem("active_coupon");
//         let finalUrl = data.checkoutUrl;
//         if (savedCode && savedCode.trim() !== "") {
//           const separator = finalUrl.includes("?") ? "&" : "?";
//           finalUrl = `${finalUrl}${separator}discount=${savedCode}`;
//         }
//         window.location.href = finalUrl;
//       }
//     } catch (error) {
//       console.error("Error creating checkout:", error);
//       alert("Failed to create checkout. Please try again.");
//     } finally {
//       setIsCheckoutLoading(false);
//     }
//   };
  

//   // ✅ NEW — Buy Now: bypasses cart, direct checkout with qty 1
//   const buyNow = async (item: Omit<CartItem, "quantity">) => {
//     setBuyNowLoading(true);
//     try {
//       const response = await fetch("/api/checkout", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           lineItems: [{ variantId: item.variantId, quantity: 1 }],
//         }),
//       });

//       const data = await response.json();

//       if (data.checkoutUrl) {
//         const savedCode = localStorage.getItem("active_coupon");
//         let finalUrl = data.checkoutUrl;
//         if (savedCode?.trim()) {
//           const separator = finalUrl.includes("?") ? "&" : "?";
//           finalUrl = `${finalUrl}${separator}discount=${savedCode}`;
//         }
//         window.location.href = finalUrl;
//       }
//     } catch (error) {
//       console.error("Buy Now error:", error);
//       alert("Failed to proceed. Please try again.");
//     } finally {
//       setBuyNowLoading(false);
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         items,
//         isOpen,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         openCart,
//         closeCart,
//         subtotal,
//         checkoutUrl,
//         createCheckout,
//         isCheckoutLoading,
//         buyNow,        // ✅ NEW
//         buyNowLoading, // ✅ NEW
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// }


"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

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
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
  subtotal: string;
  checkoutUrl: string | null;
  createCheckout: () => Promise<void>;
  isCheckoutLoading: boolean;
  buyNow: (item: Omit<CartItem, "quantity">) => Promise<void>;
  buyNowLoading: boolean;
  discountCode: string;
  setDiscountCode: React.Dispatch<React.SetStateAction<string>>;
  discountError: string;
  discountedTotal: string | null;
  isValidatingCode: boolean;
  applyDiscount: () => Promise<void>;
  removeDiscount: () => void; // ✅ ADD THIS
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

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    if (isMounted) saveToStorage(items);
  }, [items, isMounted]);

  // ✅ NEW: Restore the text in the discount input field when changing pages
  useEffect(() => {
    if (isMounted) {
      const savedCode = localStorage.getItem("active_coupon");
      if (savedCode) {
        setDiscountCode(savedCode);
      }
    }
  }, [isMounted]);

  // ✅ NEW: Helper function to do the math (used automatically and manually)
  const runValidation = async (code: string, currentItems: CartItem[]) => {
    if (!code.trim() || currentItems.length === 0) return;
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
        localStorage.removeItem("active_coupon");
      } else {
        setDiscountedTotal(data.total);
        localStorage.setItem("active_coupon", code);
      }
    } catch (err) {
      setDiscountError("Something went wrong.");
    } finally {
      setIsValidatingCode(false);
    }
  };

  // ✅ NEW: Automatically calculate discount on page load OR if item quantity changes!
  useEffect(() => {
    if (isMounted) {
      const savedCode = localStorage.getItem("active_coupon");
      if (savedCode && items.length > 0) {
        runValidation(savedCode, items);
      } else if (items.length === 0) {
        setDiscountedTotal(null);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, isMounted]);

  // When user manually clicks "Apply"
  const applyDiscount = async () => {
    if (!discountCode.trim()) {
      setDiscountedTotal(null);
      localStorage.removeItem("active_coupon");
      return;
    }
    await runValidation(discountCode, items);
  };

  // ✅ NEW: Remove Discount Function
  const removeDiscount = () => {
    setDiscountCode("");
    setDiscountedTotal(null);
    setDiscountError("");
    if (typeof window !== "undefined") {
      localStorage.removeItem("active_coupon");
    }
  };

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.variantId === item.variantId);
      if (existingItem) {
        return prevItems.map((i) =>
          i.variantId === item.variantId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
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
        setCheckoutUrl(data.checkoutUrl);
        const savedCode = localStorage.getItem("active_coupon");
        let finalUrl = data.checkoutUrl;
        if (savedCode && savedCode.trim() !== "") {
          const separator = finalUrl.includes("?") ? "&" : "?";
          finalUrl = `${finalUrl}${separator}discount=${savedCode}`;
        }
        window.location.href = finalUrl;
      }
    } catch (error) {
      console.error("Error creating checkout:", error);
      alert("Failed to create checkout. Please try again.");
    } finally {
      setIsCheckoutLoading(false);
    }
  };
  
  const buyNow = async (item: Omit<CartItem, "quantity">) => {
    setBuyNowLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lineItems: [{ variantId: item.variantId, quantity: 1 }],
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
        removeDiscount, // ✅ ADD THIS HERE
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