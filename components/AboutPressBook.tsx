"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { GlassCard } from "./GlassCard";
import { Button } from "./Button";
import { Mail, Copy, Check } from "lucide-react";
import { useMemo, useState } from "react";

const BOOKING_EMAIL = "7mdoran7m@gmail.com";
const CONTACT_PHONE = "+404-287-5969";
const INSTAGRAM_HANDLE = "@7Ment";
const INSTAGRAM_URL = "https://instagram.com/7Ment";

function useMailto() {
  return useMemo(() => {
    const subject = encodeURIComponent("Booking Request — KP");
    const body = encodeURIComponent(
      `Hi KP Team,%0D%0A%0D%0AI'd like to book KP for:%0D%0A- Date:%0D%0A- City/Venue:%0D%0A- Budget:%0D%0A- Details:%0D%0A%0D%0AThank you!`
    );
    return `mailto:${BOOKING_EMAIL}?subject=${subject}&body=${body}`;
  }, []);
}

export function AboutPressBook() {
  const mailto = useMailto();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(BOOKING_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // no-op
    }
  };

  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div id="about" className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionTitle
              eyebrow="ABOUT"
              title="Bio that feels premium"
              subtitle="Replace this with KP’s real story. Keep it short, confident, and memorable."
            />
            <GlassCard className="p-6 sm:p-8">
              <p>Hailing from the Westside of Atlanta, Georgia, KP is a rising hip-hop force blending melodic finesse with hard-hitting, heart-pounding energy. Her sound lives at the intersection of raw street truth and feminine power, delivering records that are as emotionally charged as they are unapologetically bold.<br/><br/>KP’s music is driven by smooth melodies, confident cadence, and bass-heavy beats, creating a vibe that moves both the mind and the body. She effortlessly balances vulnerability and strength, bringing a fresh, elevated voice to Atlanta’s legacy of hip-hop while carving a lane uniquely her own.<br/><br/>With every track, KP commands attention—her presence is magnetic, her delivery fearless, and her energy undeniable. Whether she’s floating over melodic hooks or snapping with precision bars, KP represents the new era of Southern rap: confident, stylish, emotionally real, and built to last.<br/><br/>Rooted in her Westside upbringing and fueled by ambition, KP isn’t just making music; she’s building a movement that celebrates power, passion, and presence.
</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  ["Genre", "Add genre tags"],
                  ["Hometown", "Add city/state"],
                  ["Highlights", "Awards / collabs"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs tracking-[0.22em] text-chrome/80">{k.toUpperCase()}</p>
                    <p className="mt-2 text-sm text-pearl">{v}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-br from-blush/25 via-white/10 to-transparent blur-2xl" />
              <GlassCard className="p-5 sm:p-6">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-noir">
                  {/* Swap this image with a real promo photo later (public/kp-photo.jpg) */}
                  <Image src="/kp-logo.png" alt="KP" fill className="object-cover opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-pearl">Press Photo Placeholder</p>
                    <p className="text-xs text-chrome/80">Drop a real image in /public</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-chrome/80">
                    3000px+ recommended
                  </span>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>

        <div id="press" className="mt-12 sm:mt-16">
          <SectionTitle
            eyebrow="PRESS"
            title="Quick EPK blocks"
            subtitle="Add your streaming links, press quotes, and notable mentions here."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { k: "One-liner", v: "“KP is pink chrome pressure — smooth, bold, and built for the stage.”" },
              { k: "Notable", v: "Add venues, interviews, playlists, or features." },
              { k: "Contact", v: `Booking: ${BOOKING_EMAIL}\nPhone: ${CONTACT_PHONE}\nInstagram: ${INSTAGRAM_HANDLE}` },
            ].map((c) => (
              <GlassCard key={c.k} className="p-6">
                <p className="text-xs font-semibold tracking-[0.25em] text-chrome/80">{c.k.toUpperCase()}</p>
                <p className="mt-4 text-sm text-pearl leading-relaxed">{c.v}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        <div id="book" className="mt-12 sm:mt-16">
          <SectionTitle
            eyebrow="BOOKING"
            title="Book KP"
            subtitle="Send a clean booking request with one click. Update the email in components/AboutPressBook.tsx."
          />

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <GlassCard className="p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <p className="text-pearl font-semibold">Fast booking request</p>
                  <p className="mt-2 text-chrome/85 text-sm">
                    Clicking “Email Booking” opens your mail app with a pre-filled message. Promoters can still edit details.
                  </p>
                  
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                    <a
                      href={`mailto:${BOOKING_EMAIL}`}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-chrome/90 hover:text-pearl transition"
                    >
                      {BOOKING_EMAIL}
                    </a>
                    <a
                      href="tel:+14042875969"
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-chrome/90 hover:text-pearl transition"
                    >
                      {CONTACT_PHONE}
                    </a>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-chrome/90 hover:text-pearl transition"
                    >
                      {INSTAGRAM_HANDLE}
                    </a>
                    <Button variant="ghost" onClick={copyEmail} className="gap-2">
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copied ? "Copied" : "Copy"}
                    </Button>
                  </div>

                </div>

                <div className="lg:col-span-4 flex flex-col gap-3">
                  <Button href={mailto} className="gap-2">
                    <Mail className="h-4 w-4" />
                    Email Booking
                  </Button>
                  <Button href="#music" variant="ghost" className="gap-2">
                    Explore Music
                  </Button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
