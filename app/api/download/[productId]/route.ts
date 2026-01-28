import Stripe from "stripe";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { singles } from "@/lib/catalog";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
});

export async function GET(
  req: Request,
  { params }: { params: { productId: string } }
) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id") || "";

  const single = singles.find((s) => s.id === params.productId);
  if (!single) {
    return NextResponse.json({ error: "Single not found" }, { status: 404 });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe not configured. Set STRIPE_SECRET_KEY in Vercel env vars." },
      { status: 500 }
    );
  }

  if (!sessionId) {
    return NextResponse.json(
      { error: "Missing session_id. Return to the success page link." },
      { status: 400 }
    );
  }

  // Verify payment
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  if (session.payment_status !== "paid") {
    return NextResponse.json({ error: "Payment not verified." }, { status: 403 });
  }

  // Serve file from /private_downloads
  const filePath = path.join(process.cwd(), "private_downloads", single.fileKey);
  if (!fs.existsSync(filePath)) {
    return NextResponse.json(
      {
        error:
          "File not found in /private_downloads. Upload the song file and ensure fileKey matches in /lib/catalog.ts",
      },
      { status: 404 }
    );
  }

  const file = fs.readFileSync(filePath);
  const headers = new Headers();
  headers.set("Content-Type", "audio/mpeg");
  headers.set(
    "Content-Disposition",
    `attachment; filename="${single.fileKey}"`
  );
  return new NextResponse(file, { status: 200, headers });
}
