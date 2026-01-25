"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Button } from "./Button";
import { Sparkles, Calendar, Play } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 noise" />
      <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blush/20 blur-3xl" />
      <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />

      <Container>
        <div className="grid gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-chrome/90"
            >
              <Sparkles className="h-4 w-4 text-blush" />
              Pink • Silver • Black • White — signature energy
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
            >
              KP is the vibe.
              <span className="block text-chrome/90">Artsy. Bold. Unforgettable.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 max-w-2xl text-base sm:text-lg text-chrome/85"
            >
              Welcome to the official KP artist hub — music, visuals, press kit, and booking in one place.
              This site is built to feel alive: motion, glow, and clean professional polish.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button href="#music" className="gap-2">
                <Play className="h-4 w-4" />
                Listen
              </Button>
              <Button href="#book" variant="ghost" className="gap-2">
                <Calendar className="h-4 w-4" />
                Book KP
              </Button>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                ["New Drop", "Add your latest single link"],
                ["Upcoming", "Add dates + cities"],
                ["Press Kit", "Bio • photos • links"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs tracking-[0.22em] text-chrome/80">{k.toUpperCase()}</p>
                  <p className="mt-2 text-sm text-pearl">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="relative mx-auto max-w-md"
            >
              <div className="absolute inset-0 -z-10 rounded-[42px] bg-gradient-to-br from-blush/30 via-white/10 to-transparent blur-2xl" />
              <div className="rounded-[42px] border border-white/10 bg-white/[0.04] p-5 shadow-glow">
                <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-noir">
                  <Image src="/kp-logo.png" alt="KP logo" fill className="object-cover animate-floaty" priority />
                </div>

                <div className="mt-5">
                  <p className="text-sm font-semibold text-pearl">KP</p>
                  <p className="mt-1 text-sm text-chrome/85">
                    Authentic West Atlanta Feminine Energy.
                  </p>

                  <div className="mt-4 flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-blush" />
                    <span className="h-2 w-2 rounded-full bg-chrome" />
                    <span className="h-2 w-2 rounded-full bg-black" />
                    <span className="h-2 w-2 rounded-full bg-pearl" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
