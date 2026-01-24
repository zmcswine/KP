"use client";
import { useMemo, useRef, useState } from "react";

export default function PressGallery() {
  const images = useMemo(
    () => [
      { src: "/images/kp-confident-pink.png", alt: "KP – Confident in Pink" },
      { src: "/images/kp-fierce-pink.png", alt: "KP – Fierce in Pink & White" },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const startX = useRef(null);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  return (
    <div className="pressWrap">
      <div
        className="pressCard"
        onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (startX.current === null) return;
          const diff = startX.current - e.changedTouches[0].clientX;
          if (diff > 50) next();
          if (diff < -50) prev();
          startX.current = null;
        }}
      >
        <button className="nav left" onClick={prev} aria-label="Previous photo">
          ‹
        </button>

        <img className="pressImg" src={images[index].src} alt={images[index].alt} />

        <button className="nav right" onClick={next} aria-label="Next photo">
          ›
        </button>

        <div className="dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .pressWrap { width: 100%; display: grid; place-items: center; }
        .pressCard {
          position: relative;
          width: 100%;
          max-width: 760px;
          border-radius: 18px;
          overflow: hidden;
          background: rgba(0,0,0,0.55);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 20px 70px rgba(0,0,0,0.45);
        }
        .pressImg { display: block; width: 100%; height: auto; object-fit: cover; }
        .nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(0,0,0,0.55);
          color: #fff;
          font-size: 28px;
          line-height: 1;
          display: grid;
          place-items: center;
          cursor: pointer;
          user-select: none;
        }
        .left { left: 12px; }
        .right { right: 12px; }
        .dots {
          position: absolute;
          left: 0; right: 0; bottom: 10px;
          display: flex; gap: 8px; justify-content: center;
        }
        .dot {
          width: 10px; height: 10px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.18);
          cursor: pointer;
        }
        .dot.active { background: rgba(255,255,255,0.85); }
      `}</style>
    </div>
  );
}
