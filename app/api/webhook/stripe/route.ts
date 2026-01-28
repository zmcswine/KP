import Stripe from "stripe";
import { NextResponse } from "next/server";
import { singles } from "@/lib/catalog";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
});

// Optional: Send a download link email using Resend (https://resend.com)
// Set RESEND_API_KEY in Vercel to enable email delivery.
async function sendEmail(to: string, subject: string, html: string) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM || "KP <onboarding@resend.dev>";
  if (!key) return;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html }),
  });
}

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature") || "";
  const whSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!whSecret) {
    return NextResponse.json(
      { error: "Missing STRIPE_WEBHOOK_SECRET env var." },
      { status: 500 }
    );
  }

  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, whSecret);
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const kind = (session.metadata?.kind || "single") as string;
    const productId = (session.metadata?.productId || "") as string;

    // Only email download links for singles
    if (kind === "single") {
      const single = singles.find((s) => s.id === productId);
      if (single) {
        const email = session.customer_details?.email || "";
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
        const link =
          siteUrl && session.id
            ? `${siteUrl}/success?session_id=${encodeURIComponent(session.id)}&kind=single&productId=${encodeURIComponent(productId)}`
            : "";

        if (email && link) {
          await sendEmail(
            email,
            "Your KP download is ready",
            `<p>Thank you for supporting KP.</p><p><a href="${link}">Click here to download: ${single.title}</a></p><p>This link confirms your purchase via Stripe.</p>`
          );
        }
      }
    }
  }

  return NextResponse.json({ received: true });
}
