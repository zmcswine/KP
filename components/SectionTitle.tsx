export function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-semibold tracking-[0.25em] text-chrome/80">{eyebrow}</p>
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-pearl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-sm sm:text-base text-chrome/85">{subtitle}</p> : null}
    </div>
  );
}
