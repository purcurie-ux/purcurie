// lib/judgeme.js
export async function getProductReviews(handle) {
  const shopDomain = process.env.NEXT_PUBLIC_SHOP_DOMAIN;
  const apiToken = process.env.JUDGEME_PRIVATE_TOKEN;

  try {
    // 1. Get the Judge.me internal product ID using the Shopify handle
    const res = await fetch(
      `https://api.judge.me/api/v1/products/-1?shop_domain=${shopDomain}&handle=${handle}`,
      {
        headers: { 'api-token': apiToken },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );
    
    const data = await res.json();
    // Return reviews or an empty array if none exist
    return data.product?.reviews || [];
  } catch (error) {
    console.error("Judge.me Fetch Error:", error);
    return [];
  }
}