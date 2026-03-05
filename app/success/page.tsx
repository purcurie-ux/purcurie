"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    // This clears the items from React state and LocalStorage
    clearCart();
  }, [clearCart]);

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '100px 20px', 
      fontFamily: 'inherit',
      color: '#1D2C34' 
    }}>
      <div style={{ fontSize: '50px', marginBottom: '20px' }}>✨</div>
      <h1 style={{ fontSize: '32px', fontWeight: '700' }}>Order Confirmed!</h1>
      <p style={{ fontSize: '18px', margin: '20px 0', opacity: 0.8 }}>
        Thank you for choosing **Purcurie**. Your ZestFoam is on its way!
      </p>
      <Link href="/product" style={{ 
        display: 'inline-block', 
        marginTop: '30px', 
        padding: '16px 32px', 
        background: '#1D2C34',
        color: '#CDDFE7', 
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: '700',
        fontSize: '14px',
        letterSpacing: '1px'
      }}>
        CONTINUE SHOPPING
      </Link>
    </div>
  );
}