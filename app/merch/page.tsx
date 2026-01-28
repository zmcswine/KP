import { merch } from "@/lib/catalog";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import StoreTabs from "@/components/StoreTabs";

export default function MerchPage() {
  const paymentsEnabled = process.env.NEXT_PUBLIC_PAYMENTS_ENABLED === "true";

  return (
    <Container>
      <div className="py-14">
        <SectionTitle title="Merch" subtitle="T-Shirts, Hats & More" />
        <StoreTabs active="merch" />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {merch.map((m) => (
            <div
              key={m.id}
              className="rounded-2xl border border-white/10 bg-black/40 p-6"
            >
              <img
                src={m.image}
                alt={m.title}
                className="h-44 w-full rounded-xl object-cover border border-white/10"
              />

              <h3 className="mt-4 text-lg font-semibold">{m.title}</h3>

              {m.description ? (
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {m.description}
                </p>
              ) : null}

              <form action="/api/checkout" method="POST" className="mt-4">
                <input type="hidden" name="kind" value="merch" />
                <input type="hidden" name="productId" value={m.id} />

                {m.options?.length ? (
                  <div className="mt-3">
                    <label className="block text-xs text-white/60 mb-2">
                      Select option
                    </label>
                    <select
                      name="option"
                      defaultValue={m.options[0]}
                      className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm"
                    >
                      {m.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : null}

                <div className="mt-5 flex items-center justify-between">
                  <div className="text-lg font-bold">${m.priceUsd.toFixed(2)}</div>
                  <button
                    disabled={!paymentsEnabled}
                    className={`rounded-xl px-5 py-2 font-semibold ${
                      paymentsEnabled
                        ? "bg-pink-500 hover:bg-pink-600"
                        : "bg-white/10 text-white/60 cursor-not-allowed"
                    }`}
                  >
                    {paymentsEnabled ? "Buy" : "Coming Soon"}
                  </button>
                </div>

                <p className="mt-3 text-xs text-white/50">
                  Shipping calculated at checkout.
                </p>
              </form>
            </div>
          ))}
        </div>

        <div className="mt-10 text-sm text-white/60">
          <p>
            <span className="font-semibold text-white/80">Admin notes:</span>{" "}
            To add more merch later, edit{" "}
            <code className="text-white/80">/lib/catalog.ts</code>.
          </p>
        </div>
      </div>
    </Container>
  );
}
