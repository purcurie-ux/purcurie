"use client";

import { useEffect, useState, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { User } from "lucide-react";

export function Navbar() {
  const { openCart, items, } = useCart();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    setMounted(true);
    
    // Check if desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth > 991);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Desktop menu toggle
  const toggleDesktopMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeDesktopMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Click outside to close (desktop only)
  useEffect(() => {
    if (!isDesktop || !isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeDesktopMenu();
      }
    };

    // Add small delay to prevent immediate close
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDesktop, isMenuOpen]);

  useEffect(() => {
  if (!isSearchOpen) return;

  const handleClickOutside = (event: MouseEvent) => {
    const searchEl = document.querySelector('.search-open') as HTMLElement;
    if (searchEl && !searchEl.contains(event.target as Node)) {
      closeSearch(false);
    }
  };

  const timer = setTimeout(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, 100);

  return () => {
    clearTimeout(timer);
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [isSearchOpen]);

  const handleCartClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openCart();
  };

 const openSearch = () => {
  setIsSearchOpen(true);
  setTimeout(() => searchInputRef.current?.focus(), 50);
};

const closeSearch = (clearQuery = true) => {
  setIsSearchOpen(false);
  if (clearQuery) setSearchQuery("");
};

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <style jsx global>{`
        /* Desktop menu animations */
        .desktop-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.4s ease, visibility 0.4s ease;
          background-color: rgba(0, 0, 0, 0.5);
        }
        
        .desktop-menu-overlay.open {
          opacity: 1;
          visibility: visible;
        }
        
        .desktop-menu-content {
          background: #1D2C34;
          height: 100%;
          transform: translateX(-100%);
          width: 50%;
          transition: transform 0.4s ease;
          position: relative;
        }
        
        .desktop-menu-overlay.open .desktop-menu-content {
          transform: translateX(0);
        }
        
        .desktop-menu-links .nav-link {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          color: #fff !important;
        }
        
        .desktop-menu-overlay.open .desktop-menu-links .nav-link {
          opacity: 1;
          transform: translateX(0);
        }
        
        .desktop-menu-overlay.open .desktop-menu-links .nav-link:nth-child(1) {
          transition-delay: 0.1s;
        }
        
        .desktop-menu-overlay.open .desktop-menu-links .nav-link:nth-child(2) {
          transition-delay: 0.15s;
        }
        
        .desktop-menu-overlay.open .desktop-menu-links .nav-link:nth-child(3) {
          transition-delay: 0.2s;
        }
        
        .desktop-menu-overlay.open .desktop-menu-links .nav-link:nth-child(4) {
          transition-delay: 0.25s;
        }
        
        .desktop-menu-overlay.open .desktop-menu-links .nav-link:nth-child(5) {
          transition-delay: 0.3s;
        }

        /* Ensure proper text colors in desktop menu */
        .desktop-menu-content .open-menu-top .close-button {
          color: #fff !important;
        }

        .desktop-menu-content .nav-bottom {
          color: #fff !important;
        }

        .desktop-menu-content .nav-bottom div {
          color: #fff !important;
        }

   /* Mobile only: Target screen widths below 991px */
        @media screen and (max-width: 991px) {
          /* 1. Global Reset for all links to remove double lines */
          .nav-menu .nav-link,
          .menu-wrap .nav-link {
            padding-top: 15px !important;
            padding-bottom: 15px !important;
            margin: 0 !important;
            border: none !important; /* Kill all default borders first */
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important; /* Force single bottom line */
            width: 100% !important;
            display: block !important;
          }

           /* 2. FORCE the line on the last item (Login) */
          .nav-menu .nav-link:last-child,
          .menu-wrap .nav-link:last-child {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;

          /* 3. Keep the top line on Login to match the double-line bridge look */
          .nav-link.login-link,
          .menu-wrap .nav-link.login-link {
            border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
          }
        }

        /* STICKY FIX: Desktop Only (992px and up) */
        @media screen and (min-width: 992px) {
          /* This kills the "ghost" menu behind your dark overlay */
          .nav-menu.w-nav-menu,
          [data-nav-menu-open] {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            transform: none !important;
            pointer-events: none !important;
          }

          /* Ensures the 'Menu' button doesn't trigger Webflow's default animation */
          .w-nav-overlay {
            display: none !important;
          }
        }

        @media screen and (min-width: 992px) {
          /* 1. The Overlay: Faster fade in, slower fade out */
          .desktop-menu-overlay {
            transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), 
                        visibility 0.6s;
          }

          /* 2. The Slide: Using a "Spring" curve (0.16, 1, 0.8, 1) */
          .desktop-menu-content {
            transition: transform 1.25s cubic-bezier(0.25, 1, 0.5, 1) !important;
            will-change: transform;
          }

          /* 3. The Links: The "Buttery" Secret */
          .desktop-menu-links .nav-link {
            opacity: 0;
            transform: translateY(15px); /* Added skew for organic motion */
            transition: 
              transform 1.1s cubic-bezier(0.16, 1, 0.9, 1), 
              opacity 0.8s ease-out !important;
            will-change: transform, opacity;
          }

          /* When Menu is Open */
          .desktop-menu-overlay.open .desktop-menu-links .nav-link {
            opacity: 1;
            transform: translateY(0) skewY(0deg);
          }

          /* 4. Increased Staggering */
          .desktop-menu-overlay.open .desktop-menu-links .nav-link:nth-child(1) { transition-delay: 0.28s; }
          .desktop-menu-overlay.open .desktop-menu-links .nav-link:nth-child(2) { transition-delay: 0.29s; }
          .desktop-menu-overlay.open .desktop-menu-links .nav-link:nth-child(3) { transition-delay: 0.30s; }
          .desktop-menu-overlay.open .desktop-menu-links .nav-link:nth-child(4) { transition-delay: 0.33s; }
          .desktop-menu-overlay.open .desktop-menu-links .nav-link:nth-child(5) { transition-delay: 0.34s; }

          /* 5. Smooth Hover Out */
          .desktop-menu-links .nav-link:hover {
            color: #CDDFE7  !important;
            opacity: 0.4 !important;
            transform: translateX(8px) !important;
            transition: all 0.7s cubic-bezier(0.16, 1, 0.8, 1) !important;
          }
        }
      `}</style>

      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <div className="container w-container">
          <div className="nav-wrap">
            <a
              href="/"
              aria-current="page"
              className="brand w-inline-block w--current"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0984/6843/0146/files/PURCURIE_2.png?v=1768757461"
                loading="lazy"
                alt="Purcurie"
                style={{ height: "40px", width: "auto", objectFit: "contain" }}
              />
            </a>
            <div className="nav-menu-wrap">
              {/* Desktop Menu Toggle */}
              <div
                data-w-id="d3adb6d7-cc56-c118-6985-cf7153b16475"
                className="nav-left"
                onClick={isDesktop ? toggleDesktopMenu : undefined}
                style={{ cursor: "pointer" }}
              >
                <div className="nav-button">
                  <div className="top-line"></div>
                  <div className="center-line"></div>
                  <div className="bottom-line"></div>
                </div>
                <div>Menu</div>
              </div>
              <div className="nav-right">
                {/* Account Icon */}
                <a 
                  href="https://shopify.com/98468430146/account" 
                  className="w-commerce-commercecartopenlink cart-button desktop w-inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="search-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={20} strokeWidth={1.5} color="#1D2C34" />
                  </div>
                </a>
                {/* Cart */}
                <div
                  className="w-commerce-commercecartwrapper"
                  data-node-type="commerce-cart-wrapper"
                >
                  <a
                    className="w-commerce-commercecartopenlink cart-button desktop w-inline-block"
                    role="button"
                    aria-haspopup="dialog"
                    aria-label="Open cart"
                    href="#"
                    onClick={handleCartClick}
                  >
                    <div
                      style={{
                         display: mounted ? (cartCount > 0 ? "block" : "none") : "none",
                      }}
                      data-count-hide-rule="empty"
                      className="w-commerce-commercecartopenlinkcount cart-quantity"
                    >
                      {mounted ? cartCount : 0}
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f675704fa71c85c348876_ic-cart.svg"
                      loading="lazy"
                      alt="Cart Icon"
                    />
                  </a>
                </div>
                {/* Search */}
                <div
                data-w-id="d3adb6d7-cc56-c118-6985-cf7153b164ae"
                className="search-icon"
                style={{ cursor: "pointer" }}
                onClick={openSearch}
              >
                <img
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f6757dba6c47670af87be_ic-search.svg"
                  loading="lazy"
                  alt="Search Icon"
                />
              </div>
              </div>
            </div>
            {/* Webflow's nav menu - for mobile */}
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a href="/about" className="nav-link">
                About us
              </a>
              <a href="/categories" className="nav-link">
                Categories
              </a>
              <a href="/product" className="nav-link">
                Shop
              </a>
              <a href="/track" className="nav-link">
              Track Order
            </a>
              <a href="/contact" className="nav-link">
                Contact us
              </a>
              <a 
                href="https://shopify.com/98468430146/account" 
                className="nav-link login-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </a>
            </nav>
            {/* Mobile menu toggle */}
            <div className="nav-right-mobile">
              <div
                className="w-commerce-commercecartwrapper"
                data-node-type="commerce-cart-wrapper"
                style={{display: 'flex', gap: '6px'}}
              >
                <a 
                  href="https://shopify.com/98468430146/account" 
                  className="w-commerce-commercecartopenlink cart-button w-inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="search-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={20} strokeWidth={1.5} color="#1D2C34" />
                  </div>
                </a>
                <a
                  className="w-commerce-commercecartopenlink cart-button w-inline-block"
                  role="button"
                  aria-haspopup="dialog"
                  aria-label="Open cart"
                  href="#"
                  onClick={handleCartClick}
                >
                  <div
                    style={{
                      display: mounted && cartCount > 0 ? "block" : "none",
                    }}
                    data-count-hide-rule="empty"
                    className="w-commerce-commercecartopenlinkcount cart-quantity"
                  >
                    {mounted ? cartCount : 0}
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f675704fa71c85c348876_ic-cart.svg"
                    loading="lazy"
                    alt="Cart Icon"
                    className="cart-icon"
                  />
                </a>
              </div>
              <div className="menu-button w-nav-button">
                <div className="top-line"></div>
                <div className="center-line"></div>
                <div className="bottom-line"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar - mirrors Webflow's exact structure */}
<div
  className="search-open"
style={{
  display: "block",
  transform: isSearchOpen
    ? "translate3d(0px, 0%, 0px)"
    : "translate3d(0px, -100%, 0px)",
  transformStyle: "preserve-3d",
  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform",
}}
>
  <form
    action="/search"
    className="searchbar w-form"
    onSubmit={(e) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        window.location.href = `/search?query=${encodeURIComponent(searchQuery.trim())}`;
        closeSearch();
      }
    }}
  >
    <input
      ref={searchInputRef}
      className="search-input w-input"
      maxLength={256}
      placeholder="Search Here..."
      id="search"
      required
      type="search"
      name="query"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <input className="d-none w-button" type="submit" value="Search" />
    <div
      data-w-id="d3adb6d7-cc56-c118-6985-cf7153b164f9"
      onClick={() => closeSearch(true)} // ← clears query on X button
      style={{ cursor: "pointer" }}
    >
      <img
        loading="lazy"
        alt="Close Icon"
        src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f7b22b344fca339adf748_ic-close.svg"
      />
    </div>
  </form>
</div>
        
        {/* CART MODAL */}
        <CartModal />
      </div>

      {/* Desktop Menu Overlay with Smooth Animation */}
      {isDesktop && (
        <div className={`desktop-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
          <div 
            ref={menuRef}
            className="desktop-menu-content open-menu"
          >
            <div className="open-menu-top">
              <div
                className="close-button"
                onClick={closeDesktopMenu}
                style={{ cursor: "pointer" }}
              >
                <div>CLOSE</div>
                <img
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f693e08019c9b0408005d_ic-close.svg"
                  loading="lazy"
                  alt="Close Icon"
                />
              </div>
              <div className="menu-wrap desktop-menu-links">
                <a href="/about" className="nav-link" onClick={closeDesktopMenu}>
                  About us
                </a>
                <a href="/categories" className="nav-link" onClick={closeDesktopMenu}>
                  Categories
                </a>
                <a href="/product" className="nav-link" onClick={closeDesktopMenu}>
                  Shop
                </a>
               <a href="/track" className="nav-link">
                Track Order
              </a>
                <a href="/contact" className="nav-link" onClick={closeDesktopMenu}>
                  Contact us
                </a>
                <a 
                  href="https://shopify.com/98468430146/account" 
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Login
                </a>
              </div>
            </div>
            <div className="nav-bottom">
              <div>© 2026 Purcurie.</div>
              <div className="social-icon-wrap">
                <a
                  href="https://x.com/PurCurie"
                  target="_blank"
                  className="social-icon w-inline-block"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f6ba7b344fca3399f4e2c_ic-twitter.svg"
                    loading="lazy"
                    alt="Twitter"
                  />
                </a>
                <a
                  href="https://www.instagram.com/purcurie/"
                  target="_blank"
                  className="social-icon w-inline-block"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f6ba7f89048e8516b771f_ic-insta.svg"
                    loading="lazy"
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// CartModal Component
function CartModal() {
  // ✅ ADDED NEW DISCOUNT VARIABLES HERE
  const {
    items,
    isOpen,
    closeCart,
    subtotal,
    createCheckout,
    isCheckoutLoading,
    discountCode,
    setDiscountCode,
    applyDiscount,
    discountedTotal,
    discountError,
    isValidatingCode,
    removeDiscount,
  } = useCart();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRemoveFromCart = () => {
    removeDiscount();
    window.dispatchEvent(new Event("coupon-removed"));
  };
  const handleCheckoutClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    await createCheckout();
  };

  if (!mounted) return null;

  return (
    <>
      {isOpen && (
     <div
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9998,
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? "visible" : "hidden",
            transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.8s",
          }}
          onClick={closeCart}
        />
      )}

      <div
        style={{
          display: "flex",
          zIndex: 9999,
          visibility: isOpen ? "visible" : "hidden",
          pointerEvents: isOpen ? "auto" : "none",
        }}
        className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal"
      >
        <div
        data-node-type="commerce-cart-container"
          role="dialog"
          className="w-commerce-commercecartcontainer"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            transform: isOpen ? "translateX(0)" : "translateX(100%)",
            transition: isOpen 
              ? "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)" 
              : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            willChange: "transform",
            boxShadow: isOpen ? "-10px 0 50px rgba(0,0,0,0.15)" : "none",
          }}
        >
          <div className="w-commerce-commercecartheader" style={{ flexShrink: 0 }}>
            <h4 className="w-commerce-commercecartheading">Your Cart</h4>
            <a
              className="w-commerce-commercecartcloselink w-inline-block"
              role="button"
              aria-label="Close cart"
              onClick={(e) => { e.preventDefault(); closeCart(); }}
              style={{ cursor: "pointer" }}
            >
              <svg width="16px" height="16px" viewBox="0 0 16 16">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g fillRule="nonzero" fill="#333333">
                    <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
                  </g>
                </g>
              </svg>
            </a>
          </div>

          <div
            className="w-commerce-commercecartformwrapper"
            style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}
          >
            {items.length > 0 ? (
              <div
                className="w-commerce-commercecartform"
                data-node-type="commerce-cart-form"
                style={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                <div
                  className="w-commerce-commercecartlist"
                  style={{ flex: 1, overflowY: "auto", paddingRight: "4px" }}
                >
                  {items.map((item) => (
                    <CartItem key={item.variantId} item={item} />
                  ))}
                </div>

                {/* ✅ REPLACED OLD FOOTER WITH NEW DISCOUNT FOOTER ✅ */}
                <div
                  className="w-commerce-commercecartfooter"
                  style={{
                    flexShrink: 0,
                    backgroundColor: "#fff",
                    borderTop: "1px solid #f5f5f5",
                    position: "relative",
                    zIndex: 10,
                    padding: "20px", 
                  }}
                >
              {/* Discount Input UI */}
                  <div style={{ marginBottom: "20px" }}>
                    {/* ✅ New Label Text Added Here */}
                    <p style={{ 
                      fontSize: "11px", 
                      fontWeight: "700", 
                      color: "#1D2C34", 
                      marginBottom: "8px", 
                      letterSpacing: "0.5px" 
                    }}>
                      ADD DISCOUNT CODE
                    </p>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <input
                        type="text"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !discountedTotal) {
                            e.preventDefault();
                            applyDiscount();
                          }
                        }}
                        placeholder="Promo code"
                        disabled={!!discountedTotal}
                        style={{
                          padding: "10px 12px",
                          width: "100%",
                          border: "1px solid #1D2C34",
                          borderRadius: "4px",
                          fontSize: "14px",
                          outline: "none",
                          backgroundColor: discountedTotal ? "#f5f5f5" : "white",
                        }}
                      />
                    <button
                        type="button"
                        onClick={discountedTotal ? handleRemoveFromCart : applyDiscount}
                        disabled={isValidatingCode || (!discountedTotal && !discountCode)}
                        style={{
                          padding: "10px 20px",
                          background: discountedTotal ? "#d9534f" : "#1D2C34",
                          color: "white",
                          cursor: isValidatingCode ? "wait" : "pointer",
                          borderRadius: "4px",
                          border: "none",
                          fontSize: "14px",
                          fontWeight: "500",
                          opacity: isValidatingCode ? 0.7 : 1,
                          transition: "background-color 0.2s ease",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {isValidatingCode ? "..." : discountedTotal ? "REMOVE" : "APPLY"}
                      </button>
                    </div>
                    {/* Error Message */}
                    {discountError && (
                      <p style={{ color: "#d9534f", fontSize: "12px", marginTop: "6px", marginBottom: "0" }}>
                        {discountError}
                      </p>
                    )}
                  </div>

                  {/* Totals Section */}
                  {discountedTotal ? (
                    <>
                      <div className="w-commerce-commercecartlineitem" style={{ marginBottom: "4px" }}>
                        <div style={{ color: "#888" }}>Subtotal</div>
                        <div style={{ textDecoration: "line-through", color: "#888" }}>
                          ₹ {subtotal} INR
                        </div>
                      </div>
                      <div className="w-commerce-commercecartlineitem">
                        <div style={{ fontWeight: "bold", color: "#2e7d32" }}>Discount Applied</div>
                        <div className="w-commerce-commercecartordervalue" style={{ color: "#2e7d32" }}>
                          ₹ {discountedTotal} INR
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-commerce-commercecartlineitem">
                      <div>Subtotal</div>
                      <div className="w-commerce-commercecartordervalue">
                        ₹ {subtotal} INR
                      </div>
                    </div>
                  )}

                  {/* Checkout Button */}
                  <div style={{ marginTop: "15px" }}>
                    <button
                      type="button"
                      className="w-commerce-commercecartcheckoutbutton primary-button"
                      style={{
                        cursor: isCheckoutLoading ? "wait" : "pointer",
                        opacity: isCheckoutLoading ? 0.7 : 1,
                        border: "none",
                        width: "100%",
                        textAlign: "center",
                      }}
                      onClick={handleCheckoutClick}
                      disabled={isCheckoutLoading}
                    >
                      {isCheckoutLoading ? "Processing..." : "Continue to Checkout"}
                    </button>
                  </div>
                </div>
                {/* ✅ END OF NEW FOOTER ✅ */}

              </div>
            ) : (
              <div className="w-commerce-commercecartemptystate">
                <div aria-label="This cart is empty" aria-live="polite">
                  No items found.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function CartItem({ item }: { item: any }) {
  const { updateQuantity, removeFromCart } = useCart();
  const [localQuantity, setLocalQuantity] = useState<number>(item.quantity);

  useEffect(() => {
    setLocalQuantity(item.quantity);
  }, [item.quantity]);

  const increment = () => {
    const newQty = localQuantity + 1;
    setLocalQuantity(newQty);
    updateQuantity(item.variantId, newQty);
  };

  const decrement = () => {
    if (localQuantity > 1) {
      const newQty = localQuantity - 1;
      setLocalQuantity(newQty);
      updateQuantity(item.variantId, newQty);
    } else {
      removeFromCart(item.variantId);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const parsed = parseInt(val);

    if (val === "") {
      // @ts-ignore
      setLocalQuantity("");
      return;
    }

    if (!isNaN(parsed) && parsed > 0) {
      setLocalQuantity(parsed);
      updateQuantity(item.variantId, parsed);
    }
  };

  return (
    <div className="w-commerce-commercecartitem">
      <style jsx global>{`
        .no-spinner::-webkit-inner-spin-button,
        .no-spinner::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .no-spinner {
          -moz-appearance: textfield;
        }
      `}</style>

      <img
        src={item.image}
        alt={item.title}
        className="w-commerce-commercecartitemimage"
      />

      <div className="w-commerce-commercecartiteminfo">
        <div className="w-commerce-commercecartproductname">{item.title}</div>
        <div>{item.price}</div>
        <ul className="w-commerce-commercecartoptionlist">
          <li>
            <span>SKU: </span>
            <span>{item.sku}</span>
          </li>
        </ul>

<button
  onClick={() => removeFromCart(item.variantId)}
  className="cart-remove-btn"
>
  <svg
    className="cart-remove-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6l-1 14H6L5 6"/>
    <path d="M10 11v6"/>
    <path d="M14 11v6"/>
    <path d="M9 6V4h6v2"/>
  </svg>

  REMOVE
</button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #1D2C34",
          borderRadius: "50px",
          padding: "4px 8px",
          gap: "8px",
          height: "36px",
          backgroundColor: "#fff",
        }}
      >
        <button
          type="button"
          onClick={decrement}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: "4px",
          }}
        >
          {localQuantity === 1 ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          ) : (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          )}
        </button>

        <input
          className="no-spinner"
          type="number"
          value={localQuantity}
          onChange={handleInputChange}
          style={{
            width: "30px",
            textAlign: "center",
            border: "none",
            padding: "0",
            margin: "0",
            fontSize: "14px",
            fontWeight: "600",
            outline: "none",
            background: "transparent",
          }}
        />

        <button
          type="button"
          onClick={increment}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: "4px",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  );
}