import Link from "next/link";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
}>;

export function Button({ href, onClick, variant = "primary", className = "", target, rel, children }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold tracking-wide transition focus:outline-none focus:ring-2 focus:ring-blush/60";
  const styles =
    variant === "primary"
      ? "bg-pearl text-ink shadow-glow hover:opacity-90"
      : "bg-white/5 text-pearl hover:bg-white/10 border border-white/10";

  const cls = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} target={target} rel={rel}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls} type="button">
      {children}
    </button>
  );
}
