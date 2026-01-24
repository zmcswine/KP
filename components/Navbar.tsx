import Image from "next/image";
import { Container } from "./Container";
import { Instagram, Youtube, Music2 } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "#music", label: "Music" },
  { href: "#about", label: "About" },
  { href: "#press", label: "Press" },
  { href: "#book", label: "Book" },
];

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="#" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image src="/kp-logo.png" alt="KP logo" fill className="object-cover" priority />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-pearl">KP</p>
              <p className="text-[11px] text-chrome/80">Artist • Performer</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm text-chrome/90">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-pearl transition">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
              aria-label="YouTube"
              title="YouTube"
            >
              <Youtube className="h-5 w-5 text-pearl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram className="h-5 w-5 text-pearl" />
            </a>
            <a
              href="#music"
              className="rounded-2xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
              aria-label="Music"
              title="Music"
            >
              <Music2 className="h-5 w-5 text-pearl" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
