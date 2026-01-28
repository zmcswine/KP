import Link from "next/link";

type Props = {
  active: "singles" | "merch";
};

export default function StoreTabs({ active }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-2 text-sm font-semibold transition border";
  const on = "bg-pink-500 border-pink-400 text-white";
  const off = "bg-black/30 border-white/10 text-white/80 hover:text-white hover:border-white/20";

  return (
    <div className="mt-6 flex justify-center gap-3">
      <Link href="/singles" className={`${base} ${active === "singles" ? on : off}`}>
        Singles
      </Link>
      <Link href="/merch" className={`${base} ${active === "merch" ? on : off}`}>
        Merch
      </Link>
    </div>
  );
}
