import { PropsWithChildren } from "react";

export function GlassCard({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={
        "rounded-3xl border border-white/10 bg-white/[0.04] shadow-chrome backdrop-blur-xl " + className
      }
    >
      {children}
    </div>
  );
}
