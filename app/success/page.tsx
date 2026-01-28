import Container from "@/components/Container";
import Button from "@/components/Button";

type Props = {
  searchParams?: { session_id?: string; kind?: string; productId?: string };
};

export default function SuccessPage({ searchParams }: Props) {
  const kind = searchParams?.kind || "single";
  const productId = searchParams?.productId || "";

  const isSingle = kind === "single";

  return (
    <Container>
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold">Thank you for supporting KP</h1>
        <p className="mt-4 text-white/70">
          {isSingle
            ? "Your purchase is complete. Click below to download your single."
            : "Your purchase is complete. We’ll reach out with fulfillment details if needed."}
        </p>

        {isSingle ? (
          <div className="mt-10 flex justify-center">
            <a
              href={`/api/download/${encodeURIComponent(productId)}?session_id=${encodeURIComponent(
                searchParams?.session_id || ""
              )}`}
            >
              <Button>Download</Button>
            </a>
          </div>
        ) : (
          <div className="mt-10 flex justify-center">
            <a href="/merch">
              <Button>Back to Merch</Button>
            </a>
          </div>
        )}

        <p className="mt-6 text-xs text-white/50">
          Admin: Set STRIPE_SECRET_KEY + NEXT_PUBLIC_SITE_URL. Optional: Configure /api/webhook/stripe to email download links. Apple Pay/Google Pay will show automatically in Stripe Checkout when enabled.
        </p>
      </div>
    </Container>
  );
}
