// app/search/page.tsx

import { searchProducts } from "@/lib/shopify";
import Link from "next/link";

interface SearchPageProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.query?.trim() || "";
  const products = query ? await searchProducts(query) : [];

  return (
    // Added a dynamic padding-top to prevent overlapping with the navbar
    <div className="container w-container" style={{ 
      paddingTop: "120px", // Increase this if it still overlaps your menu
      paddingBottom: "80px",
      minHeight: "60vh" 
    }}>
      
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ 
          fontSize: "clamp(24px, 5vw, 48px)", // Responsive font size
          lineHeight: "1.2",
          marginBottom: "12px",
          color: "#1D2C34"
        }}>
          {query ? `Search results for "${query}"` : "Search"}
        </h1>

        {query && (
          <p style={{ color: "#888", fontSize: "16px" }}>
            {products.length} product{products.length !== 1 ? "s" : ""} found
          </p>
        )}
      </div>

      {!query && (
        <p style={{ color: "#888", textAlign: "center" }}>Enter a search term to find products.</p>
      )}

      {query && products.length === 0 && (
        <p style={{ color: "#888", textAlign: "center" }}>
          No products found for &ldquo;{query}&rdquo;. Try a different search term.
        </p>
      )}

      {products.length > 0 && (
        <div
          style={{
            display: "grid",
            // Responsive Grid: 1 column on mobile, 3+ on desktop
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "40px 24px",
          }}
        >
          {products.map((product: any) => (
            <Link
              key={product.id}
              href={`/product/${product.handle}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="product-card" style={{ transition: "transform 0.2s ease" }}>
                {product.featuredImage && (
                  <div style={{ overflow: "hidden", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
                    <img
                      src={product.featuredImage.url}
                      alt={product.featuredImage.altText || product.title}
                      style={{
                        width: "100%",
                        aspectRatio: "1/1",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                )}
                <div style={{ paddingTop: "16px" }}>
                  <h3 style={{ 
                    margin: "0 0 8px", 
                    fontWeight: "500", 
                    fontSize: "18px", 
                    color: "#1D2C34",
                    lineHeight: "1.4"
                  }}>
                    {product.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: "16px", fontWeight: "600", color: "#1D2C34" }}>
                    ₹{parseFloat(product.priceRange.minVariantPrice.amount).toFixed(0)}{" "}
                    {product.priceRange.minVariantPrice.currencyCode}
                  </p>
                  
                  {/* Displaying Tags/Metafield info like in your screenshot */}
                  {product.tags?.length > 0 && (
                    <p style={{ margin: "12px 0 0", fontSize: "13px", color: "#888", lineHeight: "1.6" }}>
                      {product.tags.slice(0, 3).join(" • ")}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export async function generateMetadata({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.query?.trim() || "";
  return {
    title: query ? `"${query}" — Search | Taggy` : "Search | Taggy",
  };
}