export const SITE_VERSION = "1.0.1"; // 👈 bump this on every deployment

export function checkAndClearCache() {
  try {
    const storedVersion = localStorage.getItem("site_version");

    if (storedVersion !== SITE_VERSION) {
      
      // ✅ Clears cart
      localStorage.removeItem("shopping-cart-items");

      // ✅ Clears coupon/discount
      localStorage.removeItem("active_coupon");

      // ✅ Extra safety keys
      localStorage.removeItem("cart");
      localStorage.removeItem("cartItems");
      localStorage.removeItem("discount");
      localStorage.removeItem("coupon_code");
      localStorage.removeItem("coupon_discount");

      // ✅ Save new version
      localStorage.setItem("site_version", SITE_VERSION);

      console.log("✅ Cache cleared for version:", SITE_VERSION);
    }
  } catch (err) {
    console.error("Cache clear failed:", err);
  }
}