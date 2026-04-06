
"use client";

import React, { useState } from "react"; // 👈 1. Added useState here
import Link from "next/link";
import Image from 'next/image';

import { 
  Map, 
  MapMarker, 
  MarkerContent, 
  MarkerLabel, 
  MarkerPopup, 
  MapControls 
} from "@/components/ui/map";
import { Button } from "@/components/ui/button";
import { Star, Navigation, Clock, ExternalLink } from "lucide-react";

// ✅ DEFINE MULTIPLE LOCATIONS HERE
const locations = [
  {
    id: 1,
    name: "Purcurie Warehouse",
    label: "WH",
    category: "Skincare & Cosmetics",
    rating: 4.9,
    reviews: 120,
    hours: "10:00 AM - 7:00 PM",
    image: "https://cdn.shopify.com/s/files/1/0984/6843/0146/files/pexels-canmiless-5860937.jpg?v=1768701273", 
    lat: 19.42001489078129,
    lng: 72.82934546961576,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=19.42001489078129,72.82934546961576",
    color: "bg-green-500" // Custom color for HQ
  },
  {
    id: 2,
    name: "Purcurie Head Office",
    label: "HQ",
    category: "",
    rating: 5.0,
    reviews: 1,
    hours: "Available Now",
    image: "https://cdn.shopify.com/s/files/1/0984/6843/0146/files/pexels-cadomaestro-1170412.jpg?v=1768701271", 
    lat: 19.39550, // ✅ Your Detected Latitude
    lng: 72.84970, // ✅ Your Detected Longitude
    googleMapsUrl: "https://www.google.com/maps?q=19.4187611,72.8288798",
    color: "bg-blue-500" // Different color to distinguish it
  }
];

const PaymentIcons = () => {
  return (
    <div className="ft-payment-icons" style={{ display: 'flex', gap: '20px', alignItems: 'center', opacity: 0.8 }}>
      {/* UPI - High Contrast White */}
      <Image 
        src="https://cdn.shopify.com/s/files/1/0984/6843/0146/files/Untitled_design_58.png?v=1773996577" 
        alt="UPI" 
        height={35} 
        width={70} // Maintain aspect ratio
        style={{ height: '35px', width: 'auto' }} 
      />
      
      {/* Visa - White Version */}
      <Image 
        src="https://cdn.shopify.com/s/files/1/0984/6843/0146/files/Untitled_design_61.png?v=1773996375" 
        alt="Visa" 
        height={65} 
        width={100}
        style={{ height: '65px', width: 'auto' }} 
      />
      
      {/* Mastercard - White Version */}
      <Image 
        src="https://cdn.shopify.com/s/files/1/0984/6843/0146/files/mastercard-old-3-svgrepo-com.svg?v=1773995784" 
        alt="Mastercard" 
        height={50} 
        width={80}
        style={{ height: '50px', width: 'auto' }} 
        unoptimized // Recommended for SVGs
      />
    </div>
  );
};

function Footer() {
// 👈 2. Define State for the "Protection Layer"
  const [isMapActive, setIsMapActive] = useState(false);

  return (
    <section className="footer">
      <div className="footer-left">
        <div className="footer-inner">
          
          <div className="footer-img-wrap">
            <div 
              className="footer-img" 
              style={{ 
                height: "320px", 
                width: "100%", 
                borderRadius: "12px", 
                overflow: "hidden", 
                position: "relative",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              {/* Center the map between the two points approx */}
              <Map 
                center={[72.8290, 19.4190]} 
                zoom={11} // Zoomed in to see both close points
              >
                {/* ✅ MAP THROUGH LOCATIONS ARRAY */}
                {locations.map((loc) => (
                  <MapMarker 
                    key={loc.id} 
                    longitude={loc.lng} 
                    latitude={loc.lat}
                  >
                    <MarkerContent>
                      {/* Dynamic Color based on location */}
                      <div className={`size-5 rounded-full ${loc.color} border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform`} />
                      <MarkerLabel position="bottom" className="text-black font-bold bg-white px-2 py-0.5 rounded shadow-sm text-[10px]">
                        {loc.label}
                      </MarkerLabel>
                    </MarkerContent>
                    
                    <MarkerPopup className="p-0 w-64 bg-white rounded-lg shadow-xl text-left">
                      <div className="relative h-32 overflow-hidden rounded-t-lg bg-gray-200">
                        <Image
                        src={loc.image}
                        alt={loc.name}
                        width={500}
                        height={500}
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="w-full h-full object-cover"
                      />
                      </div>
                      <div className="space-y-2 p-3">
                        <div>
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            {loc.category}
                          </span>
                          <h3 className="font-semibold text-gray-900 leading-tight text-sm">
                            {loc.name}
                          </h3>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="size-3.5 fill-amber-400 text-amber-400" />
                            <span className="font-medium text-black">{loc.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                          <Clock className="size-3.5" />
                          <span>{loc.hours}</span>
                        </div>
                        <div className="flex gap-2 pt-1">
                          <Button 
                            size="sm" 
                            className="flex-1 h-8 text-xs bg-black text-white hover:bg-gray-800"
                            onClick={() => window.open(loc.googleMapsUrl, '_blank')}
                          >
                            <Navigation className="size-3.5 mr-1.5" />
                            Directions
                          </Button>
                        </div>
                      </div>
                    </MarkerPopup>
                  </MapMarker>
                ))}
                
                <MapControls 
                  position="top-right" 
                  className="bg-white text-black border border-gray-300 rounded-md shadow-sm" 
/>
              </Map>
              {/* 👇 3. THE PROTECTION LAYER (Prevents scrolling trap) */}
              {!isMapActive && (
                <div 
                  onClick={() => setIsMapActive(true)}
                  onTouchStart={() => setIsMapActive(true)}
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 50,
                    backgroundColor: "rgba(0,0,0,0.0)", // Transparent but blocks clicks
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  title="Click to interact with map"
                >
                  <div className="bg-black/80 text-white px-4 py-2 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20 shadow-lg">
                    Tap to Explore Map
                  </div>
                </div>
              )}
            </div>
            
            {/* View Store Link (Points to HQ) */}
            <Link 
              href={locations[0].googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="location w-inline-block"
              style={{ marginTop: "15px", display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
            >
             <Image
              src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f8f8cfcbbe1d714f2ab1c_ic-location.svg"
              alt="Location Icon"
              width={20}
              height={20}
              style={{ height: "auto" }}
            />
              <div style={{ color: "white", fontWeight: "500" }}>Purcurie Store</div>
            </Link>
          </div>

          {/* MIDDLE LINKS (Unchanged) */}
          <div className="ft-menu-wrap">
            <div>
              <div className="ft-sub-title">Pages</div>
              <div className="ft-menu">
                <Link href="/about" className="ft-link">About us</Link>
                <Link href="/categories" className="ft-link">Categories</Link>
                <Link href="/product" className="ft-link">Shop</Link>
                <Link href="/contact" className="ft-link" style={{ whiteSpace: "nowrap" }}>
                Contact us
              </Link>
              </div>
            </div>
            <div>
              <div className="ft-sub-title">Utility</div>
              <div className="ft-menu">
                <Link href="/disclaimer" className="ft-link">Disclaimer</Link>
                <Link href="/privacy" className="ft-link">Privacy Policy</Link>
                <Link href="/refund" className="ft-link">Return Policy</Link>
                <Link href="/terms" className="ft-link">Terms & Conditions</Link>
                <Link href="/shipping" className="ft-link">Shipping Policy</Link>
              </div>
            </div>
            <div>
              <div className="ft-sub-title">Contact</div>
              <div className="ft-menu">
                <Link href="tel:+(91) 97697 77006" className="ft-link">+(91) 97697 77006</Link>
                <Link href="mailto:contact@purcurie.com" className="ft-link">contact@purcurie.com</Link>
              </div>
              <div className="ft-legal-info" style={{ marginTop: '10px', fontSize: '0.9rem', opacity: 1, color: 'white' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>PUR CURIE PRIVATE LIMITED</p>
              <p style={{ marginBottom: '4px' }}>
                Room No. 001, Janki Apartment, Bhau Complex, <br />
                Achole Road, Nallasopara West, Palghar, <br />
                Maharashtra, 401203
              </p>
              <p>GSTIN: 27AAQCP4131L1Z0</p>
            </div>
            </div>
          </div>
        </div>

        <div>
  {/* Existing Contact & Legal sections above... */}

  <div className="ft-bottom-bar" style={{ marginTop: '1px', paddingTop: '1px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
    
    {/* Copyright Notice */}
    <div className="ft-copyright" style={{ opacity: 0.6, fontSize: '0.85rem' }}>
      © 2026 Purcurie. All rights reserved. 
      <br />
      Operated by PUR CURIE PRIVATE LIMITED
    </div>

{/* 3. JUST CALL THE COMPONENT HERE */}
        <PaymentIcons />
  </div>
</div>
        
        {/* SOCIAL ICONS (Unchanged) */}
        {/* SOCIAL ICONS (Fixed Size & Centering) */}
{/* SOCIAL ICONS (Restored Original Circle Style) */}
<div className="footer-bottom">
  <div /> 
  <div className="social-icon-wrap" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
    
    {/* Twitter/X Icon */}
    <Link 
      href="https://x.com/PurCurie" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="social-icon w-inline-block"
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: '36px',             // Diameter of the circle
        height: '36px',            // Diameter of the circle
        borderRadius: '50%',       // Makes it a perfect circle
        border: '1px solid #fff',  // The thin white ring
        transition: 'opacity 0.3s'
      }}
    >
      <Image 
        src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f6ba7b344fca3399f4e2c_ic-twitter.svg" 
        alt="Twitter"
        width={16}                 // Smaller icon size to fit inside the ring
        height={16}
        unoptimized
      />
    </Link>

    {/* Instagram Icon */}
    <Link 
      href="https://www.instagram.com/Purcurie/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="social-icon w-inline-block"
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: '36px', 
        height: '36px', 
        borderRadius: '50%', 
        border: '1px solid #fff', 
        transition: 'opacity 0.3s'
      }}
    >
      <Image 
        src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f6ba7f89048e8516b771f_ic-insta.svg" 
        alt="Instagram"
        width={16}
        height={16}
        unoptimized
      />
    </Link>

  </div>
</div>
      </div>

      <div className="footer-right">
        <div className="footer-wrap">
          <div>
            <div className="ft-sub-title-02">Exclusive offers & tips</div>
            <p className="single-text"
            style={{ color: "white" }}
            >
              Be the first to know about exclusive deals, beauty tips, and new arrivals.
            </p>
          </div>
          <div className="ft-form-block w-form">
            <form id="wf-form-Contact-Form" 
            name="wf-form-Contact-Form" 
            className="footer-form"
            // 👇 PASTE YOUR FORMSPREE URL HERE
              action="https://formspree.io/f/xwvvlpko" 
              method="POST"
              >
              
              <input className="ft-input w-input" 
              name="email" 
              placeholder="Email" 
              type="email" 
              id="email" 
              required />
              <input type="submit" 
              className="ft-submit-button w-button" 
              value="" />
            </form>
          </div>
        </div>
        <div>© 2026 Purcurie</div>
      </div>
    </section>
  );
}

export default Footer;