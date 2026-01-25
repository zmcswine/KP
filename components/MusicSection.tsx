"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { GlassCard } from "./GlassCard";
import { PlayCircle, ExternalLink, ListMusic, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Video = {
  id: string; // YouTube video id
  title: string;
  note?: string;
};

function ytEmbed(id: string) {
  // modestbranding + no related videos from other channels (best-effort)
  return `https://www.youtube.com/embed/${id}?autoplay=0&mute=0&rel=0&modestbranding=1&playsinline=1`;
}

export function MusicSection() {
  // Replace these with KP's real videos
  const videos: Video[] = useMemo(
    () => [
      { id: "QkmPHW_yGeg", title: "KP - Live Performance Clip 4", note: "I need All of That Clip 4" },
      { id: "tcYDn-hlKRM", title: "KP - Live Performance DGF Clip", note: "DGF Short Clip" },
      { id: "P-uGznTcOSo", title: "Southside Bar & Grill Lounge", note: "Southside Sports & Grill Lounge_ Jonesboro, GA (8562 Tara Blvd) _ Jan 17th 2026" },
      { id: "mSxSLyHeOpc", title: "KP clip Chilling", note: "Clip just vibing" },
    ],
    []
  );

  const [active, setActive] = useState<Video>(videos[0]);
  const [autoPlay, setAutoPlay] = useState(false);

  // Dynamic behavior: rotates featured video (subtle “alive” feel)
  useEffect(() => {
    const t = setInterval(() => {
      setActive((prev) => {
        const idx = videos.findIndex((v) => v.id === prev.id);
        const next = videos[(idx + 1) % videos.length];
        return next;
      });
    }, 12000); // rotates every 12 seconds
    return () => clearInterval(t);
  }, [videos]);

  const embedSrc = useMemo(() => {
    const base = ytEmbed(active.id);
    return autoPlay ? base.replace("autoplay=0", "autoplay=1") : base;
  }, [active.id, autoPlay]);

  return (
    <div id="music" className="relative py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="MUSIC"
          title="Dynamic Player + Video Gallery"
          subtitle="Click any video to instantly load it in the embedded player (no page reload)."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Player */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-4">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-black">
                <div className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <PlayCircle className="h-5 w-5 text-blush" />
                    <div className="leading-tight">
                      <p className="text-sm font-semibold text-pearl">{active.title}</p>
                      <p className="text-xs text-chrome/75">{active.note ?? "Featured video"}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setAutoPlay((v) => !v)}
                      className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-pearl hover:bg-white/10 transition"
                      aria-label="Toggle autoplay"
                      title="Toggle autoplay"
                    >
                      {autoPlay ? "Autoplay: On" : "Autoplay: Off"}
                    </button>
                    <a
                      href={`https://www.youtube.com/watch?v=${active.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-chrome/80 hover:text-pearl inline-flex items-center gap-1"
                    >
                      Open <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.iframe
                      key={active.id + String(autoPlay)}
                      className="h-[240px] w-full sm:h-[420px]"
                      src={embedSrc}
                      title={active.title}
                      loading="lazy"
                      initial={{ opacity: 0, scale: 0.995 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.995 }}
                      transition={{ duration: 0.25 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </AnimatePresence>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Playlist */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <GlassCard className="p-4 sm:p-5">
              <div className="flex items-center gap-2">
                <ListMusic className="h-5 w-5 text-blush" />
                <p className="text-sm font-semibold text-pearl">Video Playlist</p>
              </div>

              <div className="mt-4 grid gap-2">
                {videos.map((v) => {
                  const isActive = v.id === active.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => {
                        setAutoPlay(false);
                        setActive(v);
                      }}
                      className={
                        "w-full rounded-2xl border px-4 py-3 text-left transition " +
                        (isActive
                          ? "border-blush/50 bg-white/10 shadow-glow"
                          : "border-white/10 bg-white/5 hover:bg-white/10")
                      }
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-pearl">{v.title}</p>
                          <p className="mt-1 text-xs text-chrome/75">{v.note ?? "—"}</p>
                        </div>
                        <ChevronRight className={"h-4 w-4 " + (isActive ? "text-blush" : "text-chrome/70")} />
                      </div>
                    </button>
                  );
                })}
              </div>

              <p className="mt-4 text-xs text-chrome/75">
                Pro tip: replace the video IDs in <span className="text-pearl">components/MusicSection.tsx</span>.
              </p>
            </GlassCard>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {[
            { k: "Spotify", v: "Add your profile link", hint: "Embed widget or link-out button" },
            { k: "SoundCloud", v: "Add your playlist", hint: "Embed widget or link-out button" },
            { k: "YouTube Channel", v: "https://www.youtube.com/@KP7MEntMusic", hint: "KP YouTube Channel" },
          ].map((c) => (
            <GlassCard key={c.k} className="p-6">
              <p className="text-xs font-semibold tracking-[0.25em] text-chrome/80">{c.k.toUpperCase()}</p>
              <p className="mt-3 text-sm text-pearl">{c.v}</p>
              <p className="mt-2 text-sm text-chrome/80">{c.hint}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </div>
  );
}
