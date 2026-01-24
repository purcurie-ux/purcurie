// // "use client";

// // import React, { createContext, useContext, useState } from "react";

// // interface Item {
// //   variantId: string;
// //   productId: string;
// //   title: string;
// //   price: string;
// //   quantity: number;
// //   image: string;
// //   sku: string;
// // }

// // interface ContextType {
// //   items: Item[];
// //   isOpen: boolean;
// //   addTo: (item: Omit<Item, "quantity">) => void;
// //   removeFrom: (variantId: string) => void;
// //   updateQuantity: (variantId: string, quantity: number) => void;
// //   open: () => void;
// //   close: () => void;
// //   subtotal: string;
// //   checkoutUrl: string | null;
// //   createCheckout: () => Promise<void>;
// // }

// // const Context = createContext<ContextType | undefined>(undefined);

// // export function Provider({ children }: { children: React.ReactNode }) {
// //   const [items, setItems] = useState<Item[]>([]);
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);

// //   const addTo = (item: Omit<Item, "quantity">) => {
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

// //   const removeFrom = (variantId: string) => {
// //     setItems((prevItems) => prevItems.filter((i) => i.variantId !== variantId));
// //   };

// //   const updateQuantity = (variantId: string, quantity: number) => {
// //     if (quantity <= 0) {
// //       removeFrom(variantId);
// //       return;
// //     }
// //     setItems((prevItems) =>
// //       prevItems.map((i) => (i.variantId === variantId ? { ...i, quantity } : i))
// //     );
// //   };

// //   const open = () => setIsOpen(true);
// //   const close = () => setIsOpen(false);

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
// //     <Context.Provider
// //       value={{
// //         items,
// //         isOpen,
// //         addTo,
// //         removeFrom,
// //         updateQuantity,
// //         open,
// //         close,
// //         subtotal,
// //         checkoutUrl,
// //         createCheckout,
// //       }}
// //     >
// //       {children}
// //     </Context.Provider>
// //   );
// // }

// // export function use() {
// //   const context = useContext(Context);
// //   if (context === undefined) {
// //     throw new Error("use must be used within a Provider");
// //   }
// //   return context;
// // }




// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";

// interface Item {
//   variantId: string;
//   productId: string;
//   title: string;
//   price: string;
//   quantity: number;
//   image: string;
//   sku: string;
// }

// interface ContextType {
//   items: Item[];
//   isOpen: boolean;
//   addTo: (item: Omit<Item, "quantity">) => void;
//   removeFrom: (variantId: string) => void;
//   updateQuantity: (variantId: string, quantity: number) => void;
//   open: () => void;
//   close: () => void;
//   subtotal: string;
//   checkoutUrl: string | null;
//   createCheckout: () => Promise<void>;
//   isCheckoutLoading: boolean;
// }

// const Context = createContext<ContextType | undefined>(undefined);

// const _STORAGE_KEY = "shopping--items";

// // Storage helper functions
// const saveToStorage = (items: Item[]) => {
//   try {
//     if (typeof window !== "undefined") {
//       localStorage.setItem(_STORAGE_KEY, JSON.stringify(items));
//       console.log(" saved:", items);
//     }
//   } catch (error) {
//     console.error("Error saving to storage:", error);
//   }
// };

// const loadFromStorage = (): Item[] => {
//   try {
//     if (typeof window !== "undefined") {
//       const saved = localStorage.getItem(_STORAGE_KEY);
//       if (saved) {
//         const parsed = JSON.parse(saved);
//         console.log(" loaded:", parsed);
//         return parsed;
//       }
//     }
//   } catch (error) {
//     console.error("Error loading from storage:", error);
//   }
//   return [];
// };

// export function Provider({ children }: { children: React.ReactNode }) {
//   const [items, setItems] = useState<Item[]>([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
//   const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
//   const [isHydrated, setIsHydrated] = useState(false);

//   // Load  from storage on mount (client-side only)
//   useEffect(() => {
//     setIsHydrated(true);
//     const savedItems = loadFromStorage();
//     console.log("Loading saved items:", savedItems);
//     if (savedItems.length > 0) {
//       setItems(savedItems);
//     }
//   }, []);

//   // Save  to storage whenever items change (after hydration)
//   useEffect(() => {
//     if (isHydrated) {
//       saveToStorage(items);
//     }
//   }, [items, isHydrated]);

//   const addTo = (item: Omit<Item, "quantity">) => {
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

//   const removeFrom = (variantId: string) => {
//     setItems((prevItems) => prevItems.filter((i) => i.variantId !== variantId));
//   };

//   const updateQuantity = (variantId: string, quantity: number) => {
//     if (quantity <= 0) {
//       removeFrom(variantId);
//       return;
//     }
//     setItems((prevItems) =>
//       prevItems.map((i) => (i.variantId === variantId ? { ...i, quantity } : i))
//     );
//   };

//   const open = () => setIsOpen(true);
//   const close = () => setIsOpen(false);

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
//     <Context.Provider
//       value={{
//         items,
//         isOpen,
//         addTo,
//         removeFrom,
//         updateQuantity,
//         open,
//         close,
//         subtotal,
//         checkoutUrl,
//         createCheckout,
//         isCheckoutLoading,
//       }}
//     >
//       {children}
//     </Context.Provider>
//   );
// }

// export function use() {
//   const context = useContext(Context);
//   if (context === undefined) {
//     throw new Error("use must be used within a Provider");
//   }
//   return context;
// }





"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface Item {
  variantId: string;
  productId: string;
  title: string;
  price: string;
  quantity: number;
  image: string;
  sku: string;
}

interface ContextType {
  items: Item[];
  isOpen: boolean;
  addTo: (item: Omit<Item, "quantity">) => void;
  removeFrom: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  open: () => void;
  close: () => void;
  subtotal: string;
  checkoutUrl: string | null;
  createCheckout: () => Promise<void>;
  isCheckoutLoading: boolean;
}

const Context = createContext<ContextType | undefined>(undefined);

const _STORAGE_KEY = "shopping--items";

// Storage helper functions
const saveToStorage = (items: Item[]) => {
  try {
    if (typeof window !== "undefined") {
      localStorage.setItem(_STORAGE_KEY, JSON.stringify(items));
      console.log(" saved to localStorage:", items);
    }
  } catch (error) {
    console.error("Error saving to storage:", error);
  }
};

const loadFromStorage = (): Item[] => {
  try {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        console.log(" loaded from localStorage:", parsed);
        return parsed;
      }
    }
  } catch (error) {
    console.error("Error loading from storage:", error);
  }
  return [];
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Initialize with a function to avoid hydration mismatch
  const [items, setItems] = useState<Item[]>(() => {
    // Only load from storage on client side
    if (typeof window !== "undefined") {
      return loadFromStorage();
    }
    return [];
  });
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted flag after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Save  to storage whenever items change
  useEffect(() => {
    if (isMounted) {
      saveToStorage(items);
    }
  }, [items, isMounted]);

  const addTo = (item: Omit<Item, "quantity">) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.variantId === item.variantId
      );
      if (existingItem) {
        return prevItems.map((i) =>
          i.variantId === item.variantId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    // setIsOpen(true); - removed for pop up  behavior
  };

  const removeFrom = (variantId: string) => {
    setItems((prevItems) => prevItems.filter((i) => i.variantId !== variantId));
  };

  const updateQuantity = (variantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFrom(variantId);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((i) => (i.variantId === variantId ? { ...i, quantity } : i))
    );
  };

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lineItems }),
      });

      const data = await response.json();
      if (data.checkoutUrl) {
        setCheckoutUrl(data.checkoutUrl);
        window.location.href = data.checkoutUrl;
      }
    } catch (error) {
      console.error("Error creating checkout:", error);
      alert("Failed to create checkout. Please try again.");
    } finally {
      setIsCheckoutLoading(false);
    }
  };

  return (
    <Context.Provider
      value={{
        items,
        isOpen,
        addTo,
        removeFrom,
        updateQuantity,
        open,
        close,
        subtotal,
        checkoutUrl,
        createCheckout,
        isCheckoutLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useCart() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("use must be used within a Provider");
  }
  return context;
}