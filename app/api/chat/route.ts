import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function getShopifyProducts() {
  try {
    const res = await fetch(
      `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token":
            process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!,
        },
        body: JSON.stringify({
          query: `{
            products(first: 20) {
              edges {
                node {
                  title
                  description
                  handle
                  priceRange {
                    minVariantPrice { amount currencyCode }
                  }
                  variants(first: 5) {
                    edges {
                      node {
                        title
                        availableForSale
                        price { amount }
                      }
                    }
                  }
                }
              }
            }
          }`,
        }),
      }
    );
    const data = await res.json();
    return data?.data?.products?.edges?.map((e: any) => e.node) || [];
  } catch (err) {
    console.error("❌ Shopify fetch failed:", err);
    return [];
  }
}

async function getOrderByNumber(orderNumber: string) {
  try {
    const cleaned = orderNumber.replace(/[^0-9]/g, "");
    if (!cleaned) return null;

    const shopDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
    const adminToken = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;

    if (!adminToken) {
      console.error("❌ SHOPIFY_ADMIN_ACCESS_TOKEN is missing in .env");
      return null;
    }

    const res = await fetch(
      `https://${shopDomain}/admin/api/2024-01/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": adminToken.trim(),
        },
        body: JSON.stringify({
          query: `query {
            orders(first: 1, query: "name:#${cleaned} OR name:${cleaned}") {
              edges {
                node {
                  name
                  email
                  phone
                  createdAt
                  displayFulfillmentStatus
                  displayFinancialStatus
                  totalPriceSet {
                    shopMoney { amount currencyCode }
                  }
                  lineItems(first: 5) {
                    edges {
                      node {
                        title
                        quantity
                      }
                    }
                  }
                  fulfillments(first: 1) {
                    trackingInfo(first: 1) {
                      number
                      url
                      company
                    }
                  }
                  shippingAddress {
                    city
                    province
                  }
                }
              }
            }
          }`,
        }),
      }
    );

    const data = await res.json();

    if (data.errors) {
      console.error("❌ Shopify Admin API Error:", JSON.stringify(data.errors));
      return null;
    }

    const order = data?.data?.orders?.edges?.[0]?.node;
    if (!order) {
      console.log(`⚠️ No order found for: #${cleaned}`);
      return null;
    }

    const tracking = order.fulfillments?.[0]?.trackingInfo?.[0];

    return {
      name: order.name,
      status: order.displayFulfillmentStatus,
      email: order.email,
      phone: order.phone,
      financialStatus: order.displayFinancialStatus,
      createdAt: new Date(order.createdAt).toLocaleDateString("en-IN", {
        day: "numeric", month: "short", year: "numeric",
      }),
      total: `${order.totalPriceSet.shopMoney.currencyCode} ${parseFloat(order.totalPriceSet.shopMoney.amount).toFixed(2)}`,
      items: order.lineItems?.edges?.map((e: any) => ({
        name: e.node.title,
        quantity: e.node.quantity,
      })),
      trackingUrl: tracking?.url || null,
      trackingNumber: tracking?.number || null,
      carrier: tracking?.company || null,
      shippingAddress: order.shippingAddress
        ? `${order.shippingAddress.city}, ${order.shippingAddress.province}`
        : null,
    };
  } catch (err) {
    console.error("❌ Order fetch failed:", err);
    return null;
  }
}

// ✅ FIXED: Extract a 3–6 digit order number from any message.
// The old version was checking message.length instead of match.length,
// which caused it to reject valid numbers inside longer sentences.
function extractOrderNumber(message: string): string | null {
  // Priority 1: explicit "#1053" or "order 1053" or "order #1053"
  const explicit = message.match(/(?:order\s*#?|#)(\d{3,6})\b/i);
  if (explicit) return explicit[1];

  // Priority 2: a bare standalone number (e.g. user just types "1053")
  // Only match if the entire message is a short number, or a number padded by whitespace/punctuation
  const bare = message.trim().match(/^[^\d]*(\d{3,6})[^\d]*$/);
  if (bare) return bare[1];

  return null;
}

// ✅ Normalise any phone string to its last 10 digits for comparison.
function normalisePhone(raw: string): string {
  return raw.replace(/\D/g, "").slice(-10);
}

export async function POST(req: Request) {
  try {
    const { messages, cartItems } = await req.json();
    const lastMessage: string = messages[messages.length - 1]?.content || "";

    // ─── 1. Find the most recent order number in the full conversation ───────
    const orderNumber: string | null =
      [...messages]
        .reverse()
        .map((m: any) => extractOrderNumber(m.content))
        .find((num) => num !== null) ?? null;

    // ─── 2. Decide whether to run an order lookup ────────────────────────────
    // Fire whenever we have an order number AND the current message is clearly
    // order-related (includes the number itself, an email, a phone, or keywords).
    const orderKeywords = /\b(order|track|status|ship|deliver|where|when|refund|cancel)\b/i;
    const containsEmail = /@/.test(lastMessage);
    const containsPhone = normalisePhone(lastMessage).length === 10;
    const justTypedNumber = extractOrderNumber(lastMessage) !== null;

    const isOrderQuery =
      orderNumber !== null &&
      (justTypedNumber || containsEmail || containsPhone || orderKeywords.test(lastMessage));

    // ─── 3. Fetch order if needed ────────────────────────────────────────────
    let orderInfo = "";

    if (isOrderQuery && orderNumber) {
      const order = await getOrderByNumber(orderNumber);
      if (order) console.log(`📧 Order email from Shopify: "${order.email}" | 📱 Phone: "${order.phone}"`);

      if (order) {
        // Verify the customer by matching email OR last-10-digit phone
        const isVerified = messages.some((m: any) => {
          const raw: string = m.content;

          // Email match — trim whitespace and ignore case
          const userEmail = raw.trim().toLowerCase();
          const orderEmail = (order.email ?? "").trim().toLowerCase();
          if (orderEmail && userEmail.includes(orderEmail)) {
            return true;
          }

          // Phone match — last 10 digits only
          const userPhone = normalisePhone(raw);
          const orderPhone = normalisePhone(order.phone ?? "");
          return (
            userPhone.length === 10 &&
            orderPhone.length === 10 &&
            userPhone === orderPhone
          );
        });

        if (isVerified) {
          const shippingStatus = order.status.toLowerCase();
          const financialStatus = order.financialStatus.toLowerCase();

          let displayStatus = "";
          if (financialStatus === "voided" || shippingStatus === "cancelled") {
            displayStatus = "❌ Cancelled";
          } else if (financialStatus === "refunded" || financialStatus === "partially_refunded") {
            displayStatus = "↩️ Refunded";
          } else {
            const statusMap: Record<string, string> = {
              fulfilled: "✅ Shipped",
              partial: "📦 Partially Shipped",
              unfulfilled: "🕐 Processing",
              restocked: "↩️ Returned",
              cancelled: "❌ Cancelled",
            };
            displayStatus = statusMap[shippingStatus] || order.status;
          }

          console.log(`✅ Order ${order.name} verified. Status: ${displayStatus}`);

          orderInfo = `
[VERIFICATION STATUS: SUCCESSFUL]
Order: ${order.name}
Status: ${displayStatus}
Date: ${order.createdAt}
Total: ${order.total}
Tracking Link: ${order.trackingUrl ?? "NONE_AVAILABLE_YET"}
`;
        } else {
          // Check if the user has actually attempted a wrong email/phone,
          // or if they simply haven't provided one yet.
          const hasAttemptedVerification = messages.some((m: any) => {
            const raw: string = m.content;
            return /@/.test(raw) || normalisePhone(raw).length === 10;
          });

          if (hasAttemptedVerification) {
            console.log(`❌ Order ${order.name} — verification FAILED`);
            orderInfo = `
[VERIFICATION STATUS: FAILED]
Order #${orderNumber} exists but the provided email/phone did NOT match our records.
`;
          } else {
            console.log(`⏳ Order ${order.name} — awaiting verification`);
            orderInfo = `
[VERIFICATION STATUS: PENDING]
Order #${orderNumber} exists. The customer has NOT yet provided their email or phone number.
Ask them to share the email or phone registered with this order.
`;
          }
        }
      } else {
        orderInfo = `=== ORDER NOT FOUND ===
No order found with number #${orderNumber}.
Please verify the order number or check your email confirmation.
======================`;
      }
    }

    const products = await getShopifyProducts();

    const systemPrompt = `
You are the official Purcurie Beauty Assistant. Your primary job is to provide product advice and track orders using ONLY the data provided below.

🛡️ SECURITY & VERIFICATION RULES — READ CAREFULLY, FOLLOW IN ORDER:

STEP 1 — Check what the Order Lookup Result says:

A) If it says "[VERIFICATION STATUS: SUCCESSFUL]":
   → Start your reply with "🛡️ Verified Customer Account" and show order details using the templates below.

B) If it says "[VERIFICATION STATUS: PENDING]":
   → The order EXISTS but the customer has NOT yet provided their email or phone.
   → You MUST respond EXACTLY: "I found your order! To protect your privacy, please share the email address or phone number registered with this order."
   → Do NOT say "doesn't match". Do NOT show any order details. Do NOT mention status, date, or total.

C) If it says "[VERIFICATION STATUS: FAILED]":
   → The customer gave an email/phone that did NOT match.
   → Respond EXACTLY: "I'm sorry, that doesn't match our records for this order. Please double-check your registered email or phone number."

D) If it says "=== ORDER NOT FOUND ===":
   → Respond: "I couldn't find an order with that number. Please double-check and try again, or contact us on WhatsApp."

STEP 2 — Never invent statuses, dates, totals, or tracking links. The Order Lookup Result is the ONLY source of truth.
STEP 3 — Never show raw tags like [VERIFICATION STATUS: PENDING] to the user.
STEP 4 — You HAVE direct access to the order database. NEVER say "I don't have access to real-time tracking."

📦 Response Template for Verified Orders:
✅ IF TRACKING LINK IS PROVIDED:
  "🛡️ Verified Customer Account. Your order [Order Number] is [Status]. It was placed on [Date] for a total of [Total]. You can track it here: [Tracking Link]. For full tracking details visit: https://www.purcurie.com/track"

❌ IF NO TRACKING LINK IS PROVIDED (Status is Processing/Pending):
  "🛡️ Verified Customer Account. Your order [Order Number] is [Status]. It was placed on [Date] for a total of [Total]. Tracking details will be updated soon. Track your order here: https://www.purcurie.com/track"

🔴 CRITICAL INSTRUCTION FOR LINKS:
- Use the actual URL from "Order Lookup Result" ONLY if it starts with "https".
- If the tracking link in the data is "NONE_AVAILABLE_YET" or empty, use the second template above.
- NEVER invent or use example links.
- NEVER use "waybill.purcurie.com", "17track.net", or any "example.com" links.
- When a user provides an email or phone number, check it against the order EVERY TIME independently.
- Do NOT assume it's wrong just because previous attempts failed.
- Each verification attempt must be treated as completely fresh and independent.
- If the current input matches the order's email or phone, confirm it immediately regardless of prior failed attempts.
- Never say "that doesn't match" unless you have actually compared the current input to the order data right now.

📦 Order Lookup Result:
${orderInfo || "No order data found yet for the current inquiry."}

🛍️ Product Catalog:
${products.length ? JSON.stringify(products, null, 2) : "Catalog currently unavailable."}

🛒 Current Cart:
${cartItems?.length ? JSON.stringify(cartItems, null, 2) : "Cart is empty."}

Guidelines:
- 📦 TRACKING: If the user asks to track an order but hasn't provided a number yet, respond EXACTLY with: "I'd be happy to help! Please enter your order number (e.g., #1053)."
- 📦 REFUNDS: For returns/refunds, tell users to email support@purcurie.com.
- ↩️ REFUNDS: If the "Order Lookup Result" shows the status as "Refunded", tell the user: "Your order has been refunded. The amount should reflect in your original payment method within 5-7 business days."
- ❌ CANCELLED: If the "Order Lookup Result" shows the status as "Cancelled", tell the user: "Your order [Order Number] has been cancelled. If you were charged, the refund should reflect within 5-7 business days. For any questions, please email support@purcurie.com."
- 🎫 TICKETS: If raising a ticket, ask for the issue and Order #, then confirm it's logged for a 24-hour review.
- 👤 HUMAN: If requested, provide the WhatsApp link: https://wa.me/9769777006.
- 💬 WHATSAPP: Mention WhatsApp for faster updates.
- 📦 TRACKING PAGE: Always include this link at the end of any order status response: "You can also track your order here: https://www.purcurie.com/track"
- Keep responses warm, professional, and under 3 sentences.
- NEVER show raw technical tags (like [VERIFICATION STATUS...]) to the user.
`;

const trimmedMessages = messages.slice(-6);

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: systemPrompt },
        ...trimmedMessages,
      ],
      max_tokens: 1024,
    });

    return Response.json({ reply: response.choices[0].message.content });

  } catch (error) {
    console.error("❌ Chat API Error:", error);
    return Response.json(
      { reply: "Sorry, something went wrong. Please try again!" },
      { status: 500 }
    );
  }
}