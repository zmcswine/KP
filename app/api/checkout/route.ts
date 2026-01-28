import Stripe from "stripe";
import { NextResponse } from "next/server";
import { singles, merch } from "@/lib/catalog";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
});

function getProduct(kind: string, productId: string) {
  const list = kind === "merch" ? merch : singles;
  return list.find((p) => p.id === productId);
}

export async function POST(req: Request) {
  const form = await req.formData();
  const kind = String(form.get("kind") || "single");
  const productId = String(form.get("productId") || "");

  const product = getProduct(kind, productId);
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      {
        error:
          "Stripe is not configured yet. Add STRIPE_SECRET_KEY and NEXT_PUBLIC_SITE_URL to your Vercel env vars, then set stripePriceId in /lib/catalog.ts",
      },
      { status: 500 }
    );
  }

  if (!("stripePriceId" in product) || !product.stripePriceId || product.stripePriceId.includes("REPLACE_ME")) {
    return NextResponse.json(
      { error: "Missing stripePriceId. Set it in /lib/catalog.ts for this product." },
      { status: 500 }
    );
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: (product as any).stripePriceId, quantity: 1 }],
    success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&kind=${kind}&productId=${productId}`,
    cancel_url: `${baseUrl}/${kind === "merch" ? "merch" : "singles"}`,
  });

  return NextResponse.redirect(session.url!, 303);
}
