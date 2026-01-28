import { singles } from "@/lib/catalog";
import Container from "@/components/Container";
import StoreTabs from "@/components/StoreTabs";
import SectionTitle from "@/components/SectionTitle";

const paymentsEnabled = process.env.NEXT_PUBLIC_PAYMENTS_ENABLED === "true";

export default function SinglesPage() {
  return (
    <Container>
      <div className="py-14">
        <SectionTitle title="Singles" subtitle="{paymentsEnabled ? "Buy & Download" : "Coming Soon"}" />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {singles.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl border border-white/10 bg-black/40 p-6"
            >
              <div className="flex gap-5">
                <img
                  src={s.coverImage}
                  alt={s.title}
                  className="h-24 w-24 rounded-xl object-cover border border-white/10"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  {s.description && (
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                      {s.description}
                    </p>
                  )}

                  {s.previewUrl ? (
                    <div className="mt-4">
                      <p className="text-xs text-white/60 mb-2">Preview (20s)</p>
                      <audio controls preload="none" className="w-full">
                        <source src={s.previewUrl} type="audio/mpeg" />
                      </audio>
                    </div>
                  ) : null}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-lg font-bold">${s.priceUsd.toFixed(2)}</div>

                    <form action="/api/checkout" method="POST">
                      <input type="hidden" name="kind" value="single" />
                      <input type="hidden" name="productId" value={s.id} />
                      <button disabled={!paymentsEnabled} className={`rounded-xl px-5 py-2 font-semibold ${paymentsEnabled ? "bg-pink-500 hover:bg-pink-600" : "bg-white/10 text-white/60 cursor-not-allowed"}`}>
                        Buy & Download
                      </button>
                    </form>
                  </div>

                  <p className="mt-3 text-xs text-white/50">
                    Secure download link provided after purchase.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-sm text-white/60">
          <p>
            <span className="font-semibold text-white/80">Admin notes:</span>{" "}
            To add more singles later, edit <code className="text-white/80">/lib/catalog.ts</code>{" "}
            and drop the audio file into <code className="text-white/80">/private_downloads</code>.
          </p>
        </div>
      </div>
    </Container>
  );
}
