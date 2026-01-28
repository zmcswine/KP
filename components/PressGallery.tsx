"use client";

import { useMemo, useRef, useState } from "react";

export default function PressGallery() {
  const images = useMemo(
    () => [
      { src: "/images/kp_confident-in-pink-style.png", alt: "KP – Confident in Pink" },
      { src: "/images/kp_fierce-in-pink-and-white.png", alt: "KP – Fierce in Pink & White" },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  return (
    <section className="w-full my-10">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40"
          onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (startX.current === null) return;
            const diff = startX.current - e.changedTouches[0].clientX;
            if (diff > 50) next();
            if (diff < -50) prev();
            startX.current = null;
          }}
        >
          <img
            src={images[index].src}
            alt={images[index].alt}
            className="block w-full h-auto object-cover"
          />

          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/60 text-white text-3xl"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/60 text-white text-3xl"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
